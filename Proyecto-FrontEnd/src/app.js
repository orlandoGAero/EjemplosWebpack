import { mostrarAlert } from './mensaje';
import $ from 'jquery';
import './styles.css';

let boton = document.getElementById('btn-alert');

boton.addEventListener("click", mostrarAlert);

$("#btn-jq").click(() => alert('boton con jquery') );