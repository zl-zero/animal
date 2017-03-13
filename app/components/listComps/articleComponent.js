import React,{Component} from 'react';
import {browserHistory,Link} from 'React-router';
import 'assets/styles/articleStyle.scss';
import defaultImg from 'assets/imgs/default_img.png';
import iconComment from 'assets/imgs/icon_comment.png';
import iconBrows from 'assets/imgs/icon_brows.png';

class ArticleComp extends Component {
  constructor(props){
    super(props);
    this.selected_detail = this.selected_detail.bind(this)
  }
  selected_detail(){
    console.log(browserHistory.getCurrentLocation())
  //  browserHistory.goBack();
     this.context.router.push({
       pathname:'/detailsComps',
       query:{
         id:1
       }
     });
    // let path = {
    //   pathname:'/detailsComps/id=1'
    // };
    // browserHistory.push(path);
  }
  render () {
    return (
        <div className="list-div" >
          <Link className="list-link" to={{pathname:'/detailsComps/id=1',query:{ad:'1'}}}>
            <div className="article-div">
              <span>标题标题标题标题标题标题标题</span>
              <div>
                <div>
                  <img className="icon-comment" src={iconComment} alt="icon-comment" />
                  <span>10</span>
                  <img className="icon-comment icon-comment-left" src={iconBrows} alt="icon-brows" />
                  <span>10</span>
                </div>
                <div>
                  <span>4小时前</span>
                </div>
              </div>
            </div>
            <img className="article-img" src={defaultImg} alt="" />
            </Link>
        </div>
      )
  }
}

ArticleComp.contextTypes = {
    router: React.PropTypes.object.isRequired
}

module.exports = ArticleComp;
