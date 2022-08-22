const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/movies",{useNewUrlParser:true})

console.log("ssssss")

const movieSchema=new mongoose.Schema({
    name:String,
    year:{type:Number ,required:[true,"please correct and full year"]}
    
})
const personSchema=new mongoose.Schema({
    name:String,
    age:Number,
    movie:String
})
const Movie=mongoose.model("movie",movieSchema)
const Person=mongoose.model("person",personSchema)
// !insert data function
async function insertData(data){
const movie=new Movie(data)
await movie.save()
    
}

// !insert many data function
async function personInsert(data){
listModelData=[]    
for(item of data){
    let person=new Person(item)
    listModelData.push(person)
}
Person.insertMany(listModelData,(err)=>{
if(err){
    console.log(err)
}else{
    console.log("data successfully stored in database")
}
})
}

/*personInsert([
    {name:"Scarlett",age:45,movie:"Avenger"},
    {name:"emilia",age:35,movie:"Game of Thrones"}
    
])*/
//db.people.deleteOne({"_id":ObjectId("630237c12a072787c87d3d63")})

// !read

async function readDb(Data){
    Data.find((err,people)=>{
if(err){
    console.log("error : ",err)
}else{
    mongoose.connection.close()
    for(item of people){
    console.log("name : =>",item.name)    
        
    }
}
})
}

//!update one
async function update(Data,idp,newedit){
    Data.updateOne(
        {"_id":idp},{"name":newedit},(err)=>{
          if(err){  console.log("update error",err)
        }else
        {
                console.log(" Update successfully ")
            }
        }
    )
}

// !delete
async function deleteDoc(Data,idp){
    Data.deleteOne(
        {"_id":idp},(err)=>{
          if(err){  console.log("Delete error",err)
        }else
        {
                console.log(" Delete successfully ")
            }
        }
    )
}
//insertData({name:"apartment"})
//update(Movie,"63038a8929adeb36bc7198b6","Avatar")
deleteDoc(Movie,"63038a7713df7c9d643ee680")
readDb(Movie)