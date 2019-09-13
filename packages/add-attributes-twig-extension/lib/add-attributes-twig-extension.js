'use strict';

module.exports = addAttributesTwigExtension;

function addAttributesTwigExtension(Twig) {
  Twig.extendFunction("add_attributes", function(additional_attributes = [], attributes = '') {
    attributes = [];
  
    for (const [key, value] of Object.entries(additional_attributes)) {
      // If not keys array.
      if (key !== '_keys') {
        // If multiples items in value as array (e.g., class: ['one', 'two']).
        if (Array.isArray(value)) {
          attributes.push(key + '="' + value.join(' ') + '"');
        }
        else {
          // Handle bem() output (pass in exactly the result).
          if (value.includes('=')) {
            attributes.push(value);
          }
          else {
            attributes.push(key + '="' + value + '"');
          }
        }
      }
    }
  
    return attributes.join(' ');
  });
}
