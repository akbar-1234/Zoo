var title = localStorage.getItem('title')
if (title === 'Sydney') {
    document.querySelector('.image').style = "background-image: url('../images/grid-content-sydney-tickets-710x400.jpg');"
    document.querySelector('#ZooNameDate').innerHTML = 'Taronga Zoo Sydney Entry'
    document.querySelector('.page_p1').innerHTML = 'You have chosen Taronga Zoo Sydney Entry. Please enter your ticket details below. Children under 4 years are free.'
} else if (title === 'Dubbo'){
    document.querySelector('#ZooNameDate').innerHTML = 'Dubbo Zoo Entry'
    document.querySelector('.image').style = "background-image: url('../images/grid-content-dubbo-tickets-710x400.jpg');"
}

var Adult = localStorage.getItem("Adult");
var Child = localStorage.getItem("Child");
var Concession = localStorage.getItem("Concession");
var Infant = localStorage.getItem("Infant");
var FamilyAdult = localStorage.getItem("FamilyAdult");
var FamilyAdultChild = localStorage.getItem("FamilyAdultChild");
var FamilyAdultChild2 = localStorage.getItem("FamilyAdultChild2");

var title = localStorage.getItem('title')

var AdultPrice = Adult*45.9;
var AdultPrice_1 = Math.floor(AdultPrice);
var AdultPrice_2 = (AdultPrice - AdultPrice_1).toFixed(7).toString().substring(2, 4);

var ChildPrice = Child*27.0;
var ChildPrice_1 = Math.floor(ChildPrice);
var ChildPrice_2 = (ChildPrice - ChildPrice_1).toFixed(7).toString().substring(2, 4);

var ConcessionPrice = Concession*35.10;
var ConcessionPrice_1 = Math.floor(ConcessionPrice);
var ConcessionPrice_2 = (ConcessionPrice - ConcessionPrice_1).toFixed(7).toString().substring(2, 4);


var InfantPrice = Infant*0;
var InfantPrice_1 = Math.floor(InfantPrice);
var InfantPrice_2 = (InfantPrice - InfantPrice_1).toFixed(7).toString().substring(2, 4);


var FamilyAdultPrice = FamilyAdult*88.80;
var FamilyAdultPrice_1 = Math.floor(FamilyAdultPrice);
var FamilyAdultPrice_2 = (FamilyAdultPrice - FamilyAdultPrice_1).toFixed(7).toString().substring(2, 4);


var FamilyAdultChildPrice = FamilyAdultChild*105.60;
var FamilyAdultChildPrice_1 = Math.floor(FamilyAdultChildPrice);
var FamilyAdultChildPrice_2 = (FamilyAdultChildPrice - FamilyAdultChildPrice_1).toFixed(7).toString().substring(2, 4);


var FamilyAdultChild2Price = FamilyAdultChild2*129.60;
var FamilyAdultChild2Price_1 = Math.floor(FamilyAdultChild2Price);
var FamilyAdultChild2Price_2 = (FamilyAdultChild2Price - FamilyAdultChild2Price_1).toFixed(7).toString().substring(2, 4);


var allPrice = 0
console.log(Adult, Child, Concession);
if (Adult>0) {
    allPrice += Adult * AdultPrice
  document.querySelector(".hello").innerHTML += `
    <div>
        <span class="bill-item">
        <p><span class='item-name_1'>Taronga Zoo - Adult x - </span>${Adult}</p>
        <p class="price">${"$" + AdultPrice_1 + "." + AdultPrice_2}</p></span>
        </div>
`;
}
if (Child>0) {
    allPrice += Child * ChildPrice
    document.querySelector(".hello").innerHTML += `
    <div>
        <span class="bill-item">
        <p><span class='item-name_2'>Taronga Zoo - Child x - </span>${Child}</p>
        <p class="price">${"$" + ChildPrice_1 + "." + ChildPrice_2}</p></span>
        </div>
`;
}
if (Concession>0) {
    allPrice += Concession * ConcessionPrice
    document.querySelector(".hello").innerHTML += `
    <div>
        <span class="bill-item">
        <p><span class='item-name_3'>Taronga Zoo - Concession x - </span>${Concession}</p>
        <p class="price">${"$" + ConcessionPrice_1 + "." + ConcessionPrice_2}</p></span>
        </div>
`;
}
if (Infant>0) {
    allPrice += Infant * InfantPrice
    document.querySelector(".hello").innerHTML += `
    <div>
        <span class="bill-item">
        <p><span class='item-name_4'>TZ - Child Under 4 FOC x - </span>${Infant}</p>
        <p class="price">${"$" + InfantPrice_1 + "." + InfantPrice_2}</p></span>
        </div>
`;
}
if (FamilyAdult>0) {
    allPrice += FamilyAdult * FamilyAdultPrice
    document.querySelector(".hello").innerHTML += `
    <div>
        <span class="bill-item">
        <p> <span class='item-name_5'>Family - 2 Adults & 2 Children x - </span>${FamilyAdult}</p>
        <p class="price">${"$" + FamilyAdultPrice_1 + "." + FamilyAdultPrice_2}</p></span>
        </div>
`;
}
if (FamilyAdultChild>0) {
    allPrice += FamilyAdultChild * FamilyAdultChildPrice
    document.querySelector(".hello").innerHTML += `
    <div>
        <span class="bill-item">
        <p><span class='item-name_6'>Family - 2 Adults & 1 Child x - </span>${FamilyAdultChild}</p>
        <p class="price">${"$" + FamilyAdultChildPrice_1 + "." + FamilyAdultChildPrice_2}</p></span>
        </div>
`;
}
if (FamilyAdultChild2>0) {
    allPrice += FamilyAdultChild2 * FamilyAdultChild2Price
    document.querySelector(".hello").innerHTML += `
    <div>
        <span class="bill-item">
        <p><span class='for_dubbo6'>Family - 1 Adult & 2 Children x - </span>${FamilyAdultChild2}</p>
        <p class="price">${"$" + FamilyAdultChild2Price_1 + "." + FamilyAdultChild2Price_2}</p></span>
        </div>
`;
} else {
  console.log("no item");
}

var forAll = Math.floor(allPrice);
var forAll1 = (allPrice - forAll).toFixed(7).toString().substring(2, 4);

document.querySelector('#AllPrice_of_page3').innerHTML = '$' + forAll + "." + forAll1
document.querySelector('#AllPrice_of_page4').innerHTML = '$' + forAll + "." + forAll1

var title = localStorage.getItem("title");
if (title === "Sydney") {
  document.querySelector(".image").style =
    "background-image: url('../images/grid-content-sydney-tickets-710x400.jpg');";
  document.querySelector("#ZooNameDate").innerHTML = "Taronga Zoo Sydney Entry";
  document.querySelector(".page_p1").innerHTML =
    "You have chosen Taronga Zoo Sydney Entry. Please enter your ticket details below. Children under 4 years are free.";
} else if (title === "Dubbo") {
  document.querySelector("#ZooNameDate").innerHTML = "Dubbo Zoo Entry";
  document.querySelector(".image").style =
    "background-image: url('../images/grid-content-dubbo-tickets-710x400.jpg');";
}

if (title === 'Dubbo') {
  document.querySelector(".item-name_1").innerHTML="Western Plains Zoo - Adult x - "
  document.querySelector(".item-name_2").innerHTML="Western Plains Zoo - Child x - "
  document.querySelector(".item-name_3").innerHTML="Western Plains Zoo - Concession x - "
  document.querySelector(".item-name_4").innerHTML="TWPZ - Child Under 4 FOC x - "
  document.querySelector(".item-name_5").innerHTML="Family - 2 Adults & 2 Children x - "
  document.querySelector(".item-name_6").innerHTML="Family - 2 Adults & 1 Child x - "
  document.querySelector(".item-name_7").innerHTML="Family - 1 Adult & 2 Children x - "
}