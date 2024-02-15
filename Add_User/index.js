let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
}


let workingStatus = document.getElementById("status");
workingStatus.addEventListener("change", function(event){
    formData.status = event.target.value;
});

let genMaleEl = document.getElementById("gendermale");
genMaleEl.addEventListener("change", function(event){
    formData.gender = event.target.value;
});

let genFeMaleEl = document.getElementById("genderfemale");
genFeMaleEl.addEventListener("change", function(event){
    formData.gender = event.target.value;
});


let nameEl = document.getElementById("name");
let nameerrMsg = document.getElementById("nameerrormsg");
nameEl.addEventListener("change", function(event){
    if(event.target.value === ""){
        nameerrMsg.textContent = "Required*";
    }
    else{
        nameerrMsg.textContent = "";
    }
    formData.name = event.target.value;
});


let emailEl = document.getElementById("email");
let emailerrMsg = document.getElementById("emailerrormsg");
emailEl.addEventListener("change", function(event){
    if(event.target.value === ""){
        emailerrMsg.textContent= "Required*";
    }
    else{
        emailerrMsg.textContent = "";
    }
    formData.email = event.target.value;
});

function submitFormData(formData){
    let option = {
        method: "POST",
        headers: {
            'Content-type': "application/json",
            Accept: "application/json",
            Authorization: "Bearer 3777a779983572e6cc3fe816e58f4bd01496e195fffb9613b1f829dfd149d352"
        },
        body: JSON.stringify(formData)
    }
    let url = "https://gorest.co.in/public-api/users";

    fetch(url, option)
    .then(function(respose){
        return respose.json();
    })
    .then(function(jsonData){
        if(jsonData.code === 422){
            if(jsonData.data[0].message === "has already been taken"){
                emailerrMsg.textContent = "Email already exists, Try to be unique";
            }
        }
        console.log(jsonData);
    });
}

let myformEL = document.getElementById("myForm");
myformEL.addEventListener("submit", function(event){
    event.preventDefault();

    submitFormData(formData);
});


