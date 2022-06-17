
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const db = require('./db');
const router = require('./routes');

dotenv.config();
db.connect();
const port = process.env.PORT || 3030;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(port, ()=> {
  console.log(`Listening on port ${port}`);
  router(app);
});
process.on('SIGINT', () => {
    console.warn('Shutting down server...');
    db.disconnect()
    console.log('Server successfully shutdown');
    process.exit(0);
  });