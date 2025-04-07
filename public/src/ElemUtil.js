function ElemUtil(tag, obj) {
    var elem = document.createElement(tag);

    console.log(obj);

    if (typeof obj.className === "object") {
        for (var i = 0; i < obj.className.length; i++) {
            elem.classList.add(obj.className[i]);
        }
    } else {
        elem.classList.add(obj.className);
    }

    if (obj.id) {
        elem.id = obj.id;
    }

    if (obj.appendTo) {
        obj.appendTo.appendChild(elem);
    }

    if (obj.content) {
        elem.innerHTML = obj.content;
    }

    if (obj.type) {
        elem.type = obj.type;
    }

    if (obj.event) {
        for (var typeOfEvent in obj.event) {
            elem.addEventListener(typeOfEvent, obj.event[typeOfEvent]);
        }
    }

    if (obj.href) {
        elem.href = obj.href;
    }

    return elem;
}