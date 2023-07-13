let presidents = [
  {
    name: "George Washington",
    number: 1,
    party: "Independent",
    terms: 2,
    diedInOffice: false,
    daysInOffice: 2865,
    image: function() {
      let fullName = "";
      let fullName2;
      for (x = 0; x < this.name.split(" ").length; x++) {
        fullName += this.name.split(" ")[x];
      }

      fullName2 = fullName.replaceAll('.','')
      return fullName2.toLowerCase() + ".jpg";
    },
  },
  {
    name: "John Adams",
    number: 2,
    party: "Federalist",
    terms: 1,
    diedInOffice: false,
    daysInOffice: 1460,
  },
  {
    name: "Thomas Jefferson",
    number: 3,
    party: "Democratic-Republican",
    terms: 2,
    diedInOffice: false,
    daysInOffice: 2922,
  },
  {
    name: "James Madison",
    number: 4,
    party: "Democratic-Republican",
    terms: 2,
    diedInOffice: false,
    daysInOffice: 2922,
  },
  {
    name: "James Monroe",
    number: 5,
    party: "Democratic-Republican",
    terms: 2,
    diedInOffice: false,
    daysInOffice: 2922,
  },
  {
    name: "John Quincy Adams",
    number: 6,
    party: "Democratic-Republican",
    terms: 1,
    diedInOffice: false,
    daysInOffice: 1461,
  },
  {
    name: "Andrew Jackson",
    number: 7,
    party: "Democrat",
    terms: 2,
    diedInOffice: false,
    daysInOffice: 2922,
  },
  {
    name: "Martin Van Buren",
    number: 8,
    party: "Democrat",
    terms: 1,
    diedInOffice: false,
    daysInOffice: 1461,
  },
  {
    name: "William Henry Harrison",
    number: 9,
    party: "Whig",
    terms: 1,
    diedInOffice: true,
    daysInOffice: 31,
  },
  {
    name: "John Tyler",
    number: 10,
    party: "Independent",
    terms: 1,
    diedInOffice: false,
    daysInOffice: 1430,
  },
  {
    name: "James K. Polk",
    number: 11,
    party: "Democrat",
    terms: 1,
    diedInOffice: false,
    daysInOffice: 1461,
  },
  {
    name: "Zachary Taylor",
    number: 12,
    party: "Whig",
    terms: 1,
    diedInOffice: true,
    daysInOffice: 492,
  },
  {
    name: "Millard Fillmore",
    number: 13,
    party: "Whig",
    terms: 1,
    diedInOffice: false,
    daysInOffice: 969,
  },
  {
    name: "Franklin Pierce",
    number: 14,
    party: "Democrat",
    terms: 1,
    diedInOffice: false,
    daysInOffice: 1461,
  },
  {
    name: "James Buchanan",
    number: 15,
    party: "Democrat",
    terms: 1,
    diedInOffice: false,
    daysInOffice: 1461,
  },
  {
    name: "Abraham Lincoln",
    number: 16,
    party: "Republican",
    terms: 2,
    diedInOffice: true,
    daysInOffice: 1503,
  },
  {
    name: "Andrew Johnson",
    number: 17,
    party: "Democrat",
    terms: 1,
    diedInOffice: false,
    daysInOffice: 1419,
  },
  {
    name: "Ulysses S. Grant",
    number: 18,
    party: "Republican",
    terms: 2,
    diedInOffice: false,
    daysInOffice: 2922,
  },
  {
    name: "Rutherford B. Hayes",
    number: 19,
    party: "Republican",
    terms: 1,
    diedInOffice: false,
    daysInOffice: 1461,
  },
  {
    name: "James A. Garfield",
    number: 20,
    party: "Republican",
    terms: 1,
    diedInOffice: true,
    daysInOffice: 199,
  },
  {
    name: "Chester A. Arthur",
    number: 21,
    party: "Republican",
    terms: 1,
    diedInOffice: false,
    daysInOffice: 1262,
  },
  {
    name: "Grover Cleveland",
    number: 22,
    party: "Democrat",
    terms: 2,
    diedInOffice: false,
    daysInOffice: 2922,
  },
  {
    name: "Benjamin Harrison",
    number: 23,
    party: "Republican",
    terms: 1,
    diedInOffice: false,
    daysInOffice: 1461
  },
  {
    name: "William McKinley",
    number: 25,
    party: "Republican",
    terms: 2,
    diedInOffice: true,
    daysInOffice: 1654,
  },
  {
    name: "Theodore Roosevelt",
    number: 26,
    party: "Republican",
    terms: 2,
    diedInOffice: false,
    daysInOffice: 2728,
  },
  {
    name: "William Howard Taft",
    number: 27,
    party: "Republican",
    terms: 1,
    diedInOffice: false,
    daysInOffice: 1461
  },
  {
    name: "Woodrow Wilson",
    number: 28,
    party: "Democrat",
    terms: 2,
    diedInOffice: false,
    daysInOffice: 2922,
  },
  {
    name: "Warren G. Harding",
    number: 29,
    party: "Republican",
    terms: 1,
    diedInOffice: true,
    daysInOffice: 881,
  },
  {
    name: "Calvin Coolidge",
    number: 30,
    party: "Republican",
    terms: 2,
    diedInOffice: false,
    daysInOffice: 2041,
  },
  {
    name: "Herbert Hoover",
    number: 31,
    party: "Republican",
    terms: 1,
    diedInOffice: false,
    daysInOffice: 1461,
  },
  {
    name: "Franklin D. Roosevelt",
    number: 32,
    party: "Democrat",
    terms: 4,
    diedInOffice: true,
    daysInOffice: 4422,
  },
]

//VARIABLES AND INITIAL SETTINGS
let main = document.getElementById("main");

//The "names" variable contains an array of whatever presidents are currently on display (whether the initial list or a filtered form of the list). The elements in the array are all still in object form. They don't only contain the President's name but also other properties (party, terms, diedInOffice, etc.) This value must remain in the global scope as it needs to be accessed by sort and other functions to be added.
let names;

makeList();

//FUNCTIONS
function makeList() {
  presidents = presidents.sort((a, b) => {
    return a.number - b.number;
  });
  
  names = presidents;
  
  x = presidents.map(president => {
    return `<li>${president.name}</li>`
  });
  
  names2 = x.join().replaceAll(",", "");
  main.innerHTML = names2;
}


function byParty() {
  let selector = document.getElementById("partySelector");
  
  names = presidents.filter((president) => {
    return president.party === selector.value;
  });

  names2 = names.map(name => {
    return `<li>${name.name}</li>`
  })

  names2 = names2.join().replaceAll(",", ""); 
  main.innerHTML = names2;  
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
