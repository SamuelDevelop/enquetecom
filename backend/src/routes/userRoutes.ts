import { Router } from "express";

const router = Router();

router.get("/", (req, res)=>{
    res.send("User List, trouxão");
});

router.get("/:id", (req, res)=>{
    res.send("User id aí");
});

router.post("/", (req, res)=>{
    res.send("Criar Usuario pdc");
});

export default router;