import{Request, Response, response} from 'express'
import modell from './modell'

const createData = async(req:Request, res:Response) =>{
    const{name,age,course}= req.body
    try {
        const createDataF = await modell.create({
            name,
            age,
            course
        })
        return res.json('DataCreated')
        
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}

const getData = async (req:Request, res:Response) =>{
    
    try {
        const getDataF = await modell.find()
        return res.json(getDataF)
    } catch (error) {
        return res.json(error)
        
    }
}

const getDataID = async (req:Request, res:Response) =>{
    const{_id} = req.params
    try {
        const getDataF = await modell.findById({_id})
        if(!getDataF){
            return res.json('DataNotFound')
        }
        return res.json(getDataF)
    } catch (error) {
        return res.json(error)
        
    }
}

const updateData = async (req:Request, res:Response) =>{
    const{_id} = req.params
    const{name, age, course} = req.body

    try {
        const updateDataF = await modell.findById({_id})
        if(!updateDataF){
            return res.json('ERROR,data not found')
        }

        await modell.updateOne({
            name,
            age,
            course
        })
        return res.json('Dados actualizados com sucesso')
    } catch (error) {
        return res.json(error)
    }
}

const deleteData = async (req:Request, res:Response) =>{
    const{_id}=req.params
    try {
        const deleteDataF = await modell.findById({_id})
        if(!deleteDataF){
            return res.json('ERROR,data not found on dataBase')
        }
        await modell.deleteOne({_id}) 
    } catch (error) {
        return res.json(error)
    }
}


export { createData, getData, getDataID, updateData, deleteData }