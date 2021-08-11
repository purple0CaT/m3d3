let dataBase 
window.onload = () => {
    
    fetch("https://api.pexels.com/v1/search?query=car", {
        "method": "GET",
        "headers": {
            "Authorization": "563492ad6f91700001000001c37b06144d9249f6907a4a1732edda7c"


        }
    })
    .then( respon => respon.json())
    .then(data => dataBase = data)
    .catch(err => console.error(err))
    
}
setTimeout(check, 1000)


function check (){
    console.log(dataBase.photos[0])
}

const = getImgs = function loadImgs() {
    fetch("https://api.pexels.com/v1/search?query=programming") , {mode:'cors'} {
        method: "GET",
        withCredentials: true,
        headers: {
          "X-Auth-Token": "563492ad6f91700001000001a21d412f76244d6ab5f47ba8a941ecd6",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(function(data) {
          console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        });
}