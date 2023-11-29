//Print the total population of countries using reduce function

// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/all");
// request.send();

// request.onload = function () {
//     var result = JSON.parse(request.response);
//     var pop = result.filter((cou)=>cou.population);
//     var efg = pop.map((cou)=>cou.population);
//     var res = efg.reduce((acc,ele)=> acc+ele);
//     console.log(res);
//     //console.log(efg);
//}

//Print the country that uses US dollars as currency.

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
    var result = JSON.parse(request.response);
    var res = result.filter((cou)=>cou.currencies);
    var efg = res.map((cou)=>cou.currencies);
    var dol = efg.filter((cou)=>cou.USD);
    console.log(dol);
}
