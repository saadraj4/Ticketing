import mongoose from "mongoose";

export const connectDb = () => {
    mongoose.connect('mongodb+srv://saad-raja:saad-raja@myatlasclusteredu.uc11aog.mongodb.net/Signup', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    .then(() => {
      console.log("Connected Moogose");
    })
    .catch((err) => {
      console.log(err);
    });
};
