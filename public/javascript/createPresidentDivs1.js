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