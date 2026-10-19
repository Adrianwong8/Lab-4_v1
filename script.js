let hungerlevel = "";

function choosefood(level) {

hungerlevel = level;

let result = document.getElementById("result");
let description = document.getElementById("description");

if (hungerlevel === "little") {
    result.innerHTML = "You should have a light snack.";
    description.innerHTML = "A small snack will help you feel satisfied without being too heavy.";
} else if (hungerlevel === "hungry") {
    result.innerHTML = "You should have a meal.";
    description.innerHTML = "A full meal will provide you with the energy and nutrients you need.";
} else if (hungerlevel === "very hungry") {
    result.innerHTML = "You should have a hearty meal.";
    description.innerHTML = "A hearty meal will help you feel full and satisfied.";
} else {
    result.innerHTML = "Please select your hunger level.";
    description.innerHTML = "";
}
}