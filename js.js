let dataBase 
const row = document.getElementById('pictureHolder')
window.onload = () => {
    
    fetch("https://api.pexels.com/v1/search?query=car", {
        "method": "GET",
        "headers": {
            "Authorization": "563492ad6f91700001000001c37b06144d9249f6907a4a1732edda7c"
        }
    })
    .then( respon => respon.json())
    .then(data => {
        dataBase = data
    })
    .catch(err => console.error(err))
    
}
function loadPic(){
    loadingCont(dataBase.photos)
}

function loadingCont(){
    for ( let card of dataBase.photos){
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

// second Button
function loadSecond(){
    loadData()
    setTimeout(loadingCont, 1000)
}
// load from database
function loadData() {
    fetch(`${dataBase.next_page}`, {
        "method": "GET",
        "headers": {
            "Authorization": "bearer 563492ad6f91700001000001c37b06144d9249f6907a4a1732edda7c"
        }
    })
        .then(response => response.json())
        .then(data => dataBase = data)
        .catch(err => alert(err))
}
// hide card\
function hideCard(inf){
    let hiden = inf.parentElement.parentElement.parentElement.parentElement.parentElement
    hiden.remove()
}