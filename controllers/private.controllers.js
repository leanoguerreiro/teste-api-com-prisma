import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const listarUsuarios = async (req, res) => {
    try {
        const users = await prisma.user.findMany()

        res.status(200).json({
            message: 'Usuarios listados com sucesso', users
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'falha no servidor'
        })
    }
}

export default {
    listarUsuarios,
}