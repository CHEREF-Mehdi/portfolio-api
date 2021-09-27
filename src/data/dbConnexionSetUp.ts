import mongoose from 'mongoose';

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.x0hac.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

export const dbConnect = async (): Promise<void> => {
  mongoose.connect(URI);

  const database = mongoose.connection;

  return new Promise((resolve, reject) => {
    database.once('open', async () => {
      console.log('Connected to database');
      return resolve();
    });

    database.on('error', () => {
      console.log('Error connecting to database');
      return reject();
    });
  });
};

export const dbDisconnect = () => {
  mongoose.disconnect().then(() => console.log('Disconnected from database'));
};
