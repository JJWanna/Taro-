import Taro, {Component} from '@tarojs/taro';
import {View, Text, Image} from '@tarojs/components';
import {getFoodCount, setFoundCount} from '../../utils/common';
import './addCata.less';
class AddCata extends Component {
    constructor(props) {
        super(props)
        this.state={
            num: 0
        }
    }   
    componentDidMount(){
        this.setState({num: getFoodCount(this.props.food)})
    }

    //减
    handleJian(){
        if(this.props.food){
            if(this.state.num>0){
                setFoundCount(this.props.foot,this.state.num, "cut",()=>{
                    this.setState({num: getFoodCount(this.props.food)})
                });
            } else {
                console.log("当前加减菜品出现异常")
            }
        } 
    }
    //加
    handleJia=()=>{
        console.log('aa')
        if(this.props.food){
           
            setFoundCount(this.props.food,this.state.num, "Add",()=>{
                this.setState({num: getFoodCount(this.props.food)})
            });
        }
        
    }
    render(){
        let num = this.state.num;
        let hideClass = num > 0 ? "" : "hide";
        return (
            <View className="addCata">
                <Image onClick={this.handleJian.bind(this)} className={"opeate_img " + hideClass} src={require("../../assets/img/jian.png")}></Image>
                <Text className={"foot_num " + hideClass}>{this.state.num}</Text>
                <Image onClick={this.handleJia.bind(this)} className="opeate_img" src={require("../../assets/img/jia.png")}></Image>
            </View>
        )
    }
}
export default AddCata;