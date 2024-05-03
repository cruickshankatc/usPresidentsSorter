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