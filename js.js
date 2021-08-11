let dataBase 
const row = document.getElementById('pictureHolder')
window.onload = () => {
    
    fetch("https://api.pexels.com/v1/search?query=car", {
        "method": "GET",
        "headers": {
            "Authorization": "563492ad6f91700001000001a21d412f76244d6ab5f47ba8a941ecd6"
        }
    })
    .then( respon => respon.json())
    .then(data => {
        dataBase = data
    })
    .catch(err => console.error(err))
    
}
setTimeout(check, 300)

function check (){
    console.log(dataBase)
}
function loadPic(){
    loadingCont(dataBase.photos)

}

function loadingCont(inf){
    for ( let card of inf){
    row.innerHTML += `<div class="col-md-4">
    <div class="card mb-4 shadow-sm h-100">
    <img src="${card.src.large}" alt="" style="height: 10rem;  object-fit: cover;">
      <div class="card-body">
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button"class="btn btn-sm btn-outline-secondary">
                View
            </button>
            <button onclick="hideCard(this)" type="button"  class="btn btn-sm btn-outline-secondary">
                Hide
            </button>
            </div>
            <small class="text-muted">${card.id}</small>
        </div>
      </div>
    </div>
  </div>
`
}
}


// hide card\
function hideCard(inf){
    let hiden = inf.parentElement.parentElement.parentElement.parentElement.parentElement
    hiden.remove()
}