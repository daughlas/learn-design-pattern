import $ from 'jquery'
import { GET_LIST } from '../config/config'
import createItem from './create-item'

export default class List {
  constructor(app) {
    this.app = app
    this.$el = $('<div>')
  }

  loadData() {
    return fetch(GET_LIST).then(result => {
      return result.json()
    })
  }

  initItemList(data) {
    data.forEach(itemData => {
      // 创建一个 item 然后 init
      let item = createItem(this, itemData)
      item.init()
    })
  }

  render() {
    this.app.$el.append(this.$el)
  }

  init() {
    this.loadData().then(data => {
      this.initItemList(data)
    }).then(() => {
      this.render()
    })
  }
}