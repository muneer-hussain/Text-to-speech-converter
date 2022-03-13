let enter = document.querySelector("#input")
let language = document.querySelector("#lang-name")
let btn = document.querySelector("#btn-enter");

language.value = "en-us";

function textToSpeech(text) {
    let speech = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(speech);

}
btn.addEventListener("click", function() {
    if (enter.value != "") {
        textToSpeech(enter.value)
    }
})
window.addEventListener("keydown", (e) => { 
if (e.keyCode == 13) { 
  if(enter.value != "") {
    textToSpeech(enter.value);
}
 }
 });
