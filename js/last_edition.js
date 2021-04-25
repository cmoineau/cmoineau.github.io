function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.response;
}
function getLastCommit(language){
    commits = httpGet("https://api.github.com/repos/cmoineau/cmoineau.github.io/commits");
    date = JSON.parse(commits)[0].commit.author.date;
    year = date[0] + date[1] + date[2] + date[3]
    month = date[5] + date[6]
    day = date[8] + date[9]
    if (language == "english"){
        months = [null, "January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Décember"]
        str_date = "Last edition : " + day + " " + months[parseInt(month)] + " " + year
    }else if (language == "french"){
        months = [null, "Janvier","Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
        str_date = "Denière édition : " + day + " " + months[parseInt(month)] + " " + year
    }

    return str_date
}
function setLastCommit(language){
    var p = document.getElementById("lastchange");
    p.innerHTML = getLastCommit(language)
}