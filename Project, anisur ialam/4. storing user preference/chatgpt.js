// chatgpt

const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

// Change font size
selectFontSize.addEventListener("change", (e) => {
    let fontSizeValue = e.target.value;
    mainElement.style.fontSize = fontSizeValue;
    localStorage.setItem("fontSize", fontSizeValue);
});

// Change background color
selectBgColor.addEventListener("change", (e) => {
    let bgColorValue = e.target.value;
    mainElement.style.backgroundColor = bgColorValue;
    localStorage.setItem("bgColor", bgColorValue);
});

// Clear Local Storage and reset to default values
resetButton.addEventListener("click", () => {
    localStorage.clear();
    setStyles(); // Reset to default values
    /*  when i clicked on reset button localStorage becomes empty and
     we got the default value in our setStyle() function and thats applied to the browser */
});

// Set styles based on localStorage or defaults
const setStyles = () => {
    const getFontSize = localStorage.getItem("fontSize");
    const getBgColor = localStorage.getItem("bgColor");

    // Use default values if localStorage is not set
    const fontSize = getFontSize || "16px";
    const bgColor = getBgColor || "Purple";
    // we can set variables value like that, either getFontSize or "16px"

    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
};

// Load local storage value on page load
setStyles();
