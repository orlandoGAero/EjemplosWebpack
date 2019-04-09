export class UI {

	constructor() {
		this.sinTareas = document.getElementById('sintareas');
		this.tareas = document.getElementById('contareas');
	}

	render(tareas) {
		if (tareas.length === 0) {
			this.sinTareas.classList.remove('uk-hidden');
			this.sinTareas.classList.add('uk-visible');
		} else if(tareas.length > 0) {
			this.tareas.classList.remove('uk-hidden');
			this.tareas.classList.add('uk-visible');
		}

		this.sinTareas.innerHTML = `<h1 class='uk-text-danger'>No hay Tareas</h1>`;

		let div_h2 = document.createElement('div');
		div_h2.classList.add('uk-width-1-1@m');

		let h2 = document.createElement('h2');
		h2.classList.add('uk-text-success', 'uk-flex', 'uk-flex-center');
		let contenido = document.createTextNode('Tareas Agregadas');
		h2.appendChild(contenido);

		div_h2.appendChild(h2);

		let div_tb = document.createElement('div');
		div_tb.classList.add('uk-margin','uk-width-1-1@m', 'uk-padding');


		let div_head = document.createElement('div');
		let uk_grid = document.createAttribute('uk-grid');
		div_head.classList.add('uk-grid-collapse', 'uk-text-center');
		div_head.setAttributeNode(uk_grid);

		const div_body  = document.createElement('div');
		div_body.setAttribute("id", "tbody");

		div_tb.appendChild(div_body);
		div_tb.insertBefore(div_head, div_body);

		let div_tarea = document.createElement('div');
		div_tarea.classList.add('uk-width-3-4@s', 'heading', 'border-der');
		let text_t = document.createTextNode('Tarea');
		div_tarea.appendChild(text_t);
		
		let div_accion = document.createElement('div');
		div_accion.classList.add('uk-width-1-4@s', 'heading');
		let text_a = document.createTextNode('Acción');
		div_accion.appendChild(text_a);
		
		div_head.appendChild(div_accion);
		div_head.insertBefore(div_tarea, div_accion);

		tareas.forEach(tarea => {
			let i = 0;

			let div_data_i = document.createElement('div');
			let uk_grid_d_i = document.createAttribute('uk-grid');
			div_data_i.classList.add('uk-grid-collapse', 'data');
			div_data_i.setAttributeNode(uk_grid_d_i);

			let div_tarea_dt_i = document.createElement('div');
			div_tarea_dt_i.classList.add('uk-width-3-4@s', 'uk-text-left');
			div_tarea_dt_i.textContent = `${tarea.tarea}`;

			let div_accion_dt_i = document.createElement('div');
			div_accion_dt_i.classList.add('uk-width-1-4@s', 'uk-flex', 'uk-flex-center', 'uk-flex-middle', 'acciones');
			div_accion_dt_i.innerHTML = 
			`
				<a class="detalle uk-button-default" href="#modal-center" uk-toggle name="details" data-id="${tarea.id}"></a>
				<a class="editar uk-button-default" href="#modal-center" uk-toggle name="edit" data-edit-id="${tarea.id}"></a>
				<button class="eliminar uk-button-default" value="${tarea.id}" name="delete"></button>
			`;

			div_body.appendChild(div_data_i);
			div_data_i.appendChild(div_tarea_dt_i);
			div_data_i.appendChild(div_accion_dt_i);

			i++;
		})
		
		this.tareas.appendChild(div_h2);
		this.tareas.appendChild(div_tb);
	}

	addTareaUI(divtbody, tarea) {
		let div_data = document.createElement('div');
		let uk_grid = document.createAttribute('uk-grid');
		div_data.classList.add('uk-grid-collapse', 'data');
		div_data.setAttributeNode(uk_grid);

		let div_tarea = document.createElement('div');
		div_tarea.classList.add('uk-width-3-4@s', 'uk-text-left');
		div_tarea.textContent = `${tarea.tarea}`;

		let div_accion = document.createElement('div');
		div_accion.classList.add('uk-width-1-4@s', 'uk-flex', 'uk-flex-center', 'uk-flex-middle', 'acciones');
		div_accion.innerHTML = 
		`
			<a class="detalle uk-button-default" href="#modal-center" uk-toggle name="details" data-id="${tarea.id}"></a>
			<a class="editar uk-button-default" href="#modal-center" uk-toggle name="edit" data-edit-id="${tarea.id}"></a>
			<button class="eliminar uk-button-default" value="${tarea.id}" name="delete"></button>
		`;

		divtbody.appendChild(div_data);
		div_data.appendChild(div_tarea);
		div_data.appendChild(div_accion);
	}

	delTareaUI(element) {
		if (element.name === 'delete') {
			element.parentElement.parentElement.remove();
		}
	}

	showDetTarea(div, tareas) {

		const {tarea, completado, fecha} = tareas;

		const date = fecha.split(" ");
		const anio = date[0].substring(0,4);
		let mes = date[0].substring(5,7);
		const dia = date[0].substring(8,10);

		switch (mes) {
			case '01':
				mes = 'Enero';
				break;
			case '02':
				mes = 'Febrero';
				break;
			case '03':
				mes = 'Marzo';
				break;
			case '04':
				mes = 'Abril';
				break;
			case '05':
				mes = 'Mayo';
				break;
			case '06':
				mes = 'Junio';
				break;
			case '07':
				mes = 'Julio';
				break;
			case '08':
				mes = 'Agosto';
				break;
			case '09':
				mes = 'Septiebre';
				break;
			case '10':
				mes = 'Octubre';
				break;
			case '11':
				mes = 'Noviembre';
				break;
			case '12':
				mes = 'Diciembre';
				break;
		}

		const fechaTarea = `${dia} ${mes} ${anio}`;

		if (completado === 0)
			status = 'No Completa';
		else
			status =  'Completa';

		let vistaDet = 
		`
		    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

		        <button class="uk-modal-close-default" type="button" uk-close></button>

		        <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m">
				    <div class="uk-card-badge uk-label" id="staTar">${status}</div>
				    <div>
			    		<h3 class="uk-text-primary uk-text-bold uk-margin-medium-top">${tarea}</h3>
	    				<div class="uk-text-bold">${fechaTarea}</div>
				    </div>
				</div>

		    </div>
		`;

		div.innerHTML = vistaDet;

		const badge = div.querySelector('#staTar');

		if (completado === 0)
			badge.className += ' uk-label-danger';
		else
			badge.className  += ' uk-label-success';
	}

	showEditTarea(div, tareas) {
		const {tarea, completado, fecha} = tareas;

		const date = fecha.split(" ");
		const anio = date[0].substring(0,4);
		let mes = date[0].substring(5,7);
		const dia = date[0].substring(8,10);

		switch (mes) {
			case '01':
				mes = 'Enero';
				break;
			case '02':
				mes = 'Febrero';
				break;
			case '03':
				mes = 'Marzo';
				break;
			case '04':
				mes = 'Abril';
				break;
			case '05':
				mes = 'Mayo';
				break;
			case '06':
				mes = 'Junio';
				break;
			case '07':
				mes = 'Julio';
				break;
			case '08':
				mes = 'Agosto';
				break;
			case '09':
				mes = 'Septiebre';
				break;
			case '10':
				mes = 'Octubre';
				break;
			case '11':
				mes = 'Noviembre';
				break;
			case '12':
				mes = 'Diciembre';
				break;
		}

		const fechaTarea = `${dia} ${mes} ${anio}`;

		let atributo = '';
		if (completado === 0) {
			status = 'No Completa';
		}
		else {
			status =  'Completa';
			atributo = 'checked';
		}

		let vistaEdit = `
			<div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

		        <button class="uk-modal-close-default" type="button" uk-close></button>

		        <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m">
				    
				    <form id="formEdit">
					    <fieldset class="uk-fieldset">

					        <legend class="uk-legend uk-text-primary uk-text-bold">Editar Tarea</legend>
							
					        <div class="uk-margin">
					            <input class="uk-input uk-width-1-2@s" type="text" id="taskEdit" value="${tarea}">
					        	<button class="uk-button uk-button-primary">Editar</button>
					        </div>
					        <div>
						        <span class="texto" id="statusTxt">${status}</span>
						        <label class="switch">
									<input type="checkbox" ${atributo} id="checkSta">
									<div class="slider round"></div>
						        </label>
					        </div>
						</fieldset>
					</form>
	    			<div class="uk-text-bold">${fechaTarea}</div>
				</div>

		    </div>
		`;

		div.innerHTML = vistaEdit;

		const txtSpan = document.querySelector('#statusTxt');
		const inputCheck = document.querySelector('#checkSta');

		inputCheck.addEventListener('click', (e) => {
			let valorCheck = e.target.checked;

			if (valorCheck === true) {
				txtSpan.innerHTML = 'completa';
			} else if (valorCheck === false) {
				txtSpan.innerHTML = 'no Completa';
			}
		});
	}

}