const Express = require('express');

const app = Express();

app.get('/', (req, res) => {
    res.send('Hello docker')
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}`))