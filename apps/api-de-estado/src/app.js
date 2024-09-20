const express = require('express')
const app = express()
const path = require('path')
const serverConfig = require('./config/server')

require('./lib/mongoInstance')

app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const entityRoutes = require('./routes/entityRoutes')
const staticRoutes = require('./routes/staticRoutes')

app.use('/entity', entityRoutes)
app.use('/', staticRoutes)

app.listen(serverConfig.port, () => {
    console.log(`api de estado funcionando correctamente en el puerto ${serverConfig.port}`)
})