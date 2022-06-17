const app = require('./src/app')

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Se rodar, vai na porta ${PORT}`))