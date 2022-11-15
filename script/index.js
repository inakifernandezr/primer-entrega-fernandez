function convertir () {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var USDT = 300;
    var BTC  = 4912800;
    if (document.getElementById("uno").checked){
        resultado = valore / USDT;
        alert("Se acreditaran en tu cuenta : $" + resultado);
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / BTC;
        alert("Se acreditaran en tu cuenta : $" + resultado);
    }
    else  {
        alert("Tenes que completar todos los requerimientos");
    }


}