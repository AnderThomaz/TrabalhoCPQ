function buscaCep () {
    let icep = document.getElementById ("icep").value;

    if (icep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/" + icep;
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function() {
            if(req.status ===200){
                let endereco = JSON.parse(req.response);
                document.getElementById("irua").value = endereco.street;
                document.getElementById("ibairro").value = endereco.neighborhood;
                document.getElementById("icidade").value = endereco.city;
                document.getElementById("iuf").value = endereco.state;


            }
            else if (req.status === 404) {
                alert("Cep Invalido");
            }
            else{
                alert ("Erro ao fazer a requisição");
            }
        }
    }

}

window.onload = function() {
    let icep = document.getElementById("icep")
    icep.addEventListener("blur", buscaCep);
}