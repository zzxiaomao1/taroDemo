import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  let a='第一个变量'
  const arr = ['abc','cba','cba']

  const obj = {
    name:"张三",
    age:18
  }

  let isTure=true;
  let isUndefined = undefined;
  let isNull = null;

  function fn(){
    return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
  }

  return(
    <>
      {/* 字符串 */}
      <View>{ a }</View>
      {/* 数组 */}
      <View>{ arr }</View>
      {/* 对象 */}
      <View>{ obj.name }-{ obj.age }</View>
      {/* 时间截 */}
      <View>{ new Date().getTime() }</View>
      {/* 布尔值 */}
      <View>{ isTure }</View>
      {/* null */}
      <View>{ isNull }</View>
      {/* undefined */}
      <View>{ isUndefined }</View>
      {/* 表达式 */}
      <View>{ 1+2 }</View>
      {/* 三元表达式 */}
      <View>{ isTure ? '我是真的' : '我是假的' }</View>
      {/* 执行一个函数*/}
      <View>{ fn() }</View>
    </>
  )

}
