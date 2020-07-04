import $ from 'jquery'
import getCart from '../shopping-cart/get-cart'
import StateMachine from 'javascript-state-machine'

export default class Item {
  constructor(list, data) {
    this.list = list
    this.data = data
    this.$el = $('<div>')
    this.cart = getCart()
  }

  initContent() {
    let $el = this.$el
    let data = this.data
    $el.append($(`<p>名称：${data.name}</p>`))
    $el.append($(`<p>价格：${data.price}</p>`))
  }

  initBtn() {
    let $el = this.$el
    let $btn = $('<button>test</button>')
    let _this = this
    let fsm = new StateMachine({
      init: '加入购物车',
      transitions: [
        {
          name: 'addToCart',
          from: '加入购物车',
          to: '从购物车删除'
        },
        {
          name: 'deleteFromCart',
          from: '从购物车删除',
          to: '加入购物车'
        },
      ],
      methods: {
        onAddToCart: function() {
          _this.addToCartHandler()
          updateText()
        },
        // 或者用 => 直接用 this
        onDeleteFromCart: function() {
          _this.deleteFromCartHandler()
          updateText()
        }
      }
    })

    function updateText() {
      $btn.text(fsm.state)
    }

    $btn.click(() => {
      // TODO 添加到购物车 或者 从购物车一处
      if (fsm.is('加入购物车')) {
        fsm.addToCart()
      } else {
        fsm.deleteFromCart()
      }
    })

    updateText()
    $el.append($btn)
  }

  addToCartHandler() {
    this.cart.add(this.data)
  }

  deleteFromCartHandler() {
    this.cart.del(this.data.id)
  }

  render() {
    this.list.$el.append(this.$el)
  }

  init() {
    this.initContent()
    this.initBtn()
    this.render()
  }
}