import 'dotenv/config';
import { PORT } from './src/config.js';
import { app } from './src/app.js';
import { connect as db } from './src/database.js';

db();


const server = app.listen(PORT, () =>
  console.log(`[server] Connected to port ${PORT}`)
);

process.on('unhandledRejection', (err) => {
  console.error(`[server] An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});