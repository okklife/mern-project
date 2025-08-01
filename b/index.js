const express  = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors")
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dxmbshchu",
  api_key: "265862626634142",
  api_secret: "**********",
});
require('dotenv').config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Only needed if you're using cookies/auth headers
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const authRouter = require("./router/authRouter")
const userRouter = require("./router/userRouter");
const serviceRoute =require("./router/serviceRouter")
const { connectDB } = require("./dataBase/connectDB");
const errorMiddleware = require('./middleware/errorHandle');

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/service",serviceRoute)
connectDB()
app.use(errorMiddleware)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

