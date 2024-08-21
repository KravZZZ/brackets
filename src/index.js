module.exports = function check(str, bracketsConfig) {
  const obj = {}

  for(let i = 0; i < bracketsConfig.length; i++){
    obj[bracketsConfig[i][1]] = bracketsConfig[i][0]
  }

  const stack = []

  for(let i = 0; i < str.length; i++){
    if(obj.hasOwnProperty(str[i])){

      if(stack.length === 0 && obj[str[i]] !== str[i]){
        return false
      } else if(stack[stack.length - 1] ===  obj[str[i]]){
        stack.pop()
      } else if (obj[str[i]] === str[i]){
        stack.push(str[i])
      } else {
        return false
      }
    } else {
      stack.push(str[i])
    }
  }

  return stack.length === 0
}

