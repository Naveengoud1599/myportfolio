let searchelemet = document.getElementById("searchInput");
let srelemtn = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");
function createandappend(result){
    let {title, link, description} = result;
    let resultitemelement = document.createElement("div");
    resultitemelement.classList.add("result-item");
    srelemtn.appendChild(resultitemelement);

    let resulttitle = document.createElement("a");
    resulttitle.classList.add("result-title");
    resulttitle.textContent = title;
    resulttitle.href = link;
    resulttitle.target = "_blank";
    resultitemelement.appendChild(resulttitle);

    let titlebr = document.createElement("br");
    resultitemelement.append(titlebr);

    let urlelement  = document.createElement("a");
    urlelement.classList.add("result-url");
    urlelement.href = link;
    urlelement.target = "_blank";
    urlelement.textContent = link;
    resultitemelement.appendChild(urlelement);

    let linebreak = document.createElement("br");
    resultitemelement.append(linebreak);

    let descriptionele = document.createElement("p");
    descriptionele.classList.add("link-description");
    descriptionele.textContent = description;
    resultitemelement.appendChild(descriptionele);


}

function dislayResults(search_results){
    spinner.classList.toggle("d-none");
    for( let result of search_results){
        createandappend(result);
    }
    
}


function searchWiki(event){
    if(event.key === "Enter"){
        spinner.classList.toggle("d-none");
        srelemtn.textContent = "";
        let searchinput = searchelemet.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchinput;
        let options = {
            method: "GET"
        };

        fetch(url, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
            let {search_results} = jsondata;
            dislayResults(search_results);
        });
    }
}

searchelemet.addEventListener("keydown", searchWiki);