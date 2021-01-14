const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", async ({ body }, res) => {
  try {
    const workout = await Workout.create(body);
    res.json(workout);
  } catch (error) {
    res.json(error);
  }
});
router.get("/api/workouts", async (req, res) => {
  try {
    const workout = await Workout.find();
    res.json(workout);
  } catch (error) {
    res.json(error);
  }
});
router.put("/api/workouts", ({ body }, res) => {});
router.get("/api/workouts/range", ({ body }, res) => {});

module.exports = router;
