
module.exports = {
    async getAllEntities(req, res) {
        let entities =  await global.mongoInstance.poblaciones.find()
        entities = await entities.toArray()
        
        res.json({ 
            status: 'success',
            entities,
         })
    }
}