// 1. 两数相加
twosum (nums, target) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] + nums[j] == target) {
        arr.push(j)
        arr.push(i)
      }
    }
  }
  return arr
}

// 7.整数翻转
reverse (x) {
  let y = 0
  let max = (1 << 30) * 2
  let min = 1 << 31
  while (x) {
    y = y * 10 + x % 10
    x = parseInt(x / 10)
  }
  return y < min || y > max ? 0 : y
}

// 9.回文数
isPalindrome (x) {
  let y = x.toString().split('').reverse().join('')
  if (x.toString() === y.toString()) {
    return true
  } else {
    return false
  }
}

// 12.整数转罗马数字
intToRoman (num) {
  let s = ''
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10 , 9, 5, 4, 1]
  const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  for (let i = 0; i < nums.length; i++) {
    while (num >= nums[i]) {
      num -= nums[i]
      s += romans[i]
    }
  }
  return s
}

// 13.罗马数字转换成整数
romanToInt (s) {
  let newStr = s.replace('IV', 'A').replace('IX', 'B').replace('XL', 'E').replace('XC', 'F').replace('CD', 'H').replace('CM', 'J')
  let x = 0
  newStr.split('').forEach(item => {
    switch (item) {
      case 'I':
        x += 1
        break
      case 'V':
        x += 5
        break
      case 'X':
        x += 10
        break
      case 'L':
        x += 50
        break
      case 'C':
        x += 100
        break
      case 'D':
        x += 500
        break
      case 'M':
        x += 1000
        break
      case 'A':
        x += 4
        break
      case 'B':
        x += 9
        break
      case 'E':
        x += 40
        break
      case 'F':
        x += 90
        break
      case 'H':
        x += 400
        break
      case 'J':
        x += 900
        break
    }
  })
  return x
}

// 14. 最长字符串前缀
longestCommonPrefix (strs) {
  let s = ''
  let str = ''
  let arr = []
  if (strs[0]) {
    for (let i = 0; i <= strs[0].length; i++) {
      let m = 0
      s = strs[0].slice(0, i)
      for (let k = 0; k < strs.length; k++) {
        if (strs[k].indexOf(s) === 0) {
          m++
        }
      }
      if (m === strs.length) {
        arr.push(s)
      }
    }
  }
  if (arr.length > 0) {
    str = arr[arr.length - 1]
  }
  return str
}