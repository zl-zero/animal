import React,{Component} from "react";

class DetailsComps extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <div>{this.props.params.id}</div>
    )
  }
}

module.exports = DetailsComps;
