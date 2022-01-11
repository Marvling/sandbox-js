class Vector {
    constructor(x, y){
        this.x = x;
        this.y = y;
    };

    get (){
        return this
    };

    plus (vector={}){
        this.x += vector.x
        this.y += vector.y
    };

    minus (vector={}){
        this.x -= vector.x
        this.y -= vector.y
    };
}

let v1 = new Vector(3,5);
let v2 = new Vector(3,5);

class Group {
    constructor(itterableObject){
        this.list = []
        this.form([...itterableObject])
    }
    add (){

    }
    delete(){

    }
    has(){

    }
    form(arr = []){
        let oldArr = [...arr]
        let finalArr = []

        oldArr.forEach(e => {
            if (e in finalArr){
                pass
            }else {finalArr.push[e]}
        });

        this.list  = finalArr
    }
}

let g1 = new Group([10,20])
console.log(g1);