window.onload = function () {
  const form = document.querySelector("form");
  const tasklist = document.getElementById("tasklist");
  const inputBox = document.getElementById("input-box");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputBox = document.getElementById("input-box");

    const inputData = inputBox.value;

    const newTask = document.createElement("li");
    newTask.textContent = inputData;

    tasklist.appendChild(newTask);
  });
};
