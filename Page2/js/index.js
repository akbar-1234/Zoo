var title = localStorage.getItem('title')
if (title === 'Sydney') {
    document.querySelector('.image').style = "background-image: url('../images/grid-content-sydney-tickets-710x400.jpg');"
    document.querySelector('#ZooNameDate').innerHTML = 'Taronga Zoo Sydney Entry'
    document.querySelector('.page_p1').innerHTML = 'You have chosen Taronga Zoo Sydney Entry. Please enter your ticket details below. Children under 4 years are free.'
} else if (title === 'Dubbo'){
    document.querySelector(".item-name_1").innerHTML="Western Plains Zoo - Adult x - "
    document.querySelector(".item-name_2").innerHTML="Western Plains Zoo - Child x - "
    document.querySelector(".item-name_3").innerHTML="Western Plains Zoo - Concession x - "
    document.querySelector(".item-name_4").innerHTML="TWPZ - Child Under 4 FOC x - "
    document.querySelector(".item-name_5").innerHTML="Family - 2 Adults & 2 Children x - "
    document.querySelector(".item-name_6").innerHTML="Family - 2 Adults & 1 Child x - "
    document.querySelector(".item-name_7").innerHTML="Family - 1 Adult & 2 Children x - "
    document.querySelector(".for_dubbo").innerHTML="Taronga Western Plains Zoo - Adult"
    document.querySelector(".for_dubbo1").innerHTML="Taronga Western Plains Zoo - Child (4-15)"
    document.querySelector(".for_dubbo2").innerHTML="Taronga Western Plains Zoo - Concession"
    document.querySelector(".for_dubbo3").innerHTML="Taronga Western Plains Zoo - Infant (0-3)"
    document.querySelector(".for_dubbo4").innerHTML="Taronga Western Plains Zoo - Family 1 Adult & 2 Children (4-15)"
    document.querySelector(".for_dubbo5").innerHTML="Taronga Western Plains Zoo - Family 2 Adults & 1 Child (4-15)"
    document.querySelector(".for_dubbo6").innerHTML="Taronga Western Plains Zoo - Family 2 Adults & 2 Children (4-15)"
    document.querySelector('#ZooNameDate').innerHTML = 'Dubbo Zoo Entry'
    document.querySelector('.image').style = "background-image: url('../images/grid-content-dubbo-tickets-710x400.jpg');"
    document.querySelector(".logo img").src="https://ticketsales.taronga.org.au/media/dubbo.2856a10f.svg"


}

if (localStorage.getItem("Adult")>0) {
    prices1 = localStorage.getItem("Adult")*1
    var a = prices1*45.9
    var b = Math.floor(a);
    var c = (a - b).toFixed(7).toString().substring(2, 4);
    document.querySelector("#inputs1").innerHTML=prices1
    document.querySelector("#price1").innerHTML="$" + b + "." + c
    document.querySelector("#for_counts1").innerHTML=prices1
    document.querySelector("#Adult1").value=prices1
    document.querySelector("#inputs1").style="background:#019645;color:white"
    document.querySelector("#bill-item1").style="display:flex"
}else{
    var prices1 = 0
}

if (localStorage.getItem("Child")>0) {
    prices2 = localStorage.getItem("Child")*1
    var a = prices2*27
    var b = Math.floor(a);
    var c = (a - b).toFixed(7).toString().substring(2, 4);
    document.querySelector("#price2").innerHTML="$" + b + "." + c
    document.querySelector("#for_counts2").innerHTML=prices2
    document.querySelector("#Child1").value=prices2
    document.querySelector("#inputs2").innerHTML=prices2
    document.querySelector("#inputs2").style="background:#019645;color:white"
    document.querySelector("#bill-item2").style="display:flex"
}else{
    var prices2 = 0
}

if (localStorage.getItem("Concession")>0) {
    var a = 211.11234567;
  
    prices3 = localStorage.getItem("Concession")*1
    var a = prices3*35.1
    var b = Math.floor(a);
    var c = (a - b).toFixed(7).toString().substring(2, 4);
    document.querySelector("#price3").innerHTML="$" + b + "." + c
    document.querySelector("#for_counts3").innerHTML=prices3
    document.querySelector("#Concession").value=prices3
    document.querySelector("#inputs3").innerHTML=prices3
    document.querySelector("#inputs3").style="background:#019645;color:white"
    document.querySelector("#bill-item3").style="display:flex"
}else{
    var prices3 = 0
}

if (localStorage.getItem("Infant")>0) {
    prices4 = localStorage.getItem("Infant")*1
    document.querySelector("#price4").innerHTML="$" + prices4*0
    document.querySelector("#for_counts4").innerHTML=prices4
    document.querySelector("#Infant").value=prices4
    document.querySelector("#inputs4").innerHTML=prices4
    document.querySelector("#inputs4").style="background:#019645;color:white"
    document.querySelector("#bill-item4").style="display:flex"
}else{
    var prices4 = 0
}

if (localStorage.getItem("FamilyAdult")>0) {
    prices5 = localStorage.getItem("FamilyAdult")*1
    var a = prices5*88.8
    var b = Math.floor(a);
    var c = (a - b).toFixed(7).toString().substring(2, 4);
    document.querySelector("#price5").innerHTML="$" + b + "." + c
    document.querySelector("#for_counts5").innerHTML=prices5
    document.querySelector("#input1").value=prices5
    document.querySelector("#inputs5").innerHTML=prices5
    document.querySelector("#inputs5").style="background:#019645;color:white"
    document.querySelector("#bill-item5").style="display:flex"
}else{
    var prices5 = 0
}

if (localStorage.getItem("FamilyAdultChild")>0) {
    prices6 = localStorage.getItem("FamilyAdultChild")*1
    var a = prices6*105.6
    var b = Math.floor(a);
    var c = (a - b).toFixed(7).toString().substring(2, 4);
    document.querySelector("#price6").innerHTML="$" + b + "." + c
    document.querySelector("#for_counts6").innerHTML=prices6
    document.querySelector("#input2").value=prices6
    document.querySelector("#inputs6").innerHTML=prices6
    document.querySelector("#inputs6").style="background:#019645;color:white"
    document.querySelector("#bill-item6").style="display:flex"
}else{
    var prices6 = 0
}

if (localStorage.getItem("FamilyAdultChild2")>0) {
    prices7 = localStorage.getItem("FamilyAdultChild2")*1
    var a = prices7*129.6
    var b = Math.floor(a);
    var c = (a - b).toFixed(7).toString().substring(2, 4);
    document.querySelector("#price7").innerHTML="$" + b + "." + c
    document.querySelector("#for_counts7").innerHTML=prices7
    document.querySelector("#input3").value=prices7
    document.querySelector("#inputs7").innerHTML=prices7
    document.querySelector("#inputs7").style="background:#019645;color:white"
    document.querySelector("#bill-item7").style="display:flex"
}else{
    var prices7 = 0
}

 if(title === 'Dubbo'){
    var a = prices1*1*45.9+prices2*1*27+prices3*1*35.1+prices4*1*0+prices5*1*88.8+prices6*1*105.6+prices7*1*129.6
    var b = Math.floor(a);
    var c = (a - b).toFixed(7).toString().substring(2, 4);
    document.querySelector("#price8").innerHTML=b + "." + c
    document.querySelector("#price9").innerHTML=b + "." + c
 }





function plus1(key) {
    if (key==0) {
        prices1 = prices1 + 1
        var a = prices1*45.9
        var b = Math.floor(a);
        var c = (a - b).toFixed(7).toString().substring(2, 4);
        document.querySelector("#price1").innerHTML="$" + b + "." + c
        document.querySelector("#for_counts1").innerHTML=prices1
        document.querySelector("#Adult1").value=prices1
        document.querySelector("#inputs1").innerHTML=prices1
        localStorage.setItem('Adult', prices1)
    }
    if (key==1) {
        prices2 = prices2 + 1
    document.querySelector("#price2").innerHTML="$" + prices2*27
    document.querySelector("#for_counts2").innerHTML=prices2
    document.querySelector("#Child1").value=prices2
    document.querySelector("#inputs2").innerHTML=prices2
    localStorage.setItem('Child', prices2)
}
    if (key==2) {
        prices3 = prices3 + 1
        var a = prices3*35.1
        var b = Math.floor(a);
        var c = (a - b).toFixed(7).toString().substring(2, 4);
    document.querySelector("#price3").innerHTML="$" + b + "." + c
    document.querySelector("#price3").innerHTML.slice(0,5)
    document.querySelector("#for_counts3").innerHTML=prices3
    document.querySelector("#Concession").value=prices3
    document.querySelector("#inputs3").innerHTML=prices3
    localStorage.setItem('Concession', prices3)
}
    if (key==3) {
        prices4 = prices4 + 1
    document.querySelector("#price4").innerHTML="$" + prices4*0
    document.querySelector("#for_counts4").innerHTML=prices4
    document.querySelector("#Infant").value=prices4
    document.querySelector("#inputs4").innerHTML=prices4
    localStorage.setItem('Infant', prices4)
}
    if (key==4) {
        prices5 = prices5 + 1
        var a = prices5*88.8
        var b = Math.floor(a);
        var c = (a - b).toFixed(7).toString().substring(2, 4);
    document.querySelector("#price5").innerHTML="$" + b + "." + c
    document.querySelector("#for_counts5").innerHTML=prices5
    document.querySelector("#input1").value=prices5
    document.querySelector("#inputs5").innerHTML=prices5
    localStorage.setItem('FamilyAdult', prices5)
}
    if (key==5) {
        prices6 = prices6 + 1
        var a = prices6*105.6
        var b = Math.floor(a);
        var c = (a - b).toFixed(7).toString().substring(2, 4);
    document.querySelector("#price6").innerHTML="$" + b + "." + c
    document.querySelector("#for_counts6").innerHTML=prices6
    document.querySelector("#input2").value=prices6
    document.querySelector("#inputs6").innerHTML=prices6
    localStorage.setItem('FamilyAdultChild', prices6)
}
    if (key==6) {
        prices7 = prices7 + 1
        var a = prices7*129.6
        var b = Math.floor(a);
        var c = (a - b).toFixed(7).toString().substring(2, 4);
    document.querySelector("#price7").innerHTML="$" + b + "." + c
    document.querySelector("#for_counts7").innerHTML=prices7
    document.querySelector("#input3").value=prices7
    document.querySelector("#inputs7").innerHTML=prices7
    localStorage.setItem('FamilyAdultChild2', prices7)
}

    var a = prices1*1*45.9+prices2*1*27+prices3*1*35.1+prices4*1*0+prices5*1*88.8+prices6*1*105.6+prices7*1*129.6
    var b = Math.floor(a);
    var c = (a - b).toFixed(7).toString().substring(2, 4);
    document.querySelector("#price8").innerHTML=b + "." + c
    document.querySelector("#price9").innerHTML=b + "." + c


    if (prices1>0) {
        document.querySelector("#inputs1").style="background:#019645;color:white"
        document.querySelector("#bill-item1").style="display:flex"
    }
    if(prices2>0){
        document.querySelector("#inputs2").style="background:#019645;color:white"
        document.querySelector("#bill-item2").style="display:flex"
    }
    
    if(prices3>0){
        document.querySelector("#inputs3").style="background:#019645;color:white"
        document.querySelector("#bill-item3").style="display:flex"
    }
    
    if(prices4>0){
        document.querySelector("#inputs4").style="background:#019645;color:white"
        document.querySelector("#bill-item4").style="display:flex"
    }
    
    if(prices5>0){
        document.querySelector("#inputs5").style="background:#019645;color:white"
        document.querySelector("#bill-item5").style="display:flex"
    }
    
    if(prices6>0){
        document.querySelector("#inputs6").style="background:#019645;color:white"
        document.querySelector("#bill-item6").style="display:flex"
    }
    
    if(prices7>0){
        document.querySelector("#inputs7").style="background:#019645;color:white"
        document.querySelector("#bill-item7").style="display:flex"
    }
}



function minus1(key) {
    if (key==0) {
        if (prices1>0) {
            prices1 = prices1 - 1
        var a = prices1*45.9
        var b = Math.floor(a);
        var c = (a - b).toFixed(7).toString().substring(2, 4);
        }
        
        var c = (a - b).toFixed(7).toString().substring(2, 4);
        document.querySelector("#for_counts1").innerHTML=prices1
        document.querySelector("#Adult1").value=prices1
        document.querySelector("#inputs1").innerHTML=prices1
        localStorage.setItem('Adult', prices1)
    }
    if (key==1) {
        if (prices2>0) {
            prices2 = prices2 - 1
        }

    document.querySelector("#price2").innerHTML="$" + prices2*27
    document.querySelector("#for_counts2").innerHTML=prices2
    document.querySelector("#Child1").value=prices2
    document.querySelector("#inputs2").innerHTML=prices2
    localStorage.setItem('Child', prices2)
}
    if (key==2) {
        if (prices3>0) {
            prices3 = prices3 - 1
            var a = prices3*35.1
            var b = Math.floor(a);
            var c = (a - b).toFixed(7).toString().substring(2, 4);
        }

    document.querySelector("#price3").innerHTML="$" + b + "." + c
    document.querySelector("#price3").innerHTML.slice(0,5)
    document.querySelector("#for_counts3").innerHTML=prices3
    document.querySelector("#Concession").value=prices3
    document.querySelector("#inputs3").innerHTML=prices3
    localStorage.setItem('Concession', prices3)
}
    if (key==3) {
        if (prices4>0) {
            prices4 = prices4 - 1
        }
    document.querySelector("#price4").innerHTML="$" + prices4*0
    document.querySelector("#for_counts4").innerHTML=prices4
    document.querySelector("#Infant").value=prices4
    document.querySelector("#inputs4").innerHTML=prices4
    localStorage.setItem('Infant', prices4)
}
    if (key==4) {
        if (prices5>0) {
            prices5 = prices5 - 1
            var a = prices5*88.8
        var b = Math.floor(a);
        var c = (a - b).toFixed(7).toString().substring(2, 4);
        }
        
    document.querySelector("#price5").innerHTML="$" + b + "." + c
    document.querySelector("#for_counts5").innerHTML=prices5
    document.querySelector("#input1").value=prices5
    document.querySelector("#inputs5").innerHTML=prices5
    localStorage.setItem('FamilyAdult', prices5)
}
    if (key==5) {
        if (prices6>0) {
            prices6 = prices6 - 1
            var a = prices6*105.6
        var b = Math.floor(a);
        var c = (a - b).toFixed(7).toString().substring(2, 4);
        }
        
    document.querySelector("#price6").innerHTML="$" + b + "." + c
    document.querySelector("#for_counts6").innerHTML=prices6
    document.querySelector("#input2").value=prices6
    document.querySelector("#inputs6").innerHTML=prices6
    localStorage.setItem('FamilyAdultChild', prices6)
}
    if (key==6) {
        if (prices7>0) {
            prices7 = prices7 - 1
            var a = prices7*129.6
        var b = Math.floor(a);
        var c = (a - b).toFixed(7).toString().substring(2, 4);
        }

        document.querySelector("#price7").innerHTML="$" + b + "." + c
    document.querySelector("#for_counts7").innerHTML=prices7
    document.querySelector("#input3").value=prices7
    document.querySelector("#inputs7").innerHTML=prices7
    localStorage.setItem('FamilyAdultChild2', prices7)
}

var a = prices1*1*45.9+prices2*1*27+prices3*1*35.1+prices4*1*0+prices5*1*88.8+prices6*1*105.6+prices7*1*129.6
var b = Math.floor(a);
var c = (a - b).toFixed(7).toString().substring(2, 4);
document.querySelector("#price8").innerHTML=b + "." + c
document.querySelector("#price9").innerHTML=b + "." + c 


    if (0>=prices1) {
        document.querySelector("#inputs1").style="background:#ececec;color:black"
        document.querySelector("#bill-item1").style="display:none"
    }
    if(0>=prices2){
        document.querySelector("#inputs2").style="background:#ececec;color:black"
        document.querySelector("#bill-item2").style="display:none"
    }
    
    if(0>=prices3){
        document.querySelector("#inputs3").style="background:#ececec;color:black"
        document.querySelector("#bill-item3").style="display:none"
    }
    
    if(0>=prices4){
        document.querySelector("#inputs4").style="background:#ececec;color:black"
        document.querySelector("#bill-item4").style="display:none"
    }
    
    if(0>=prices5){
        document.querySelector("#inputs5").style="background:#ececec;color:black"
        document.querySelector("#bill-item5").style="display:none"
    }
    
    if(0>=prices6){
        document.querySelector("#inputs6").style="background:#ececec;color:black"
        document.querySelector("#bill-item6").style="display:none"
    }
    
    if(0>=prices7){
        document.querySelector("#inputs7").style="background:#ececec;color:black"
        document.querySelector("#bill-item7").style="display:none"
    }
}


// .hidden-amount