import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from '../app.ts';

dotenv.config();

mongoose.set('strictQuery', true);
// const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.aglfnms.mongodb.net/db_bot?retryWrites=true&w=majority&appName=Cluster0`;
const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.ADDRESS_DATA_BASE}:${process.env.PORT_URL}/db_passwords?authSource=admin`;
async function startDB() {
  mongoose.set('strictQuery', true);
  try {
    await mongoose.connect(url);
    console.log('Conectado ao MongoDB!');
    app.listen(process.env.PORT);
  } catch (error) {
    console.log(error);
  }
}

export { startDB };
