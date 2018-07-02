/**
 * Capitalize first letter and lowercase rest of the word
 * @param str
 * @returns {string}
 */
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();