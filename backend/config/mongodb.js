import moongose from "mongoose";


const connectDB = async () => {
  moongose.connection.on('connected',()=> console.log('Database Connected'))

  await moongose.connect(`${process.env.MONGODB_URL}/urbanarttampico`)

}

export default connectDB