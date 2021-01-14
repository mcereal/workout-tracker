const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {});
router.get("/api/workouts", ({ body }, res) => {});
router.put("/api/workouts", ({ body }, res) => {});
router.get("/api/workouts/range", ({ body }, res) => {});

module.exports = router;
