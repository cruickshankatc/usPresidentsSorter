function presSort(sortationMethod) {
    let presSpace = document.getElementById("presidentsSpace");
    let presSpaceDivs = presSpace.querySelectorAll('.presCard');
    let presSpaceArray = Array.from(presSpaceDivs);


    switch (sortationMethod) {
        case "byName":
            presSpaceArray.sort((a, b) => {
                const lastNameA = a.querySelector('.presName').textContent.split(" ").pop();
                const lastNameB = b.querySelector('.presName').textContent.split(" ").pop();
                return lastNameA.localeCompare(lastNameB);
            });
            break;
        case "byParty":
            presSpaceArray.sort((a, b) => {
                let item0 = a.querySelector('.presName').textContent;
                let item1 = b.querySelector('.presName').textContent;
                
                let itemA = presidents.find(president => president.name === item0);

                let itemB = presidents.find(president => president.name === item1);
        
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
                let item0 = a.querySelector('.presName').textContent;
                let item1 = b.querySelector('.presName').textContent;
                
                let itemA = presidents.find(president => president.name === item0);
                let itemB = presidents.find(president => president.name === item1);
        
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
                let item0 = a.querySelector('.presName').textContent;
                let item1 = b.querySelector('.presName').textContent;
                
                let itemA = presidents.find(president => president.name === item0);
                let itemB = presidents.find(president => president.name === item1);
        
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