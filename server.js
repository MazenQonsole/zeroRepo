const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`App running on port ${process.env.PORT || 3000}...`);
});
