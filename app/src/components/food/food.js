import Taro,{Component} from '@tarojs/taro';
import {View,Text} from '@tarojs/components';
import { AtTabBar, AtTabsPane,AtTabs } from 'taro-ui';

import Cata from './cata';
class Food extends Component {
    constructor(props) {
        super(...arguments)
        this.state = {
            current: 0, 
            tabList: [
                {title: "点菜"},{title: "评价"},{title: "商家"}
            ]
        }
    }
    hanleClick(value){
        this.setState({current: value})
    }

    render () {
        let {current,tabList} = this.state;
        return (<View>
            <AtTabs 
                current={current}
                onClick={this.hanleClick.bind(this)}
                tabList={tabList}>
                <AtTabsPane><Cata />    </AtTabsPane>
                <AtTabsPane>评价</AtTabsPane>
                <AtTabsPane>商家</AtTabsPane>
           </AtTabs> 
            
        </View>)
    }
}
export default Food;