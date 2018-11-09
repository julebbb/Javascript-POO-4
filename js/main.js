var tableDiv = document.getElementById('table');
var selected = document.getElementsByTagName('select');

var xhttp = new XMLHttpRequest();
var customer = {};

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        customer = JSON.parse(xhttp.responseText);



    let table = '<table class="table"><tr><th>Id</th><th>Name</th><th>Age</th><th>City</th></tr>';
    for (i = 0; i < customer.Customer.length; i++) {
        table += "<tr><td>" +
            customer.Customer[i].id +
            "</td><td>" +
            customer.Customer[i].name +
            "</td><td>" +
            customer.Customer[i].age +
            "</td><td>" +
            customer.Customer[i].city +
            "</td></tr>";
    }
    tableDiv.innerHTML = table;
         
        
    }
};



function trySom(element) {
    var sort = "";
    let sortId = customer.Customer;
    console.log(sortId);
    
    //Find this function in javascript kit
    let sortName = customer.Customer.sort(function (a, b) {
        var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return -1
        if (nameA > nameB)
            return 1
        return 0 //default return value (no sorting)
    });
    console.log(sortName);
    
    let sortAge = customer.Customer.sort(function (a, b) {
        return a.age - b.age
    });
    let sortCity = customer.Customer.sort(function (a, b) {
        var cityA = a.city.toLowerCase(),
            cityB = b.city.toLowerCase()
        if (cityA < cityB) //sort string ascending
            return -1
        if (cityA > cityB)
            return 1
        return 0 //default return value (no sorting)
    });
    if (element.value == "city") {
        sort = sortCity;
        console.log('City');
        
    } else if (element.value == "name") {
        sort = sortName;
        console.log('Name');
        

    } else if (element.value == "age") {
        sort = sortAge;
        console.log('Age');
        
    } else {
        console.log('ID');
        
        sort = sortId;
    }
    let table = '<table class="table"><tr><th>Id</th><th>Name</th><th>Age</th><th>City</th></tr>';
    console.log(sortId);
    
    for (i = 0; i < sort.length; i++) {
        table += "<tr><td>" +
            sort[i].id +
            "</td><td>" +
            sort[i].name +
            "</td><td>" +
            sort[i].age +
            "</td><td>" +
            sort[i].city +
            "</td></tr>";
    }
    tableDiv.innerHTML = table;

}
xhttp.open("GET", "js/main.json", true);
xhttp.send(null);

