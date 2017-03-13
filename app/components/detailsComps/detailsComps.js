import React,{Component} from "react";
import {Link} from 'React-router';
import {
  View,
  NavBar,
} from 'amazeui-touch';
class DetailsComps extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    let backNav = {
      component: Link,
      icon: 'left-nav',
      title: '返回',
      to: {
        pathname:'/',
        query:{
          sd:'1'
        }
      },
    };
    return (
      <View
        id="detail"
      >
          <NavBar title="详情"
          leftNav={[backNav]}
          amStyle="primary" />
          <div>{this.props.location.query.ad}</div>
      </View>
    )
  }
}

DetailsComps.contextTypes = {
    router: React.PropTypes.object.isRequired
}

module.exports = DetailsComps;
