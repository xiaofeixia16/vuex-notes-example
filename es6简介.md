##### 作用域
* 作用域就是一个变量的有效范围，就是你声明一个变量以后，这个变量可以在什么场合可以使用它。以前javascript只有全局作用域和函数作用域。es2015新增了块级作用域
* `let a = 'apple'` 用let定义的变量只能在定义他的块里面被使用，在块以外这个变量就不能被访问到。
* 定义一个块，就是使用{},包含着代码
* `const b = 'apple'`定义恒量变量，恒量一旦定义就不能被修改。注意恒量只是不能被重新定义，并不是在定义的时候不能添加值。比如： `const fruit = []; fruit.push('apple');fruit.push('origer');`刚开始恒量fruit是个数组，往数组不断push内容是ok的；如果`fruit = []`将恒量重新定义，就会报错。

##### 解构
* 解构是es2015里面介绍的一个新的语法，意思就是分解一个东西的结构
* 解构数组
	* 例如以前想要将一个数组里的东西赋值到外面定义的每个变量
	
	  `
		function breakfast(){
			return ['apple','banana','origer']
		}
		var arr1 = breakfast()[0];
		var arr2 = breakfast()[1];
		var arr3 = breakfast()[2];
		console.log(arr1,arr2,arr3)
	 `
	* 有了解构语法之后更为简便的写法
	  `
		function breakfast(){
			return ['apple','banana','origer']
		}
		let [arr1,arr2,arr3] = breakfast()
		console.log(arr1,arr2,arr3)
	  `
* 解构对象
	`
		function color(){
			return {'one':'red','two':'yellow','three':'blue'}
		}
		let {one:one,two:two,three:three} = color();
		console.log(one,two,three)
	`
* 默认值
	* let [x = 1] = [undefined]; x还是等于1，不能给有默认值的变量赋值undefined
	* 如果变量的默认值是一个表达式，那么只有用到的时候，才会执行表达式求值

			function f(){
				console.log('aaa');
			}
			let [a = f()] = [1]
	* 像以上情况下只有a没有给赋值1的时候才会去执行表达式f()这个函数
##### 字符串模版
* 使用字符模版的好处
	* 文字和变量联合输出的时候旧的语法是用 `+` 这个符号作为连接。当变量多的时候可阅读性差容易发生混乱。用es2015字符模版新语法就简便很多
	* 换行也变得更容易操作
	`
		旧的语法：
		var dessert = 'cake', drink = 'tea';
		var breakfast = '今天的早餐是' + dessert + '和' + drink;
		console.log(breakfast);
	`
	* 运用字符模板：
	` 
		let dessert = 'cake', drink = 'tea'; 
		let breakfast = `今天的早餐是${dessert}和${drink}`
	`
* 带标签的模版字符串
	* 这里说的标签其实就是一个函数，不过用起来跟普通的函数有一些区别
	* 就是在模板的字符串前去添加一个标签，这个标签的作用是去处理字符串按要求输出
	* 
		`
			let dessert = 'apple', drink = 'tea';
			let breakfast = kitchen`今天的早餐是${dessert}和${drink}!`
			function kitchen(strings,...values){
				console.log(strings);
				console.log(values);
				//可以处理模板字符串的格式或者重新输出
				let res = '';
				for(let i=0;i<values.length;i++){
					res += strings[i]
					res += values[i]
				}
				return res;
			}
		`
* 判断字符串是否包含其它的字符串
	* startsWith() 测试一个字符串是否以某值开头
	* endsWith() 测试一个字符串是否以某值结尾
	* includes() 测试一个字符串是否包含某值
	* 注意，不是只有模板字符串才可以使用以上方法，sting类型都可以使用
##### 函数
* 函数默认参数：不传的时候默认传什么
	* function breakfast(dessert='apple',drink='tea'){}
	* 当调用函数时给函数赋参数了就用参数的值，不然就用默认值
* 展开操作符
	* ... 操作符 可以叫spread和rest，具体叫什么，看怎么去定义它
	* spread的功能：展开数组，把a数组里的值添加到b数组里
* 剩余操作符
	* 对一个函数的传参，除了必传项以外，其余的传参都可以交给剩余操作符去定义，会把这个函数剩余都放在一个数组里。
	* `定义时：function breakfast(dessert,drink,...foods){}`
	* `调用时传很多参数： breakfast('apple','tea','cake','kole','choclo')`
* 解构函数
	* 使用解构函数对象的方法，如果传参有对象类型，可以赋默认空对象，调用函数的时候就算不传值，也不会报错
	* `function breakfast(dessert,drink,{localtion,resterant}={}){}`
	* `调用时 breakfast('cake','tea',{localtion:'深圳',resterant:'绿茶'})`
	* `调用时或者不传对象就会默认空对象 breakfast('cake','tea')`
* 函数的名字name属性
	* es2015的函数定义了一个新的属性，用函数.name可以得到函数的名字
	* `function breakfast(){} console.log(breakfast.name)`
* 箭头函数
* function breakfast = dessert => dessert
* var breakfast = function breakfast(dessert){return dessert}
##### 对象
* 对象表达式
	* es2015定义对象的新的语法
		* `	
		 旧的语法：
		  	var dessert='cake',drink='tea';
			var obj = {
				dessert:dessert,
				drink:drink
				breakfast:function(){
				}
			}
		`
		*
		`
 			let dessert='cake',drink='tea';
			let obj={
				dessert,
				drink,
				breakfast(){}
			}
        `
* 对象属性名
	* 给对象属性名赋值有3种写法
	* let obj = {}
		* obj.dessert='cake';
		* obj['dess ert']='cake';
		* let hot = 'dess ert'; obj[hot]='cake';
* 对比两个值是否相等
	* 大部分情况下判断两个值是否相等可以用两个等号或者三个等号，但是对于一些特殊的判断要用Object.is()
	* Object.is(+0,-0);
	* Object.is(NaN,NaN);
* 把一个对象的值赋值到另一个对象里
	* Object.assign('源对象'，'要赋值的对象')
* 设置对象的prototype
	* Object.setPrototypeof()此方法可以在创建对象以后去改变对象的prototype
* __proto__
	* es2015可以去得到或者去设置__proto__属性
* super
##### 生成器与迭代器
##### 类
##### 集合
##### 模块


###### 零散笔记
* 文本： {{}} 、 v-text
* html： v-html
* 属性：v-bind :href require('图片地址')，<img :src="">
* 表达式 ：{{5+5}} {{ok ? 'ok' : 'no'}}'
* 指令 ：v-if v-for
* 修饰符： @submit.prevent="事件名称"
* 实现文本的双向数据绑定 v-model="data里的一个数据"
* 过滤器函数 可以在模版里和质指令中使用
	* 平常用法 {{message | filerFun }}
	* 串联过滤器
	* 接受参数过滤器
* Vue实例的属性与方法
	* 属性
		* vm.$el ...
	* 方法
	    * vm.$watch({}) ...
* 条件语句，循环、迭代语句
	* v-if v-else v-for="item in list"  v-for="value in object"
	* v-for="(item,index) in list"  v-for="(value,key) in object"
* 计算属性 computed
	* 和methods属性作用是一样的。但是computed属性将数据存在了缓存里，只有数据有变化的时候才会去更新。methods属性里的数据总是渲染的。简单的所computed比methods性能高
* 样式绑定
	* :class="{'active' : isAction}"
	* :caass="{'active': isAction,'open'： isOpen}"
	* :class="[active, isOpen ? 'open' : '']"
	* :class="[{'active': isAction},'red'+ id]"
	* :style="styleObject" 可以直接绑定一个对象
	* :class="计算属性里的函数名，这个函数返回一些样式" 
	* ```
		<div :class="classObject">
		computed:{
			classObject : function(){
				active : this.isActive || !this.err
				'text-danger' : this.err && this.error.type ==='fatal'
			}
		}
    ```
	* 以上场景最适合当用户做了哪些操作以后，相应界面的样式就有有所改变
* 事件处理器 methods
	* v-on:click="事件名称" / @click="事件名称"
	* 事件传参 @click="someFun(parmars)"\
	* 事件修饰符 <div @click.self="doSome"> 只作用在元素本身，而不是其子元素身上的时候触发事件doSome();还有很多其它的事件修饰符
* 表单
	* input/textarea要实现数据的双向绑定就用 v-model=""
		* 这种双向绑定的作用，除了在文本输入什么文字，另一个地方也相应做出改变外
		* 还有另外一种场景可以使用，当文本信息变化时，比如与其相关联的元素的值可以在计算属性上做一些处理返回与业务场景关联的值
	* 多选框
	* 单选按钮
	* selected
	* input的修饰符
		* v-model.lazy="" 相等于input的change事件，input发生改变以后再执行，单v-model其实是v-model
		* v-model.number 将输入的值转为数字类型
		* v-model.trim 将输入的文字去掉前后空格
* 组件，组件可以扩展html元素，封装可重用代码
	* 全局组件：Vue.components('组件名称',{})，但凡引入都可以使用的子组件
	* 局部组件：new Vue({ components:{'组件名称',..})，只能在其定义的父vue文件内被使用。
	* 子组件通过props属性接收父组件的数据
		* props可以定义父组件传给子组件数据的类型
			* props:{ propsA : Number}
		* 不止可以默认一种类型，可以默认多种类型
			* props: {propsB : [String,Number]}
		* 可以定义是必传字段
			* props: {propsC :{type:String,required:true}}
		* 可以指定传给子组件的数据中的默认值
			* props: {propsD :{type:String,default:1000}}
		* 如果定义数据为对象或者数组类型默认值应该由一个工厂函数返回
			* props: {propsE :{type:Object:default:function(){return {message:xxx} }}
		* 可以在接收传过来的参数的时候就对其校验
			* props: {propsF: {validator:function(value){ return value > 10 } }}
	* 父组件通过@子组件自定义的事件名称，来取得子组件传过来的参数
	* 在父组件内如果想触发子组件的原生事件，而不是获得子组件传过来的值可以这样定义`<child @click.native="事件名称"></child>`
* 自定义指令，vue除了v-model,v-bind等内置指令也可以自定义指令
	* 定义 ：Vue.directive('focus',{inserted:function(el){ el.focus() }})
	* 使用 <div v-focus></div>
	* 或者也可以在实例中注册自定义的指令
* 


	
```javascript
	new Vue({
		data : ｛
			return {
				a : 'hi',
				b : 'hello'
			}
		｝，
		//过滤器
		filter:{
			filterFun : function(){
				...
			},
			//或者可以用es6语法来实现
			filterFunB : {
				...
			},
			filterFunC( ) => {
				...
			}
		}，
		//事件属性
		methods : {
			...
		}，
		//计算属性 和 methods作用一样，当时computed把数据放在缓存里
		computed: {
			...
		}，
		compoents:{
			...
		},
		derictive:{
			...
		},
		//生命周期,关于vue生命周期的调用都是方法的调用方式
		created(){
			...
		},
		mounted(){
			...
		}
	})
```