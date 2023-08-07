const mongoose = require("mongoose");
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://abbassi2002ahmed4:Ahmed2002@cluster0.8eolprl.mongodb.net/real-time-chat"
  );
}

module.exports = mongoose;