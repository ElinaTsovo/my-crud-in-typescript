//importar o express
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import {connectionDB} from './database'
import router from './router'


const app = express()

app.use(express.json())
app.use('/', router)
connectionDB()

const port = process.env.PORT || 5000

app.listen(port,()=>{
     console.log(`The server is runing on http://localhost:${port}`)
})

const names: Array<string | number > =  ['Gedia', 27]

console.log(names)