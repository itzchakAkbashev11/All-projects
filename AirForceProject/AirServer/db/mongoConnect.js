const mongoose = require('mongoose');
require('dotenv').config();

main().catch(err => console.log(err));

// function to connect to DB in mongoose
async function main() {

  await mongoose.connect(process.env.URL_MONGO);
  console.log('AirForce Connect!');
  
}