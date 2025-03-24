const textArea = document.getElementById("text-area");
const characterCount = document.getElementById("character-counter");
// Panggil updateCounter() saat halaman dimuat
document.addEventListener("DOMContentLoaded", updateCounter);

textArea.addEventListener("input", () => {
  updateCounter();
});

function updateCounter() {
  let characterLength = textArea.value.length;
  let maxValue = textArea.getAttribute("maxlength");
  console.log(characterLength);
  characterCount.textContent = `${characterLength}/${maxValue}`;
  if (characterLength == maxValue) {
    textArea.style.color = "red";
    characterCount.style.color = "red";
    textArea.style.borderColor = "red";
    textArea.style.outlineColor = "red";
  } else {
    characterCount.style.color = "black";
    textArea.style.borderColor = "black";
    textArea.style.color = "black";
    textArea.style.outlineColor = "black";
  }
}
