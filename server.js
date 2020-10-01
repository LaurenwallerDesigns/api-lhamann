const  express = require('express')
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
const port = 3030
import createOne from './blog/blog.controllers';
import blogRouter from './blog/blog.router';
export const app = express()

app.use(cors());
app.use(json())
app.use(urlencoded({ extended: true }))

//app.use(express.static(path.dirname('build')));

app.use('/blog', blogRouter)

app.get('/', function (req, res) {
   res.send("Hello World");
 });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
