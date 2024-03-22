//Práctica 3

//1. Definir Size
class Size{
    constructor(width = 80,height = 60){
        //Dimensiones actuales de la ventana
        this.width = width;//Anchura
        this.height = height;//Altura
    }
    resize(newWidth,newHeight){//Metodo
        this.width = newWidth;
        this.height = newHeight;
    }
}

//2. Definir Position
class Position{
    constructor(x = 0, y = 0){//Esquina superior izquierda
        //Punto-posicion
        this.x = x;//Posicion horizontal
        this.y = y;//Posicion vertical
    }
    move(newX,newY){//Metodo
        this.x = newX;
        this.y = newY;
    }
}

//3. Definir una clase ProgramWindow
class ProgramWindow{
    constructor(){
        this.screenSize = new Size(800, 600);
        this.size = new Size(); //Tamaño por defecto
        this.position = new Position(); //Posición por defecto
    }
    resize(newSize){
        //Limitar el tamanio minimo a 1x1
        const newWidth = Math.max(newSize.width, 1);
        const newHeight = Math.max(newSize.height, 1);

        //Limitar el tamanio maximo al tamaño de la pantalla menos la posicion actual de la ventana
        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;

        //Redimensionar la ventana a las dimensiones maximas posibles
        const finalWidth = Math.min(newWidth, maxWidth);
        const finalHeight = Math.min(newHeight, maxHeight);

        this.size.resize(finalWidth, finalHeight);
    }
    moveWindow(newPosition){
        //Limitar la posicion mnnima a (0, 0)
        const newX = Math.max(newPosition.x, 0);
        const newY = Math.max(newPosition.y, 0);

        //Limitar la posicion maxima al tamanio de la pantalla menos el tamanioo actual de la ventana
        const maxX = this.screenSize.width - this.size.width;
        const maxY = this.screenSize.height - this.size.height;

        //Mover la ventana a la posición mas grande posible
        const finalX = Math.min(newX, maxX);
        const finalY = Math.min(newY, maxY);

        this.position.move(finalX, finalY);
    }
}

function changeWindow(programWindow){
    //Cambiar el tamanio de la ventana a 400x300
    const newSize = new Size(400, 300);
    programWindow.resize(newSize);
  
    //Cambiar la posicion de la ventana a x=100, y=150
    const newPosition = new Position(100, 150);
    programWindow.moveWindow(newPosition);
  
    return programWindow;
}

//Pruebas
//------------------------------------
const size = new Size(1080,764);
console.log(size.width);
//1080
console.log(size.height);
//764

size.resize(1920,1080);
console.log(size.width);
//1920
console.log(size.height);
//1080
//------------------------------------
const point = new Position();
console.log(point.x);
//0
console.log(point.y);
//0

point.move(100,200);
console.log(point.x);
//100
console.log(point.y);
//200
//------------------------------------
const programWindow = new ProgramWindow();
console.log(programWindow.screenSize.width);
//800
//------------------------------------
const programWindow1 = new ProgramWindow();
const newSize = new Size(600,400);
programWindow1.resize(newSize);
console.log(programWindow1.size.width);
//600
console.log(programWindow1.size.height);
//400
//------------------------------------
const programWindow2 = new ProgramWindow();
const newPosition = new Position(50,100);
programWindow2.moveWindow(newPosition);
console.log(programWindow2.position.x);
//50
console.log(programWindow2.position.y);
//100
//------------------------------------
const programWindow3 = new ProgramWindow();
changeWindow(programWindow3);
console.log(programWindow3.size.width);
//400