const mongoose = require ('mongoose');
require ('dotenv').config();

const connectToDatabase =  async () => {
    try {
        const connectionOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
await mongoose.connect(process.env.DATABASE_URL, connectionOptions);
console.log('Connected to Database');
    } catch (error) {
        console.error(`Database connection error: ${error}`);
    }
};
  module.exports = connectToDatabase;

//   mongodb+srv://samuelqueen091:GpnD5khR65KXzUfE@cluster0.fwpok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


//   const connectToDatabase = async () => {
//     try {
//         const connectionOptions = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         };

//         await mongoose.connect('mongodb://127.0.0.1:27017/aaclass');
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error(`Database connection error: ${error}`);
//     }
// };

connectToDatabase();
