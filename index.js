let data ={}

data.name = document.getElementById("name").nodeValue;
data.email = document.getElementById("email").nodeValue;
data.username = document.getElementById("username").nodeValue;
data.password = document.getElementById("password").nodeValue;

document.getElementById("create-account").onclick = () => {
   makeRequest("http://localhost:3000/user", "POST", "data" );
}


function makeRequest(url, requestType, data){
    let xhrhttp = new XMLHttpRequest();
    xhrhttp.onreadystatechange = () => {
        if(xhrhttp.readyState == 4){
            return xhrhttp.responseText;
        }
    } 
    xhrhttp.open(requestType, url, data);
    xhrhttp.send();
}