var fsm = new StateMachine({
	init: 'pending',
	transitions: [
		{
			name: 'resolve',
			from: 'pending',
			to: 'fulfilled'
		},
		{
			name: 'reject',
			from: 'pending',
			to: 'rejected'
		}
	],
	methods: {
		// 参数 state 当前状态
		// 参数 data 当前 MyPromise 的实例
		onResolve: function(state, data) {
			data.successList.forEach(fn => fn())
		},
		onReject: function(state, data) {
			data.failList.forEach(fn => fn())
		}
	}
})

class MyPromise {
	constructor(fn) {
		this.successList = []
		this.failList = []
		fn(() => {
      fsm.resolve(this)
    }, () => {
      fsm.reject(this)
    })
	}
	
	then(successFn, failFn) {
		this.successList.push(successFn)
		this.failList.push(failFn)
	}
}

function loadImg(src) {
  const promise = new MyPromise((resolve, reject) => {
    var img = document.createElement('img');
    img.onload = () => resolve(img)
    img.onerror = () => reject('load fail')
    img.src= src;
  });
  return promise;
}

let result = loadImg('https://www.baidu.com/img/bd_logo1.png')
result.then(img => {
  console.log('ok1');
},error => {
  console.log('fail1');
})
result.then(img => {
  console.log('ok2');
},error => {
  console.log(fail2);
})