import React,{Component} from 'react';
import {
  View,
} from 'amazeui-touch';
import 'assets/styles/myCenters.scss';
import defaultHeaderImg from 'assets/imgs/default_img.png';

class About extends Component {
  constructor(props){
    super(props)
  }
  render () {
    return(
      <View>
        <div className="my-header">
          <div className="my-header-img">
              <img src={defaultHeaderImg} alt="my-img"/>
              <span>111</span>
          </div>
          <div className="my-header-checked">
            <div>收藏</div>
            <div>关注</div>
            <div>粉丝</div>
          </div>
        </div>
        <div className="my-animal">
        </div>
      </View>
    )
  }
}

module.exports = About;
