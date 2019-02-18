import Taro, {Component} from '@tarojs/taro';
import {View, Text,Image} from '@tarojs/components';
import AddCata from '../AddCata/addCata';
import './footList.less'
class FootList extends Component {
    constructor(props){
        super(...arguments)
        this.state = {}
    }

    render (){
        //console.log(JSON.stringify(this.props.currentList))
        let {selectCata, currentList} = this.props;
        return (<View className="footlist">
            <Text>{selectCata ? selectCata.name: ''}</Text>
            <View className="footlist_forlist">
                {
                    currentList.map( (item, index)=> {
                        return (<View className="footlist_item" key={index}>
                            <Image className="footlist_item_img" src={item.img == 0 ? require("../../assets/img/2.jpg"): require("../../assets/img/1.jpg")}></Image>
                            <View className="footlist_item_info">
                                <Text>{item.title}</Text>
                                <Text>月售：{item.sole}</Text>
                                <Text className="price">¥：{item.price}</Text>
                                <AddCata foot={item}/>
                            </View>
                        </View>)
                    })
                }
            </View>
        </View>)
    }
}
export default FootList