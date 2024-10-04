import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'

import auth from './middlewares/auth.js'

const app = express()
app.use(express.json())


app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)


app.listen(process.env.PORT, () => console.log(`Servidor rodando em http://localhost:${process.env.PORT}`))