debugger;

function acter (name ,age ,movie,oscar){
    this.name=name;
    this.age=age;
    this.movies=movie;
    this.oscars=oscar;
}
var scarlett=new acter("scarlett",45,"avenger",true);
var margot= new acter("robbie",36,"wolf of wall street",false);

console.log(margot);