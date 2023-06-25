function exesOhs(str = '') {
  str = str.toLowerCase()

  let result = 0;
  for (i=0; i < str.length; i++){
    if(str[i] === 'x') result++
    else result--
  }
  
  return result === 0;
}

module.exports = exesOhs;
