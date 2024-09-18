document.getElementById("task-btn").addEventListener("click", function () {
  const messageContainer = document.getElementById("input-value");
  const value = messageContainer.value;
  const container = document.getElementById("content-container");
  const p = document.createElement("p");
  p.innerText = value;
  container.appendChild(p);
  messageContainer.value = "";

  //   delete all
  document.getElementById("clear-btn").addEventListener("click", function () {
    container.removeChild(p);
  });
});

// keyboard event

const messageContainer = document.getElementById("input-value");
messageContainer.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const container = document.getElementById("content-container");
    const p = document.createElement("p");
    p.innerText = messageContainer.value;
    container.appendChild(p);
    messageContainer.value = "";
  }
});
