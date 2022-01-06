const auto1 = ["Toyota","Hailux",130000,20000,2011];

function Auto (marca, modelo, kilometros, valorUsd, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.kilometros = kilometros;
    this.valorUsd = valorUsd;
    this.anio = anio;

    this.anioNuevo = function(){
        this.valor = this.valorUsd*0.98;
        console.log(`Debido a que el auto es un anio mas viejo, el nuevo precio es usd${this.valorUsd}`);
    }

    this.masKilometros = function(cantKilometros){
        this.kilometros += cantKilometros;
        if(cantKilometros<1000){
            this.valorUsd = this.valorUsd*0.99;
        }
        else if(cantKilometros>=1000 && cantKilometros<2000){
            this.valorUsd = this.valorUsd*0.97;
        }
        else if(cantKilometros>=2000 && cantKilometros<5000){
            this.valorUsd = this.valorUsd*0.9;
        }
        else{
            this.valorUsd = this.valorUsd*0.8;
        }
        console.log(`Se han recorrido ${cantKilometros} nuevos kilometros, por lo que el precio a disminuido a usd${this.valorUsd}. el tota de kilometros del auto es ${this.kilometros} kilometros`)
    }
}


const primerAuto = new Auto();
let index = 0;

auto1.forEach((valor, index) =>  {
    if(index == 0){
        primerAuto.marca = valor;
    }
    else if( index == 1){
        primerAuto.modelo = valor;
    }
    else if(index == 2){
        primerAuto.kilometros = valor;
    }
    else if(index == 3){
        primerAuto.valorUsd = valor;
    }
    else if(index == 4){
        primerAuto.anio = valor
    }
})

console.log(primerAuto.marca);
console.log(primerAuto.modelo);
console.log(primerAuto.kilometros+" km");
console.log("usd "+primerAuto.valorUsd);
console.log("Anio "+primerAuto.anio);
primerAuto.anioNuevo();
primerAuto.masKilometros(50000);


