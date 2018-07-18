/*
* @Author: admin
* @Date:   2018-07-12 10:13:25
* @Last Modified by:   admin
* @Last Modified time: 2018-07-12 10:48:25
*/
var cfg = {
    imgtype: ["image/jpeg", "image/png", "image/gif", "image/bmp"],
    imgsize: 5 * 1024 * 1024,
    varied_divMIN: 50,
    varied_divDEFAULT: 100,
    needWH:0,
};
var dom = {
    body: null,
    SelectPicture: null,
    upfile: null,
    pre: null,
    ccp: null,
    bt: null,
    prea: null,
    preb: null,
    prec: null,
    ctna: null,
    ctnb: null,
    ctnc: null,
    imga: null,
    imgb: null,
    imgc: null,
    Y_OUT: null,
    N_OUT: null,
    Y: null,
    N: null,
    ctn: null,
    black_cover: null,
    fixed_img: null,
    varied_div: null,
    varied_div_img: null,
    TopLeft: null,
    TopRight: null,
    BottomRight: null,
    BottomLeft: null,
};
var ccp = {
    SelectPictureW: null,
    SelectPictureH: null,
    SelectPictureP1: 9,
    SelectPictureP2: 4,
    SelectPictureL: null,
    SelectPictureT: null,
    SelectPictureFontSize: null,
    ///////////////////////////
    file: null,
    imgtype: null,
    imgsize: null,
    ///////////////////////////
    imgW: null,
    imgH: null,
    imgN: null,
    imgURL: null,
    //////////////////////////
    preW: null,
    preH: null,
    ccpW: null,
    ccpH: null,
    btW: null,
    btH: null,
    /////////////////////////
    pre4: null,
    preaL: null,
    preaT: null,
    preaWH: null,
    prebL: null,
    prebT: null,
    prebWH: null,
    precL: null,
    precT: null,
    precWH: null,
    ctnLT: 3,
    ctnaWH: null,
    ctnbWH: null,
    ctncWH: null,
    //////////////////////////
    YN3: null,
    YN_OUTWH: null,
    YNWH: null,
    YN_OUTR: null,
    Y_OUTT: null,
    N_OUTT: null,
    YNLT1: 25,
    YNLT2: 20,
    //////////////////////////
    ctnL: null,
    ctnT: null,
    black_coverL: null,
    black_coverT: null,
    /////////////////////////
    varied_divL: null,
    varied_divT: null,
    varied_divWH: null,
    varied_divMaxL: null,
    varied_divMaxT: null,
    varied_div_imgWH: null,
    varied_div_imgL: null,
    varied_div_imgT: null,
    /////////////////////////
    imgaW: null,
    imgaH: null,
    imgaL: null,
    imgaT: null,
    imgbW: null,
    imgbH: null,
    imgbL: null,
    imgbT: null,
    imgcW: null,
    imgcH: null,
    imgcL: null,
    imgcT: null,
    /////////////////////////
};
var GET_DOM = function () {
    dom.body = document.body;
    dom.pre = $("pre");
    dom.ccp = $("ccp");
    dom.bt = $("bt");
    dom.SelectPicture = $("SelectPicture");
    dom.prea = $("prea");
    dom.preb = $("preb");
    dom.prec = $("prec");
    dom.ctna = $("ctna");
    dom.ctnb = $("ctnb");
    dom.ctnc = $("ctnc");
    dom.imga = $("imga");
    dom.imgb = $("imgb");
    dom.imgc = $("imgc");
    dom.Y_OUT = $("Y_OUT");
    dom.N_OUT = $("N_OUT");
    dom.Y = $("Y");
    dom.N = $("N");
    dom.ctn = $("ctn");
    dom.black_cover = $("black_cover");
    dom.fixed_img = $("fixed_img");
    dom.varied_div = $("varied_div");
    dom.varied_div_img = $("varied_div_img");   
    dom.TopLeft = $("TopLeft");
    dom.TopRight = $("TopRight");
    dom.BottomRight = $("BottomRight");
    dom.BottomLeft = $("BottomLeft");
};
var INIT_DOM = function () {
    setStyle2(dom.body, "width", screenW + "px", "height", screenH + "px");
    dom.body.style.backgroundImage = get_random_bgimg(7);/////////////////////
    set_SelectPictureW(Math.floor(screenW / ccp.SelectPictureP1));
    AddEvent2(dom.SelectPicture, EventsType.mouseover, SelectPicture_mouseover, EventsType.mouseleave, SelectPicture_mouseleave);
    AddEvent(dom.SelectPicture, EventsType.click, SelectPicture_click);/////////////////////
    ccp.preH = ccp.ccpH = ccp.btH = screenH - 2;
    ccp.ccpW = screenH + 100 - 2;
    ccp.preW = Math.ceil((screenW - (ccp.ccpW + 2)) / 2) - 2;
    ccp.btW = screenW - (ccp.ccpW + 2) - (ccp.preW + 2) - 2;
    setStyle2(dom.pre, "width", ccp.preW + "px", "height", ccp.preH + "px");
    setStyle2(dom.ccp, "width", ccp.ccpW + "px", "height", ccp.ccpH + "px");
    setStyle2(dom.bt, "width", ccp.btW + "px", "height", ccp.btH + "px");
    Hide3(dom.pre, dom.ccp, dom.bt);/////////////////////
};
var EVENTS = function () {
    AddEvent(dom.varied_div, EventsType.mousedown, varied_div_mousedown);//varied_div
    AddEvent(dom.TopLeft, EventsType.mousedown, TopLeft_mousedown);//TopLeft
    AddEvent(dom.TopRight, EventsType.mousedown, TopRight_mousedown);//TopRight
    AddEvent(dom.BottomRight, EventsType.mousedown, BottomRight_mousedown);//BottomRight
    AddEvent(dom.BottomLeft, EventsType.mousedown, BottomLeft_mousedown);//BottomLeft
    AddEvent(dom.Y, EventsType.click, Y_click);//Y
    AddEvent(dom.N, EventsType.click, N_click);//N
};
var END = function () {
    AddEvent(document, EventsType.mousemove, cannotselect);
};
start(function () {
    GET_DOM();
    INIT_DOM();
    EVENTS();
    END();
});

