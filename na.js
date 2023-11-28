//Print the following details name, capital, flag, using forEach function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
    var result = JSON.parse(request.response);
    result.forEach((n)=>{
      console.log(n.name);
      console.log(n.capital);
      console.log(n.flag);
     });
    // var abc = result.map((cou)=>cou.name);
    // var cdf = result.map((cou)=>cou.capital);
    // var fgh = result.map((cou)=>cou.flag);
    // console.log(abc,cdf,fgh);

}