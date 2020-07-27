const { v4: uuidv4 } = require('uuid');
module.exports = {

  friendlyName: 'Get uuid',

  sync: true,

  description: 'To generate random ID for our ideas',

  inputs: {

  },

  exits: {

    success: {
      outputFriendlyName: 'Uuid',
    },

  },
  fn: function (inputs) {

    // Get uuid.
    let  uuid = uuidv4();

    // Send back the result through the success exit.
    return uuid;
  }

};

