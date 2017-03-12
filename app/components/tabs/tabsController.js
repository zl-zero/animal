import React,{Component} from "react";
import 'assets/styles/tabs.scss';

class TabsControllers extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentIndex:0
    }
  }
  check_title_index(index){
    return index==this.state.currentIndex ? "tabsActive" : "";
  }
  check_item_index(index){
    return index==this.state.currentIndex ? "tabsItemShow" : "tabsItemNone";
  }
  border_title_index(index){
    return index==this.state.currentIndex ? "tabsBorder" : "";
  }
  render(){
    return(
      <div>
        <nav className="tabsNav">
          {
            React.Children.map(this.props.children,(element,index) => {
                return  (
                  <div onClick={() => {this.setState({currentIndex:index}) } } className={this.check_title_index(index)}>
                    {element.props.name }
                    <span className={this.border_title_index(index)}></span>
                  </div>
              )
            })
          }
        </nav>
        <div className="Tab_item_wrap">
            {React.Children.map(this.props.children,(element,index)=>{
                return(
                    <div className={ this.check_item_index(index) }>{ element }</div>
                    );
            })}
        </div>
      </div>
    )
  }
}

module.exports = TabsControllers;
