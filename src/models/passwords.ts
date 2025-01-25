import mongoose from 'mongoose';

const { Schema } = mongoose;

const PasswordsSchema = new Schema({
  number: {
    type: Number,
    required: true,
    unique: true, // Cada senha deve ser única
  },
  guichet: {
    type: String,
    required: false, // Pode ser preenchido ao chamar a senha
  },
  status: {
    type: String,
    enum: ['waiting', 'called'], // Estado da senha
    default: 'waiting',
  },
  createdAt: {
    type: Date,
    default: Date.now, // Data e hora de criação
  },
});

export default mongoose.model('Passwords', PasswordsSchema);
