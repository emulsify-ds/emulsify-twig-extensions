'use strict';

module.exports = bemTwigExtension;

function bemTwigExtension(Twig) {
  Twig.extendFunction("bem", function(base_class, modifiers = [], blockname = '', extra = [], attributes = '') {
    let classes = [];

    // Helper function to sanitize and validate class names
    function sanitizeClassName(className) {
      // Strips out initial numbers. Replace non-matches with spaces, does strip non-english characters
      const sanitized = className.match(/-?[_a-zA-Z]+[_a-zA-Z0-9-]*/g);
      return sanitized ? sanitized.join(' ') : '';
    }

    // If using a blockname to override default class.
    if (blockname.length) {
        // Set blockname class.
        classes.push(blockname + '__' + base_class);

        // Set blockname--modifier classes for each modifier.
        if (modifiers.length && Array.isArray(modifiers)) {
        modifiers.forEach(function(modifier) {
            classes.push(blockname + '__' + base_class + '--' + modifier);
        });
        }
    }
    // If not overriding base class.
    else {
        // Set base class.
        classes.push(base_class);
        // Set base--modifier class for each modifier.
        if (modifiers.length && Array.isArray(modifiers)) {
        modifiers.forEach(function(modifier) {
            classes.push(base_class + '--' + modifier);
        });
        }
    }

    // If extra non-BEM classes are added.
    if (extra.length && Array.isArray(extra)) {
        extra.forEach(function(extra_class) {
        classes.push(extra_class);
        });
    }

    // Sanitize class names in the classes array
    classes = classes.map(function(className) {
        return sanitizeClassName(className);
    });

    attributes = 'class="' + classes.join(' ') + '"';
    return attributes;
  });
}
