/*                     ������Ŀ¼
*   1.���ݵ�ͨ��������ȡԪ��
*   2.���ݵĻ�ȡ���޸��ı�����
*   3.���ݻ�ȡԪ�ص���ʽ
*   4.���ݵĻ�ȡ��Ԫ���µ�Ԫ�ؽڵ�
*   5.���ݵĻ�ȡ��Ԫ���еĵ�һ��Ԫ�ؽڵ�
*   6.���ݵĻ�ȡ��Ԫ���е����һ��Ԫ�ؽڵ�
*   7.���ݵĻ�ȡ��һ���ֵ�Ԫ�ص�Ԫ�ؽڵ�
*   8.���ݵĻ�ȡ��һ���ֵ�Ԫ�ص�Ԫ�ؽڵ�
*   9.����ȥ��
*   10.�ж����������Ƿ����
*   11.���class
*   12.�ж�Ԫ���Ƿ���ĳ��class
*   13.ɾ��class
*   14.����name��ȡcookie
*   15.����nameɾ��cookie
*   16.����cookie
*   17.��ȡ��������ͺͰ汾
*   18.��ȡ����ϵͳ����
*   19.��ȡ�������ඥ���ľ���
*   20.��ȡһ��Ԫ�صľ����ĵ�(document)��λ�ã�����jQ�е�offset()
* */
/*
* 1.���ݵ�ͨ��������ȡԪ��
* */
function getClass(className) {
    if(document.getElementsByClassName){
        return document.getElementsByClassName(className);
    }else{
        var tags=document.all;
        var arr=[];
        for(var i=0;i<tags.length;i++){
            if(check(tags[i].className,className)){
                arr.push(tags[i]);
            }
        }
        return arr;
    }
}
function check(tagClassName,className){
    var arr=tagClassName.split(" ");
    for(var i=0;i<arr.length;i++){
        if(arr[i]==className){
            return true;
        }
    }
    return false;
}
/*
* 2.���ݵĻ�ȡ���޸��ı�����
* */
function getText(obj,val){
    if(val==undefined){
        if(obj.innerText=="undefined"){
            return obj.textContent;
        }else{
            return obj.innerText;
        }
    }else{
        if(obj.innerText=="undefined"){
            return obj.textContent=val;
        }else{
            return obj.innerText=val;
        }
    }
}
/*
* 3.���ݻ�ȡԪ�ص���ʽ
*   obj ָ����ȡ��ʽ��Ԫ��
*   arrt  ��ȡָ��������
* */
function getStyle(obj,arrt){
    if(obj.currentStyle){
        return obj.currentStyle[arrt]
    }else{
        return getComputedStyle(obj)[arrt];
    }
}
/*
* 4.���ݵĻ�ȡ��Ԫ���µ�Ԫ�ؽڵ�
* */
function getChilds(obj){
    var childs=obj.childNodes;
    var arr=[];
    for(var i=0;i<childs.length;i++){
        if(childs[i].nodeType==1){
            arr.push(childs[i]);
        }
    }
    return arr;
}
/*
* 5.���ݵĻ�ȡ��Ԫ���еĵ�һ��Ԫ�ؽڵ�
* */
function getFirstChild(obj){
   return getChilds(obj)[0];
}
/*
* 6.���ݵĻ�ȡ��Ԫ���е����һ��Ԫ�ؽڵ�
* */
function getLastChild(obj){
    var arr=getChilds(obj);
    return arr[arr.length-1];
}
/*
* 7.���ݵĻ�ȡ��һ���ֵ�Ԫ�ص�Ԫ�ؽڵ�
* */
function getNext(node){//node   �ֵ�Ԫ��
    var next= node.nextSibling;//��ȡ��һ���ֵܽڵ�
    if(next==null){//�жϽڵ��Ƿ�Ϊ��
        return null;
    }
    while(next.nodeType!=1){//�������ֵܽڵ��nodetype������һ
        next=next.nextSibling;//��ֵ��ȡ��һ���ֵܽڵ�
        if(next==null){//�����ֵ��ȡ���ֵܽڵ��nodetype���ڿշ��ؿ�
            return null;
        }
    }
    return next;//ֱ���ҵ�nodetype����һ,���ػ�õ���һ���ֵ�Ԫ��
}
/*
 * 8.���ݵĻ�ȡ��һ���ֵ�Ԫ�ص�Ԫ�ؽڵ�
 * */
function getPre(node){//node   �ֵ�Ԫ��
    var next= node.previousSibling;
    if(next==null){
        return null;
    }
    while(next.nodeType!=1){
        next=next.previousSibling;
        if(next==null){
            return null;
        }
    }
    return next;
}
function getNextSibling(node){
    var next=node.nextSibling;//�����һ���ֵܽڵ�
    if(next.nodeType==1){
    //�ж���һ���ֵܽڵ��odeType�ǲ��ǵ���1������������
        return next;//��ǰ��next�������ҵ���һ���ֵ�Ԫ�ؽڵ�
    }
    if(next){//��ǰ��next��nodeTypeֵ������1����Ҳ��Ϊ��
        return getNextSibling(next);//�����������������������(�ݹ�˼��)
    }
    return null;
}

function getNextSib(node){
    var tempLast=getLastChild(node.parentNode);
    if(node==tempLast){
        return null;
    }
    var tempObj=node.nextSibling;
    while(tempObj.nodeType!=1&&tempObj.nextSibling!=null){
        tempObj=tempObj.nextSibling;
    }
    return (tempObj.nodeType==1)?tempObj:null;
}
function mouseWheel(obj,upfun,downfun){
    if(obj.attachEvent){
        obj.attachEvent("onmousewheel",fun,false);//IE
    }else if(obj.addEventListener){
        obj.addEventListener("mousewheel",fun,false);//�ȸ�
        obj.addEventListener("DOMMouseScroll",fun,false);//���
    }
    function fun(e){
        var ev=e||window.event;
        var num=ev.detail||ev.wheelDelta;
        if(num==-3||num==120){
            upfun()
        }else if(num==3||num==-120){
            downfun();
        }
    }
}

function cloneObj(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj), //ϵ�л�����
            newobj = JSON.parse(str); //��ԭ
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ?
                cloneObj(obj[i]) : obj[i];
        }
    }
    return newobj;
};
//����ȥ��
function distinct(){
    this.sort();
    var res=[this[0]];
    for(var i=0;i<this.length;i++){
        if(this[i]!==res[res.length-1]){
            res.push(this[i])
        }
    }
    return res;
}
//1+2-3+4-5==100
for(var i=0;i<=100;i++){
    var result=0;
    if(i==1){
        result+=i;
    }else if(i%2==0){
        result-=i;
    }else if(i%22==1){
        result+=i
    }
}

//�ж����������Ƿ����
function arrayEqual(arr1,arr2){
    if(arr1===arr2) return true;
    if(arr1.length != arr2.length) return false;
    for(var i=0;i<arr1.length;++i){
        if(arr1[i] !== arr2[i]) return false
    }
    return true;
}

//���class
var hasClassV = require("./hasClass");
function addClass(ele,cls){
    if(!hasClass(ele,cls)){
        ele.className += ''+cls;
    }
}

//�ж�Ԫ���Ƿ���ĳ��class
function hasClass(ele,cls){
    return (new RegExp('(\\s|^'+cls+'(\\s|$)')).test(ele.className)
}

//ɾ��class
function removeClass(ele,cls){
    if(hasClassV(ele,cls)){
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        ele.className= ele.className.replace(reg,"");
    }
}

//����name��ȡcookie
function getCookie(name){
    var arr=document.cookie.replace(/\s/g,"").split(';');
    for(var i=0;i<arr.length;i++){
        var tempArr=arr[i].split('=');
        if(tempArr[0]==name){
            return decodeURIComponent(tempArr[1]);
        }
    }
    return ""
}

//����nameɾ��cookie
function removeCookie(name){
    var setCookie = require("./setCookie");
    //�����ѹ��ڣ�ϵͳ������ɾ��cookie
    setCookie(name,'1',-1);
}
//����cookie
function setCookie(name,value,days){
    var date=new Date();
    dadte.setDate(date.getDate()+days);
    document.cookie = name+"="+value+";expires="+date;
}
//��ȡ��������ͺͰ汾
function getExplore() {
    var sys = {},
        ua = navigator.userAgent.toLowerCase(),
        s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
        (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
            (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
                (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
                    (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
                        (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
                            (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;

// ���ݹ�ϵ�����ж�

    if (sys.ie) return('IE: ' + sys.ie)
    if (sys.edge) return('EDGE: ' + sys.edge)
    if (sys.firefox) return('Firefox: ' + sys.firefox)
    if (sys.chrome) return('Chrome: ' + sys.chrome)
    if (sys.opera) return('Opera: ' + sys.opera)
    if (sys.safari) return('Safari: ' + sys.safari)
    return 'Unkonwn'
}
//��ȡ����ϵͳ����
function getOS() {
    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';
    if (/mac/i.test(appVersion))
    return'MacOSX'
    if (/win/i.test(appVersion))
    return'windows'
    if (/linux/i.test(appVersion))
    return'linux'
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) 'ios'
    if (/android/i.test(userAgent))
    return'android'
    if (/win/i.test(appVersion) && /phone/i.test(userAgent))
    return'windowsPhone'
}
//��ȡ�������ඥ���ľ���
function getScrollTop() {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}
//��ȡһ��Ԫ�صľ����ĵ�(document)��λ�ã�����jQ�е�offset()
function offset(ele) {
    var pos = {left: 0, top: 0};
    while (ele) {pos.left += ele.offsetLeft;pos.top += ele.offsetTop;ele = ele.offsetParent;};
    return pos;
}
var getScrollTop = require('./getScrollTop');
var setScrollTop = require('./setScrollTop');
var requestAnimFrame = (
    function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
//��${duration}ʱ���ڣ�������ƽ��������${to}ָ��λ��
function scrollTo(to, duration) {
    if (duration < 0) {
        setScrollTop(to);
        return
    }
    var diff = to - getScrollTop();
    if (diff === 0) return
    var step = diff / duration * 10;
    requestAnimationFrame(
        function () {
            if (Math.abs(step) > Math.abs(diff)) {
                setScrollTop(getScrollTop() + diff);
                return;
            }
            setScrollTop(getScrollTop() + step);
            if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
                return;
            }
            scrollTo(to, duration - 16);
        });
}
//���ù������ඥ���ľ���
function setScrollTop(value) {
    window.scrollTo(0, value);
    returnvalue;
}

//keycode
var keyCodeMap = {
    8: 'Backspace',
    9: 'Tab',
    13: 'Enter',
    16: 'Shift',
    17: 'Ctrl',
    18: 'Alt',
    19: 'Pause',
    20: 'Caps Lock',
    27: 'Escape',
    32: 'Space',
    33: 'Page Up',
    34: 'Page Down',
    35: 'End',
    36: 'Home',
    37: 'Left',
    38: 'Up',
    39: 'Right',
    40: 'Down',
    42: 'Print Screen',
    45: 'Insert',
    46: 'Delete',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    65: 'A',
    66: 'B',
    67: 'C',
    68: 'D',
    69: 'E',
    70: 'F',
    71: 'G',
    72: 'H',
    73: 'I',
    74: 'J',
    75: 'K',
    76: 'L',
    77: 'M',
    78: 'N',
    79: 'O',
    80: 'P',
    81: 'Q',
    82: 'R',
    83: 'S',
    84: 'T',
    85: 'U',
    86: 'V',
    87: 'W',
    88: 'X',
    89: 'Y',
    90: 'Z',
    91: 'Windows',
    93: 'Right Click',
    96: 'Numpad 0',
    97: 'Numpad 1',
    98: 'Numpad 2',
    99: 'Numpad 3',
    100: 'Numpad 4',
    101: 'Numpad 5',
    102: 'Numpad 6',
    103: 'Numpad 7',
    104: 'Numpad 8',
    105: 'Numpad 9',
    106: 'Numpad *',
    107: 'Numpad +',
    109: 'Numpad -',
    110: 'Numpad .',
    111: 'Numpad /',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'Num Lock',
    145: 'Scroll Lock',
    182: 'My Computer',
    183: 'My Calculator',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: '\''
    };
//����keycode��ü���
function getKeyName(keycode) {
    if (keyCodeMap[keycode]) {
        returnkeyCodeMap[keycode];
    } else {
        console.log(
            'Unknow Key(Key Code:'
            + keycode +
            ')'
        );return'';
    }
};
//�����֧�ֳ�������
function deepClone(values) {
    var copy;
// Handle the 3 simple types, and null or undefined
    if (null == values || "object" != typeofvalues)
        return values;
// Handle Date
    if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy;
    }
// Handle Array
    if (values instanceof Array) {
        copy = [];
        for (var i = 0, len = values.length; i < len; i++) {
            copy[i] = deepClone(values[i]);
        }
        returncopy;
    }
// Handle Object
    if (values instanceof Object) {
        copy = {};
        for (var attr in values) {
            if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
        }
        returncopy;
    }
    throw
    new Error("Unable to copy values! Its type isn't supported.");
}
//�ж�`obj`�Ƿ�Ϊ��
function isEmptyObject(obj) {
    if (!obj || typeofobj !== 'object' || Array.isArray(obj)) return false
    return !Object.keys(obj).length
}
//�������ɫ
function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}
//����ָ����Χ�����
function randomNum(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}
//�ж��Ƿ�Ϊ�����ַ
function isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

/**
 *
 * @desc  �ж��Ƿ�Ϊ���֤��
 * @param  {String|Number} str
 * @return {Boolean}
 */
function isIdCard(str) {
    return
    /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
}

/**
 *
 * @desc   �ж��Ƿ�Ϊ�ֻ���
 * @param  {String|Number} str
 * @return {Boolean}
 */
function isPhoneNum(str) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
}

/**
 *
 * @desc   �ж��Ƿ�ΪURL��ַ
 * @param  {String} str
 * @return {Boolean}
 */
function isUrl(str) {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}

/**
 *
 * @desc   �ֽ��ת��д
 * @param  {Number} n
 * @return {String}
 */
function digitUppercase(n) {
    var fraction = ['��', '��'];
    var digit = ['��', 'Ҽ', '��', '��', '��', '��', '½', '��', '��', '��'];
    var unit = [['Ԫ', '��', '��'], ['', 'ʰ', '��', 'Ǫ']];

    var head = n < 0 ? 'Ƿ' : '';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/��./, '');
    }
    s = s || '��';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(��.)*��$/, '').replace(/^$/, '��') + unit[0][i] + s;
    }
    return head + s.replace(/(��.)*��Ԫ/, 'Ԫ').replace(/(��.)+/g, '��').replace(/^��$/, '��Ԫ��');
};

/**
 *
 * @desc �ж�������Ƿ�֧��webP��ʽͼƬ
 * @return {Boolean}
 */
function isSupportWebP() {
    return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
}

/**
 * @desc   ��ʽ��${startTime}�����ڵ��ѹ�ʱ��
 * @param  {Date} startTime
 * @return {String}
 */
function formatPassTime(startTime) {
    var currentTime = Date.parse(new Date()),
        time = currentTime - startTime,
        day = parseInt(time / (1000 * 60 * 60 * 24)),
        hour = parseInt(time / (1000 * 60 * 60)),
        min = parseInt(time / (1000 * 60)),
        month = parseInt(day / 30),
        year = parseInt(month / 12);
    if (year) return year + "��ǰ"
    if (month) return month + "����ǰ"
    if (day) return day + "��ǰ"
    if (hour) return hour + "Сʱǰ"
    if (min) return min + "����ǰ"
    else return '�ո�'
}

/**
 *
 * @desc   ��ʽ�����ھ�${endTime}��ʣ��ʱ��
 * @param  {Date} endTime
 * @return {String}
 */
function formatRemainTime(endTime) {
    var startDate = new Date();
//��ʼʱ��
    var endDate = new Date(endTime);
//����ʱ��
    var t = endDate.getTime() - startDate.getTime();
//ʱ���
    var d = 0,
        h = 0,
        m = 0,
        s = 0;
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    }
    return d + "�� " + h + "Сʱ " + m + "���� " + s + "��";
}
/**
 *
 * @desc   url����ת����
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
function parseQueryString(url) {
    url = url == null ? window.location.href : url
    var search = url.substring(url.lastIndexOf('?') + 1)
    if (!search) {
        return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

/**
 *
 * @desc   �������л�
 * @param  {Object} obj
 * @return {String}
 */
function stringfyQueryString(obj) {
    if (!obj) return '';
    var pairs = [];
    for (var key inobj) {
        var value = obj[key];
        if (value instanceof Array) {
            for (var i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
            }
            continue;
        }
        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return pairs.join('&');
}

/**
 * @desc   ����������
 * ����������`resize`��`scroll`�Ⱥ����ĵ���Ƶ��
 *
 * @param  {Number}    delay          0 ���߸���ĺ������� �����¼��ص�����Լ100��250���루����ߣ����ӳ��������õġ�
 * @param  {Boolean}   noTrailing     ��ѡ��Ĭ��Ϊfalse��
 *                                    ���noTrailingΪtrue�����������������ã�ÿ��`delay`����`callback`Ҳ��ִ��һ�Ρ�
 *                                    ���noTrailingΪfalse����δ���룬`callback`�������һ�ε��ý�����������ִ��һ��.
 *                                    ���ӳ�`delay`����֮�󣬽�������û�б�����,�ڲ��������Ḵλ��
 * @param  {Function}  callback       �ӳٺ����ִ�еĺ�����`this`�����ĺ����в������ǰ�ԭ�����ݵģ�
 *                                    ִ��ȥ��������ʱ������`callback`��
 * @param  {Boolean}   debounceMode   ���`debounceMode`Ϊtrue��`clear`��`delay`ms��ִ�С�
 *                                    ���debounceMode��false��`callback`��`delay` ms֮��ִ�С�
 *
 * @return {Function}  �µĽ�������
 */
function throttle(delay, noTrailing, callback, debounceMode) {
// After wrapper has stopped being called, this timeout ensures that
// `callback` is executed at the proper times in `throttle` and `end`
// debounce modes.
    var timeoutID;
// Keep track of the last time `callback` was executed.
    var lastExec = 0;
// `noTrailing` defaults to falsy.
    if (typeof noTrailing !== 'boolean') {
        debounceMode = callback;
        callback = noTrailing;
        noTrailing = undefined;
    }
// The `wrapper` function encapsulates all of the throttling / debouncing
// functionality and when executed will limit the rate at which `callback`
// is executed.
    function wrapper() {
        var self = this;
        var elapsed = Number(new Date()) - lastExec;
        var args = arguments;
// Execute `callback` and update the `lastExec` timestamp.
        function exec() {lastExec = Number(new Date());
            callback.apply(self, args);
        }
// If `debounceMode` is true (at begin) this is used to clear the flag
// to allow future `callback` executions.
        function clear() {
            timeoutID = undefined;
        }
        if (debounceMode && !timeoutID) {
// Since `wrapper` is being called for the first time and
// `debounceMode` is true (at begin), execute `callback`.
            exec();
        }
// Clear any existing timeout.
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        if (debounceMode === undefined && elapsed > delay) {
// In throttle mode, if `delay` time has been exceeded, execute
// `callback`.
            exec();
        } else if (noTrailing !== true) {
// In trailing throttle mode, since `delay` time has not been
// exceeded, schedule `callback` to execute `delay` ms after most
// recent execution.
//
// If `debounceMode` is true (at begin), schedule `clear` to execute
// after `delay` ms.
//
// If `debounceMode` is false (at end), schedule `callback` to
// execute after `delay` ms.
            timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
        }
    }
// Return the wrapper function.
    return wrapper;
};

/**
 * @desc ��������
 * ��throttle��ͬ���ǣ�debounce��֤һ�������ڶ��ٺ����ڲ��ٱ�������ֻ��ִ��һ�Σ�
 * Ҫô�ڵ�һ�ε���return�ķ�������ʱִ�У�Ҫô���ӳ�ָ���������á�
 * @example ���ó����������߱༭���Զ��洢������
 * @param  {Number}   delay         0���߸���ĺ������� �����¼��ص�����Լ100��250���루����ߣ����ӳ��������õġ�
 * @param  {Boolean}  atBegin       ��ѡ��Ĭ��Ϊfalse��
 *                                  ���`atBegin`Ϊfalse��δ���룬�ص��������ڵ�һ�ε���return�ķ����������ӳ�ָ��������á�
 ���`atBegin`Ϊtrue���ص��������ڵ�һ�ε���return�ķ�������ʱֱ��ִ��
 * @param  {Function} callback      �ӳٺ����ִ�еĺ�����`this`�����ĺ����в������ǰ�ԭ�����ݵģ�
 *                                  ִ��ȥ��������ʱ��������`callback`��
 *
 * @return {Function} �µķ���������
 */
var throttle = require('./throttle');
function debounce(delay, atBegin, callback) {
    return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
};

var contentText={
    input:null,
    init:function(config){
        this.input=$(config.id);
        this.bind();
        return this;
    },
    bind:function(){
        var self=this;
        this.input.on("keyup",function(){
            self.render();
        });
    },
    getNum:function(){
        return this.input.val().length
    },
    render:function(){
        var num=this.getNum();
        if($('J_input_count').length==0){
            this.input.after('<span id="J_input_count"></span>')
        };
        $('#J_input_count').html(num+'����')
    }$(function(){
        textContent.init({id:"#J_input"}).render();
    })
}
var TextCount = (function(){
    var _bind = function(that){
                that.input.on('keyup',function(){
                    that.render();
                });
    }
    var _getNum = function(that){
                return that.
                input.val().length;
    }
    var TextCountFun = function(config){

    }
    TextCountFun.prototype.init = function(config) {
                this.input = $(config.id);
                _bind(this);
                return this;
            };
    TextCountFun.prototype.render = function() {
            var num = _getNum(this);
            if ($('#J_input_count').length == 0) {
                this.input.after(' <span id="J_input_count"> </span>');
            };
            $('#J_input_count')
                .html(num+'����');
        };
        return TextCountFun;
    })();$(function() {
        new TextCount().init({id:'#J_input'}).render();
    })