const mongoose = require('mongoose')
const connectstring=
'mongodb+srv://sowmya:sowsow27@cluster0.hskan5g.mongodb.net/task-manager?retryWrites=true&w=majority'

const connectDB = (url) => {
  return mongoose.connect(connectstring, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
