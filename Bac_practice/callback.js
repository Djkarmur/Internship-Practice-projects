
setTimeout(()=> {
    console.log("timer");
},5000)

const x = function(y){
    console.log("x");
    y()
}

x(function y(){
    console.log("y");
});