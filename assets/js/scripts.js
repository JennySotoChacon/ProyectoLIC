var fechaActual = new Date();

// Para obtener mes
 var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
           
function mes(m)
{
    switch(m)
    {
         case 1:
         return meses[0];
         break;
         case 2:
         return meses[1];
         break;
         case 3:
         return meses[2];
         break;
         case 4:
         return meses[3];
         break;
         case 5:
         return meses[4];
         break;
         case 6:
         return meses[5];
         break;
         case 7:
         return meses[6];
         break;
         case 8:
         return meses[7];
         break;
         case 9:
         return meses[8];
         break;
         case 10:
         return meses[9];
         break;
         case 11:
         return meses[10];
         break;
         case 12:
         return meses[11];
         break;
    }
}

// Objeto para presupuesto
var presupuesto={
    fecha: mes(fechaActual.getMonth()+1) + " " + fechaActual.getFullYear(),
    saldo: 0,
    totalAbonado: 0,
    totalRetirado: 0,
    descripcionT: "",
    abonar: function(monto){
        this.totalAbonado += parseFloat((Math.round(monto * 100) / 100).toFixed(2));
        return this.saldo += parseFloat((Math.round(monto * 100) / 100).toFixed(2));
            //parseFloat(monto);
    },
    retirar: function(monto){
        this.totalRetirado -= parseFloat((Math.round(monto * 100) / 100).toFixed(2));
        return this.saldo -= parseFloat((Math.round(monto * 100) / 100).toFixed(2));
            //parseFloat(monto);
    },
    porcentajeGastos: function(){
        var porcentajeG = ((this.totalRetirado * 100) / this.totalAbonado) * -1;
        return parseFloat((Math.round(porcentajeG * 100) / 100).toFixed(2));
        //porcentajeG;
    },
    detPorcentajeGasto: function(monto){
        var pg = parseFloat((monto * 100) / this.totalAbonado)
        return parseFloat((Math.round(pg * 100) / 100).toFixed(2));
        //parseFloat((monto * 100) / this.totalAbonado);
    }
};

document.getElementById("mesP").innerText = presupuesto.fecha;

// Funciones para enlazar el form HTML y el objeto
function RegistraTransaccion(tipoTransaccion){
    var valor = parseFloat(document.getElementById("monto").value);
    if(!valor){
        alert("Ingrese un número");
    }
    else{
    
        var desc = document.getElementById("descripcion").value;

        /*
        var ingresos = document.getElementById("Ingresos");
        var egresos = document.getElementById("Egresos");

        var tabla = document.getElementById("hist");

        presupuesto.descripcionT = desc;


        // Tabla
        var fila = tabla.insertRow(1);
        var column1 = fila.insertCell(0);
        var column2 = fila.insertCell(1);
        var column3 = fila.insertCell(2);
        var column4 = fila.insertCell(3);*/

        if(tipoTransaccion == 1){
           //ingreso
            presupuesto.abonar(valor);
            alert("El monto abonado es: " +valor + " El saldo del presupuesto es: " + parseFloat(presupuesto.saldo));
           /* ingresos.innerText = "$" + presupuesto.totalAbonado;
            // Tabla
            column1.innerHTML = presupuesto.descripcionT;
            column2.innerHTML = "$" + valor;
            column3.innerHTML = "$" + 0;
            column4.innerHTML = 0 + "%";*/
        }
        else if(tipoTransaccion == 2){
            // retiro
            presupuesto.retirar(valor);
            alert("El monto retirado es: " +valor + " El saldo del presupuesto es: " + parseFloat(presupuesto.saldo));
            /*egresos.innerText = "$" + presupuesto.totalRetirado;
            column1.innerHTML = presupuesto.descripcionT;
            column2.innerHTML = "$" + 0;
            column3.innerHTML = "$" + valor;
            column4.innerHTML = presupuesto.detPorcentajeGasto(valor) + "%";
            document.getElementById("Porcentaje").innerText = presupuesto.porcentajeGastos() + "%";*/

        }
        else{
            alert("Debe colocar un tipo de transacción");
        }
        console.log(presupuesto.saldo);
        //document.getElementById("saldoDisp").innerText = "$" + parseFloat(presupuesto.saldo);
    }
    
}

// Para gráfica

var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [{
    label: "Car Speed (mph)",
    data: [0, 59, 75, 20, 20, 55, 40],
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});
