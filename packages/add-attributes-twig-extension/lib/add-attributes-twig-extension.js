'use strict';

module.exports = addAttributesTwigExtension;

function addAttributesTwigExtension(Twig) {
  Twig.extendFunction("add_attributes", function(additional_attributes = [], attributes = '') {
    attributes = [];

    for (const [key, value] of Object.entries(additional_attributes)) {
      // If not keys array.
      if (key !== '_keys') {
        switch (typeof value) {
          case 'string':
          case 'boolean':
          case 'number':
            // Handle bem() output (pass in exactly the result).
            if (typeof value === 'string' && value.includes('=')) {
              attributes.push(String(value));
            }
            else {
              attributes.push(key + '="' + String(value) + '"');
            }
            break;
          case 'object':
            // use Array.isArray to differentiate regular objects from arrays
            if (Array.isArray(value)) {
              attributes.push(key + '="' + value.join(' ') + '"');
            }
            break;
        }
      }
    }

    return attributes.join(' ');
  });
}
