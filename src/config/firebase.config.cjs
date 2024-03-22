var admin = require("firebase-admin");

var serviceAccount = require("./json-key/firebaseJson.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mixsound-c081f-default-rtdb.firebaseio.com"
});

const database = admin.database();

module.exports =  {database};