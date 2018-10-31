let _ = require('lodash')

let result = _.compact([0, 1, false, 2, '', 3])


console.log(result) // => [1, 2, 3]
