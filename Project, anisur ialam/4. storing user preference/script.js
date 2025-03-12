const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

// change font size
const changeFontSize = (e) => {
    let fontSizeValue = e.target.value;
    mainElement.style.fontSize = fontSizeValue;
    localStorage.setItem("fontSize", fontSizeValue)
}

// change bg color
const changeBgColor = (e) => {
    let bgColorValue = e.target.value;
    mainElement.style.backgroundColor = bgColorValue;
    localStorage.setItem("bgColor", bgColorValue)
}

// clear Local Storage
const clearLocalStorage = () => {
    localStorage.clear()
    setValue("16px", "Purple")
}

const setValue = (fontSize, bgColor) => {
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
}

// load local storage value
const initialSetup = () => {
    const getFontSize = localStorage.getItem("fontSize")
    const getBgColor = localStorage.getItem("bgColor")

    if (getFontSize && getBgColor) {
        setValue(getFontSize, getBgColor)
    }
    else if (!getFontSize && !getBgColor) {
        setValue("16px", "Purple")
    }
    else if (getFontSize && !getBgColor) {
        setValue(getFontSize, "Purple")
    }
    else if (!getFontSize && getBgColor) {
        setValue("16px", getBgColor)
    }
}


// add event listeners
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", clearLocalStorage)

initialSetup()