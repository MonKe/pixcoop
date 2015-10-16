// lossless compression helper
var Cramm = {
  encode: function (str) {
    var buff = '', char = str[0], length = 1
    for (var i = 1; i < str.length; i++) {
      if (str[i] === char) length++
      else {
        if (length > 3) buff += '(' + char + length.toString (16) + ')'
        else {
          for (var j = 0; j < length; j++) buff += char
        }
        // reinitialize
        char = str[i]
        length = 1
      }
    }
    // evac last char
    if (length > 3) buff += '(' + char + length.toString (16) + ')'
    else {
      for (var j = 0; j < length; j++) buff += char
    }
    return buff
  },
  decode: function (str) {
    var buff = '', char = '', num = '', crammed = false
    for (var i = 0; i < str.length; i++) {
      switch (str[i]) {
        case '(':
          crammed = true
          break
        case ')':
          crammed = false
          for (var j = 0; j < parseInt (num, 16); j++) buff += char
          char = num = ''
          break
        default:
          if (crammed) {
            if (char) num += str[i]
            else char = str[i]
          }
          else buff += str[i]
      }
    }
    return buff
  },
  gain: function (str) {
    return Math.floor (10000 - (cramm.encode (str).length / str.length * 10000)) / 100 + '%'
  }
}

// string helper
var Str = {
  toMtx: function (str, width, truncate) {
    var acc = [], num = str.length / width
    if (truncate) num = Math.ceil (num)
    else Math.floor (num)
    for (var i = 0; i < num; i++)
      acc.push (str.slice (i * width, i * width + width).split (''))
    return acc
  },
  render: function (tpl, params) {
    return Object.keys (params).reduce (function (acc, x) {
      return acc.replace (new RegExp ('\\$' + x, 'g'), params[x])
    }, tpl)
  }
}

// matrix helper
var Mtx = {
  toStr: function (mtx) {
    return mtx.map (function (x) { return x.join ('') }).join ('')
  }
}
