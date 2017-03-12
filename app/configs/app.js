import React,{Component} from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  withRouter,
} from 'react-router';
import {
  Container,
  TabBar,
} from 'amazeui-touch';

class App extends Component {
  constructor(props,context) {
    super(props);
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

import Index from 'components/index'
import Mine from 'components/mine'
import DetailsComps from 'components/detailsComps/detailsComps'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="mine" component={Mine} />
    </Route>
    <Route name="detailsComps" path="/detailsComps/:id" component={DetailsComps} />
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
