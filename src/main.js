document.getElementById("button-next").addEventListener("click", () => {
  document.getElementById("main-section").style.display = "block";
  document.getElementById("welcome-section").style.display = "none";
});

//API url
const api_url = "./data/pokemon/pokemon.json";

//Defining async function
async function getapi(url) {
  //Storing response
  const response = await fetch(url);

  //Storing data in from JSON
  let data = await response.json();
  console.log(data);

  if (response) {
    hideloader();
  }
  showdata(data);
}

//Calling that async function
getapi(api_url);

//Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
}

//Function to paint the data
function showdata(data) {
  let dataId = document.getElementById("data");

  data.pokemon.map((pokemon) => {
    dataId.insertAdjacentHTML(
      "beforebegin",
      ` <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p-4">
          <div class="card  h-100 text-center m-0 bg-light"  id = ${pokemon.id}>
            <div class="card-header name-pokemon-style number-pokemon-style">N° ${pokemon.num} / 151
            </div>
      
            <button type="button" class="btn btn-light btn-lg" data-toggle="modal" data-target="#miModal${pokemon.id}">
  
              <figure class="pt-4"><img src="${pokemon.img}" class="" alt="..."></figure>
              <div class="card-body pt-0">
                <h5 class="card-title mb-0 ">${pokemon.name}</h5>
              </div>
            </button>
          </div>  
        </div>

        <div class="modal fade" id="miModal${pokemon.id}" role="dialog">
          <div class="modal-dialog ">
            <div class="modal-content text-center">
              <div class=" text-center">
                <p class="h4 modal-title pt-4" >${pokemon.name}</p>
              </div>
              <div class="modal-body p-0">
                <div class="container-fluid">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="row">
                    <div class="col-12">
                    <figure class="pt-4"><img src="${pokemon.img}" class="image-pokemon-modal" alt="..."></figure>
                    </div>
                  </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col-6">
                        <p class= "h5 my-1">Height: ${pokemon.height} </p>
                      </div>
                      <div class="col-6">
                        <p class= "h5 my-1">Weight: ${pokemon.weight} </p>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col-12">
                      <p class= " h5 mb-3 mt-2">Type
                      </div>
                      <div class="col-12">    
                      <span class="badge rounded-pill text-light ${pokemon.type[0]} py-2 px-4 "> ${pokemon.type[0]}</span>
                      
                      <span class="badge rounded-pill text-light ${pokemon.type[1]} py-2 px-4 mt-1"> ${pokemon.type[1]}</span>
                      </p>
                      </div>
                    </div>
                  </li>
                  </ul>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
  `
    );
  });
}
