let body = document.body;
let presidentsSpace = document.getElementById("presidentsSpace");

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

presidents.forEach(president => {
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
})

// for (x = 0; x <= 21; x++) {
//     let newDiv = document.createElement("div");
//     newDiv.innerHTML = presidents[x].name;
//     presidentsSpace.appendChild(newDiv);    
// }





function filterPresidents() {
    let partyValue = document.getElementById("party").value;
    let termsValue = document.getElementById("terms").value;
    
    let filteredPresidents = presidents.filter (pres =>      (partyValue === "" || pres.party === partyValue) 
    && 
    (termsValue === "" || pres.terms.toString() == termsValue)
    );

    theResults(filteredPresidents);
}

function theResults (filteredPresidents) {
    presidentsSpace.innerHTML = "";
    
    filteredPresidents.forEach(president => 
        {
            let newDiv = document.createElement("div");
            let newImg = document.createElement("img");
            
            newDiv.innerHTML = president.name;
            newImg.src = `images/${president.image}`;

            console.log(newDiv.innerHTML);
            presidentsSpace.appendChild(newImg);
        }
    );

}