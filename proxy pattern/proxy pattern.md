1. 目标和使用者分离
使用者和目标类有一些 安全性原因或者授权的时候，中间加一个东西，把他们分开
2. 符合开放封闭原则

3. 有没有代理的时候，接口是不变的


4. 例子： es6 代理，jquery 代理



## 代理模式 vs 适配器模式
1. 适配器模式，中国的电器，到外国的插座，要转换
提供一个不同的接口（如不同版本的插头）
可以使用目标类，但是用不起来，太老旧了

2. 代理模式
提供一摸一样的接口
无权使用目标类，又想用


## 代理模式 vs 装饰漆模式
装饰器模式：
拓展功能，原有功能不变且可以直接使用

代理模式：
显示原有功能，但是经过限制或者阉割了的原有功能