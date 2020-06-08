import mongoose from 'mongoose';

const initializeDatabase = () => {
    const { DB_USER, DB_PASS, DB_URL } = process.env;
    console.log(DB_USER, DB_PASS, DB_URL);
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
        user: DB_USER,
        pass: DB_PASS,
    });

    const { connection } = mongoose;

    connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    connection.on('open', () => console.log(`Connected to database ${connection.db.databaseName}`));

    return connection;
};

export default initializeDatabase();
