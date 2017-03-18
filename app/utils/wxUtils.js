import HTTP from 'utils/httpServices';

const wxAppId = 'wx6801e2717e07f1dd';
const rediredUri = 'http://192.168.0.103';
const wxGetCodeUri = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='
+wxAppId+'&redirect_uri='+encodeURI(rediredUri)
+'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';

var WxUtils = {
  //获取code
  wxGetCode(){
    window.location.href = wxGetCodeUri;
  },
  wxGetUserInfo(data){
    return HTTP.postJson(url,data);
  }

}

module.exports = WxUtils;
