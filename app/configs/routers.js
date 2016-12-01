import React,{Component} from 'react';
import { Router, Route, Link,browserHistory,IndexRoute,Redirect } from 'react-router';
import {
  Button,Group,
} from 'amazeui-touch';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
        <Group
          header="颜色样式"
        >
          <Button amStyle="primary">Primary</Button>
          <Button amStyle="secondary">Secondary</Button>
          <Button amStyle="success">Success</Button>
          <Button amStyle="warning">Warning</Button>
          <Button amStyle="alert">Alert</Button>
          <Button amStyle="dark">Dark</Button>
        </Group>
      </div>
    );
  }
}

class About extends React.Component{
  render(){
    return <h1>about</h1>
  }
}

class Inbox extends React.Component{
  render(){
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
}

class Message extends React.Component{
  render(){
    return  <h3>Message {this.props.params.id}</h3>
  }
}

class Dashboard extends React.Component {
  render(){
    return <div>Welcome to the app!</div>
  }
}

class Routers extends Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Welcome}>
          <IndexRoute component={Dashboard}/>
          <Route path="about" component={About} />
          <Route path="inbox" component={Inbox}>
            <Route path="/messages/:id" component={Message} />
            <Redirect from="messages/:id" to="/messages/:id" />
          </Route>
        </Route>
      </Router>
    )
  }
}

module.exports = Routers;
