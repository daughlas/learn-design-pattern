let star = {
  name: '吕嘉文',
  age: 30,
  phone: '13123537191'
}

let agent = new Proxy(star, {
  get: function(target, key) {
    if (key === 'phone') {
      // 返回经纪人自己的电话
      return '代理人的电话'
    }
    if (key === 'price') {
      // 明星不报价，经纪人报价
      return 120000
    }
    return target[key]
  },
  set: function(target, key, val) {
    if (key === 'customPrice' ) {
      if (val < 100000) {
        // 最低 10w
        throw new Error('价格太低')
      } else {
        target[key] = val
        return true
      }
    }
  }
})


console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);
agent.customPrice = 180000;
console.log(agent.customPrice);