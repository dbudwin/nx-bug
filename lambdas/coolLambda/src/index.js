/**
 * A simple hello world function
 * @param {string} name - Optional name to greet
 * @returns {string} A greeting message
 */
function helloWorld(name = "World") {
  return `Hello, ${name}!`;
}

module.exports = helloWorld;

