var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills-section');
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
