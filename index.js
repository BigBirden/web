const express = require('express')      //Весь код установленной библиотеки в переменной
const path = require("path")            //Путь к процессу node.js
const fs = require("fs")
const app = express()           //Объект веб-сервера
const port = 3000                   //Порт, от 0 до 60000+, стандартный порт для обработки

app.use(express.static(__dirname + '/static'));
app.use(express.json())             //Вызываем обработчик
app.use(express.urlencoded())

app.get('*', (req, res) => {                //Слеш - маршрут, функция - request, response
    res.sendFile("html.html", {root: path.join(__dirname, "./static")})        //На запрос отправляем интернет-прикол
})

app.post('/reg-data', (req, res) => {                //Слеш - маршрут, функция - request, response
    console.log(">>>>>>>>>>>>>>>>>>>", req.body)
    fs.appendFile("data.txt", JSON.stringify(req.body) + "\n", (err ) =>{
        if(err){
            res.status(500).send("User not added.")
        } else {
            res.status(201).send("Post request received. Koushka spotted, sending ^ > v v v. User added.")
        }
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
