// 状态（红灯、绿灯、黄灯）
class State {
  constructor() {
    this.color = color
  }
  handle(context) {
    console.log(`turn to ${this.color} light`)
    context.setState(this)
  }
}

// 主体 / 对象 / 实例
class Context {
  constructor() {
    this.state = null
  }
  getState() {
    return this.state
  }
  setState() {
    this.state = state
  }
}

// text
let context = new Context()

let green = new State('green')
let yellow = new State('yellow')
let red = new State('red')

// 绿灯亮了
green.handle(context)
console.log(context.getState())
//黄灯亮了
yellow.handle(context)
console.log(context.getState())
// 红灯亮了
red.handle(context)
console.log(context.getState())

// 状态的切换是在状态的对象上
// 状态的获取在主体这个对象上