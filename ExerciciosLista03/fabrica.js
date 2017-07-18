Fabrica = function(){

    this.calcularValorCamisetas = function(totalP, totalM, totalG){
        totVenda = ((totalP * 10) + (totalM * 12) + (totalG * 15));
        return totVenda;
    }
    this.aoClicarBotaoCalcularPedido = function(){
        totalP = document.getElementById("totP").value;
        totalM = document.getElementById("totM").value;
        totalG = document.getElementById("totG").value;
        var totalcompra = this.calcularValorCamisetas(totalP, totalM, totalG);
        window.alert(totalcompra);
    }
    proc = new Fabrica();
}