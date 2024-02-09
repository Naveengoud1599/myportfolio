let counterelement = document.getElementById("counter-value");

function decrease(){
    let previous = counterelement.textContent;
    let updated = parseInt(previous) - 1;
    counterelement.textContent = updated;
    if(updated < 0){
        counterelement.style.color = "red";
    }
    else if(updated == 0){
        counterelement.style.color = "black";
    }
}

function reset(){
    let updated = (counterelement.textContent = 0);
    if(updated === 0){
        counterelement.style.color = "black";
    }

}

function increase(){
    let previous = counterelement.textContent;
    let updated = parseInt(previous) + 1;
    counterelement.textContent = updated;
    if(updated > 0){
        counterelement.style.color = "green";
    }
    else if(updated == 0){
        counterelement.style.color = "black";
    }
}