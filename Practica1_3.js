class Size{
    constructor(width = 80, height = 60){
        this.width = width;
        this.height = height;
    }
    resize(newWidth, newHeight){
        this.width = newWidth;
        this.height = newHeight;
    }
}

class Position{
    constructor(x=0,y=0){
        this.x = x;
        this.y = y;
    }

    move (newX, newY){
        this.x = newX;
        this.y = newY;
    }
}

class ProgramWindow{
    constructor(){
        this.screenSize = new Size(800,600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(newSize){
        if (newSize.width < 1){
            newSize.width = 1;
        }
        if (newSize.height <1){
            newSize.height = 1;
        }
        if ((this.position.x + newSize.width) > this.screenSize.width){
                newSize.width = this.screenSize.width - this.position.x;
        }
        if ((this.position.y + newSize.height) > this.screenSize.height){
                newSize.height = this.screenSize.height - this.position.y;
        }
        this.size = newSize;
        
    }

    move(newPosition){
        if (newPosition.x < 0){
            newPosition.x = 0;
        }
        if (newPosition.y < 0){
            newPosition.y = 0;
        }
        if ((this.size.width+newPosition.x) > this.screenSize.width){
            newPosition.x = this.screenSize.width - this.size.width;
        }
        if ((this.size.height+newPosition.y) > this.screenSize.height){
            newPosition.y = this.screenSize.height - this.size.height;
        }
        this.position = newPosition;
    }
}

function changeWindow(newProgramWindow){
    newProgramWindow.resize(new Size(400,300));
    newProgramWindow.move(new Position(100,150));
}

//Puntos incluidos en la práctica

//Primer codigo
const size = new Size(1080,764);
console.log(size.width);
console.log(size.height);

size.resize(1920,1080);
console.log(size.width);
console.log(size.height);
console.log();

//Segundo codigo
const point = new Position();
console.log(point.x);
console.log(point.y);

point.move(100,200);
console.log(point.x);
console.log(point.y);
console.log();

//Tercer código
/*const programWindow = new ProgramWindow();
console.log(programWindow.screenSize.width);
console.log();*/

//Cuarto código
/* const programWindow = new ProgramWindow();
const newSize = new Size(600,400);
programWindow.resize(newSize);
console.log(programWindow.size.width);
console.log(programWindow.size.height); */

//Quinto código
/* const programWindow = new ProgramWindow();

const newPosition = new Position(50,100);
programWindow.move(newPosition)
console.log(programWindow.position.x);
console.log(programWindow.position.y); */

//Sexto código
const programWindow = new ProgramWindow();
changeWindow(programWindow);
console.log(programWindow.size.width);