const animal = {
	nombre: "Felix",
	tipo: "gato",
	edad: "4",
	comer() {
		console.log(`${animal.nombre} esta comiendo`)
        console.log(`${this.nombre} esta comiendo`)
	}
}

//console.log(animal.comer())
animal.comer()