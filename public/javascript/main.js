//Test
let body = document.body;
let presidentsSpace = document.getElementById("presidentsSpace");
let filters = document.getElementById("filters");
let display = document.getElementById("display");
let sort = document.getElementById("sort");

createPresidentDivs1(presidents);
  
function openFilter() {
    filters.showModal();
}

function closeFilter() {
    filters.close();
}

function openMenu() {
    menu.showModal();
}

function openDisplay() {
    display.showModal();
}

function openSort() {
    sort.showModal();
}