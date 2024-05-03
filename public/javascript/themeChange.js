function themeChange(themeStyle) {
    let theCSS = document.documentElement; 
    let mainColor;
    let mainColorHover;
    let backdropColor;
    let textColor;

    switch (themeStyle) {
      case "light":
        mainColor = "#ffffff";        // White
        mainColorHover = "#f0f0f0";   // Light Gray
        backdropColor = "#ffffff";    // White
        textColor = "#000000";        // Black
        break;
  
      case "dark":
        mainColor = "#282c35";        // Dark Gray-Blue
        mainColorHover = "#3e4452";   // Slightly Lighter Gray-Blue
        backdropColor = "#1e222b";    // Darker Gray-Blue
        textColor = "#ffffff";        // White
        break;
  
      case "patriotic":
        mainColor = "#c62828";        // Darker Red
        mainColorHover = "#d32f2f";   // Slightly Lighter Red
        backdropColor = "#1976D2";    // Dark Blue
        textColor = "#ffffff";        // White
        break;
  
      case "gray":
        mainColor = "#757575";        // Dark Gray
        mainColorHover = "#9e9e9e";   // Lighter Gray
        backdropColor = "#eeeeee";    // Even Lighter Gray
        textColor = "#000000";        // Black
        break;
    }

    theCSS.style.setProperty("--main-color", mainColor);
    theCSS.style.setProperty("--main-color-hover", mainColorHover);
    theCSS.style.setProperty("--backdrop-color", backdropColor);
    theCSS.style.setProperty("--text-color", textColor);

    menu.close();
    fontResize()
  }