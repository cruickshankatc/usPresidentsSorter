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
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "georgewashington.jpg",
}

presidents[1] = {
    number: 2,
    name: "John Adams",
    party: "Federalist",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "johnadams.jpg",
}

presidents[2] = {
    number: 3,
    name: "Thomas Jefferson",
    party: "Democratic-Republican",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "thomasjefferson.jpg",
}

presidents[3] = {
    number: 4,
    name: "James Madison",
    party: "Democratic-Republican",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "jamesmadison.jpg",
}

presidents[4] = {
    number: 5,
    name: "James Monroe",
    party: "Democratic-Republican",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "jamesmonroe.jpg",
}

presidents[5] = {
    number: 6,
    name: "John Quincy Adams",
    party: "Democratic-Republican",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "johnquincyadams.jpg",
}

presidents[6] = {
    number: 7,
    name: "Andrew Jackson",
    party: "Democrat",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "andrewjackson.jpg",
}

presidents[7] = {
    number: 8,
    name: "Martin Van Buren",
    party: "Democrat",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "martinvanburen.jpg"
}

presidents[8] = {
    number: 9,
    name: "William Henry Harrison",
    party: "Whig",
    terms: 1,
    diedInOffice: true,
    assassinated: false,
    previouslyVP: false,
    image: "williamhenryharrison.jpg"
}

presidents[9] = {
    number: 10,
    name: "John Tyler",
    party: "Independent",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "johntyler.jpg",
}

presidents[10] = {
    number: 11,
    name: "James K. Polk",
    party: "Democrat",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "jameskpolk.jpg",
}

presidents[11] = {
    number: 12,
    name: "Zachary Taylor",
    party: "Whig",
    terms: 1,
    diedInOffice: true,
    assassinated: false,
    previouslyVP: false,
    image: "zacharytaylor.jpg",
}

presidents[12] = {
    number: 13,
    name: "Millard Fillmore",
    party: "Whig",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "millardfillmore.jpg",
}

presidents[13] = {
    number: 14,
    name: "Franklin Pierce",
    party: "Democrat",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "franklinpierce.jpg",
}

presidents[14] = {
    number: 15,
    name: "James Buchanan",
    party: "Democrat",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "jamesbuchanan.jpg",
}

presidents[15] = {
    number: 16,
    name: "Abraham Lincoln",
    party: "Republican",
    terms: 2,
    diedInOffice: true,
    assassinated: true,
    previouslyVP: false,
    image: "abrahamlincoln.jpg",
}

presidents[16] = {
    number: 17,
    name: "Andrew Johnson",
    party: "Democrat",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "andrewjohnson.jpg",
}

presidents[17] = {
    number: 18,
    name: "Ulysses S. Grant",
    party: "Republican",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "ulyssessgrant.jpg",
}

presidents[18] = {
    number: 19,
    name: "Rutherford B. Hayes",
    party: "Republican",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "rutherfordbhayes.jpg",
}

presidents[19] = {
    number: 20,
    name: "James A. Garfield",
    party: "Republican",
    terms: 1,
    diedInOffice: true,
    assassinated: true,
    previouslyVP: false,
    image: "jamesagarfield.jpg",
}

presidents[20] = {
    number: 21,
    name: "Chester A. Arthur",
    party: "Republican",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "chesteraarthur.jpg",
}

presidents[21] = {
    number: 22,
    name: "Grover Cleveland",
    party: "Democrat",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "grovercleveland.jpg",
}

presidents[22] = {
    number: 23,
    name: "Benjamin Harrison",
    party: "Republican",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "benjaminharrison.jpg",
}

presidents[23] = {
    number: 24,
    name: "Grover Cleveland",
    party: "Democrat",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "grovercleveland.jpg",
}

presidents[24] = {
    number: 25,
    name: "William McKinley",
    party: "Republican",
    terms: 2,
    diedInOffice: true,
    assassinated: true,
    previouslyVP: false,
    image: "williammckinley.jpg",
}

presidents[25] = {
    number: 26,
    name: "Theodore Roosevelt",
    party: "Republican",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "theodoreroosevelt.jpg",
}

presidents[26] = {
    number: 27,
    name: "William Howard Taft",
    party: "Republican",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "williamhowardtaft.jpg",
}

presidents[27] = {
    number: 28,
    name: "Woodrow Wilson",
    party: "Democrat",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "woodrowwilson.jpg"
}

presidents[28] = {
    number: 29,
    name: "Warren G. Harding",
    party: "Republican",
    terms: 1,
    diedInOffice: true,
    assassinated: false,
    previouslyVP: false,
    image: "warrengharding.jpg"
}

presidents[29] = {
    number: 30,
    name: "Calvin Coolidge",
    party: "Republican",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "calvincoolidge.jpg"
}

presidents[30] = {
    number: 31,
    name: "Herbert Hoover",
    party: "Republican",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "herberthoover.jpg"
}

presidents[31] = {
    number: 32,
    name: "Franklin D. Roosevelt",
    party: "Democrat",
    terms: 4,
    diedInOffice: true,
    assassinated: false,
    previouslyVP: false,
    image: "franklindroosevelt.jpg",
}

presidents[32] = {
    number: 33,
    name: "Harry S. Truman",
    party: "Democrat",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "harrystruman.jpg",
}

presidents[33] = {
    number: 34,
    name: "Dwight D. Eisenhower",
    party: "Republican",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "dwightdeisenhower.jpg",
}

presidents[34] = {
    number: 35,
    name: "John F. Kennedy",
    party: "Democrat",
    terms: 1,
    diedInOffice: true,
    assassinated: true,
    previouslyVP: false,
    image: "johnfkennedy.jpg",
}

presidents[35] = {
    number: 36,
    name: "Lyndon B. Johnson",
    party: "Democrat",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "lyndonbjohnson.jpg",
}

presidents[36] = {
    number: 37,
    name: "Richard Nixon",
    party: "Republican",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "richardmnixon.jpg",
}

presidents[37] = {
    number: 38,
    name: "Gerald Ford",
    party: "Republican",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "geraldford.jpg",
}

presidents[38] = {
    number: 39,
    name: "Jimmy Carter",
    party: "Democrat",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "jimmycarter.jpg",
}

presidents[39] = {
    number: 40,
    name: "Ronald Reagan",
    party: "Republican",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "ronaldreagan.jpg",
}

presidents[40] = {
    number: 41,
    name: "George Bush",
    party: "Republican",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: true,
    image: "georgehwbush.jpg",
}

presidents[41] = {
    number: 42,
    name: "Bill Clinton",
    party: "Democrat",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "billclinton.jpg",
}

presidents[42] = {
    number: 43,
    name: "George W. Bush",
    party: "Republican",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "georgewbush.jpg",
}

presidents[43] = {
    number: 44,
    name: "Barack Obama",
    party: "Democrat",
    terms: 2,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "barackobama.jpg",
}

presidents[44] = {
    number: 45,
    name: "Donald Trump",
    party: "Republican",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "donaldtrump.jpg",
}

presidents[45] = {
    number: 46,
    name: "Joe Biden",
    party: "Democrat",
    terms: 1,
    diedInOffice: false,
    assassinated: false,
    previouslyVP: false,
    image: "joebiden.jpg",
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
  
  function testFunction() {
      let theCSS = document.documentElement;
      theCSS.style.setProperty("--main-color", "lightblue");
      theCSS.style.setProperty("--main-color-hover", "blue");
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