import $ from "jquery";

const baseUrl = "http://47.92.1.163:5000/";

var xmlHttp;
function createxmlHttpRequest() {
  if (window.ActiveXObject) {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  } else if (window.XMLHttpRequest) {
    xmlHttp=new XMLHttpRequest();
  }
}

var HTTP = {
  // reqPost(uri,datas){
  //   $.ajax({
  //     url:baseUrl+uri,
  //     method:'POST',
  //     async:'false',
  //     contentType:'application/json;charset=utf-8',
  //     dataType:'JSON',
  //     data:datas,
  //     success:function(res){
  //       console.log(res);
  //     },
  //     error:function(er){
  //       console.log(er);
  //     }
  //   })
  // }
  doPost(uri,data){
    // 注意在传参数值的时候最好使用encodeURI处理一下，以防出现乱码
    createxmlHttpRequest();
    xmlHttp.open("POST",baseUrl+uri);
    xmlHttp.setRequestHeader("Content-Type","application/json;charset=utf-8");
    xmlHttp.send(data);
    xmlHttp.onreadystatechange = function() {
      if ((xmlHttp.readyState == 4) && (xmlHttp.status == 200)) {
        alert('success');
      } else {
        alert('fail');
      }
    }
  }

}

module.exports = HTTP;
