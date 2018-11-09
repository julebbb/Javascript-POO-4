var tableDiv = document.getElementById('table');
var selected = document.getElementsByTagName('select');

var xhttp = new XMLHttpRequest();


xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        customer = JSON.parse(xhttp.responseText);

        htmlManager.htmlTable(customer.Customer);
        
    }
};

function trySom(element) {
    sortButton.sortHtml(element);
}

xhttp.open("GET", "js/main.json", true);
xhttp.overrideMimeType("application/json");
xhttp.send(null)

let htmlManager = {
    table: '<table class="table"><tr><th>Id</th><th>Name</th><th>Age</th><th>City</th></tr>',
    htmlTable: function (object) {
        
        for (i = 0; i < object.length; i++) {
            this.table += "<tr><td>" +
                object[i].id +
                "</td><td>" +
                object[i].name +
                "</td><td>" +
                object[i].age +
                "</td><td>" +
                object[i].city +
                "</td></tr>";
        }
        tableDiv.innerHTML = this.table;
    }
}

let sortButton = {
    sort: '',
    sortHtml: function(element) {

        if (element.value == "city") {
            this.sort = this.sortCity();
        } else if (element.value == "name") {
            this.sort = this.sortName();
        } else if (element.value == "age") {
            this.sort = this.sortAge();
        } else {
            this.sort = this.sortId();
        }

        this.htmlManager();
    },
    sortId: function() {
        let sortId = customer.Customer.sort(function (a, b) {
            return a.id - b.id
        });
        return sortId;
    },
    sortName: function() {
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

        return sortName;
    },
    sortAge: function() {
        let sortAge = customer.Customer.sort(function (a, b) {
            return a.age - b.age
        });
        return sortAge;
    },
    sortCity: function() {
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
    },
    htmlManager: function() {
        let table = '<table class="table"><tr><th>Id</th><th>Name</th><th>Age</th><th>City</th></tr>';

        for (i = 0; i < this.sort.length; i++) {
            table += "<tr><td>" +
                this.sort[i].id +
                "</td><td>" +
                this.sort[i].name +
                "</td><td>" +
                this.sort[i].age +
                "</td><td>" +
                this.sort[i].city +
                "</td></tr>";
        }
        tableDiv.innerHTML = table;
    }
}