import { Router } from "express";

const router = Router();

router.get('/', function(req, res) {
    res.send("hello i am working UUID " + req.uuid);
})

export default router;