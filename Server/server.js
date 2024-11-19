const http = require("http");
const app = require("./route.js");

// Use Railway's assigned port or fallback to 55000 for local development
const PORT = process.env.PORT || 55000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log("Server is listening on port", PORT);
});
