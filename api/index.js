// class Person{
//     #firstName = "";
//     constructor(firstName){
//         this.#firstName = firstName
//     }
//     walk(){
//         console.log(`${this.#firstName} is walking`)
//     }
//     dance(){
//         console.log(`${this.#firstName} is dancing`);
//     }
// }

// const person1 = new Person("One")
// person1.walk()

// const person2 = new Person("Two")
// person2.dance()

const {express, routes} = require('./controller')
const path = require('path')
const app = express()
const port = +process.env.PORT || 3000

// static
app.use(express.static('./static'))

app.use(
    express.urlencoded({
        extended: false}),
    routes
)
routes.get('^/$|/challenger',
 (req, res)=>{
    res.sendFile(path.resolve(__dirname,
        './static/html/index.html'))
})
app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
})