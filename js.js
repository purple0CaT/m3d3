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
    <div class="card mb-4 shadow-sm">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="${card}"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Thumbnail"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          Thumbnail
        </text>
      </svg>
      <div class="card-body">
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
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
              class="btn btn-sm btn-outline-secondary"
            >
              Edit
            </button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
`
}
}