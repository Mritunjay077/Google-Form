const http=require("http");
const app=require("./route.js");
const server =http.createServer(app);
const PORT= 55000;

server.listen(PORT,()=>{
    console.log("Server is listening on " , PORT);
});