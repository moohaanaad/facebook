import express from 'express'
import cors from 'cors'
import bootstrap from './src/bootstrap.js'
const app = express()
const port = process.env.PORT||5000
app.use(cors())
bootstrap(app,express)



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

