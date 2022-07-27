const http = require('http')

const server = http.createServer( (request, response) => {
    message= ""
    
    hourOfDay= new Date().getHours()
    console.log(hourOfDay)
    message=
    hourOfDay > 6 && hourOfDay < 12
    ? "Good Morning"
    : hourOfDay >= 12 && hourOfDay < 19
    ? "Good Afternoon"
    : "Good Night"
    
    response.end(message)
} )

const createdServer = server.listen(8080, () => {
    //console.log(server.address())
    console.log(`Escuchando en el puerto: ${server.address().port}`)
})