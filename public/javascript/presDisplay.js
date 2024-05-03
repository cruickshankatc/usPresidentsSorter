function presDisplay(argument) {
    let presSpace = document.getElementById("presidentsSpace");
    let presSpaceDivs = presSpace.querySelectorAll('.presCard');
    let presSpaceArray = Array.from(presSpaceDivs);
    let currentPres;



    presSpaceArray.forEach(arrayItem => {
        let presName = arrayItem.querySelector('p:nth-child(2)').innerHTML;

        if (presName.includes("Cleveland" && "&")) {
            presName = presName.split('.').slice(2).join('.').trim(); 
        } else if (presName === "24. Grover Cleveland") {
            presName = "24. Grover Cleveland";
        } else {
            presName = presName.split('.').slice(1).join('.').trim();   
            console.log(presName);  
        }      

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

        arrayItem.querySelector('p:nth-child(3)').innerHTML = currentDisplay;
        if (arrayItem.querySelector('p:nth-child(3)').innerHTML === "Vacant") {
            arrayItem.querySelector('p:nth-child(3)').style.fontStyle = "italic";
        } else {
            arrayItem.querySelector('p:nth-child(3)').style.fontStyle = "normal";
        }
    })
    
    fontResize();
    display.close();
}