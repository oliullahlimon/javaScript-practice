const inputEl = document.querySelector("#input");
const infoText = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container");
const title = document.getElementById("title");
const meaning = document.getElementById("meaning");
const audioEl = document.querySelector("audio");

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});

const fetchAPI = async (word) => {
  try {
    infoText.style.display = "block";
    meaningContainer.style.display = "none";
    infoText.innerText = `Searching the meaning of ${word}`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
    console.log(result);

    if (result.title) {
      meaningContainer.style.display = "block";
      infoText.style.display = "none";
      title.innerText = word;
      meaning.innerHTML = "N/A";
      audioEl.style.display = "none";
    } else {
      infoText.style.display = "none";
      meaningContainer.style.display = "block";
      title.innerHTML = result[0].word;
      meaning.innerHTML = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    console.log(error);
    infoText.innerText = `An error happened, try again later!`;
  }
};
