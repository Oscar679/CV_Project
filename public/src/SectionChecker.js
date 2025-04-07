function SectionChecker() {
    this.sections = document.querySelectorAll("h2");
    this.links = document.querySelectorAll(".liA");
    document.querySelectorAll("h2").forEach(h2 => console.log(h2.textContent));
    
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
        root: null, // Uses viewport
        rootMargin: "0px",
        threshold: 0.8 // When 50% of the section is visible
    });

    this.sections.forEach(section => this.observer.observe(section));
}

SectionChecker.prototype.handleIntersection = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var currentSection = entry.target.textContent.trim().toUpperCase();

            this.links.forEach(link => {
                link.classList.toggle("active", link.textContent.trim().toUpperCase() === currentSection);
            });
        }
    });
};