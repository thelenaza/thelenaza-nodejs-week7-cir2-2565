const http =require('http')
const PORT = 5000
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        //set response header
        res.writeHead(200,{'Content-Type':'text/html'})
        //set response content 
        res.write('<h1>Hello,Node.js!</h1>')
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>About page!</h1>')
        res.end()
    }else if(req.url === '/student'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Student page!</h1>')
        res.end()
    }
    res.end('Invalis Request')
    
})

server.listen(PORT,()=>{
    console.log(`Server Running http://localhost:${PORT}`)
})