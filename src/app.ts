import 'dotenv/config';
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL
}));

app.get("/", (req, res) => {
    res.status(200).send("Hello from Express !")
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`[Server] Running on port ${process.env.SERVER_PORT}`);
});
