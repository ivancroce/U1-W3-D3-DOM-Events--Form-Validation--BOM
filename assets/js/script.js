const form = document.querySelector("form");
const tasklist = document.getElementById("tasklist");
const inputBox = document.getElementById("input-box");

/* form.addEventListener("submit", function (e) {
  e.preventDefault(); // very important to remove the refresh
  console.log(`SUBMIT`);} // to test if refresh works */

const handleLiClick = function (e) {
  e.stopPropagation(); // Prevent any propagation of the same event
  const taskToRemove = e.target.closest("li");
  taskToRemove.remove();
};

form.onsubmit = function (e) {
  e.preventDefault();
  console.log(`SUBMIT`);

  const inputBox = document.getElementById("input-box");
  console.log(inputBox.value); // to see in console the task we are applying (text)

  const inputData = inputBox.value;

  const newTask = document.createElement("li"); // create a new li in memory
  newTask.innerText = inputBox.value; // the text will be the input value

  newTask.onclick = function (e) {
    e.currentTarget.classList.toggle(`strike`); // toggle the line-through on click
  };

  // creating btn and bin img

  const delBtn = document.createElement(`button`);
  const delImg = document.createElement(`img`);

  delImg.setAttribute(`src`, `assets/img/bin.png`);
  delImg.setAttribute(`alt`, `Delete`);
  delImg.style.width = "25px";
  delImg.style.height = "25px";

  delBtn.appendChild(delImg);
  delBtn.onclick = handleLiClick;

  newTask.appendChild(delBtn);

  tasklist.appendChild(newTask);

  // form.reset(); // empty all fields
  inputBox.value = "";
  inputBox.focus();
};
