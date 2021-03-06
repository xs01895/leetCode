# **leetCode by javaScript**  
_整理一点我自己的解题思路_

## `1. twoSum` 两数相加
通过两次遍历 nums 数组元素，以 i， j < i 的形式，获取的数组元素相加与 target 相比较，从而获取数组下标

***  
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

## `7. reverseInteger` 整数翻转
需要考虑两个点，1是保证在计算机二进制的32位有效数，以左移运算符的形式获得最大值、最小值，2是整数的翻转，这里我自己的想法，是把数字转换成字符串然后进行翻转，再加上数字的正负，还有一个就是采用取余数的方法，将给定的整数逆向运算。我采用了第二种  
*** 
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

## `9. isPalindrome` 回文数
判断带符号的数字翻转后与原来的值相同，字符串翻转
*** 
    isPalindrome (x) {
      let y = x.toString().split('').reverse().join('')
      return x.toString() === y    
    }

## `12. intToRoman` 整数转换成罗马数字
我一开始想要用 while 循环对 num 取余数依次取出对应数位上的数，后来还是避免不不了重复的判断900、400、90…等特殊数字，看了评论采用减法比较比较当前的值和要匹配的罗马数字，恍然大悟
***
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

## `13. romanToInt` 罗马数字转换整数
罗马数字字符串遍历相加，因为罗马数字有一定的规则，所以只需要考虑4、9、40、90、400、900这几个特殊数字即可，对于 java 和 JavaScript 而言，可以将其中的特殊字符替换成自定义的‘罗马数字’，或者是以 hashMap 的形式去比较每个字符与左右的关系，左减右加
***
    romanToInt (s) {
      let x = 0
      let newStr = s.replace('IV', 'A').replace('IX', 'B').replace('XL', 'E').replace('XC', 'F').replace('CD', 'H').replace('CM', 'J')
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

## `14. longestCommonPrefix` 最长字符前缀
我的思路是取字符串数组第一个元素，依次截取字符串，然后采用 indexOf 对比
也可以采用双 for 循环，每次只比较1个字符，正确就塞，不正确就 return
***
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

## `20. isValid` 有效的括号
这题的思路很简单，因为要求括号必须是以相同的类型闭合，并且保证正确的顺序，那么就简单了，假设字符串里含有一组括号是符合条件的。那就先把这组符合条件的删掉，在比较剩下的字符串，循环的思想，直至字符串删为空，或者字符串不在改变的时候，循环结束
***
    isValid (s) {
      var length = s.length
      while (length > 0) {
        let a = s.replace('{}', '').replace('[]', '').replace('()', '')
        if (a === s) break
        s = a
        length = a.length
      }
      return s === ''
    }

