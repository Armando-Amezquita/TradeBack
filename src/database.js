import Mongoose from 'mongoose';;
import { MONGO_DBA, DB_USER, DB_PASSWORD } from './config.js';

export const connect = () => {
  Mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@testarmando09.drzu71a.mongodb.net/${MONGO_DBA}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('[db] Connected to', MONGO_DBA );
};

