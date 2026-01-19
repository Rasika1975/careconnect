const mongoose = require('mongoose');

// Create a Mongoose Patient schema
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 120
  },
  contact: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        // Allow email or phone number formats
        return /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$|^\+?[1-9]\d{1,14}$/.test(v);
      },
      message: props => `${props.value} is not a valid contact information!`
    }
  },
  concern: {
    type: String,
    required: true
  },
  aiCategory: {
    type: String,
    default: 'General'
  },
  priority: {
    type: String,
    default: 'Low'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export Patient model
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;