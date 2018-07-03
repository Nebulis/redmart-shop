/**
 * Format a number to a USD price
 * Use USD as the output is expected to have only the dollar sign
 * @param price the price to format. Default to 0
 * @returns {string} formatted price in USD with 2 fraction digits
 */
export const price = (price = 0) => price.toLocaleString('en-US', {style: 'currency', currency: 'USD'});