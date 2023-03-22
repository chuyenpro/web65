const fs = require('fs');
const http = require('http');
console.log(123)
const serverListener = (req, res) => {
    if (req.url.includes("/api/user") && req.url !== "/api/user") {
        var userDataId = req.url.split('/')[req.url.split('/').length - 1];
        req.url = userDataId;
    }
    switch (req.url) {
        case '/': {
            const htmlData = fs.readFileSync("./index.html", "utf-8");
            res.end(htmlData);
            break;
        }
        case '/api/user': {
            const usersData = fs.readFileSync("./data.json", "utf-8");
            res.end(usersData);
            break;
        }
        case userDataId: {
            const userDataDetail = JSON.parse(fs.readFileSync("./data.json", "utf-8")).data.find(user => user.id === Number(userDataId));
            res.end(JSON.stringify(userDataDetail));
            break; 
        }
        default:
            res.end("<h1 style='color: red;'>PAGE NOT FOUND</h1>");
    }
}

const server = http.createServer(serverListener);

server.listen(8008, () => {
    console.log('Server is running on port 8008');
})