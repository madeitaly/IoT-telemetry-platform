import 'dotenv/config';
import morgan from "morgan";
import express from "express";
import type { Request, Response } from "express"

const app = express()

//Environmental Variables
const port = process.env.PORT || 3000;

// MIDDLEWARE //
app.use(morgan("dev"));

/////////////////////////////////////
//  ROUTING OF THE HTTPS REQUESTS ///
/////////////////////////////////////
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
