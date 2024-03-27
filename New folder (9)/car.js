// Registering component in log-component.js
AFRAME.registerComponent('car', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'}
    },
    init: function () {
        console.log(this.data.message);
      }
  });