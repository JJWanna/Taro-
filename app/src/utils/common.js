//获取菜品数量  通过传入的信息来统计当前有多少个菜品
//缓存的数据h5 小程序
import Taro from '@tarojs/taro';
const foodKye = 'taro_meituan';
export function getFoodCount(food){
   let store =  Taro.getStorageSync(foodKye);
   if( store && store[food.id]) {  
       return Number(store[food.id].Num);      
   } else {
       return 0
   }
}
//设置菜品数量 当加减菜品是触发 num是由自身的加减组件的state存储的 加/减
// 当减的数量为0的时候，要删除菜品的数据结构
//当加的时候发现没有菜品，要新增菜品数据结构
export function setFoundCount(food, Num, type, callback){
    if(food) {
       
       let store =  Taro.getStorageSync(foodKye);
       if(!store) store={};
       if( type === 'cut' ) {
           //减菜的逻辑
           if( Num == 1) {
               //菜品被删除
               if( store[food.id] ){
                   delete store[food.id]
               } else {
                   if(store[food.id]) {
                       store[food.id].Num = num-1;
                   }
               }
           }
           Taro.setStorageSync(foodKye, store); //缓存数据更新
           callback && callback();
       }
       if( type === 'Add' ) {
           //加菜逻辑
           if(store[food.id]) {
               //说明已经加过了
               store[food.id].Num = Num + 1;
               console.log( store[food.id].Num,'za' )
           } else {
              
               store[food.id] = {Num:1, ...food};
           }
           Taro.setStorageSync(foodKye, store);
           callback && callback(); 
       }
    }
    
}