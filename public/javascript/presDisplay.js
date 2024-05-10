function presDisplay(argument) {
    let presSpace = document.getElementById("presidentsSpace");
    let presSpaceDivs = presSpace.querySelectorAll('.presCard');
    let presSpaceArray = Array.from(presSpaceDivs);
    let currentPres;

    presSpaceArray.forEach(arrayItem => {
        let presName = arrayItem.querySelector('.presName').innerHTML;

            

        if (presName === "24. Grover Cleveland") {
            currentPres = presidents[23];
        } else {
            currentPres = presidents.find(president => president.name === presName);
        }
        let currentDisplay;

        switch (argument) {
            case "party":
                currentDisplay = currentPres.party;
                break;
            case "vicePresident": 
                currentDisplay = currentPres.vicePresident;
                break;
            case "yearsInOffice":
                currentDisplay = currentPres.yearsInOffice;
                break;
            case "birthYear":
                currentDisplay = currentPres.birthYear;
                break;
        }

        arrayItem.querySelector('.presParty').innerHTML = currentDisplay;
        if (arrayItem.querySelector('.presParty').innerHTML === "Vacant") {
            arrayItem.querySelector('.presParty').style.fontStyle = "italic";
        } else {
            arrayItem.querySelector('.presParty').style.fontStyle = "normal";
        }
    })
    
    fontResize();
    display.close();
}