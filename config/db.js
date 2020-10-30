const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://useradmin:123456789Pp@cluster0.8y8qo.mongodb.net/<dbname>?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
