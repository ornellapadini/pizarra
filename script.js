const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

//dimension de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//fijar background
ctx.strokeStyles = '#BADA55';

//como se unen las lineas
ctx.lineJoin = 'round';

//como se muestra el final de la linea
ctx.lineCap = 'round';

//grosor del lapiz
ctx.lineWidth = 30;

//mezcla color
ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;

let lastX = 0;
let lastY = 0;

let hue = 0;

let direction = true;

function draw (e) {
    if (!isDrawing) return;

    //logica de pizarra

    //COLORES
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    //inicializamos el trazo
    ctx.beginPath();

    ctx.moveTo(lastX, lastY);

    ctx.lineTo(e.offsetX, e.offsetY);

    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;

    if (hue >= 300) {
        hue = 0;
    }

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
    }

    if (direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }

}

window.addEventListener('mousedown', (e) => {
    isDrawing = true;

    [lastX, lastY] = [e.offsetX, e.offsetY];

});

window.addEventListener('mouseup', () => isDrawing = false);
window.addEventListener('mouseout', () => isDrawing = false );
window.addEventListener('mousemove', draw);
    




