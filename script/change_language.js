function change_language(){
    url = document.URL;
    split_url = url.split('/');
    new_url = "";
    if((split_url[split_url.length - 2]) == "fr"){
        for (i = 0; i<split_url.length - 2; i++){
            new_url += split_url[i] + "/";
        }
    }else{
        new_url = url + "fr/";
    }
    window.location.replace(new_url);
}