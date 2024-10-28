function loadPage(page, id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      id.innerHTML = xmlHttp.responseText;
    }
  };
  xmlHttp.open("GET", page, true); // true for asynchronous
  xmlHttp.send();
}

loadPage("skills.html", document.getElementById("skills"));
loadPage("projects.html", document.getElementById("projects"));
