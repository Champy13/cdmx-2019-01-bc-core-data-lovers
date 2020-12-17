//Declaración de variables y constantes que se utilizaran
//Funcion de boton de Inicio
document.getElementById("NextButton").addEventListener("click", () => {
  document.getElementById("serch").style.display = "block";
  document.getElementById("mainSection").style.display = "none";
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
            <div class="card-header namePokemon numberSite">N° ${
              pokemon.num
            } / 151
            </div>
      
            <button type="button" class="btn btn-light btn-lg" data-toggle="modal" data-target="#miModal${
              pokemon.name
            }">
  
              <figure class="imgPokemon pt-4"><img src="${
                pokemon.img
              }" class="" alt="..."></figure>
              <div class="card-body pt-0">
                <h5 class="card-title mb-0 ">${pokemon.name}</h5>
              </div>
            </button>
          </div>  
        </div>

        <div class="modal fade" id="miModal${pokemon.name}" role="dialog">
          <div class="modal-dialog ">
            <div class="modal-content text-center">
              <div class=" text-center">
                <h4 class="modal-title pt-4" id="name">${pokemon.name}</h4>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="row">
                    <div class="col-12">
                    <figure class="imgPokemon pt-4"><img src="${
                      pokemon.img
                    }" class="img-modal" alt="..."></figure>
                    </div>
                  </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col-6">
                        <h5> Height: ${pokemon.height} </h5>
                      </div>
                      <div class="col-6">
                        <h5>Weight: ${pokemon.weight} </h5>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col-12">
                      <h5>Type:     
                      <span class="badge rounded-pill ${
                        pokemon.type[0]
                      } py-2 px-4"> ${pokemon.type[0]}</span>
                      
                      <span class="badge rounded-pill ${
                        pokemon.type[1]
                      } py-2 px-4"> ${
        pokemon.type[1] == undefined ? "" : pokemon.type[1]
      }</span>
                      </h5>
                      </div>
                    </div>
                  </li>
                  <ul>
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
