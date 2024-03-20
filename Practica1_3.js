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

class ProgramVindow{
    constructor(){
        this.screenSize = new Size(600,800);
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