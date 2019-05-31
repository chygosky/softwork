function makeRequest(url, requestType){
    let xhrhttp = new XMLHttpRequest();
    xhrhttp.onreadystatechange = () => {
        if(xhrhttp.readyState == 4){
            return xhrhttp.responseText;
        }
    } 
    xhrhttp.open(requestType, url, true);
    xhrhttp.send();
}