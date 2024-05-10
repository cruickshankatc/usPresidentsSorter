function fontResize() {
    let presSpace = document.getElementById("presidentsSpace");
    
    let presSpaceText = document.querySelectorAll(".presName, .presParty");


      
      const baseFontSize = 14;
      


    presSpaceText.forEach(text => {
      const tagWidth = text.offsetWidth;

      // Create a temporary element to measure the width of the text
    const tempElement = document.createElement('span');

    // Set the font properties to match the text
    tempElement.style.font = window.getComputedStyle(text).font;

    // Set the text content to the text of the current element
    tempElement.textContent = text.textContent;

    // Append the temporary element to the document body to ensure it's rendered
    document.body.appendChild(tempElement);

    // Measure the width of the text
    const textWidth = tempElement.offsetWidth;

    // Remove the temporary element
    document.body.removeChild(tempElement);

    if (textWidth > tagWidth) {
      const ratio = tagWidth / textWidth;
      const newSize = baseFontSize * ratio;

      text.style.fontSize = `${newSize}px`;    
    }
    })
  
    // presSpaceText.forEach(text => {
    //   const maxWidth = 50;
    //   const baseFontSize = 14;
    //   const currentWidth = text.offsetWidth;
  
    //   if (currentWidth > maxWidth) {
    //     const ratio = maxWidth / currentWidth;
    //     const newSize = baseFontSize * ratio;
  
    //     text.style.fontSize = `${newSize}px`;
    //     text.style.backgroundColor = `red`;
    //   }
    // });
  }