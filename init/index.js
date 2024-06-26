const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");



main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "65e2cfca3b3b1ac9baf29c0c",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
