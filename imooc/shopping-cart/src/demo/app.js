import $ from 'jquery'
import ShoppingCart from './shopping-cart/shopping-cart'
import List from './list/list'

export default class App {
  constructor(id) {
    this.$el = $('#' + id)
  }

  initShoppingCart() {
    let shoppingCart = new ShoppingCart(this)
    shoppingCart.init()
  }

  initList() {
    let list = new List(this)
    list.init()
  }

  init() {
    this.initShoppingCart()
    this.initList()
  }
}