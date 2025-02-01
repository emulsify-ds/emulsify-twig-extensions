'use strict';

module.exports = uniqueIdTwigExtension;

function uniqueIdTwigExtension(Twig) {
  Twig.extendFunction("uniqueId", function(prepend = '') {

    class UniqueIdGenerator {
      constructor() {
        // Storage for unique ID on same page.
        this.uniqueIds = new Set();
      }

      /**
       * Generate a unique ID. Ensures unique on same page.
       *
       * @param {string} [prepend] - An optional string to prepend to the ID.
       * @return {string} - A unique ID, optionally prepended.
       */
      getUniqueId(prepend = '') {
        let id = this.generateRandomId();

        // Check if ID has already been used on the page.
        while (this.uniqueIds.has(id)) {
          id = this.generateRandomId();
        }

        this.uniqueIds.add(id);

        return prepend ? `${prepend}-${id}` : id;
      }

      /**
       * Generate a random ID.
       *
       * @param {number} length - The length of the generated ID (default 10).
       * @return {string} - A randomly generated string.
       */
      generateRandomId(length = 10) {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';

        // First letter must be a letter for DOM ids.
        let id = letters[Math.floor(Math.random() * letters.length)];

        for (let i = 1; i < length; i++) {
          id += chars[Math.floor(Math.random() * chars.length)];
        }

        return id;
      }
    }

    const idGenerator = new UniqueIdGenerator();
    return idGenerator.getUniqueId(prepend);

  });
}
