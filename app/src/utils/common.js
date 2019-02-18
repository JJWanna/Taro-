//获取菜品数量  通过传入的信息来统计当前有多少个菜品
//缓存的数据h5 小程序
import Taro from '@tarojs/taro';
const foodKye = 'taro_meituan';
export function getFoodCount(food){
   let store =  Taro.getStorageSync('foodKye');
   if( store ) {
        if( store[food.id]){
            return store[food.id].num;
        } else {
            return 0;
        }
   } else {
       return 0
   }
}
//设置菜品数量 当加减菜品是触发 num是由自身的加减组件的state存储的
export function setFoundCount(foot, num, type, callback){

}