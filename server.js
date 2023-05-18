const dotenv=require('dotenv')
const express = require('express')
const morgan = require('morgan') //allows us to log the requests whenever the module is used
const app = express()
const path = require('path')
const bodyparser=require('body-parser')
const connectDB=require('./server/database/connection')
const cors=require('cors')
app.use(cors({
    origin: '*'
  }));
app.use(express.json())

dotenv.config({path:'config.env'})
const PORT =process.env.PORT  || 5000



app.use(morgan('tiny'))  //gives the type of request made and the path



//mongodb connection
connectDB();
app.use(bodyparser.urlencoded({extended:true}))

//setting the view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/images',express.static(path.resolve(__dirname,"assets/images")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//adding the routes
app.use('/',require('./server/routes/router'))










app.listen(PORT,()=>console.log(`Server is running on http://localhost:${PORT}`))