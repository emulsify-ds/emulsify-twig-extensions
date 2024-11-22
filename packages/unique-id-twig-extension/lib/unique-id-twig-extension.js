'use strict';

module.exports = uniqueIdTwigExtension;

function uniqueIdTwigExtension(Twig) {
  Twig.extendFunction("uniqueId", function(additional_attributes = [], attributes = '') {
  console.log('Inside unique ID function');
    //   attributes = [];

  //   for (const [key, value] of Object.entries(additional_attributes)) {
  //     // If not keys array.
  //     if (key !== '_keys') {
  //       switch (typeof value) {
  //         case 'string':
  //         case 'boolean':
  //         case 'number':
  //           // Handle bem() output (pass in exactly the result).
  //           if (typeof value === 'string' && value.includes('=')) {
  //             attributes.push(String(value));
  //           }
  //           else {
  //             attributes.push(key + '="' + String(value) + '"');
  //           }
  //           break;
  //         case 'object':
  //           // use Array.isArray to differentiate regular objects from arrays
  //           if (Array.isArray(value)) {
  //             attributes.push(key + '="' + value.join(' ') + '"');
  //           }
  //           break;
  //       }
  //     }
  //   }

  //   return attributes.join(' ');
  });
}
