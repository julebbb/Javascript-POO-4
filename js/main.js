//Take div with id = table
var tableDiv = document.getElementById('table');

//Begin a new xml resquest for ajax
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //Take json file and make object in a variable
        customer = JSON.parse(xhttp.responseText);
        
        //Display table in begin 
        htmlManager.htmlTable(customer.Customer);
        
    }
};

//Function on click in select
function trySom(element) {
    //Sort table according to element.value
    sortButton.sortHtml(element);
}

xhttp.open("GET", "js/main.json", true);
xhttp.responseType = "text";
xhttp.send(null)

let htmlManager = {
    
    //Function for display sort in table
    htmlTable: function (object) {
        table =  '<table class="table"><tr class="table-color"><th>Id</th><th>Name</th><th>Age</th><th>City</th></tr>';
        for (i = 0; i < object.length; i++) {
            table += "<tr><td>" +
                object[i].id +
                "</td><td>" +
                object[i].name +
                "</td><td>" +
                object[i].age +
                "</td><td>" +
                object[i].city +
                "</td></tr>";
        }
        tableDiv.innerHTML = table;
    }
}

let sortButton = {
    sort: '',
    sortHtml: function(element) {
        //Check value in element
        if (element.value == "city" || element.value == "name") {
            this.sort = this.sortCaracter(element.value);
        } else if (element.value == "age" || element.value == "id") {
            this.sort = this.sortNumber(element.value);
        } 

        htmlManager.htmlTable(this.sort);
    },
    sortCaracter: function(element) {
        //Sort element if value = name or city
        if (element == "name") {
            //Function find in javascript kit
            let sortName = customer.Customer.sort(function (a, b) {
                var nameA = a.name.toLowerCase(),
                    nameB = b.name.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            });

            return sortName;
        } else {
            let sortCity = customer.Customer.sort(function (a, b) {
                var cityA = a.city.toLowerCase(),
                    cityB = b.city.toLowerCase()
                if (cityA < cityB) //sort string ascending
                    return -1
                if (cityA > cityB)
                    return 1
                return 0 //default return value (no sorting)
            });
            return sortCity;
            
        }
    },
    sortNumber: function(element) {
        //Sort element if value = id or age
        if (element == "id") {
            let sortAge = customer.Customer.sort(function (a, b) {
                return a.id - b.id
            });
            return sortAge;
        } else if (element == "age"){
            let sortAge = customer.Customer.sort(function (a, b) {
                return a.age - b.age
            });
            return sortAge;
        }
        
    }
}