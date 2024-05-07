function fontResize() {
    let presSpace = document.getElementById("presidentsSpace");
    let presSpaceText = presSpace.querySelectorAll(".presName");
  
    presSpaceText.forEach(text => {
      const maxWidth = 100;
      const baseFontSize = 14;
      const currentWidth = text.offsetWidth;
  
      if (currentWidth > maxWidth) {
        const ratio = maxWidth / currentWidth;
        const newSize = baseFontSize * ratio;
  
        text.style.fontSize = `${newSize}px`;
      }
    });
  }