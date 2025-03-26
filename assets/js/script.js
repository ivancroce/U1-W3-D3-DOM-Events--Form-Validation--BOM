const handleLiClick = function (e) {};

const form = document.querySelector("form");
const tasklist = document.getElementById("tasklist");
const inputBox = document.getElementById("input-box");

/* form.addEventListener("submit", function (e) {
  e.preventDefault(); // very important to remove the refresh
  console.log(`SUBMIT`);} // to test if refresh works */

form.onsubmit = function (e) {
  e.preventDefault();
  console.log(`SUBMIT`);

  const inputBox = document.getElementById("input-box");
  console.log(inputBox.value); // to see in console the task we are applying (text)

  const inputData = inputBox.value;

  const newTask = document.createElement("li"); // create a new li in memory
  newTask.innerText = inputBox.value;

  newTask.onclick = function (e) {
    e.currentTarget.classList.toggle(`strike`); // toggle the line-through
  };

  const delBtn = document.createElement(`button`);
  delBtn.innerText = "❌"; // need to see this part to add the button
  delBtn.onclick = handleLiClick;

  newTask.appendChild(delBtn);

  tasklist.appendChild(newTask);

  // form.reset(); // empty all fields
  inputBox.value = "";
};
