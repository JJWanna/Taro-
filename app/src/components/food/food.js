import Taro,{Component} from '@tarojs/taro';
import {View,Text} from '@tarojs/components';
import { AtTabBar, AtTabsPane,AtTabs } from 'taro-ui';
import Cata from './cata';
import FootList from './footList';
import './foot.less'
class Food extends Component {
    constructor(props) {
        super(...arguments)
        this.state = {
            current: 0, 
            tabList: [
                {title: "点菜"},{title: "评价"},{title: "商家"}
            ],
            footList: [],
            currentList: [],
            selectCata: null
        }
    }
    hanleClick(value){
        this.setState({current: value})
    }
    //切换菜品分类
    changeCata(item){
        this.setState({selectCata: item})
        if(this.state.footList.some(list=>list.pid == item.id)){
            //不用加载数据
            this.setState({
                currentList: this.state.footList.filter((Info,index)=>{return  Info.pid == item.id})
            })
            
        } else {    
            //加载数据
            this.setState({
                footList: this.state.footList.concat(this.getData(item))
            }, ()=>{
                this.setState({currentList: this.state.footList.filter((Info,index)=>{return  Info.pid == item.id})})
            })
        }
    }
    getData (item) {
        let count = Math.round( Math.random()*2 )
        let imgUrl = `../../assets/img/${count}.jpg`
        return  Array.from(Array(Math.round(Math.random()*20 )),  (v,k)=>({
           sole:Math.round(Math.random()*50), price:Math.round(Math.random()*50),title: '分类'+item.id+'菜品'+(k+1), id: item.id+"_"+k, pid: item.id, img: count
        }))
       
    }
    render () {
        let {current,tabList,currentList,selectCata} = this.state;
        return (<View>
            <AtTabs 
                current={current}
                onClick={this.hanleClick.bind(this)}
                tabList={tabList}>
                <AtTabsPane>
                    <View className="foot_body"> 
                        <Cata onChangeCata={this.changeCata.bind(this)}/> 
                        <FootList selectCata={selectCata} currentList={currentList}/>  
                    </View> 
                </AtTabsPane>
                <AtTabsPane>评价</AtTabsPane>
                <AtTabsPane>商家</AtTabsPane>
           </AtTabs> 
            
        </View>)
    }
}
export default Food;