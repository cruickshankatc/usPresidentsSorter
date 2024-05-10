//Test
let body = document.body;
let presidentsSpace = document.getElementById("presidentsSpace");
let filters = document.getElementById("filters");
let display = document.getElementById("display");
let sort = document.getElementById("sort");
let loader = document.getElementById("preloader");


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

function closeMenu() {
    menu.close();
}

function openDisplay() {
    display.showModal();
}

function closeDisplay() {
    display.close();
}

function openSort() {
    sort.showModal();
}

function closeSort() {
    sort.close();
}

fontResize();