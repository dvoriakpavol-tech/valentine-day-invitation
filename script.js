let leftPos = 0
let bottomPos = 0
document.getElementById("yessir").addEventListener("click", function() {
  document.body.innerHTML = "";
  const container = document.createElement("div");
  container.style.width = "100vw";
  container.style.height = "100vh";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.backgroundImage =
    "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTA1ZnQwdTk5YmYxM2Q1eHg3Y2RzeDJzM2lheTRhNWdwZTY5MWM4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jNJW9Bj6vVXIERUgK3/giphy.gif')";
  container.style.backgroundSize = "cover";
  container.style.backgroundPosition = "center";
  const text = document.createElement("h2");
  text.innerText = "Klikla si na nie, mám pravdu?";
  text.style.color = "white";
  text.style.fontSize = "42px";
  text.style.textShadow = "2px 2px 10px black";

  container.appendChild(text);
  document.body.appendChild(container);
  article.style.background = "transparent";
  article.style.boxShadow = "none";

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
