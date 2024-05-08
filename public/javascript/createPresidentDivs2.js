function createPresidentDivs2(president) {
    //Declarations
    let presCard = document.createElement("div");
    let presCardInfoSub = document.createElement("div");
    let presCardInfo = document.createElement("div");
    let presNum = document.createElement("p");
    let presName = document.createElement("p");
    let presParty = document.createElement("p");
    let presImg = document.createElement("img");

    //Assignments
    presCard.className = "presCard";
    presCardInfo.className = "presCard--info";
    presCardInfoSub.className = "presCard--info--sub";
    presParty.className = "presParty";
    presNum.className = `presNum`;
    presName.className = `presName`;
    //    presNum.innerHTML = `${president.number}.&nbsp;`;
        presNum.innerHTML = `${president.number}`;
    presName.innerHTML = `${president.name}`;

    presParty.innerHTML = president.party;
    presImg.src = `images/${president.image}`;

    //Combining
    presCard.appendChild(presImg);
    presCard.appendChild(presCardInfo);
    presCardInfo.appendChild(presNum);
    presCardInfo.appendChild(presCardInfoSub);
    presCardInfoSub.appendChild(presName);
    presCardInfoSub.appendChild(presParty);
    presidentsSpace.appendChild(presCard);

    // presCard.appendChild(presImg);
    // presCardInfoSub.appendChild(presNum);
    // presCardInfoSub.appendChild(presName);
    // presCardInfo.appendChild(presCardInfoSub);
    // presCardInfo.appendChild(presParty);
    // presCard.appendChild(presCardInfo);
    // presidentsSpace.appendChild(presCard);  


}