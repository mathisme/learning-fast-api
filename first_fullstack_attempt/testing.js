const Data={
    "name": "Anne",
    "age": 46
};

const Http = new XMLHttpRequest();
Http.open("POST","http://127.0.0.1:8000/items/");
Http.setRequestHeader("Content-type","application/json;charset=UTF-8");
Http.send(JSON.stringify(Data));
Http.onreadystatechange = function() {
    if ((this.readyState==4)&&(this.status==200)) {
        data = JSON.parse(JSON.parse(Http.responseText));
        s = "Hi "+data.name+"! You are "+data.age+" years old.";
        document.getElementById("mytext").textContent = s;
        
}}

