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

// Formio Builder example
Formio.builder(document.getElementById('formbuilder'), null, {
  language: 'es',
  i18n: i18n,
})
    .then((formbuilder) => {
      formbuilder.on('render', (formelement) => {
      // Form Renderer example
        Formio.createForm(
            document.getElementById('formelement'),
            formbuilder.form,
            {
              language: 'es',
              i18n: i18n,
            }
        );
      });
    })
    .catch((err) => {
      console.log('err: ', err);
    });
