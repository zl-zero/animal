import React,{Component} from 'react';
import {
  View,
  Tabs,
} from 'amazeui-touch';

class About extends Component {
  constructor(props){
    super(props)
    this.state={
      activeTab:0
    }
    this.onHandleAction = this.onHandleAction.bind(this)
  }
  onHandleAction(key,e){
      console.log(key)
      this.setState({
        activeTab:key
      })
  }
  render () {
    return(
      <View>
        <Tabs activeKey={this.state.activeTab}
        onAction={this.onHandleAction}>
          <Tabs.Item title="A" key="0">
              11111
          </Tabs.Item>
          <Tabs.Item title="B" key="1">
            22222
          </Tabs.Item>
          <Tabs.Item title="C" key="2">
              3333
          </Tabs.Item>
        </Tabs>
      </View>
    )
  }
}

module.exports = About;
