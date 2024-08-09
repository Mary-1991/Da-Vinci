$(document).click(function () {
    var miTexto1= $("#uno").text();

    alert(miTexto1); })


$(document).click(function () {
    var miTexto2= $("#dos").text();

    alert(miTexto2); })

$(document).click(function () {
    var miTexto3= $("#tres").text();
    
    alert(miTexto3); })

var creandoElemento = document.createElement("p");
creandoElemento.textContent = "Considerado el paradigma del homo universalis, del sabio renacentista versado en todos los ámbitos del conocimiento humano, Leonardo da Vinci (1452-1519) incursionó en campos tan variados como la aerodinámica, la hidráulica, la anatomía, la botánica, la pintura, la escultura y la arquitectura, entre otros. Sus investigaciones científicas fueron, en gran medida, olvidadas y minusvaloradas por sus contemporáneos; su producción pictórica, en cambio, fue de inmediato reconocida como la de un maestro capaz de materializar el ideal de belleza en obras de turbadora sugestión y delicada poesía."
document.body.appendChild(creandoElemento);

    

