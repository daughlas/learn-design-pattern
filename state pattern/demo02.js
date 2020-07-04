import StateMachine from 'javascript-state-machine'

let fsm = new StateMachine({
  init: '收藏',
    transitions: [
    {
      name: 'doStore',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    onDoStore() {
      alert('收藏成功')
      updateText()
    },
    onDeleteStore() {
      alert('取消收藏')
      updateText()
    }
  }
})

var $btn = $('#btn1')

$btn.click(function() {
  if (fsm.is('收藏')) {
    fsm.doStore()
  } else {
    fsm.deleteStore
  }
})

function updateText() {
  $btn.text(fsm.state)
}
// 初始化文案
updateText()
