const contentLoadedEvent = new Event('contentLoaded');
const preloader = document.getElementById("preloader");

function createPresidentDivs1(presidentsArg) {
    presidentsSpace.innerHTML = "";
        presidentsArg.forEach(president => {
            createPresidentDivs2(president);
        })        

    window.dispatchEvent(contentLoadedEvent);
}

function hidePreloader() {
    preloader.style.display = "none";
}

window.addEventListener('contentLoaded', hidePreloader);