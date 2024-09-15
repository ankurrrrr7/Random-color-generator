
const getcolor=()=>{
    const random =  Math.floor(Math.random()*16777215)
    const randomCode = "#"+random.toString(16);
    document.body.style.backgroundColor =randomCode;
    console.log(random,randomCode);
    document.getElementById("colorCode").innerHTML = randomCode;

}
document.getElementById("btn").addEventListener("click", getcolor)
getcolor()

