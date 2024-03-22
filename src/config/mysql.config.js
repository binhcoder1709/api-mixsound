import mysql from 'mysql'

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mixsound"
});
connection.connect(error => {
    if (error) {
      console.error('Error connecting to database: ' + error.stack);
      return;
    }
    console.log('Connected to database as id ' + connection.threadId);
  });


  export default connection;