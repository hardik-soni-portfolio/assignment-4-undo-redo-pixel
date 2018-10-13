var stuff = [];
var undoStack = [];
var redoStack = [];

function buildItemList() {
    var prevUl = document.getElementById("toWorkItems");
    if (prevUl!==null) {
        prevUl.remove();
    }
    var division = document.getElementById("containerToWork");
    var ulCont = document.createElement("ul");
    ulCont.id = "toWorkItems";
    for (var i = 0; i < stuff.length; i++) {
        var toWorkItem = document.createElement("li");
        toWorkItem.id = i;

        var toWorkCheck = document.createElement("input");
        toWorkCheck.className="checkbox"
        toWorkCheck.type = "checkbox";
        toWorkCheck.id = i;
        toWorkCheck.addEventListener('change', function (e) {
            e = e || window.event;
            var targetCheck = e.targetCheck || e.srcElement
            if (targetCheck.checked) {
                strikePara(parseInt(targetCheck.id));
            }
        }, false);

        var paraItem = document.createElement("p");
        paraItem.id = i;
        paraItem.innerText = stuff[i].content;

        var toWorkRemove = document.createElement("input");
        toWorkRemove.type = "button";
        toWorkRemove.id = i;
        toWorkRemove.value = "Remove Item";
        toWorkRemove.addEventListener('click', function (e) {
            e = e || window.event;
            var target = e.target || e.srcElement
            removeItemFromList(parseInt(target.id))
        }, false);

        toWorkItem.appendChild(toWorkCheck);
        toWorkItem.appendChild(paraItem);
        toWorkItem.appendChild(toWorkRemove);

        ulCont.appendChild(toWorkItem);
    }
    division.appendChild(ulCont);
}

function addItemToList() {
    stuff.push({ content: document.getElementById("enterNewToWork").value, isComplete: false });
    buildItemList();
}

function removeItemFromList(i) {

}
function strikePara(i) {

}


function KeyDown(e) {
    //Redo action on CTRL + Y
    if (e.ctrlKey && e.keyCode == 89) {
        alert("You pressed CRTL + Y");
    }
    //Undo action on CTRL + Z
    if (e.ctrlKey && e.keyCode == 90) {
        alert("You pressed CRTL + Z");
    }
}

document.onkeydown = KeyDown;