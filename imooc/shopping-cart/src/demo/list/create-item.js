import Item from './item'

// 工厂函数
// 初始状态，后续会补充优惠商品的处理逻辑
// export default function createItem(list, itemData) {
//   return new Item(list, itemData)
// }

function createDiscount(itemData) {
  // 写这个工厂函数处理折扣信息的好处是，将商品本身的信息交给商品来处理
  // 用代理做折扣显示
  return  new Proxy(itemData, {
    get: function(target, key, receiver) {
      if (key === 'name') {
        return `${target[key]}【折扣】`
      }
      if (key === 'price') {
        return target[key] * 0.8
      }
      return target[key]
    }
  })
}

// 新的函数
export default function createItem(list, itemData) {
  if (itemData.discount) {
    itemData = createDiscount(itemData)
  }
  return new Item(list, itemData)
}