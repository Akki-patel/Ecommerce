import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const configOptions = {
  useNewUrlParser: true,
  UseUnifiedTopology: true,
};
const connectToDB = async () => {
  const connectionurl = process.env.DB_URL;
  mongoose
    .connect(connectionurl, configOptions)
    .then(() => console.log("data base connected successfully"))
    .catch((err) =>
      console.log("getting erroe from db connection ${err.message}")
    );
};
export default connectToDB;
