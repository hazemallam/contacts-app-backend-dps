const mongoose = require('mongoose')

mongoose.connect(process.env.MONODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})