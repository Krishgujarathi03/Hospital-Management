import mongoose from "mongoose";

const connectToDb = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, { dbName: "Hospital_Management" })
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log(err));
};

export default connectToDb;
