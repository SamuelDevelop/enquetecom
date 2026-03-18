import { Router } from "express"
import  pool from "../database/conexao"

const router = Router()

router.get("/", async (req, res) => {

    const resultado = await pool.query(
        "SELECT * FROM usuarios"
    )

    res.json(resultado.rows)
})

router.post("/", async (req, res) => {

    const { nome, email, senha } = req.body

    const resultado = await pool.query(
        "INSERT INTO usuarios (nome, email, senha) VALUES ($1,$2,$3) RETURNING *",
        [nome, email, senha]
    )

    res.json(resultado.rows[0])
})

export default router;