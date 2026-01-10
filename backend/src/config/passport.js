import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config({ path: '../../.env' });

// Only configure Google OAuth if credentials are available
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL || "http://localhost:5000/auth/google/callback",
      },
      async (_, __, profile, done) => {
        try {
          const email = profile.emails[0].value;

          if (!email.endsWith("@mnit.ac.in")) {
            return done(null, false);
          }

          let user = await User.findOne({ email });

          if (!user) {
            user = await User.create({
              googleId: profile.id,
              email,
              name: profile.displayName,
              avatar: profile.photos[0].value,
            });
          }

          done(null, user);
        } catch (err) {
          done(err);
        }
      }
    )
  );
} else {
  console.log("⚠️  Google OAuth not configured. Using email/password auth only.");
}

export default passport;
