let body = document.body;
let presidentsSpace = document.getElementById("presidentsSpace");
let filters = document.getElementById("filters");
let display = document.getElementById("display");
let sort = document.getElementById("sort");

let presidents = [];


presidents[0] = {
    number: 1,
    name: "George Washington",
    party: "Independent",
    terms: 2,
    daysInOffice: 2865,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "georgewashington.jpg",
    vicePresident: "John Adams",
    yearsInOffice: "1789-1797",
    birthYear: "1732"
}

presidents[1] = {
    number: 2,
    name: "John Adams",
    party: "Federalist",
    terms: 1,
    daysInOffice: 1460,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "johnadams.jpg",
    vicePresident: "Thomas Jefferson",
    yearsInOffice: "1797-1801",
    birthYear: "1735"
}

presidents[2] = {
    number: 3,
    name: "Thomas Jefferson",
    party: "Democratic-Republican",
    terms: 2,
    daysInOffice: 2922,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "thomasjefferson.jpg",
    vicePresident: "Aaron Burr",
    yearsInOffice: "1801-1809",
    birthYear: "1743"
}

presidents[3] = {
    number: 4,
    name: "James Madison",
    party: "Democratic-Republican",
    terms: 2,
    daysInOffice: 2922,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "jamesmadison.jpg",
    vicePresident: "George Clinton",
    yearsInOffice: "1809-1817",
    birthYear: "1751"
}

presidents[4] = {
    number: 5,
    name: "James Monroe",
    party: "Democratic-Republican",
    terms: 2,
    daysInOffice: 2922,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "jamesmonroe.jpg",
    vicePresident: "Daniel D. Tompkins",
    yearsInOffice: "1817-1825",
    birthYear: "1758"
}

presidents[5] = {
    number: 6,
    name: "John Quincy Adams",
    party: "Democratic-Republican",
    terms: 1,
    daysInOffice: 1461,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "johnquincyadams.jpg",
    vicePresident: "John C. Calhoun",
    yearsInOffice: "1825-1829",
    birthYear: "1767"
}

presidents[6] = {
    number: 7,
    name: "Andrew Jackson",
    party: "Democrat",
    terms: 2,
    daysInOffice: 2922,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "andrewjackson.jpg",
    vicePresident: "John C. Calhoun",
    yearsInOffice: "1829-1837",
    birthYear: "1767"
}

presidents[7] = {
    number: 8,
    name: "Martin Van Buren",
    party: "Democrat",
    terms: 1,
    daysInOffice: 1461,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "martinvanburen.jpg",
    vicePresident: "Richard Mentor Johnson",
    yearsInOffice: "1837-1841",
    birthYear: "1782"
}

presidents[8] = {
    number: 9,
    name: "William Henry Harrison",
    party: "Whig",
    terms: 1,
    daysInOffice: 31,
    diedInOffice: true,
    assassinated: false,
    previouslyVP: false,
    image: "williamhenryharrison.jpg",
    vicePresident: "John Tyler",
    yearsInOffice: "1841",
    birthYear: "1773"
}

presidents[9] = {
    number: 10,
    name: "John Tyler",
    party: "Independent",
    terms: 1,
    daysInOffice: 1430,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "johntyler.jpg",
    vicePresident: "Vacant",
    yearsInOffice: "1841-1845",
    birthYear: "1790"
}

presidents[10] = {
    number: 11,
    name: "James K. Polk",
    party: "Democrat",
    terms: 1,
    daysInOffice: 1461,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "jameskpolk.jpg",
    vicePresident: "George M. Dallas",
    yearsInOffice: "1845-1849",
    birthYear: "1795"
}

presidents[11] = {
    number: 12,
    name: "Zachary Taylor",
    party: "Whig",
    terms: 1,
    daysInOffice: 492,
    diedInOffice: true,
    assassinated: false,
    previouslyVP: false,
    image: "zacharytaylor.jpg",
    vicePresident: "Millard Fillmore",
    yearsInOffice: "1849-1850",
    birthYear: "1784"
}

presidents[12] = {
    number: 13,
    name: "Millard Fillmore",
    party: "Whig",
    terms: 1,
    daysInOffice: 969,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "millardfillmore.jpg",
    vicePresident: "Vacant",
    yearsInOffice: "1850-1853",
    birthYear: "1800"
}

presidents[13] = {
    number: 14,
    name: "Franklin Pierce",
    party: "Democrat",
    terms: 1,
    daysInOffice: 1461,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "franklinpierce.jpg",
    vicePresident: "William Rufus King",
    yearsInOffice: "1853-1857",
    birthYear: "1804"
}

presidents[14] = {
    number: 15,
    name: "James Buchanan",
    party: "Democrat",
    terms: 1,
    daysInOffice: 1461,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "jamesbuchanan.jpg",
    vicePresident: "John C. Breckinridge",
    yearsInOffice: "1857-1861",
    birthYear: "1791"
}

presidents[15] = {
    number: 16,
    name: "Abraham Lincoln",
    party: "Republican",
    terms: 2,
    daysInOffice: 1503,
    diedInOffice: true,
    assassinated: true,
    previouslyVP: false,
    image: "abrahamlincoln.jpg",
    vicePresident: "Hannibal Hamlin",
    yearsInOffice: "1861-1865",
    birthYear: "1809"
}

presidents[16] = {
    number: 17,
    name: "Andrew Johnson",
    party: "Democrat",
    terms: 1,
    daysInOffice: 1419,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "andrewjohnson.jpg",
    vicePresident: "Vacant",
    yearsInOffice: "1865-1869",
    birthYear: "1808"
}

presidents[17] = {
    number: 18,
    name: "Ulysses S. Grant",
    party: "Republican",
    terms: 2,
    daysInOffice: 2922,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "ulyssessgrant.jpg",
    vicePresident: "Schuyler Colfax",
    yearsInOffice: "1869-1877",
    birthYear: "1822"
}

presidents[18] = {
    number: 19,
    name: "Rutherford B. Hayes",
    party: "Republican",
    terms: 1,
    daysInOffice: 1461,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "rutherfordbhayes.jpg",
    vicePresident: "William A. Wheeler",
    yearsInOffice: "1877-1881",
    birthYear: "1822"
}

presidents[19] = {
    number: 20,
    name: "James A. Garfield",
    party: "Republican",
    terms: 1,
    daysInOffice: 199,
    diedInOffice: true,
    assassinated: true,
    previouslyVP: false,
    image: "jamesagarfield.jpg",
    vicePresident: "Chester A. Arthur",
    yearsInOffice: "1881",
    birthYear: "1831"
}

presidents[20] = {
    number: 21,
    name: "Chester A. Arthur",
    party: "Republican",
    terms: 1,
    daysInOffice: 1262,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "chesteraarthur.jpg",
    vicePresident: "Vacant",
    yearsInOffice: "1881-1885",
    birthYear: "1829"
}

presidents[21] = {
    number: 22,
    name: "Grover Cleveland",
    party: "Democrat",
    terms: 2,
    daysInOffice: 2922,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "grovercleveland.jpg",
    vicePresident: "Thomas A. Hendricks",
    yearsInOffice: "1885-1889",
    birthYear: "1837"
}

presidents[22] = {
    number: 23,
    name: "Benjamin Harrison",
    party: "Republican",
    terms: 1,
    daysInOffice: 1461,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "benjaminharrison.jpg",
    vicePresident: "Levi P. Morton",
    yearsInOffice: "1889-1893",
    birthYear: "1833"
}

presidents[23] = {
    number: 24,
    name: "Grover Cleveland",
    party: "Democrat",
    terms: 2,
    daysInOffice: 2922,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "grovercleveland.jpg",
    vicePresident: "Adlai Stevenson I",
    yearsInOffice: "1897-1901",
    birthYear: "1837"
}

presidents[24] = {
    number: 25,
    name: "William McKinley",
    party: "Republican",
    terms: 2,
    daysInOffice: 1654,
    diedInOffice: true,
    assassinated: true,
    previouslyVP: false,
    image: "williammckinley.jpg",
    vicePresident: "Garret Hobart",
    yearsInOffice: "1897-1901",
    birthYear: "1843"
}

presidents[25] = {
    number: 26,
    name: "Theodore Roosevelt",
    party: "Republican",
    terms: 2,
    daysInOffice: 2728,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "theodoreroosevelt.jpg",
    vicePresident: "Charles W. Fairbanks",
    yearsInOffice: "1901-1909",
    birthYear: "1858"
}

presidents[26] = {
    number: 27,
    name: "William Howard Taft",
    party: "Republican",
    terms: 1,
    daysInOffice: 1461,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "williamhowardtaft.jpg",
    vicePresident: "James S. Sherman",
    yearsInOffice: "1909-1913",
    birthYear: "1857"
}

presidents[27] = {
    number: 28,
    name: "Woodrow Wilson",
    party: "Democrat",
    terms: 2,
    daysInOffice: 2922,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "woodrowwilson.jpg",
    vicePresident: "Thomas R. Marshall",
    yearsInOffice: "1913-1921",
    birthYear: "1856"
}

presidents[28] = {
    number: 29,
    name: "Warren G. Harding",
    party: "Republican",
    terms: 1,
    daysInOffice: 881,
    diedInOffice: true,
    assassinated: false,
    previouslyVP: false,
    image: "warrengharding.jpg",
    vicePresident: "Calvin Coolidge",
    yearsInOffice: "1921-1923",
    birthYear: "1865"
}

presidents[29] = {
    number: 30,
    name: "Calvin Coolidge",
    party: "Republican",
    terms: 2,
    daysInOffice: 2041,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "calvincoolidge.jpg",
    vicePresident: "Charles G. Dawes",
    yearsInOffice: "1923-1925, 1925-1929",
    birthYear: "1872"
}

presidents[30] = {
    number: 31,
    name: "Herbert Hoover",
    party: "Republican",
    terms: 1,
    daysInOffice: 1461,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "herberthoover.jpg",
    vicePresident: "Charles Curtis",
    yearsInOffice: "1929-1933",
    birthYear: "1874"
}

presidents[31] = {
    number: 32,
    name: "Franklin D. Roosevelt",
    party: "Democrat",
    terms: 4,
    daysInOffice: 4422,
    diedInOffice: true,
    assassinated: false,
    previouslyVP: false,
    image: "franklindroosevelt.jpg",
    vicePresident: "John Nance Garner",
    yearsInOffice: "1933-1945",
    birthYear: "1882"
}

presidents[32] = {
    number: 33,
    name: "Harry S. Truman",
    party: "Democrat",
    terms: 2,
    daysInOffice: 2840,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "harrystruman.jpg",
    vicePresident: "Albern W. Barkley",
    yearsInOffice: "1945-1953",
    birthYear: "1884"
}

presidents[33] = {
    number: 34,
    name: "Dwight D. Eisenhower",
    party: "Republican",
    terms: 2,
    daysInOffice: 2922,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "dwightdeisenhower.jpg",
    vicePresident: "Richard Nixon",
    yearsInOffice: "1953-1961",
    birthYear: "1890"
}

presidents[34] = {
    number: 35,
    name: "John F. Kennedy",
    party: "Democrat",
    terms: 1,
    daysInOffice: 1036,
    diedInOffice: true,
    assassinated: true,
    previouslyVP: false,
    image: "johnfkennedy.jpg",
    vicePresident: "Lyndon B. Johnson",
    yearsInOffice: "1961-1963",
    birthYear: "1917"
}

presidents[35] = {
    number: 36,
    name: "Lyndon B. Johnson",
    party: "Democrat",
    terms: 2,
    daysInOffice: 1886,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "lyndonbjohnson.jpg",
    vicePresident: "Hubert Humphrey",
    yearsInOffice: "1963-1969",
    birthYear: "1908"
}

presidents[36] = {
    number: 37,
    name: "Richard Nixon",
    party: "Republican",
    terms: 2,
    daysInOffice: 2027,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "richardmnixon.jpg",
    vicePresident: "Spiro Agnew",
    yearsInOffice: "1969-1974",
    birthYear: "1913"
}

presidents[37] = {
    number: 38,
    name: "Gerald Ford",
    party: "Republican",
    terms: 1,
    daysInOffice: 895,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "geraldford.jpg",
    vicePresident: "Nelson Rockefeller",
    yearsInOffice: "1974-1977",
    birthYear: "1913"
}

presidents[38] = {
    number: 39,
    name: "Jimmy Carter",
    party: "Democrat",
    terms: 1,
    daysInOffice: 1461,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "jimmycarter.jpg",
    vicePresident: "Walter Mondale",
    yearsInOffice: "1977-1981",
    birthYear: "1924"
}

presidents[39] = {
    number: 40,
    name: "Ronald Reagan",
    party: "Republican",
    terms: 2,
    daysInOffice: 2922,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "ronaldreagan.jpg",
    vicePresident: "George Bush",
    yearsInOffice: "1981-1989",
    birthYear: "1911"
}

presidents[40] = {
    number: 41,
    name: "George Bush",
    party: "Republican",
    terms: 1,
    daysInOffice: 1461,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "georgehwbush.jpg",
    vicePresident: "Dan Quayle",
    yearsInOffice: "1989-1993",
    birthYear: "1924"
}

presidents[41] = {
    number: 42,
    name: "Bill Clinton",
    party: "Democrat",
    terms: 2,
    daysInOffice: 2922,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "billclinton.jpg",
    vicePresident: "Al Gore",
    yearsInOffice: "1993-2001",
    birthYear: "1946"
}

presidents[42] = {
    number: 43,
    name: "George W. Bush",
    party: "Republican",
    terms: 2,
    daysInOffice: 2922,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "georgewbush.jpg",
    vicePresident: "Dick Cheney",
    yearsInOffice: "2001-2009",
    birthYear: "1946"
}

presidents[43] = {
    number: 44,
    name: "Barack Obama",
    party: "Democrat",
    terms: 2,
    daysInOffice: 2922,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "barackobama.jpg",
    vicePresident: "Joe Biden",
    yearsInOffice: "2009-2017",
    birthYear: "1961"
}

presidents[44] = {
    number: 45,
    name: "Donald Trump",
    party: "Republican",
    terms: 1,
    daysInOffice: 1461,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "donaldtrump.jpg",
    vicePresident: "Mike Pence",
    yearsInOffice: "2017-2021",
    birthYear: "1946"
}

presidents[45] = {
    number: 46,
    name: "Joe Biden",
    party: "Democrat",
    terms: 1,
    daysInOffice: 1069,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "joebiden.jpg",
    vicePresident: "Kamala Harris",
    yearsInOffice: "2021-present",
    birthYear: "1942"
}


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

