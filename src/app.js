import express from "express"
import "./config.js"

import usersRoutes from "./routes/users.routes.js"
import mkRoutes from "./routes/mk.routes.js"

const app = express()

app.use(express.json())

app.use("/api", usersRoutes)
app.use("/api", mkRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found"
    })
})

export default app