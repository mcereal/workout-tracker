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
router.put("/api/workouts/:id", async ({ body, params }, res) => {
  try {
    const findById = await Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    );
    res.json(findById);
  } catch (error) {
    res.json(error);
  }
});
router.get("/api/workouts/range", async ({ body }, res) => {
  try {
    const getWorkout = await Workout.find();
    res.json(getWorkout);
  } catch (error) {
    res.json(error);
  }
});

router.post("/api/workout/range", async (req, res) => {
  try {
    const createWorkout = await Workout.create({});
    res.json(createWorkout);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
