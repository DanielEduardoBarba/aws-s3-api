import express from "express";
import cors from "cors";
import "dotenv/config"

const app = express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("API working :D")
})

app.listen('4040', ()=>{
        console.log("Listening to port 4040...")
})
