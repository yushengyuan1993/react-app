export default {
  name: 'common',
  // 获取当前相对路径
  GetUrlRelativePath () {
    let url = document.location.toString();
    let arrUrl = url.split("//");
    
    let start = arrUrl[1].indexOf("/");

    // stop省略，截取从start开始到结尾的所有字符
    let relUrl = arrUrl[1].substring(start);
    
    if(relUrl.indexOf("?") !== -1){
        relUrl = relUrl.split("?")[0];
    }
    return relUrl;
  },

  // 获取文件扩展名
  getFileExtension (filename) {
    return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
  },

  // 获取URL参数值
  getParam (name) {
    let search = document.location.search;
    let pattern = new RegExp("[?&]" + name + "=([^&]+)", "g");
    let matcher = pattern.exec(search);
    let items = null;
    if (null != matcher) {
      try {
          items = decodeURIComponent(decodeURIComponent(matcher[1]));
      } catch (e) {
        try {
          items = decodeURIComponent(matcher[1]);
        } catch (e) {
          items = matcher[1];
        }
      }
    }
    return items;
  },

  /**
   * 设置cookies
   * @param {String} name 
   * @param {String} value 
   * @param {Number} day   过期时间
   */
  setCookie (name, value, day) {
    if (day !== 0) { // 当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
      var expires = day * 24 * 60 * 60 * 1000;
      var date = new Date(+new Date()+expires);
      document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
    } else {
      document.cookie = name + "=" + escape(value);
    }
  },
  // 获取cookies
  getCookie (name) {
    let arr = null;
    let reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if( document.cookie.match(reg) === arr ) {
      return unescape(arr[2]); 
    } else {
      return null; 
    }
  },
  // 删除cookies
  removeCookie (name) {
    let exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    let cval = this.getCookie(name); 
    if(cval != null) {
      document.cookie = name + "="+cval+";expires="+exp.toGMTString(); 
    } 
  },

  // sessionStorage 相关操作
  setSession (key, value=null) {
    let _type = Object.prototype.toString.call(value);

    if (_type === '[object String]' ||
        _type === '[object Number]' || 
        _type === '[object Null]' || 
        _type === '[object Boolean]' )
    { // 原始类型为 String, Number, Null, Boolean, 最终会被设置为 `string` 类型的值

      sessionStorage[key] = value;

    } else if (
      _type === '[object Object]' ||
      _type === '[object Array]' )
    { // 原始类型为 Object, Array 最终会被设置为 `object`, `array` 类型的值

      sessionStorage[key] = JSON.stringify(value);

    } else {
      throw new Error('请设置合理的键值对！');
    }
  },
  /**
   * 取 sessionStorage
   * @param {String} key  需要获取的 sessionStorage 的 key
   * @param {String} type 需要取得的值的类型，仅有 array/object/string 三种 
   */
  getSession (key, type) {
    let result = sessionStorage[key];

    if ( !result || result === 'null' ) { // 取一个不存在的 sessionStorage 时，返回 null
      return null;
    }

    if ( type === 'array' || type === 'object' ) {

      return JSON.parse(result);

    } else if ( type === 'string' ) { // 注意 String/Number/Boolean 类型值均在这里返回
      
      return result;

    } else {
      throw new Error('请确认取值的类型有效！');
    }
  },
  removeSession (key) {
    sessionStorage.removeItem(key);
  },

  // class 相关操作
  hasClass (el, cls) {
    cls = cls || '';
    if (cls.replace(/\s/g, '').length === 0) return false; //当cls没有参数时，返回false
    return new RegExp(' ' + cls + ' ').test(' ' + el.className + ' ');
  },
  addClass (el, cls) {
    if (!this.hasClass(el, cls)) {
      el.className = el.className === '' ? cls : el.className + ' ' + cls;
    }
  },
  removeClass (el, cls) {
    if (this.hasClass(el, cls)) {
      var newClass = ' ' + el.className.replace(/[\t\r\n]/g, '') + ' ';
      while (newClass.indexOf(' ' + cls + ' ') >= 0) {
        newClass = newClass.replace(' ' + cls + ' ', ' ');
      }
      el.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  },

  // 移除数组指定值的元素
  removeArrayEl (arr, v) {
    let i = arr.indexOf(v);

    if (i > -1) {
      arr.splice(i, 1);
    }
    return arr;
  },

  // 动态添加脚本
  loadScript (url) {
    let parentEl = document.getElementsByTagName('head')[0];
    let targetEL = parentEl.querySelectorAll('script')[0];
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    parentEl.insertBefore(script, targetEL);

      // let script = document.createElement('script');
      // script.type = 'text/javascript';
      // script.src = url;
      // document.body.appendChild(script);
  },

  // 图片预加载
  preloadImage (arr) {
    let imgList = [];

    for (let i = 0, j = arr.length; i < j; i ++) {
      imgList[i] = new Image();
      imgList[i].src = arr[i];
    }
  },

}
