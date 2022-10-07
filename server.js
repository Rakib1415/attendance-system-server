require('dotenv').config();
const app = require('./app/app');
const connectDb = require('./db/db');

const PORT = process.env.PORT || 8000;

(async () => {
    try {
        console.log('Database connected!');
        await connectDb('mongodb://localhost:27017/attendance-db');
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
})();
