var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];

var Checkbox = document.getElementsByName('check');  


var n = 1;
var x = 0;

function send()
{
  

    var newRow = document.getElementById("table");
     
    var addrow = newRow.insertRow(n);

    var str = ' ';
    for (var n of Checkbox)
    {
       if (n.checked) {
        //    str.push = n.value;
         str += n.value + " ";
       }
    }
    console.log(str);
    list1[x] = document.getElementById("name").value;
     list2[x] = document.getElementById("email").value;
     list3[x] = document.getElementById("add").value;
     if(male.checked) {
        list4[x] = document.getElementById("male").value;
  
    }else if(female.checked) {

        list4[x] = document.getElementById("female").value;

  
    }
     list5[x] = document.getElementById("city").value;
     list6[x] = document.getElementById("state").value;
     list7[x] = document.getElementById("zip").value;
   

    var cell1 = addrow.insertCell(0);
    var cell2 = addrow.insertCell(1);
    var cell3 = addrow.insertCell(2);
    var cell4 = addrow.insertCell(3);
    var cell5 = addrow.insertCell(4);
    var cell6 = addrow.insertCell(5);
    var cell7 = addrow.insertCell(6);
    var cell8 = addrow.insertCell(7);




    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    cell3.innerHTML = list3[x];
    cell4.innerHTML = list4[x];
    cell5.innerHTML = list5[x];
    cell6.innerHTML = list6[x];
    cell7.innerHTML = list7[x];
    cell8.innerHTML = str;
  
}
