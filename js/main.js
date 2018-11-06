var main = document.getElementById('main');
var xhttp = new XMLHttpRequest();
var customer = {};

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        customer = JSON.parse(xhttp.responseText);
        console.log(customer.Customer[0].name);
        let selected = '<select name="sort" id="sort"><option value="id">ID</option><option value="name">Name</option><option value="age">Age</option><option value ="city">City</option></select>'
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
         main.innerHTML = selected + table;
         console.log(table);
         
        
    }
};
xhttp.open("GET", "js/main.json", true);
xhttp.send(null);