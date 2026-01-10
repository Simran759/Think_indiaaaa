import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();
// console.log("DEBUG GOOGLE_CLIENT_ID =", process.env.GOOGLE_CLIENT_ID);

passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async (_, __, profile, done) => {
    const email = profile.emails[0].value;

    // 🔥 HARD BLOCK
    if (!email.endsWith("@mnit.ac.in")) {
      return done(null, false);
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        googleId: profile.id,
        email,
        name: profile.displayName,
        avatar: profile.photos[0].value
      });
    }

    done(null, user);
  })
);

export default passport;
