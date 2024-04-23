//Test
let body = document.body;
let presidentsSpace = document.getElementById("presidentsSpace");
let filters = document.getElementById("filters");
let display = document.getElementById("display");
let sort = document.getElementById("sort");







function createPresidentDivs1(presidentsArg) {
    presidentsSpace.innerHTML = "";
    /**
     * If Condition exist solely to deal with the fact that Grover Cleveland, the 22nd
     * president and presidents[21], also served as the 24th president. He's the only
     * United States president to serve two non-consecutive terms. 
     * 
     * Thus he appears twice in the default listing of presidents, but in most cases he
     * only appears once. For example, when filtering the presidents for only "Democrats"
     * Cleveland must only appear once.
     * 
     * In the object Cleveland appears twice but only for organizational purposes. In 
     * most filtered versions of the list, Cleveland only appears once (or as a single
     * div) and has the label "22. & 24. Grover Cleveland"
     */
    if (presidentsArg !== presidents) {
        presidentsArg.forEach(president => {
            if (president.number == 22) {
                let nonCon = president;
                nonCon.number = "22. & 24";
                createPresidentDivs2(nonCon);
            } else if (president.number == 24) {
                return;
            } else {
                createPresidentDivs2(president)
            }
        })
    } else {
        presidentsArg.forEach(president => {
            createPresidentDivs2(president);
        })        
    }
}

function createPresidentDivs2(president) {
    //Declarations
    let newDiv = document.createElement("div");
    let presNumName = document.createElement("p");
    let presParty = document.createElement("p");
    let presImg = document.createElement("img");

    //Assignments
    newDiv.className = "floatingHeads";
    presNumName.innerHTML = `${president.number}. ${president.name}`;
    presParty.innerHTML = president.party;
    presImg.src = `images/${president.image}`;

    //Combining
    newDiv.appendChild(presImg);
    newDiv.appendChild(presNumName);
    newDiv.appendChild(presParty);
    presidentsSpace.appendChild(newDiv);  
    
    fontResize()
}


function filterPresidents() {
    let partyValues = getCheckedValues("party");
    let termsValues = getCheckedValues("terms");
    let diedInOfficeValues = getCheckedValues("diedInOffice");
    let assassinatedValues = getCheckedValues("assassinated");
  
    let filteredPresidents = presidents.filter(pres =>
      (partyValues.length === 0 || partyValues.includes(pres.party)) &&
      (termsValues.length === 0 || termsValues.includes(pres.terms.toString())) &&
      (diedInOfficeValues.length === 0 || diedInOfficeValues.includes(pres.diedInOffice.toString())) &&
      (assassinatedValues.length === 0 || assassinatedValues.includes(pres.assassinated.toString()))
    );
  
    createPresidentDivs1(filteredPresidents);
    filters.close();
    fontResize()
  }
  
  function getCheckedValues(name) {
    let checkboxes = document.getElementsByName(name);
    let values = [];
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        values.push(checkbox.value);
      }
    });
    return values;
  }

  
  createPresidentDivs1(presidents);
  
  function themeChange(themeStyle) {
      let theCSS = document.documentElement; 
      let mainColor;
      let mainColorHover;
      let backdropColor;
      let textColor;

      switch (themeStyle) {
        case "light":
          mainColor = "#ffffff";        // White
          mainColorHover = "#f0f0f0";   // Light Gray
          backdropColor = "#ffffff";    // White
          textColor = "#000000";        // Black
          break;
    
        case "dark":
          mainColor = "#282c35";        // Dark Gray-Blue
          mainColorHover = "#3e4452";   // Slightly Lighter Gray-Blue
          backdropColor = "#1e222b";    // Darker Gray-Blue
          textColor = "#ffffff";        // White
          break;
    
        case "patriotic":
          mainColor = "#c62828";        // Darker Red
          mainColorHover = "#d32f2f";   // Slightly Lighter Red
          backdropColor = "#1976D2";    // Dark Blue
          textColor = "#ffffff";        // White
          break;
    
        case "gray":
          mainColor = "#757575";        // Dark Gray
          mainColorHover = "#9e9e9e";   // Lighter Gray
          backdropColor = "#eeeeee";    // Even Lighter Gray
          textColor = "#000000";        // Black
          break;
      }

      theCSS.style.setProperty("--main-color", mainColor);
      theCSS.style.setProperty("--main-color-hover", mainColorHover);
      theCSS.style.setProperty("--backdrop-color", backdropColor);
      theCSS.style.setProperty("--text-color", textColor);

      menu.close();
      fontResize()
    }

    function presSort(sortationMethod) {
        let presSpace = document.getElementById("presidentsSpace");
        let presSpaceDivs = presSpace.querySelectorAll('.floatingHeads');
        let presSpaceArray = Array.from(presSpaceDivs);

        switch (sortationMethod) {
            case "byName":
                presSpaceArray.sort((a, b) => {
                    const lastNameA = a.querySelector('p:nth-child(2)').textContent.split(" ").pop();
                    const lastNameB = b.querySelector('p:nth-child(2)').textContent.split(" ").pop();
                    console.log(typeof(lastNameA));
                    return lastNameA.localeCompare(lastNameB);
                });
                break;
            case "byParty":
                presSpaceArray.sort((a, b) => {
                    let item0 = a.querySelector('p:nth-child(2)').textContent;
                    let item1 = b.querySelector('p:nth-child(2)').textContent;
                    
                    let itemA = presidents.find(president => president.name === item0.split('.').slice(1).join('.').trim());
                    let itemB = presidents.find(president => president.name === item1.split('.').slice(1).join('.').trim());
            
                    if (item0.includes("Cleveland") && item0.includes("&")) {
                        itemA = presidents[21];
                    }
            
                    if (item1.includes("Cleveland") && item1.includes("&")) {
                        itemB = presidents[21];
                    }

                    let itemC = itemA.party;
                    let itemD = itemB.party;
            
                    return itemC.localeCompare(itemD);

                });
                break;
            case "byDaysInOffice":
                presSpaceArray.sort((a, b) => {
                    let item0 = a.querySelector('p:nth-child(2)').textContent;
                    let item1 = b.querySelector('p:nth-child(2)').textContent;
                    
                    let itemA = presidents.find(president => president.name === item0.split('.').slice(1).join('.').trim());
                    let itemB = presidents.find(president => president.name === item1.split('.').slice(1).join('.').trim());
            
                    if (item0.includes("Cleveland") && item0.includes("&")) {
                        itemA = presidents[21];
                    }
            
                    if (item1.includes("Cleveland") && item1.includes("&")) {
                        itemB = presidents[21];
                    }
            
                    let itemC = itemA.daysInOffice;
                    let itemD = itemB.daysInOffice;
            
                    return itemC - itemD;
                });
                break;
            case "byBirthYear":
                presSpaceArray.sort((a, b) => {
                    let item0 = a.querySelector('p:nth-child(2)').textContent;
                    let item1 = b.querySelector('p:nth-child(2)').textContent;
                    
                    let itemA = presidents.find(president => president.name === item0.split('.').slice(1).join('.').trim());
                    let itemB = presidents.find(president => president.name === item1.split('.').slice(1).join('.').trim());
            
                    if (item0.includes("Cleveland") && item0.includes("&")) {
                        itemA = presidents[21];
                    }
            
                    if (item1.includes("Cleveland") && item1.includes("&")) {
                        itemB = presidents[21];
                    }
            
                    let itemC = itemA.birthYear;
                    let itemD = itemB.birthYear;
            
                    return itemC - itemD;
                });
                break;
        }
    
        
        // Now, append the sorted array back to the container
        presSpaceArray.forEach(div => presSpace.appendChild(div));

        sort.close();
        fontResize()
    }


    function presDisplay(argument) {
        let presSpace = document.getElementById("presidentsSpace");
        let presSpaceDivs = presSpace.querySelectorAll('.floatingHeads');
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

    function fontResize() {
        let presSpace = document.getElementById("presidentsSpace");
        let presSpaceText = presSpace.querySelectorAll("p");
      
        presSpaceText.forEach(text => {
          const maxWidth = 150;
          const baseFontSize = 14;
          const currentWidth = text.offsetWidth;
      
          if (currentWidth > maxWidth) {
            const ratio = maxWidth / currentWidth;
            const newSize = baseFontSize * ratio;
      
            text.style.fontSize = `${newSize}px`;
          }
        });
      }



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

