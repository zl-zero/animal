import React,{Component} from 'react';
import {
  render,
} from 'react-dom';
import {
  Link
} from 'react-router';
import {
  Container,
  TabBar,
} from 'amazeui-touch';
import WxUtils from 'utils/wxUtils';
import Utils from 'utils/utils';

class App extends Component {
  constructor(props,context) {
    super(props);
  }
  componentWillMount(){

  }
  componentDidMount(){
    const code = null;
    if(code==null){
      WxUtils.wxGetCode()
      code = Utils.getQueryString('code');
    }
  }
  render() {
    const {
      location,
      params,
      children,
      ...props,
    } = this.props;
    const {
      router
    } = this.context;
    return (
      <Container direction="column" id="sk-container">
        <Container fill>
          {React.cloneElement(children, {key: location.key})}
        </Container>
        <TabBar amStyle="primary" >
          <TabBar.Item
           component={Link}
           eventKey="Home"
           icon="icon-pet"
           title="首页"
           selected={router.isActive('/', true)}
           to="/"
           onlyActiveOnIndex
           />
          <TabBar.Item
           component={Link}
           eventKey="About"
           icon="info"
           title="我的"
           to="/mine"
           selected={router.isActive('/mine', true)}
           onlyActiveOnIndex
           />
        </TabBar>
      </Container>
    );
  }
}

App.contextTypes= {
  router: React.PropTypes.object.isRequired,
}

module.exports = App;
