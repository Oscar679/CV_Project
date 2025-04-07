function Main() {
    this.init();
}

(function () {
    function initDocument() {
        new Main();
    }

    document.addEventListener("DOMContentLoaded", initDocument);
})();

Main.prototype.init = function () {
    this.loadBtnDiv = ElemUtil("div", {
        className: "loadBtn",
        appendTo: document.getElementById("sectionContainer")
    })

    this.loadBtn = ElemUtil("button", {
        appendTo: this.loadBtnDiv,
        content: "LOAD CONTENT"
    })

    this.loadBtn.addEventListener("click", this.loadContent.bind(this));
}

Main.prototype.loadContent = function () {
    new Content();
}