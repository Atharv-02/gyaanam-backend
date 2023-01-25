const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllHash = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ status: 'success', data: tasks });
});

const createHash = asyncWrapper(async (req, res) => {
  const tasks = await Task.create(req.body);
  console.log(req.body);
  res.status(201).json({ status: 'success', data: tasks });
});

const getHash = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ email: taskID });
  if (!task) {
    return next(createCustomError(`no task with id:${taskID}`, 404));
    // return res
    //   .status(404)
    //   .json({ success: true, msg: `no task with id:${taskID}` });
  }
  res.status(200).json({ task });
});

module.exports = { getAllHash, createHash, getHash };
