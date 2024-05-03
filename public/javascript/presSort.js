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