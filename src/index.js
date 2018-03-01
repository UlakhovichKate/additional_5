module.exports = function check(str, bracketsConfig) {
  // your solution
    var brackets = {};
    for(var i in bracketsConfig) {
      brackets[bracketsConfig[i][1]] = bracketsConfig[i].join('');
    }
    var dublicate = str;
    for(var i = 0; i < str.length; i++) {
      if(brackets[str[i]] !== undefined) {
        dublicate = dublicate.replace(brackets[str[i]], '');
      }
    }
    if (dublicate.length !== 0){
      return false;
    }
    else return true;
}
