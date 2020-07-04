import { log } from '../utils/log'

class Cart {
  constructor() {
    this.list = []
  }

  @log('add')
  add(data) {
    this.list.push(data)
  }

  @log('del')
  del(id) {
    this.list = this.list.filter(item => item.id !== id)
  }

  getList() {
    return this.list.map(item => {
      return item.name
    }).join('\n')
  }
}

// 返回单例
let getCart = (function() {
  let cart
  return function() {
    if (!cart) {
      cart = new Cart()
    }
    return cart
  }
})()

export default getCart