const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true});
const con = mongoose.connection;
con.on('error', console.error.bind(console, 'connection error:'));

con.once('open',() => {
    console.log('mongo db Connected...');
});
