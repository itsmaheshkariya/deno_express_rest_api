import mongoose from "npm:mongoose"
import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config()

await mongoose.connect(env.MONGO_URL)

mongoose.connection
