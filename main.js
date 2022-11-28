
// turno de atencion
for (let i = 1; i <= 5; i++) {

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
    let totalInteres = 0;

    const restar = (a, b) => a - b;
    const sumar = (a, b) => a + b;
    const calcularInteres = (a, b) => a * b;

    if (precioTotal > 2000) {
        
        let precioFinal = restar(precioTotal, precioDescuento);
        alert('Has comprado '+cantidadTotal+' productos, y el total de la compra es '+precioTotal+', pero como has comprado demasiado, te hicimos un descuento. y te quedaria en  '+precioFinal);
        
        // pagar
        let pagar = parseInt(prompt('en cuantas cuotas deseas pagar: 1, 3, 6'));
        if (pagar == 1) {
            alert('tu compra es de '+precioFinal);
        } else if (pagar == 3) {
            totalInteres = calcularInteres(precioFinal, 0.10)
            precioInteres = sumar(precioFinal, totalInteres)
            alert('Pagando en 3 cuotas, tiene un interes del 10%, que seria: '+totalInteres+ ', asi que su compra tendria un total de: '+precioInteres);

        } else if (pagar == 6) {
            totalInteres = calcularInteres(precioFinal, 0.20)
            precioInteres = sumar(precioFinal, totalInteres)
            alert('Pagando en 6 cuotas, tiene un interes del 20%, que seria: '+totalInteres+ ', asi que su compra tendria un total de: '+precioInteres);
        }
        else {
            alert('selecciona una  las opciones anteriores');
            pagar = prompt('en cuantas cuotas deseas pagar');
        }
    } else {
        alert('has comprado: '+cantidadTotal+' productos y el total de la compra es: '+precioTotal)
        
        // pagar
        let pagar = parseInt(prompt('en cuantas cuotas deseas pagar: 1, 3, 6'));
        if (pagar == 1) {
            alert('tu compra es de '+precioTotal);
        } else if (pagar == 3) {
            totalInteres = calcularInteres(precioTotal, 0.10)
            precioInteres = sumar(precioTotal, totalInteres)
            alert('Pagando en 3 cuotas, tiene un interes del 10%, que seria: '+totalInteres+ ', asi que su compra tendria un total de: '+precioInteres);

        } else if (pagar == 6) {
            totalInteres = calcularInteres(precioTotal, 0.20)
            precioInteres = sumar(precioTotal, totalInteres)
            alert('Pagando en 6 cuotas, tiene un interes del 20%, que seria: '+totalInteres+ ', asi que su compra tendria un total de: '+precioInteres);
        }
        else {
            alert('selecciona una  las opciones anteriores');
            pagar = prompt('en cuantas cuotas deseas pagar');
        }
    }

// final de la reserva de turnos
    alert('tu compra ya esta realizada, tu turno para retirar la compra es la N. '+i+' a nombre de: '+nombreIngresado+ ' muchas gracias por elegirnos!')
    
}

