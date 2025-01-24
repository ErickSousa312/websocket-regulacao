import mongoose from 'mongoose';

const { Schema } = mongoose;

const CourseInfoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  weekdays: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  includesInternship: {
    type: Boolean,
    default: false,
  },
  includesMaterial: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('CourseInfo', CourseInfoSchema);
