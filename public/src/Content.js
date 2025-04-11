function Content() {
    console.log('test');
    this.init();
    this.removeBtn();
}

Content.prototype.init = async function () {
    //await this.construct("http://13.60.19.28:3000/api/COURSE");
    await this.construct("/json/data.json");
}

Content.prototype.construct = async function (jsonUrl) {
    var response = await fetch(jsonUrl);
    if (response.ok) {
        this.data = await response.json();
        console.log(this.data);
    } else {
        console.error("Error fetching data");
        return;
    }

    this.sideNav = ElemUtil("div", {
        className: "sideNav",
        appendTo: document.getElementById("sectionContainer")
    })

    this.ul = ElemUtil("ul", {
        className: "navUl",
        appendTo: this.sideNav
    })

    for (var i = 0; i < this.data.info.length; i++) {
        this.li = ElemUtil("li", {
            className: "navLi",
            appendTo: this.ul
        })

        this.liA = ElemUtil("a", {
            className: "liA",
            appendTo: this.li,
            content: this.data.forename, //this.data.info[i].title,
            href: "#" + this.data.info[i].title.replace(/\s+/g, "").toLowerCase() + "Title"
        })
        console.log(this.liA);
    }

    this.aboutmeTitle = ElemUtil("h2", {
        className: "aboutmeTitle",
        appendTo: document.getElementById("sectionContainer"),
        content: this.data.info[0].title,
        id: "aboutmeTitle"
    })

    this.aboutmeDesc = ElemUtil("article", {
        className: "aboutmeDesc",
        appendTo: document.getElementById("sectionContainer"),
        content: this.data.info[0].desc
    })

    this.projectsTitle = ElemUtil("h2", {
        className: "educationTitle",
        appendTo: document.getElementById("sectionContainer"),
        content: this.data.info[1].title,
        id: "projectsTitle"
    })

    this.checkBoxContainer = ElemUtil("form", {
        className: "checkBoxContainer",
        appendTo: document.getElementById("sectionContainer")
    })

    this.options = new Array(
        { text: " HTML", value: "html", name: "skill" },
        { text: " CSS", value: "css", name: "skill" },
        { text: " JavaScript", value: "js", name: "skill" },
        { text: "PHP", value: "php", name: "skill" },
        { text: "MySQL", value: "mysql", name: "skill" },
        { text: "AWS", value: "aws", name: "skill" }
    );

    this.options.forEach(option => {
        this.label = ElemUtil("label", {
            className: "optionLabel",
            appendTo: this.checkBoxContainer
        });

        ElemUtil("input", {
            type: "checkbox",
            className: "optionCheckBox",
            appendTo: this.label,
            value: option.value,
            name: option.name,
            event: {
                change: (e) => console.log(`${option.text} checked:`, e.target.checked)
            }
        });

        ElemUtil("span", {
            content: option.text,
            appendTo: this.label
        });
    });

    this.submit = ElemUtil("button", {
        type: "submit",
        id: "submitBtn",
        appendTo: this.checkBoxContainer,
        content: "Find courses"
    });

    this.projectsDesc = ElemUtil("article", {
        className: "educationDesc",
        appendTo: document.getElementById("sectionContainer")
    })

    this.projectsBoxContainer = ElemUtil("article", {
        id: "projectsBoxContainer",
        appendTo: this.projectsDesc
    })

    for (var i = 0; i < this.data.projects.length; i++) {
        this.projectsBox = ElemUtil("div", {
            className: "projectsBox",
            appendTo: this.projectsBoxContainer
        })

        this.projectsBoxName = ElemUtil("h3", {
            className: "projectsBoxName",
            appendTo: this.projectsBox,
            content: this.data.projects[i].name
        })

        this.projectsBoxSkills = ElemUtil("p", {
            className: "projectsBoxSkills",
            appendTo: this.projectsBoxName,
            content: this.data.projects[i].skills
        })

        this.projectsBoxLink = ElemUtil("h3", {
            className: "projectsBoxLink",
            appendTo: this.projectsBox,
            content: this.data.projects[i].link
        })
    }

    console.log(this.data.info[1].desc);
    this.educationTitle = ElemUtil("h2", {
        className: "projectsTitle",
        appendTo: document.getElementById("sectionContainer"),
        content: this.data.info[2].title,
        id: "educationTitle"
    })

    this.educationDesc = ElemUtil("article", {
        className: "projectsDesc",
        appendTo: document.getElementById("sectionContainer"),
        content: this.data.info[2].desc
    })

    new SectionChecker();
}

Content.prototype.removeBtn = function () {
    var loadBtn = document.querySelector(".loadBtn");
    if (loadBtn) {
        loadBtn.style.display = "none";
    }
}

Content.prototype.typeWriter = function () {
    console.log(typeof TypeIt);

    new TypeIt(".aboutmeDesc", {
        speed: 1.5,
        afterComplete: function (instance) {
            instance.destroy();
        }
    }).go();

    new TypeIt(".projectsDesc", {
        speed: 1,
        afterComplete: function (instance) {
            instance.destroy();
        }
    }).go();

    new TypeIt(".educationDesc", {
        speed: 1,
        afterComplete: function (instance) {
            instance.destroy();
        }
    }).go();

    new TypeIt(".nextSection", {
        speed: 1,
        afterComplete: function (instance) {
            instance.destroy();
        }
    }).go();
}