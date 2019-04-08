import { Tareas } from './Tareas';
import { UI } from './UI';
require('../css/main.css');

const tareas = new Tareas();
const ui = new UI();

// obtener Tareas
async function TareasFetch() {
	const data = await tareas.getTareas();
	ui.render(data);
}

document.addEventListener('DOMContentLoaded', TareasFetch);

// agregar Tarea
const formTarea = document.querySelector('#form-add');
formTarea.addEventListener('submit', async (e) => {

	e.preventDefault();
	const tarea = document.querySelector('#task').value;

	if (tarea === "") {
		console.log('Ingresa una tarea');
		return false;
	}

	const data = await tareas.saveTareas(formTarea);
	const bodyTb = document.querySelector('#tbody');
	formTarea.reset();

	if (document.body.contains(bodyTb)) {
		ui.addTareaUI(bodyTb, data);
	}
});

setTimeout(() => {
	
	const bodyTb = document.querySelector('#tbody');

	if (document.body.contains(bodyTb)) {
		bodyTb.addEventListener('click', async (e) => {
			const valTarea = e.target.value;
			const target = e.target;
			const targetName = e.target.name;

			if (targetName === 'delete') {
				await tareas.deleteTareas(valTarea);
				ui.delTareaUI(target)
			} else if (targetName === 'details') {

				const dataId = target.getAttribute('data-id');
				const data = await tareas.getTarea(dataId);
				const modal = document.querySelector('#modal-center');
				ui.showDetTarea(modal, data);
				
			} else if(targetName === 'edit') {
				const dataId = target.getAttribute('data-edit-id');
				const data = await tareas.getTarea(dataId);
				const modalEdit = document.querySelector('#modal-center');
				ui.showEditTarea(modalEdit, data);
				
				const formEdit = document.querySelector('#formEdit');
				formEdit.addEventListener('submit', async (e) => {
					// e.preventDefault();
					const tarea = document.querySelector('#taskEdit').value;
					await tareas.updateTareas(dataId, tarea);
				});
			}

		});
	}
}, 1500);



const date = new Date();
document.getElementById('anio').textContent = date.getFullYear();
