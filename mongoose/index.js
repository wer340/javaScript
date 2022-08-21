const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/movies",{useNewUrlParser:true})

console.log("ssssss")

const movieSchema=new mongoose.Schema({
    name:String,
    year:Number
    
})
const personSchema=new mongoose.Schema({
    name:String,
    age:Number,
    movie:String
})
const Movie=mongoose.model("movie",movieSchema)
const Person=mongoose.model("person",personSchema)
async function insertDate(data){
const movie=new Movie(data)
await movie.save()

}

async function personInsert(data){
listModelData=[]    
for(item of data){
    let person=new Person(item)
    listModelData.push(person)
}
Person.insertMany(listModelData)
}

personInsert([
    {name:"Scarlett",age:45,movie:"Avenger"},
    {name:"emilia",age:35,movie:"Game of Thrones"}
    
])
db.people.deleteOne({"_id":ObjectId("630237c12a072787c87d3d63")})