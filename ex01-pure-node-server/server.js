import { createServer } from 'http'

const server = createServer((req, res) => {
    if(req.url === '/') {
        res.end('Página Central')
    }
    if(req.url === '/about'){
        res.end("Página Sobre")
    }
})


server.listen(3333)