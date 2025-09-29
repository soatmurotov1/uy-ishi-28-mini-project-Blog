import express from "express"
import morgan from "morgan"
import 'dotenv/config'

import { commentsRoutes, postsRoutes, userRoutes } from "./routes/index.js"

const app = express()
// const PORT = process.env.PORT || 3000
const PORT = 3000

app.use(express.json())
app.use(morgan('tiny'))

//routes
app.use("/users", userRoutes)
app.use("/posts", postsRoutes)
app.use("/comments", commentsRoutes)




app.use((req, res) => {
  const method = req.method
  const url = req.url
  res.status(404).send(`Cannot ${method} ${url}`)
})



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})