function fontResize() {
    let presSpace = document.getElementById("presidentsSpace");
    let presSpaceText = presSpace.querySelectorAll("p");
  
    presSpaceText.forEach(text => {
      const maxWidth = 150;
      const baseFontSize = 14;
      const currentWidth = text.offsetWidth;
  
      if (currentWidth > maxWidth) {
        const ratio = maxWidth / currentWidth;
        const newSize = baseFontSize * ratio;
  
        text.style.fontSize = `${newSize}px`;
      }
    });
  }