import Taro,{Component} from '@tarojs/taro';
import {View, Text,Button} from '@tarojs/components';
class Child extends Component {

  HandleClick(){
    this.props.onchange();
  }

    render () {
      return (
        <View>
            <Button onClick={()=>{this.HandleClick()}}>调用函数</Button>
            <Text>Child{this.props.name}</Text>
          </View>
      )
    }
}
export default Child;