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
Formio.builder(document.getElementById('formbuilder'))
    .then((formbuilder) => {
      console.log('formbuilder: ', formbuilder);
      formbuilder.on('render', (formelement) => {
        console.log('formelement: ', formelement);
        // Form Renderer example
        Formio.createForm(
            document.getElementById('formelement'),
            formbuilder.form
        );
      });
    })
    .catch((err) => {
      console.log('err: ', err);
    });
