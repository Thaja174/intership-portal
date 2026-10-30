
const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    company: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    duration: {
      type: String,
      required: true
    },

    stipend: {
      type: String,
      default: "Unpaid"
    },

    type: {
      type: String,
      default: "On-site"
    },

    description: {
      type: String,
      required: true
    },

    skills: {
      type: [String],
      default: []
    },

    requirements: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Internship", internshipSchema);
