/*  Objeto Personaje: Nombre, Forma, Posicion
    Metodo obtDetalles() que muestra propiedades del personaje */
class Personaje {
    constructor(Nombre, Forma, Posicion){
        this.Nombre = Nombre;
        this.Forma = Forma;
        this.Posicion = Posicion;
    }
    obtDetalles(){
        const Detalles = `Nombre: ${this.Nombre}, Forma: ${this.Forma}, Posicion: ${this.Posicion}`;
        console.log(Detalles);
        return this;
    }
}

/*  Objeto Ave: Habilidad, Masa
    Metodo: Volar()*/
class Ave extends Personaje {
    constructor(Nombre, Forma, Posicion, Habilidad, Masa){
        super(Nombre, Forma, Posicion);
        this.Habilidad = Habilidad;
        this.Masa = Masa;
    }   
    Volar(){
        console.log('Estoy volando!');
        return this;
    }
}

const AveUno = new Ave('Red','Redonda','Primer Heroe','Fuego','5kg');
const AveDos = new Ave('Chuck','Triangulo','Segundo Heroe','Electricidad','5kg');
const AveTres = new Ave('Bomb','Redonda','Tercer Heroe','Explota','5kg');

/*  Objeto Pig: Fortaleza, Puntos
    Metodos: Morir()*/
class Cerdo extends Personaje {
    constructor(Nombre, Forma, Posicion, Fortaleza, Puntos){
        super(Nombre, Forma, Posicion);
        this.Fortaleza = Fortaleza;
        this.Puntos = Puntos;
    }   
    Morir(){
        console.log('Me mori :(');
        return this;
    }
}

const CerdoUno = new Cerdo('Leonardo','Redonda','Primer Enemigo','Fuego','5kg');
const CerdoDos = new Cerdo('Puerco','Triangulo','Segun Enemigo','Electricidad','5kg');
const CerdoTres = new Cerdo('Puercovaca','Redonda','Tercer Enemigo','Explota','5kg');