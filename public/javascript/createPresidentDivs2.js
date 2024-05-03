function createPresidentDivs2(president) {
    //Declarations
    let newDiv = document.createElement("div");
    let presNumName2 = document.createElement("div");
    let presCard = document.createElement("div");
    let presNum = document.createElement("p");
    let presName = document.createElement("p");
    let presParty = document.createElement("p");
    let presImg = document.createElement("img");

    //Assignments
    newDiv.className = "floatingHeads";
    presCard.className = "floatingHeads--info";
    presNumName2.className = "floatingHeads--info--sub1";
    presParty.className = "floatingHeads--info--sub2";
    presNum.className = `floatingsHeads--num`;
    presName.className = `floatingHeads--name`;
    presNum.innerHTML = `${president.number}.&nbsp;`;
    presName.innerHTML = `${president.name}`;

    presParty.innerHTML = president.party;
    presImg.src = `images/${president.image}`;

    //Combining
    newDiv.appendChild(presImg);
    presNumName2.appendChild(presNum);
    presNumName2.appendChild(presName);
    presCard.appendChild(presNumName2);
    presCard.appendChild(presParty);
    newDiv.appendChild(presCard);
    presidentsSpace.appendChild(newDiv);  
    
    fontResize()
}