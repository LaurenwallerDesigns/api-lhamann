const  express = require('express')
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
const port = 3030
import blogRouter from './blog/blog.router';
import userRouter from './users/user.router';

import { signin } from './utils/auth';
export const app = express()

app.use(cors());
app.use(json())
app.use(urlencoded({ extended: true }))

//app.use(express.static(path.dirname('build')));
app.post('/signin', signin)
app.use('/blog', blogRouter)
app.use('/user', userRouter)
app.get('/', function (req, res) {
   res.send("Hello World");
 });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
