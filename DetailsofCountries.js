var request= new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function() {
    var data =JSON.parse(request.response);
    
    for(var i=0;i<data.length;i++){
console.log(`Country name is ${data[i].name} having Population of ${data[i].population} it's at the region of ${data[i].region}  and it's subregion belongs to ${data[i].subregion}`)

}
    
} 