const mongoose = require(`mongoose`);

const ResourceSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    Rating: {
      type: String,
      required: false
    }
    
  });