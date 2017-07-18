Utilitaria = function(){

    this.juntarNome = function(nome1, nome2){
        resultado = nome1 + nome2;
        return resultado;
    }

    this.aoClicarJuntar = function(){
        nome1 = document.getElementById("txtNome").value;
        nome2 = document.getElementById("txtSobreNome").value;
        window.alert("Resultado: "+nome1+" "+nome2);
    }
}
junte = new Utilitaria();