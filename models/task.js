const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must Provide a Name'],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'Must Provide a Name'],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Must Provide an Email'],
    trim: true,
  },

  survey: {
    type: String,
    required: [true, 'Must Provide an Email'],
    trim: true,
  },

  subject: {
    type: String,
    required: [true, 'Must Provide an Email'],
    trim: true,
  },

  help: {
    type: String,
    required: [true, 'Must Provide an Email'],
    trim: true,
  },

  exam: {
    type: String,
    required: [true, 'Must Provide an Email'],
    trim: true,
  },

  exam: {
    type: String,
    required: [true, 'Must Provide an Email'],
    trim: true,
  },
  rate: {
    type: String,
    required: [true, 'Must Provide an Email'],
    trim: true,
  },
  avls: {
    type: String,
    required: [true, 'Must Provide an Email'],
    trim: true,
  },
  avlsHelp: {
    type: String,
    required: [true, 'Must Provide an Email'],
    trim: true,
  },

  review: {
    type: String,
    required: [true, 'Must Provide an Email'],
    trim: true,
  },

  referal: {
    type: String,
    required: [true, 'Must Provide an Email'],
    trim: true,
  },
  statis: {
    type: String,
    required: [true, 'Must Provide an Email'],
    trim: true,
  },
});

module.exports = mongoose.model('Survey_Form', TaskSchema);
