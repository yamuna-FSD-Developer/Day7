var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
    var result = JSON.parse(request.response);
    var res = result.filter((cou)=>cou.population<2000000); //>2L population countries
    var abc = res.map((cou)=>cou.name);
    var cde = result.filter((cou)=>cou.region=="Asia"); // Asia Region
    var reg= cde.map((cou)=>cou.name);
    

    console.log(abc,reg,efg);
}