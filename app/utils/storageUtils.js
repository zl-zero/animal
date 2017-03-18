const Storage = {
  //sessionStorage,存储key，value
  setSessionKey(key,value){
    sessionStorage.setItem(key,value)
  },
  //sessionStorage,key获取value
  getSessionKey(key){
    return sessionStorage.getItem(key)
  },
  //sessionStorage，key删除value
  delSessionKey(key){
    sessionStorage.removeItem(key)
  },
  //sessionStorage,清除所有存储
  clearSessionKey(key){
    sessionStorage.clear()
  },
  //localStorage,存储key，value
  setLocalKey(key,value){
    localStorage.setItem(key,value)
  },
  //sessionStorage,key获取value
  getLocalKey(key){
    return localStorage.getItem(key)
  },
  //sessionStorage，key删除value
  delLocalKey(key){
    localStorage.removeItem(key)
  },
  //sessionStorage,清除所有存储
  clearLocalKey(key){
    localStorage.clear()
  }
}

module.exports = Storage;
