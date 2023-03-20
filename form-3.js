
  let skillCount = 1;
  const addSkill = document.querySelector("#addskill");
  addSkill.addEventListener("click", function () {
    if (skillCount < 5) {
      skillCount++;
      const skillsFieldset = document.querySelector("#skills-fieldset");
      const newSkill = document.createElement("input");
      newSkill.setAttribute("type", "text");
      newSkill.setAttribute("id", `skill${skillCount}`);
      skillsFieldset.appendChild(newSkill);
    }
  });

