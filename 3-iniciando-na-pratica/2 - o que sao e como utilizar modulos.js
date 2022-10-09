// Required JS

/* o require é uma forma de chamar módulos que já são nativos do JS ou módulos que podem ser criados e instalados no nodeJS */

const path = require('path')
  console.log('path');
// é necessário colocar um argumento na função required

const path2 = require('path2')

console.log(path2.basename(__filename));

