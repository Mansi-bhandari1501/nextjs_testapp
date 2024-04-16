import mongoose from "mongoose";
const connectdb = async () => {
  try {
    const conn = await mongoose.connect(
     `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.besdu2a.mongodb.net/`
    );
    console.log(`connected with database successfully ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
export default connectdb;