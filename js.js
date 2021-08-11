let dataBase 

window.onload = () => {
    fetch("https://api.pexels.com/v1/search?query=programming", {
        "method": "GET",
        "headers": {
            "Authorization": "bearer 563492ad6f91700001000001a21d412f76244d6ab5f47ba8a941ecd6"

        }
    })
    .then( response => response.json())
    .then(data => dataBase = data)
    .catch(err => alert(err))
    
}
// checking
setTimeout(check, 500)
function check (){
    console.log(dataBase)
}

// Row container card
const rowCard = document.getElementById('rowCard')


function loadImgs(){

for( let card of dataBase.photos){

    rowCard.innerHTML += `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm h-100">
    <img src="${card.src.large}" alt="" style="height: 10rem;  object-fit: cover;">
      <div class="card-body">
        <p class="card-text">${card.photographer}</p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              View
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary" onclick="hideCard(this)">
              Hide
            </button>
          </div>
          <small class="text-muted">id: ${card.id}</small>
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
    setTimeout(loadImgs, 1000)
}
// load from database
function loadData() {
    fetch(`${dataBase.next_page}`, {
        "method": "GET",
        "headers": {
            "Authorization": "bearer 563492ad6f91700001000001a21d412f76244d6ab5f47ba8a941ecd6"
        }
    })
        .then(response => response.json())
        .then(data => dataBase = data)
        .catch(err => alert(err))
}

// Hide Card

function hideCard (inf){
const card = inf.parentElement.parentElement.parentElement.parentElement.parentElement
card.remove()
}

// SEARCH
function searchIt(value) {
    fetch(`https://api.pexels.com/v1/search?query=`+value.toLowerCase(), {
        "method": "GET",
        "headers": {
            "Authorization": "bearer 563492ad6f91700001000001a21d412f76244d6ab5f47ba8a941ecd6"
        }
    })
        .then(response => response.json())
        .then(data => dataBase = data)
        .catch(err => alert(err))

        rowCard.innerHTML =  ''
        setTimeout(loadImgs, 500)
}