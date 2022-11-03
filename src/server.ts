import * as dotenv from 'dotenv';
import express from "express";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Working!" })
});

app.use("/api", router);

app.listen(port, () => { console.log(`Running on http://localhost:${port}/api`) });