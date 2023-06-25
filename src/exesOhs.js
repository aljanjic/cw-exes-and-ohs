function exesOhs(str = '') {

  str = str.toLowerCase()

  if (str.indexOf('x') === -1 && str.indexOf('o') === -1) return true;

  let result = 0;
  for (i=0; i < str.length; i++){
    if(str[i] === 'x') result++
    else if ((str[i] === 'o'))result--
  }

  return result === 0;
}

module.exports = exesOhs;
