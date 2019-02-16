import Taro,{Component} from '@tarojs/taro';
import {View, Text, Button,Image} from '@tarojs/components';
import Top from './top';
import './head.less'
import Activity from './activity';
class Head extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      store: {
        title: '川祥居',
        notice: '欢迎光临,很高兴为你服务!',
        tags: ["味道赞", "主食分量足"]
      }
    }
  }
  render(){
    let {store:{title, notice, tags}} = this.state;
    return (
      <View className="head">
        <Top />
        <Image className="back" src={require("../../assets/img/bg.png")}></Image>
        <View className="store">
          <Image className="store_img" src={require("../../assets/img/store.png")}></Image>
          <View className="store_text">
            <Text>{title}</Text>
            <Text>{notice}</Text>
            <View>
              {tags.map( (item, index) => {
                return <Text className="tags_text" key={index}>{item}</Text>
              })}
            </View>
          </View>
        </View>
         <Activity />
      </View>
    )
  }
}
export default Head; 