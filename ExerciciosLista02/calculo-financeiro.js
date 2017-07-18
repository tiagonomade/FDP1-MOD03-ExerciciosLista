            //Criando a Classe
            CalculoFinanceiro = function(){     

            //Criação de um método
                this.calculoPorcentagem = function (valor, porc){
                    totporc = valor * porc / 100;
                    return totporc;
                }
                this.calculoSalario = function(sal, vTrans, tAlim){
                    totsal = parseInt(sal) + parseInt(vTrans) + parseInt(tAlim);
                    return totsal;
                }
                this.calculoMedia = function(sal1, sal2){
                    media = (parseFloat(sal1) + parseFloat(sal2)) / 2;
                    return media;
                }
               

                this.aoClicarCalcularPorcentagem = function(){
                    //Leitura dos valores dos campos
                    valor = document.getElementById("txtValor").value;
                    porc = document.getElementById("txtPorc").value;
                    //Invocao metodo de Calculo
                    var rPorc = this.calculoPorcentagem(valor, porc);
                    //Exibe mensagem de alerta
                    window.alert("Resultado: "+rPorc);
                }
                this.aoClicarCalcularSalario = function(){
                    sal = document.getElementById("txtSalario").value;
                    vTrans = document.getElementById("txtValeTransporte").value;
                    tAlim = document.getElementById("txtTicketAlimentacao").value;
                    var rSal = this.calculoSalario(sal, vTrans, tAlim);
                    window.alert("Salario Bruto: "+rSal);
                }
                this.aoClicarCalcularMedia = function(){
                    sal1 = document.getElementById("txtSalario1").value;
                    sal2 = document.getElementById("txtSalario2").value;
                    var rMedia = this.calculoMedia(sal1, sal2);
                    window.alert("Media Final: "+rMedia);
                }

            }
            
            //Instanciando Objeto
            cf = new CalculoFinanceiro();