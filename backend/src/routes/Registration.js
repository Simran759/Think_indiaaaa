import express from "express";
import Registration from "../models/Registration.js";
import Team from "../models/Team.js";
import { requireAuth } from "../middleware/auth.js";
import { generateTeamCode } from "../utils/generateTeamCode.js";

const router = express.Router();

router.post("/register", requireAuth, async (req, res) => {
  const { eventId, eventName, isTeamEvent, teamSize } = req.body;

  try {
    const exists = await Registration.findOne({
      userId: req.user._id,
      eventId
    });

    if (exists) {
      return res.status(400).json({ error: "ALREADY_REGISTERED" });
    }

    let teamCode = null;

    if (isTeamEvent) {
      teamCode = generateTeamCode();

      await Team.create({
        eventId,
        teamCode,
        members: [req.user._id],
        maxSize: teamSize
      });
    }

    await Registration.create({
      userId: req.user._id,
      eventId,
      eventName,
      teamCode
    });

    res.json({ success: true, teamCode });

  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: "DUPLICATE" });
    }
    res.status(500).json({ error: err.message });
  }
});

router.post("/join-team", requireAuth, async (req, res) => {
  try {
    const { teamCode } = req.body;

    if (!teamCode) {
      return res.status(400).json({
        code: "TEAM_CODE_REQUIRED",
        message: "Team code is required"
      });
    }

    const team = await Team.findOne({ teamCode });
    if (!team) {
      return res.status(400).json({
        code: "INVALID_CODE",
        message: "Invalid team code"
      });
    }

    const already = await Registration.findOne({
      userId: req.user._id,
      eventId: team.eventId
    });

    if (already) {
      return res.status(400).json({
        code: "ALREADY_REGISTERED",
        message: "Already registered for this event"
      });
    }

    if (team.members.length >= team.maxSize) {
      return res.status(400).json({
        code: "TEAM_FULL",
        message: "Team is full"
      });
    }

    const leaderReg = await Registration.findOne({
      eventId: team.eventId,
      teamCode
    });

    if (!leaderReg) {
      return res.status(400).json({
        code: "EVENT_NAME_NOT_FOUND",
        message: "Event info missing"
      });
    }

    team.members.push(req.user._id);
    await team.save();

    await Registration.create({
      userId: req.user._id,
      eventId: team.eventId,
      eventName: leaderReg.eventName,
      teamCode
    });

    res.json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      code: "SERVER_ERROR",
      message: "Internal server error"
    });
  }
});

router.get("/my-registrations", requireAuth, async (req, res) => {
  const userId = req.user._id;

  const registrations = await Registration.find({ userId });

  const result = await Promise.all(
    registrations.map(async (r) => {
      let team = null;
      let members = [];

      if (r.teamCode) {
        team = await Team.findOne({ teamCode: r.teamCode })
          .populate("members", "name email"); // 👈 names only
      }

      if (team) {
        members = team.members.map(m => ({
          id: m._id,
          name: m.name,
          email: m.email
        }));
      }

      return {
        eventId: r.eventId,
        eventName: r.eventName,
        isTeamEvent: !!r.teamCode,
        teamCode: r.teamCode,
        teamMembers: members,
        teamSize: team ? team.members.length : 0,
        teamMaxSize: team ? team.maxSize : null
      };
    })
  );

  res.json(result);
});

router.delete("/unregister/:eventId", requireAuth, async (req, res) => {
  const { eventId } = req.params;
  const userId = req.user._id;

  try {
    const reg = await Registration.findOne({ userId, eventId });
    if (!reg) {
      return res.status(404).json({ error: "NOT_REGISTERED" });
    }

    if (reg.teamCode) {
      const team = await Team.findOne({ teamCode: reg.teamCode });

      if (team) {
        team.members = team.members.filter(
          (m) => m.toString() !== userId.toString()
        );

        if (team.members.length === 0) {
          await Team.deleteOne({ teamCode: reg.teamCode });
        } else {
          await team.save();
        }
      }
    }

    await Registration.deleteOne({ _id: reg._id });

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;