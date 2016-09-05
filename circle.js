var PI = Math.PI;

// Export with exports statement
// This is just a helper function fo module.exports that collect properties and attach them to module.exports
// if and only if module.expots does not already have something attached to it

// exports.area = function(r) {
//     return PI * r * r;
// }

// exports.circumference = function(r) {
//     return 2 * PI * r;
// }

// Export with module.exports statement
// Return a JavaScript object

module.exports = function(r) {
    return {
        area: function() {
            return PI * r * r;
        },
        circumference: function() {
            return 2 * PI * r;
        }
    }
}

// Use the export statement to export instances of modules
// Use export.modules statement to export JavaScript objects