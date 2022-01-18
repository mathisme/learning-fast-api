const Data={
    "name": "item",
    "age": 42
};

const othePram={
    headers:{
         "content-type":"application/json; charset=UTF-8"
    },
    body:Data,
    method:"POST"
};

fetch("http://127.0.0.1:8000/",othePram)
.then(data=>{console.log(data.json())})

