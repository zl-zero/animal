import React,{Component,PropTypes} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PullRefresh from 'reactjs-pull-refresh';
import ArticleComp from 'components/listComps/articleComponent';
import TabsControllers from 'components/tabs/tabsController';

import {
  View,
  Container,
} from 'amazeui-touch';

injectTapEventPlugin();

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: 20,
      hasMore: true
    };
    this.refreshCallback = this.refreshCallback.bind(this);
    this.loadMoreCallback = this.loadMoreCallback.bind(this);
    this.ceshiTouchTap = this.ceshiTouchTap.bind(this);
  }

  refreshCallback() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = false;
        if (Math.random() > 0.2) {
          result = true;
        }
        if (result) {
          this.setState({
            items: 20,
            hasMore: true
          }, () => {
            resolve();
          });
        } else {
          reject();
        }
      }, 1000);
    }).then(() => {
      console.info('刷新成功！');
    }, () => {
      console.info('刷新失败！');
    });
  }

  loadMoreCallback() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = false;
        if (Math.random() > 0.2) {
          result = true;
        }
        if (result) {
          this.setState({
            items: this.state.items + 10,
            hasMore: this.state.items <= 40
          }, () => {
            resolve();
          });
        } else {
          reject();
        }
      }, 1000);
    }).then(() => {
      console.info('加载更多成功！');
    }, () => {
      console.info('加载更多失败！');
    });
  }

  ceshiTouchTap(e) {
    console.info('测试下拉刷新插件是否与 Tap 事件冲突');
  }
    render(){
      let contents = [];
    const {items, hasMore} = this.state;

    for (let i = items; i > 0; i--) {
      if (i < 10) {
        contents.push(<li key={i}><a href="http://www.sina.com">这里放置真实显示的DOM内容</a> {i}</li>);
      } else {
        contents.push(<li key={i} onTouchTap={this.ceshiTouchTap}>这里放置真实显示的DOM内容 {i}</li>);
      }
    }

    const props = {
      maxAmplitude: 80,
      debounceTime: 30,
      throttleTime: 100,
      deceleration: 0.001,
      refreshCallback: this.refreshCallback,
      loadMoreCallback: this.loadMoreCallback,
      hasMore
    };
    /**
    <PullRefresh {... props}>
      <Card>
        {contents.map((item) => {
          return item;
        })}
      </Card>
    </PullRefresh>
    */
      return (
        <Container>
          <TabsControllers>
            <Container name="1">
              <PullRefresh {... props}>
                <Container className="height:100%">
                  <ArticleComp/>
                </Container>
              </PullRefresh>
            </Container>
            <Container name="2">2</Container>
          </TabsControllers>
        </Container>
      )
    }
}

module.exports = Index;
