const users = {
    "Minh":{
        id: 1,
        name: "Java",
        lastName: "Script",
    }
}
const router = app => {
    app.get('/', (request, response) => {
        response.send(users);
    });
    app.get('/users', (request, response) => {
        response.send(users);
    });
    app.get('/blobs', (request, response) => {
        response.send(users);
    });
    app.post('/blobs', (request, response) => {
        response.send(users);
    })
}
module.exports = router;