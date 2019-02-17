import Taro,{Component} from '@tarojs/taro';
import {View,Text} from '@tarojs/components';
import './cata.less';
class Cata extends Component {
    constructor(props) {    
        super(props);
        this.state = {
            selectCata: null,
           cata: [
               {name:"专场", id: 1},
               {name:"热销", id: 2},
               {name:"折扣", id: 3},
               {name:"主食", id: 4},
               {name:"热炒", id: 5},
               {name:"凉菜", id: 6},
               {name:"特色菜", id: 7}
           ]
        }
    }
    shouldComponentUpdate (nextProps,nextState) {
        if( nextState.selectCata === this.state.selectCata ) {
            return 
        } else {
            //做一些逻辑运算
        }
    }

    handleClcik(item) {
        let {selectCata} = this.state;
        if( selectCata !== item.id ) {
            this.setState({selectCata: item.id},()=>{
                this.props.onChangeCata(item)
            })
        } else if(!this.state.selectCata) {
            this.setState({selectCata:item.id},()=>{
                this.props.onChangeCata(item)
            })
        }   
    }


    render () {
        let {selectCata} = this.state;
        return (<View className="cata">
            {this.state.cata.map((item,index) => {
                return <Text onClick={this.handleClcik.bind(this,item)} className={"cata_title " + (selectCata==item.id ?  'select': null)} key={item.id}>{item.name}</Text>
            })}
        </View>)
    }
}
export default Cata;