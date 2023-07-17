class President {
  constructor(name, number, party, terms, diedInOffice, daysInOffice) {
    this.name = name;
    this.number = number;
    this.party = party;
    this.terms = terms;
    this.diedInOffice = diedInOffice;
    this.daysInOffice = daysInOffice;
  }

  image() {
    let fullName = "";
    let fullName2;
    for (x = 0; x < this.name.split(" ").length; x++) {
      fullName += this.name.split(" ")[x];
    }

    fullName2 = fullName.replaceAll('.','')
    return fullName2.toLowerCase() + ".jpg";
  }
}

let presidents = [
  new President("George Washington", 1, "Independent", 2, false, 2865),
  new President("John Adams", 2, "Federalist", 1, false, 1460),
  new President("Thomas Jefferson", 3, "Democratic-Republican", 2, false, 2922),
  new President("James Madison", 4, "Democratic-Republican", 2, false, 2922),
  new President("James Monroe", 5, "Democratic-Republican", 2, false, 2922),
  new President("John Quincy Adams", 6, "Democratic-Republican", 1, false, 1461),
  new President("Andrew Jackson", 7, "Democrat", 2, false, 2922),
  new President("Martin Van Buren", 8, "Democrat", 1, false, 1461),
  new President("William Henry Harrison", 9, "Whig", 1, true, 31),
  new President("John Tyler", 10, "Independent", 1, false, 1430),
  new President("James K. Polk", 11, "Democrat", 1, false, 1461),
  new President("Zachary Taylor", 12, "Whig", 1, true, 492),
  new President("Millard Fillmore", 13, "Whig", 1, false, 969),
  new President("Franklin Pierce", 14, "Democrat", 1, false, 1461),
  new President("James Buchanan", 15, "Democrat", 1, false, 1461),
  new President("Abraham Lincoln", 16, "Republican", 2, true, 1503),
  new President("Andrew Johnson", 17, "Democrat", 1, false, 1419),
  new President("Ulysses S. Grant", 18, "Republican", 2, false, 2922),
  new President("Rutherford B. Hayes", 19, "Republican", 1, false, 1461),
  new President("James A. Garfield", 20, "Republican", 1, true, 199),
  new President("Chester A. Arthur", 21, "Republican", 1, false, 1262),
  new President("Grover Cleveland", 22, "Democrat", 2, false, 2922),
  new President("Benjamin Harrison", 23, "Republican", 1, false, 1461),
  new President("William McKinley", 25, "Republican", 2, true, 1654),
  new President("Theodore Roosevelt", 26, "Republican", 2, false, 2728),
  new President("William Howard Taft", 27, "Republican", 1, false, 1461),
  new President("Woodrow Wilson", 28, "Democrat", 2, false, 2922),
  new President("Warren G. Harding", 29, "Republican", 1, true, 881),
  new President("Calvin Coolidge", 30, "Republican", 2, false, 2041),
  new President("Herbert Hoover", 31, "Republican", 1, false, 1461),
  new President("Franklin D. Roosevelt", 32, "Democrat", 4, true, 4422),
];

//VARIABLES AND INITIAL SETTINGS
let main = document.getElementById("main");

// Call the displayPresidents function initially to populate the list
displayPresidents(presidents);

//FUNCTIONS
// Function to display all presidents' names in order
function displayPresidents(presidentsArray) {
  const sortedPresidents = presidentsArray.slice().sort((a, b) => a.number - b.number);

  // Create an array of list items using template literals
  const listItems = sortedPresidents.map(president => `<li>${president.name}</li>`);

  // Set the HTML content of the 'main' element
  main.innerHTML = listItems.join('');
}

// Function to reset the list to its initial state
function resetList() {
  displayPresidents(presidents);
}


function byParty() {
  const partySelector = document.getElementById('partySelector');
  const selectedParty = partySelector.value;

  if (selectedParty === '') {
    // If no party is selected, reset the list to the initial state
    resetList();
    return;
  }

  const filteredPresidents = presidents.filter(president => president.party === selectedParty);
  displayPresidents(filteredPresidents);
}

function sort() {
  names = names.sort((a, b) => {
    return a.terms - b.terms;
  });

  names2 = names.map(name => {
    return `<li class="${name.party}">${name.name}</li>`
  })

  names2 = names2.join().replaceAll(",", ""); 
  main.innerHTML = names2;  
}

//document.getElementById("little").innerHTML = `<img src="images/${presidents[0].image()}">`;