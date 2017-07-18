Calculadora = function(){

    this.calculoSoma = function(parcela1, parcela2){
        soma = parseFloat(parcela1) + parseFloat(parcela2);
        return soma;
    }
    this.aoClicarSomar = function(){
        parcela1 = document.getElementById("parc1").value;
        parcela2 = document.getElementById("parc2").value;
        var totSoma = this.calculoSoma(parcela1, parcela2);
        window.alert(parcela1+" + "+parcela2+" = "+totSoma);
    }

    this.calculoSubtracao = function(aditivo, subtrativo){
        diferenca = parseFloat(aditivo) - parseFloat(subtrativo);
        return diferenca;
    }
    this.aoClicarSubtrair = function(){
        aditivo = document.getElementById("aditivo").value;
        subtrativo = document.getElementById("subtrativo").value;
        var totSubtracao = this.calculoSubtracao(aditivo, subtrativo);
        window.alert(aditivo+" - "+subtrativo+" = "+totSubtracao);
    }

    this.calculoDivisao = function(dividendo, divisor){
        quociente = parseFloat(dividendo) / parseFloat(divisor);
        return quociente;
    }
    this.aoClicarDividir = function(){
        dividendo = document.getElementById("dividendo").value;
        divisor = document.getElementById("divisor").value;
        var rDivisao = this.calculoDivisao(dividendo, divisor);
        window.alert(dividendo+" / "+divisor+" = "+rDivisao);
    }

    this.calculoMultiplicacao = function(fator1, fator2){
        produto = parseFloat(fator1) * parseFloat(fator2);
        return produto;
    }
    this.aoClicarMultiplicar = function(){
        fator1 = document.getElementById("fator1").value;
        fator2 = document.getElementById("fator2").value;
        var rMultiplicacao = this.calculoMultiplicacao(fator1, fator2);
        window.alert(fator1+" x "+fator2+" = "+rMultiplicacao);
    }
}
proc = new Calculadora();