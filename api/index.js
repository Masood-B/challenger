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
const cors = require('cors')
const cookieParser = require('cookie-parser')
const errorHandling = require('./middleware/ErrorHandling')
const port = +process.env.PORT || 3000

// Middleware - APplication level
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
}); 

app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: false
    }),
    cookieParser(), 
    cors(), 
    routes
)

routes.get('^/$|/challenger',
 (req, res)=>{
    res.sendFile(path.resolve(__dirname,
        './static/html/index.html'))
})

app.use(errorHandling)

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
})