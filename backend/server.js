import cors from "cors";
import express from "express";
import 'dotenv/config'
import connectCloudinary from "./config/cloudinary.js"
import connectDB from "./config/mongodb.js";
import adminRouter from "./routes/adminRoute.js";

// app config
const app = express()
const PORT = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middleware
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/admin', adminRouter)
//localhost:4000/api/admin/add-artist

app.get('/', (req,res) => {
  res.send('API ON')
})

app.listen(PORT, () => {
  console.log('Server Started at',PORT);
  
})