function Query() {
    this.submitBtn = document.getElementById("checkBoxContainer").addEventListener('submit', async function (e) {
        e.preventDefault();

        const selectedSkills = [...document.querySelectorAll('input[name="skill"]:checked')].map(checkbox => checkbox.value);

        const params = new URLSearchParams();
        selectedSkills.forEach(skill => params.append('skill', skill));

        const respone = await fetch(`/api/COURSE?${params.toString()}`);
        const data = await respone.json();

        const projectsBoxContainer = document.getElementById("projectsBoxContainer");
        projectsBoxContainer.innerHTML = "";

        for (var i = 0; i < data.length; i++) {
            const skill = data[i];

            const box = ElemUtil("div", {
                className: "projectsBox",
                appendTo: projectsBoxContainer
            })

            const projectsBoxName = ElemUtil("h3", {
                className: "projectsBoxName",
                content: skill.skill_name,
                appendTo: box
            })

            const projectsBoxSkills = ElemUtil("p", {
                className: "projectsBoxSkills",
                content: skill.skill_name,
                appendTo: box
            })

            const projectsBoxLink = ElemUtil("h3", {
                className: "projectsBoxLink",
                content: skill.skill_id,
                appendTo: box
            })
        }
    });
}