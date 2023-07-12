//importar o controller
import {Router} from 'express'
import {createData, getData, updateData, deleteData, getDataID} from './controller'

const rota = Router()

rota.post('/controller', createData)
rota.get('/controller', getData)
rota.get('/controller/:_id', getDataID)
rota.put('/controller/:_id', updateData)
rota.delete('/controller/:_id', deleteData)

export default rota