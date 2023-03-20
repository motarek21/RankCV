const experienceForm = document.getElementById("experienceForm");
const addJobBtn = document.getElementById("addJob");
let jobCount = 1;

function addExperience(index) {
  const form = document.querySelector(`#experience${index}-form`);
  let count = document.querySelectorAll(`#experience${index}-form input`).length;

  if (count < 6) {
    const input = document.createElement("input");
    input.type = "text";
    input.id = `experience${index}-${count + 1}`;
    form.appendChild(input);
  }
}

addJobBtn.addEventListener("click", function() {
  if (jobCount >= 3) {
    return;
  }
  jobCount++;
  const job = document.createElement("div");
  job.classList.add("job");
  job.innerHTML = `
    <label for="jobNameCompanyDate">Job Title, Company name, work period</label>
    <br>
    <input type="text" id="jobNameCompanyDate${jobCount}" placeholder="eg.senior Engineer,InfoWaySolutions(2021-Present)">
    <br>
    <label for="addExperience">Add Your Experience:</label>
    <br>
    <div class="experience" id="experience${jobCount}-form">
      <input type="text" id="experience${jobCount}-1">
    </div>
    <button id="addExperience${jobCount}" onclick="addExperience(${jobCount})">+</button>
    <br>
  `;
  experienceForm.appendChild(job);
});

let count = 1;
const maxTextAreas = 3;

document.getElementById("add_button").addEventListener("click", function() {
  if (count < maxTextAreas) {
    const newTextArea = document.createElement("textarea");
    newTextArea.id = "add_project" + count;
    newTextArea.setAttribute("cols", "20");
    newTextArea.setAttribute("rows", "5");
    document.getElementById("project-fieldset").appendChild(newTextArea);
    count++;
  }
});



