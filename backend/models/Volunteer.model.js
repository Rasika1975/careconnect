const mongoose = require('mongoose');

// Create a Volunteer Mongoose schema
const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  skills: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export Volunteer model
const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;