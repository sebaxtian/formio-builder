// JavaScript API
// import Formio from 'formiojs/Formio';
// // const Formio = require('formiojs');

// // Form Renderer
// import FormioForm from 'formiojs/Form';
// // const FormioForm = require('formiojs/form');

// // Form Utilities
// import FormioUtils from 'formiojs/utils';
// const FormioUtils = require('formiojs/utils');

// // Form Renderer example
// const formRenderer = new FormioForm(document.getElementById('formelement'), 'https://examples.form.io/example');
// formRenderer.render();

// Form Utilities example
// const formUtilities = new Formio('https://examples.form.io/example');
// formUtilities.loadForm().then((form) => {
//   FormioUtils.eachComponent(form.components, (component) => {
//     console.log('Componente: ', component);
//   });
// });

// Form Renderer example
// Formio.createForm(
//     document.getElementById('formelement'),
//     'https://examples.form.io/example'
// );

import {i18n} from './i18n';
import JSONFormatter from 'json-formatter-js';

// Verifica en que tipo de ambiente esta la aplciacion
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
} else {
  console.log('Looks like we are in production mode!');
}

// Eventos en Tabs de Navs
$('#tabsBuilder a').click(function(e) {
  e.preventDefault();
  // eslint-disable-next-line no-invalid-this
  $(this).tab('show');
});
// Copiar el JSON Form Schema al porta papeles
$('#btncopiar').click(function(e) {
  e.preventDefault();
  // Crea un campo de texto "oculto"
  const aux = document.createElement('input');
  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute('value', JSON.stringify(jsonformschema));
  // Añade el campo a la página
  document.body.appendChild(aux);
  // Selecciona el contenido del campo
  aux.select();
  // Copia el texto seleccionado
  document.execCommand('copy');
  // Elimina el campo de la página
  document.body.removeChild(aux);
});
// Descargar el JSON Form Schema en archivo JSON
$('#btndescargar').click(function(e) {
  e.preventDefault();
  const data =
    'data:text/json;charset=utf-8,' +
    encodeURIComponent(JSON.stringify(jsonformschema));
  const linkdescarga = document.getElementById('linkdescarga');
  linkdescarga.setAttribute('href', data);
  linkdescarga.setAttribute('download', 'jsonformschema.json');
  linkdescarga.click();
});

// JSON Form Schema
let jsonformschema = null;

// Formio Builder example
Formio.builder(document.getElementById('formbuilder'), jsonformschema, {
  language: 'es',
  i18n: i18n,
})
    .then((formbuilder) => {
      formbuilder.on('render', (formelement) => {
      // Actualiza el JSON Form Schema
        jsonformschema = formbuilder.form;
        // Form Renderer example
        Formio.createForm(
            document.getElementById('formelement'),
            jsonformschema,
            {
              language: 'es',
              i18n: i18n,
            }
        );
        const formatter = new JSONFormatter(jsonformschema);
        $('#jsonformat').empty();
        $('#jsonformat').append(formatter.render());
      });
    })
    .catch((err) => {
      console.log('err: ', err);
    });
