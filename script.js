let leftPos = 0
let bottomPos = 0
document.getElementById("yessir").addEventListener("click", function() {

  // nastaví nový obrázok ako pozadie celej stránky
  document.body.style.backgroundImage =
    "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTA1ZnQwdTk5YmYxM2Q1eHg3Y2RzeDJzM2lheTRhNWdwZTY5MWM4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jNJW9Bj6vVXIERUgK3/giphy.gif')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  // vytvorí nový text
  const newText = document.createElement("h1");
  newText.innerText = "Yesss 😍 vedel som to! ❤️";
  newText.style.color = "white";
  newText.style.textAlign = "center";
  newText.style.marginTop = "40vh";
  newText.style.fontSize = "40px";
  newText.style.textShadow = "2px 2px 10px black";

  document.body.appendChild(newText);

});
document.getElementById('nooo').addEventListener('mouseover', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute"
    document.getElementById('nooo').style.left = leftPos + "%"
    document.getElementById('nooo').style.bottom = bottomPos + "%"
})
document.getElementById('nooo').addEventListener('click', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute"
    document.getElementById('nooo').style.left = leftPos + "%"
    document.getElementById('nooo').style.bottom = bottomPos + "%"
})
