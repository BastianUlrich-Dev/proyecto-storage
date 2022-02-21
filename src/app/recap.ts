const username:string = 'Bastian';

const sum = (a:number, b:number) =>{
    return a + b;
} 

sum(1,3);

class Persona {
    // age: number;
    // lastname: string;

    constructor(public age: number, public lastname: string){
        // this.age = age;
        // this.lastname = lastname;
    }

}

const persona = new Persona(14, 'felipe');

persona.age;