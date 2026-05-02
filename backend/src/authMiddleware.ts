import { NextFunction } from "express"

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ erro: "Token não fornecido" })
    }

    const [, token] = authHeader.split(" ")

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET!)
        req.user = payload
        next()
    } catch {
        return res.status(401).json({ erro: "Token inválido" })
    }
}