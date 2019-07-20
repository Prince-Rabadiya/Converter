

function calculateWeight() {
    var s = document.getElementById("weights");
    var sw = s.options[s.selectedIndex].text;
    var d = document.getElementById("weightd");
    var dw = d.options[d.selectedIndex].text;
    var val = document.getElementsByName("weightConverter")[0].value;

    if (sw == dw) {
        alert("Ans : " + val);
    }
    else if (sw == "pound" && dw == "kg") {
        alert("Ans : " + val / 2.205);
    }
    else if  (dw == "pound" && sw == "kg") {
        alert("Ans : " + val * 2.205);
    }
    else if (sw == "pound" && dw == "gm") {
        alert("Ans : " + val * 453.592);
    }
    else if  (dw == "pound" && sw == "gm") {
        alert("Ans : " + val / 453.592);
    }
    else if (sw == "pound" && dw == "ounce") {
        alert("Ans : " + val * 16);
    }
    else if  (dw == "pound" && sw == "ounce") {
        alert("Ans : " + val / 16);
    }
    else if (sw == "kg" && dw == "gm") {
        alert("Ans : " + val * 1000);
    }
    else if  (dw == "kg" && sw == "gm") {
        alert("Ans : " + val / 1000);
    }
    else if (sw == "kg" && dw == "ounce") {
        alert("Ans : " + val * 35.274);
    }
    else if  (dw == "kg" && sw == "ounce") {
        alert("Ans : " + val / 35.274);
    }
    else if (sw == "gm" && dw == "ounce") {
        alert("Ans : " + val / 28.35);
    }
    else if  (dw == "gm" && sw == "ounce") {
        alert("Ans : " + val * 28.35);
    }
}


function calculatedistance() {

    var s = document.getElementById("distances");
    var sd = s.options[s.selectedIndex].text;
    var d = document.getElementById("distanced");
    var dd = d.options[d.selectedIndex].text;
    var val = document.getElementsByName("distanceConverter")[0].value;

    if (sd == dd) {
        alert("Ans : " + val);
    }
    else if (sd == "foot" && dd == "m") {
        alert("Ans : " + val / 3.281);
    }
    else if (dd == "foot" && sd == "m") {
        alert("Ans : " + val * 3.281);
    }
    else if (sd == "foot" && dd == "cm") {
        alert("Ans : " + val * 30.48);
    }
    else if (dd == "foot" && sd == "cm") {
        alert("Ans : " + val / 30.48);
    }
    else if (sd == "foot" && dd == "inch") {
        alert("Ans : " + val * 12);
    }
    else if (dd == "foot" && sd == "inch") {
        alert("Ans : " + val / 12);
    }
    else if (sd == "foot" && dd == "mm") {
        alert("Ans : " + val * 304.8);
    }
    else if (dd == "foot" && sd == "mm") {
        alert("Ans : " + val / 304.8);
    }
    else if (sd == "foot" && dd == "miles") {
        alert("Ans : " + val / 5280 );
    }
    else if (dd == "foot" && sd == "miles") {
        alert("Ans : " + val * 5280);
    }
    else if (sd == "foot" && dd == "km") {
        alert("Ans : " + val / 3280.84);
    }
    else if (dd == "foot" && sd == "km") {
        alert("Ans : " + val * 3280.84);
    }

    else if (sd == "m" && dd == "cm") {
        alert("Ans : " + val * 100);
    }
    else if (dd == "m" && sd == "cm") {
        alert("Ans : " + val / 100);
    }
    else if (sd == "m" && dd == "inch") {
        alert("Ans : " + val * 39.37);
    }
    else if (dd == "m" && sd == "inch") {
        alert("Ans : " + val / 39.37);
    }
    else if (sd == "m" && dd == "mm") {
        alert("Ans : " + val * 1000);
    }
    else if (dd == "m" && sd == "mm") {
        alert("Ans : " + val / 1000);
    }
    else if (sd == "m" && dd == "miles") {
        alert("Ans : " + val / 1609.344);
    }
    else if (dd == "m" && sd == "miles") {
        alert("Ans : " + val * 1609.344);
    }
    else if (sd == "m" && dd == "km") {
        alert("Ans : " + val / 1000);
    }
    else if (dd == "m" && sd == "km") {
        alert("Ans : " + val * 1000);
    }



    else if (sd == "cm" && dd == "inch") {
        alert("Ans : " + val / 2.54);
    }
    else if (dd == "cm" && dd == "inch") {
        alert("Ans : " + val * 2.54);
    }
    else if (sd == "cm" && dd == "mm") {
        alert("Ans : " + val * 10);
    }
    else if (dd == "cm" && sd == "mm") {
        alert("Ans : " + val / 10);
    }
    else if (sd == "cm" && dd == "miles") {
        alert("Ans : " + val / 160934.4);
    }
    else if (dd == "cm" && sd == "miles") {
        alert("Ans : " + val * 160934.4);
    }
    else if (sd == "cm" && dd == "km") {
        alert("Ans : " + val / 100000);
    }
    else if (dd == "cm" && sd == "km") {
        alert("Ans : " + val * 100000);
    }
    


    else if (sd == "inch" && dd == "mm") {
        alert("Ans : " + val * 25.4);
    }
    else if (dd == "inch" && sd == "mm") {
        alert("Ans : " + val / 25.4);
    }
    else if (sd == "inch" && dd == "miles") {
        alert("Ans : " + val / 63360);
    }
    else if (dd == "inch" && sd == "miles") {
        alert("Ans : " + val * 63360);
    }
    else if (sd == "inch" && dd == "km") {
        alert("Ans : " + val / 39370.079);
    }
    else if (dd == "inch" && sd == "km") {
        alert("Ans : " + val * 39370.079);
    }




    else if (sd == "mm" && dd == "miles") {
        alert("Ans : " + val / 1609000);
    }
    else if (dd == "mm" && sd == "miles") {
        alert("Ans : " + val * 1609000);
    }
    else if (sd == "mm" && dd == "km") {
        alert("Ans : " + val / 1000000);
    }
    else if (dd == "mm" && sd == "km") {
        alert("Ans : " + val * 1000000);
    }


    else if (sd == "miles" && dd == "km") {
        alert("Ans : " + val * 1.609);
    }
    else if (dd == "miles" && sd == "km") {
        alert("Ans : " + val / 1.609);
    }
}