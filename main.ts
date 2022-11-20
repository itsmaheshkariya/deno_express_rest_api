import express from "npm:express"
import "./config/db.ts"
import user from "./routes/user.ts"
import { config } from "https://deno.land/x/dotenv/mod.ts";
const { PORT } = config()

const app = express()

app.use(express.json())

app.use("/user", user)

app.listen(PORT, () => {
    console.log("Server started on port 3000")
    }
)