export const ID = () => '_' + Math.random().toString(16).substr(2, 24);
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.