/*console.log('Hello World!!!');

prompt('Ingrese cualquier cosa')

var variable = 23
console.log(typeof (variable))
var variable = '23'
console.log(typeof (variable))
var variable = true
console.log(typeof (variable))
var variable = null
console.log(typeof (variable))

Condicionales 
if(5<10){
    console.log('Esto es un condicional simple')
}  else if(5>=5){
    console.log('Este es un condiccional anidado')
}  else{
    console.log('Esto es un condicional compuesto')
}

let opcion = prompt('Elija una opcion 1,2,3,4')
switch(1){
    case 1:
        console.log('Esta es la opcion 1')
        break;
    case 2:
        console.log('Esta es la opcion 2')
        break;
    case 3:
        console.log('Esta es la opcion 3')
        break;
    case 4:
        console.log('Esta es la opcion 4')
        break;
    default:
        console.log('No existe el caso')
        break;
}

var i=prompt('Ingrese cualquier número')
if(i<0){
console.log('El número es negativo')
}else if(i==0){
    console.log('El número es 0')
    }else if(i>0){
        console.log('El número es positivo')
        }

var hora=prompt('Cuantas horas utilizo el servicio')
if(hora<2){
        console.log('El servicio es gratis')
        }else(hora>2){
            var horasAdicionales = hora - 2
            console.log('El servicio es de: ' + horasAdicionales * 5)
            }
            No fui capaz

            var i=prompt('Ingrese su edad')
            var edadRequerida= 18-i
            if(i>=18){
                console.log('Puede votar')
            }else{
                console.log('No puedes votar, sos menor de edad, ' + 'Te faltan '+ edadRequerida + ' años')
            }*/
//No se puede poner constante
// for(let index=0; index < 5; index++){
//     console.log("Esta es la vuelta: "+ index)
// }

//Tabal de multiplicar
// let num=prompt("Ingresa un numero")
// for(let index=0; index <11; index++){
//     let multiplicacion=num*index;
//     console.log(num+"x"+index+" = "+multiplicacion)
// }

//Calcular el promedio de Salarios de 5 Empleados
// var sumaSalario=0
// for(index=1; index<=5; index++){
//     var salarios=Number(prompt("Ingrese su salario: "))
//     sumaSalario+=salarios
// }
// console.log("El promedio de los salarios es de: "+(sumaSalario/(index-1)))

//Ciclo
// var index=1
// var sumaSalario=0
// while(index<=5){
//     var salario=Number(prompt("Ingresa Salario: "))
//     sumaSalario+=salario;
//     index++;
// }
// console.log("El promedio del salario es: "+(sumaSalario/(index-1)))

//Ciclo
// var index=1
// var sumaSalario=0
// var contador=1
// while(index==1){
//     var salario=Number(prompt("Ingresa Salario: "))
//     sumaSalario+=salario;
//     index++;
//     var opcion=Number(prompt("Ingresa otro salario? \n1=Sí \n2=No"))
//     contador++
//     if(opcion==2){
//         index=2
//     }
// }
// console.log("El promedio del salario es: "+(sumaSalario/(index-1)))

//Funcion declarativa

// function funcionDeclarativa(){
//     let nombre = 'Kaleb Parra'
//     let edad = 17
//     console.log('Soy' + nombre + ', tengo ' + edad + ' y estoy prendiendo funciones declarativas')
// }

// funcionDeclarativa()

// //Funcio de expresion

// let funcionDeExpresion = function(){
//     let nombre = 'Kaleb Parra'
//     let edad = 17
//     console.log('Soy' + nombre + ', tengo ' + edad + ' y estoy prendiendo funciones de expresion')
// }

// funcionDeExpresion()

let usuario = 'admin'
let contraseña = 'admin'
let inputUsuario = prompt('Ingrese su Usuario')
let repetir = true
let valorTransaccion
let saldoCuenta = 1200000

function ConsultarSaldo(){
console.log('Su saldo es: ' + saldoCuenta)
}
function RetirarDinero(){
 valorTransaccion = Number(prompt('Ingrese el monto que desea retirar: '))
    if(valorTransaccion< 10000){
        console.log('No se puede retirar menos de 10 000')
    } else if(valorTransaccion> saldoCuenta){
        console.log('No tiene suficiente saldo')
    } else{
        console.log('Hizo un retiro por: ' + valorTransaccion)
        saldoCuenta-=valorTransaccion
        console.log('Su nuevo saldo es: ' + saldoCuenta)
    }

}
function TransferirDinero(){
    valorTransaccion = Number(prompt('Ingrese el monto que desea transferir: '))
     if(valorTransaccion> saldoCuenta){
        console.log('No tiene suficiente saldo')
    } else{
        console.log('Hizo una transferencia por: ' + valorTransaccion)
        saldoCuenta-=valorTransaccion
        console.log('Su nuevo saldo es: ' + saldoCuenta)
}
}
function ConsignarDinero(){
    valorTransaccion = Number(prompt('Ingrese el monto que desea consignar: '))
    if(valorTransaccion< 10000){
        console.log('No se puede retirar menos de 10 000')
    } else{
        console.log('Hizo una consignacion por: ' + valorTransaccion)
        saldoCuenta+=valorTransaccion
        console.log('Su nuevo saldo es: ' + saldoCuenta)
    }
}



if (usuario==inputUsuario){
let inputContraseña = prompt('Ingrese su Contraseña')
 if(contraseña==inputContraseña){
      console.log('Bienvenido ' + inputUsuario)
      
while(repetir){
    let opcion = Number(prompt('Seleccione: \n1 - Consultar Saldo. \n2 - Retirar Dinero. \n3 - Transferir. \n4 - Consignar. \n5 - Salir.'))
    switch(opcion){
        case 1:
            ConsultarSaldo()
            break;
        case 2:
            RetirarDinero()
            break;
        case 3:
            TransferirDinero()
            break;
        case 4:
            ConsignarDinero()
            break;
        case 5:
            repetir = false
            break;
    }
}

 } else{
    console.log('Error de credenciales')
 }
} else{
    console.log('Usuario no existente')
}

