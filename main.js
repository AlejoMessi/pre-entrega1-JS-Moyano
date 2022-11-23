
// nombre
let nombreIngresado = prompt('ingrese su nombre')
    alert('Hola '+nombreIngresado+ ' bienvenido!')

// acceso +18
let edad = ''
let mayorEdad = true

do {
    edad = prompt(nombreIngresado+' ingrese su edad')
        if (edad >= 18) {
            alert(nombreIngresado+' puedes ingresar, eres mayor de edad')
            mayorEdad = false
        } else {
            alert('lo siento '+nombreIngresado+' el sitio no es apto para menores de edad')
        }
    
} while (mayorEdad);


// compra

let producto = ''
let precio = 0
let cantidad = 0
let precioTotal = 0
let cantidadTotal = 0
let seguirComprando = false

do {
    producto = prompt(nombreIngresado+' que deseas comprar? skyy, smirnoff, speed, monster')
    cantidad = parseInt(prompt('cuantos necesitas?'))

    switch (producto) {
        case 'skyy':
            precio = 400
            break;
        case 'smirnoff':
            precio = 300
            break;
        case 'speed':
            precio = 100
            break;    
        case 'monster':
            precio = 200
            break;

        default:
            alert('lo siento, ese producto no esta disponible')
            precio = 0
            cantidad = 0
            break;
    }

    precioTotal += precio * cantidad

    cantidadTotal += cantidad

    seguirComprando = confirm('queres seguir comprando?')

} while (seguirComprando);

// descuento
let precioDescuento = 500;

if (precioTotal > 2000) {
    const restar = (a, b) => a - b;
    let precioFinal = restar(precioTotal, precioDescuento);
    alert('Has comprado '+cantidadTotal+' productos, y el total de la compra es '+precioTotal+', pero como has comprado demasiado, te hicimos un descuento. y te quedaria en  '+precioFinal);

    let pagar = prompt('Como deseas pagar? efectivo o tarjeta');
    if (pagar == 'efectivo') {
        alert('tu total es de '+precioFinal);
    } else if (pagar == 'tarjeta') {
        alert('bueno, ahora te mostramos las cuotas que tenes para poder abonar');
    } else {
        alert('selecciona una  las 2 opciones');
        pagar = prompt('Como deseas pagar? efectivo o tarjeta');
    }
} else {
    alert('has comprado: '+cantidadTotal+' productos y el total de la compra es: '+precioTotal)

    let pagar = prompt('Como deseas pagar? efectivo o tarjeta');
    if (pagar == 'efectivo') {
        alert('tu total es de '+precioTotal);
    } else if (pagar == 'tarjeta') {
        alert('bueno, ahora te mostramos las cuotas que tenes para poder abonar');
    } else {
        alert('selecciona una  las 2 opciones');
        pagar = prompt('Como deseas pagar? efectivo o tarjeta');
    }
}

// pagar

let realizarPago = true
do {
        pagoInteres = prompt('en cuantas cuotas desea pagar: 3 cuotas, 6 cuotas, 12 cuotas') 
            switch (pagoInteres) {
                case '3 cuotas':
                    interes = '10%'
                    break;
                case '6 cuotas':
                    interes = '15%'
                    break;
                case '12 cuotas':
                    interes = '30%'
                    break;
            
                default:
                    alert('por favor selecciona alguna de las opciones anteriores')
                    interes = 0
                    break;
            }
        
} while (realizarPago);

while () {
    
}


