let todoitemcontainer = document.getElementById("todo-items-container");
let addtodobutton = document.getElementById("add-todo-button");
let savetodobutton = document.getElementById("savetodobutton");
// var arrindex = 0;
let lastUsedUniqueId = 0;

function getlistfromlocal(){
    let stringifylist = localStorage.getItem("todoitems");
    let parsedlist = JSON.parse(stringifylist);
    if(parsedlist === null){
        return []
    }
    else{
        return parsedlist;
    }
}


let todoitems = getlistfromlocal();
function onaddclick(){
    let todocount = todoitems.length;
    let userinputelement = document.getElementById("inputtext");
    let userinputval = userinputelement.value;

    if(userinputval === ""){
        alert("enter valid text");
    }
    else{
        lastUsedUniqueId = todoitems.length + 1;
        let newtodo = {
            todo: userinputval,
            uniqueid: lastUsedUniqueId,
            isChecked: false
            };
    
        todoitems.push(newtodo)
        createandappend(newtodo);
        userinputelement.value = "";
        lastUsedUniqueId = Math.max(...todoitems.map(todo => todo.uniqueid), 0) || 0;

    }
}

addtodobutton.onclick = function(){
    onaddclick();
};


savetodobutton.onclick = function(){
        localStorage.setItem("todoitems", JSON.stringify(todoitems));
}

for(let eachtodo of todoitems){
    createandappend(eachtodo); 
}

function createandappend(todos){
    let checkboxid = "checkbox" + todos.uniqueid;
    let labelid = "label" + todos.uniqueid;
    let deleteid = "todo" + todos.uniqueid;
    let lielement = document.createElement("li");
    lielement.classList.add("li-container");
    lielement.id = deleteid;
    todoitemcontainer.appendChild(lielement);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = checkboxid;
    checkbox.checked = todos.isChecked;
    checkbox.classList.add("checkbox");
    lielement.appendChild(checkbox);

    let divlableelement = document.createElement("div");
    divlableelement.classList.add("label-container");
    lielement.appendChild(divlableelement);

    let labelelement = document.createElement("label");
    labelelement.setAttribute("for", checkboxid);
    labelelement.id = labelid;
    labelelement.textContent = todos.todo
    labelelement.classList.add("label");
    divlableelement.appendChild(labelelement);
    if(todos.isChecked === true){
        labelelement.classList.toggle("checked")
    }

    let deletecontainer = document.createElement("div");
    deletecontainer.classList.add("delete-container");
    divlableelement.appendChild(deletecontainer);

    let deleteicon = document.createElement("i");
    deleteicon.id = deleteid;
    deleteicon.classList.add("far", "fa-trash-alt", "delete-icon");
    deletecontainer.append(deleteicon);

    checkbox.onclick = function () {
        oncompletestatus(checkboxid, labelid, deleteid);
    };

    deleteicon.onclick = function (){
        ondeleteicon(deleteid);
    };
}

function oncompletestatus(checkboxid, labelid, deleteid){
    let checkboxelememt = document.getElementById(checkboxid);
    let labelchecked = document.getElementById(labelid);
    labelchecked.classList.toggle("checked");   
    let todoObjectindex = todoitems.findIndex(function(eachtodo){
        let checkboxtodoid = "todo" + eachtodo.uniqueid;
        if(checkboxtodoid === deleteid){
            return true;
        }
        else{
            return false;
        }
    });
    let todoobject = todoitems[todoObjectindex];
    if(todoobject.isChecked === true){
        todoobject.isChecked = false;
    }
    else{
        todoobject.isChecked = true;

    }
}

function ondeleteicon(deleteid){
    let deleteiconelement = document.getElementById(deleteid);
    todoitemcontainer.removeChild(deleteiconelement);
    let deleteindex = todoitems.findIndex(function(eachtodo){
        let eachtodoId = "todo" + eachtodo.uniqueid;
        return eachtodoId === deleteid;
    });
    todoitems.splice(deleteindex, 1);

    lastUsedUniqueId = Math.max(...todoitems.map(todo => todo.uniqueid), 0) || 0;
    todoitems.forEach((todo, index) => {
        todo.uniqueid = index + 1;
    });
}



