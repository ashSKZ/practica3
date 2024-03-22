/*Puntos de la práctica
    1. definir SIZE para almacenar las dimensiones de la ventana
    2. definir Position para almacenar la posición de una ventana
    3. definir una clase ProgramWindow
    4. añadir un método para redimensionar la ventana
    5. añadir un método para mover la ventana
    6. cambiar una ventana programa */

//1 clase para el tamaño
class Size{
    constructor(width=80, height =60){
        this.width= width;
        this.height =height ;
    }

    resize(newWidth, newHeight){
        this.width= newWidth;
        this.height=newHeight;
    }
}

//2 clase para la posición
class Position{
    constructor(x=0, y=0){
        this.x=x;
        this.y=y;

    }

    move(newX, newY){
        this.anchura= newX;
        this.altura=newY;
    }
}

//3 clase programWindow
//4 para redimensionar la ventana
//5 mover la ventana
class ProgramWindow{
    constructor(){
        this.screenSize=new Size(800,600);
        this.size=new Size();
        this.position=new Position();
    }
    resize(newSize){
        const newWidth = Math.max(1, newSize.width);
        const newHeight = Math.max(1, newSize.height);
        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;
        const nuevoTamWidth = Math.min(newWidth, maxWidth);
        const nuevoTamHeight = Math.min(newHeight, maxHeight);

        this.size.resize(nuevoTamWidth, nuevoTamHeight);
    }

    move(newPosition){
        const newX= Math.max(0,newPosition.x);
        const newY= Math.max(0,newPosition.y);
        const maxWidth = this.screenSize.width - this.size.width;
        const maxHeight = this.screenSize.height - this.size.height;
        const nuevoX = Math.min(newX, maxWidth);
        const nuevoY = Math.min(newY, maxHeight);
        this.position.move(nuevoX, nuevoY);
    }
    
}

function changeWindow(programWindow) {
    const newSize = new Size(400, 300);
    const newPosition = new Position(100, 150);
    
    programWindow.resize(newSize);
    programWindow.move(newPosition);
    
    return programWindow;
}

