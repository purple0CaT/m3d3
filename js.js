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