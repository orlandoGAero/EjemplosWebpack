export class Tareas {

	constructor() {
	 	this.URI = `http://localhost/orlando/apisPHP/api-tareas/api/tareas.php`;
	}
	
	async getTareas() {
		const response = await fetch(this.URI);
		const data = await response.json();
		return data;
	}

	async getTarea(idT) {
		const id = `?id=${idT}`;
		const url = this.URI + id;
		const respuesta = await fetch(url,{
			method: 'GET'
		});

		const data = await respuesta.json();
		return data;
	}

	async saveTareas(form) {
		const resp = await fetch(this.URI, {
			method: 'POST',
			body: new FormData(form)
		});

		const data = await resp.json();
		return data;
	}

	async updateTareas(idTarea, tarea) {
		const idT = `?id=${idTarea}`;
		const nomT = `&tarea=${tarea}`;
		const url = this.URI + idT + nomT;
		
		const resp = await fetch(url, {
			method: 'PUT'
		});

		return resp;
	}

	async deleteTareas(idT) {
		const id = `?id=${idT}`;
		const url = this.URI + id;
		
		const resp = await fetch(url, {
			method: 'DELETE'
		});

		return resp;
	}
}