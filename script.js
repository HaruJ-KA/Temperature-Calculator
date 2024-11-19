//VARIABLES

let fNum = document.getElementById("fInp");
let button = document.getElementById("btn");
let Output = document.getElementById("output");
let image = document.getElementById("img");
let temperatureEl = document.getElementById("temperature");
let temperature2 = document.getElementById("changedTemp");
let html = document.getElementById("html");
let body = document.getElementById("body");
let link = document.getElementById("link");

var Unit = document.getElementById("TempType");

//EVENT LISTENER
button.addEventListener("click", convert);
Unit.addEventListener("change", changeUnit);

//EVENT FUNCTION
function changeUnit() {
  var UnitVal = document.getElementById("TempType").value;
  if (UnitVal == "CtoF") {
    image.src = "Images/celsius_to_fahrenheit_d18.png";
    temperatureEl.innerHTML = "Celsius";
    temperature2.innerHTML = "Fahrenheit";
    Output.innerHTML = "----";
    link.href =
      "https://thirdspacelearning.com/gcse-maths/geometry-and-measure/area-of-a-trapezium/";

    html.style.background = "#800000";
    button.style.background = "#d92626";
    image.style.border = "#e05f5f solid 4px";
    link.style.color = "#d92626";
  } else {
    image.src = "Images/F-to-C.png";
    temperatureEl.innerHTML = "Fahrenheit";
    temperature2.innerHTML = "Celsius";
    Output.innerHTML = "----";
    link.href =
      "https://thirdspacelearning.com/gcse-maths/geometry-and-measure/area-of-a-trapezium/";

    html.style.background = "green";
    button.style.background = "#26d978";
    image.style.border = "#6ae05f solid 4px";
    link.style.color = "#26d978";
  }
}
function convert() {
  var UnitVal = document.getElementById("TempType").value;

  if (UnitVal == "FtoC") {
    //INPUT
    let num1 = +fNum.value;

    //PROCESS
    let celcius = (num1 - 32) * (5 / 9);
    let temperature = Math.round(celcius);

    //OUTPUT
    Output.innerHTML =
      temperature + `<img width="100px"  src="Images/thermometer.png">`;

    fNum.value = " ";
    link.href = "https://www.google.com/";
  } else {
    let num1 = +fNum.value;

    let fahrenheit = num1 * 1.8 + 32;
    let temperature2 = Math.round(fahrenheit);

    Output.innerHTML =
      temperature2 + `<img width="100px"  src="Images/thermometer.png">`;

    fNum.value = " ";
    link.href = "https://www.google.com/";
  }
}
