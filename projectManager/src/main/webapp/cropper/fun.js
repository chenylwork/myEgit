/*
* @Author: admin
* @Date:   2018-07-12 10:14:49
* @Last Modified by:   admin
* @Last Modified time: 2018-07-12 10:15:14
*/
var get_random_bgimg = function (n) {
    var m = Math.floor(Math.random() * n);
    var r = "url(images/project-logo3.jpg)";
    return r;
};
var set_SelectPictureW = function (W) {
    ccp.SelectPictureW = W;
    ccp.SelectPictureH = Math.floor(ccp.SelectPictureW / ccp.SelectPictureP2);
    ccp.SelectPictureL = Math.floor((screenW - ccp.SelectPictureW) / 2);
    ccp.SelectPictureT = Math.floor((screenH - ccp.SelectPictureH) / 2);
    ccp.SelectPictureFontSize = Math.floor(ccp.SelectPictureH / 1.5);
    setStyle(dom.SelectPicture, "font-size", ccp.SelectPictureFontSize + "px");
    setLTWH(dom.SelectPicture, ccp.SelectPictureL, ccp.SelectPictureT, ccp.SelectPictureW, ccp.SelectPictureH);
};
var SelectPicture_mouseover = function () {
    set_SelectPictureW(ccp.SelectPictureW + 15);
};
var SelectPicture_mouseleave = function () {
    set_SelectPictureW(ccp.SelectPictureW - 15);
};
///////////////////////////////////////////////////
var downX, downY, oldL, oldT, tempWH, tempL, tempT, dxMax, tempMaxL, tempMaxT;
var varied_divLimit = function () {
    if (ccp.varied_divL < 0)
        ccp.varied_divL = 0;
    else if (ccp.varied_divL > ccp.varied_divMaxL)
        ccp.varied_divL = ccp.varied_divMaxL;
    if ((ccp.varied_divT < 0))
        ccp.varied_divT = 0;
    else if (ccp.varied_divT > ccp.varied_divMaxT)
        ccp.varied_divT = ccp.varied_divMaxT;
};
var varied_div_mousedown = function (e) {
    if (e.button > 0) {
        varied_div_mouseup();
        return false;
    }
    e.preventDefault && e.preventDefault();
    downX = e.clientX;
    downY = e.clientY;
    oldL = ccp.varied_divL;
    oldT = ccp.varied_divT;
    AddEvent2(document, EventsType.mouseup, varied_div_mouseup, EventsType.mousemove, doc_varied_div_mousemove);
};
var doc_varied_div_mousemove = function (e) {
    ccp.varied_divL = oldL + e.clientX - downX;
    ccp.varied_divT = oldT + e.clientY - downY;
    varied_divLimit();
    setLT(dom.varied_div, ccp.varied_divL, ccp.varied_divT);
    setvaried_div_img();
    setpreimg();
};
var varied_div_mouseup = function () {
    DelEvent2(document, EventsType.mouseup, varied_div_mouseup, EventsType.mousemove, doc_varied_div_mousemove);
};
////////////////////////////////////////////////////
var TopLeft_mousedown = function (e) {
    if (e.button > 0) {
        TopLeft_mouseup();
        return false;
    }
    e.preventDefault && e.preventDefault();
    downX = e.clientX;
    downY = e.clientY;
    oldL = ccp.varied_divL;
    oldT = ccp.varied_divT;
    tempWH = ccp.varied_divWH;
    tempL = ccp.varied_divL;
    tempT = ccp.varied_divT;
    tempMaxL = ccp.varied_divMaxL;
    tempMaxT = ccp.varied_divMaxT;
    dxMax = tempL >= tempT ? tempT : tempL;
    AddEvent2(document, EventsType.mouseup, TopLeft_mouseup, EventsType.mousemove, doc_TopLeft_mousemove);
};
var doc_TopLeft_mousemove = function (e) {
    varied_div_mouseup();//移动事件屏蔽，非常重要
    var dx = e.clientY - downY;
    if (dx < 0 && Math.abs(dx) > dxMax) {
        dx = -dxMax;
    }
    else if (dx > 0 && dx > tempWH - cfg.varied_divMIN) {
        dx = tempWH - cfg.varied_divMIN;
    }
    ccp.varied_divMaxL = tempMaxL + dx;
    ccp.varied_divMaxT = tempMaxT + dx;
    ccp.varied_divL = oldL + dx;
    ccp.varied_divT = oldT + dx;
    ccp.varied_divWH = tempWH - dx;
    setLTWH(dom.varied_div, ccp.varied_divL, ccp.varied_divT, ccp.varied_divWH, ccp.varied_divWH);
    setvaried_div_img();
    setpreimg();
};
var TopLeft_mouseup = function () {
    DelEvent2(document, EventsType.mouseup, TopLeft_mouseup, EventsType.mousemove, doc_TopLeft_mousemove);
};
////////////////////////////////////////////////////
var TopRight_mousedown = function (e) {
    if (e.button > 0) {
        TopRight_mouseup();
        return false;
    }
    e.preventDefault && e.preventDefault();
    downX = e.clientX;
    downY = e.clientY;
    oldL = ccp.varied_divL;
    oldT = ccp.varied_divT;
    tempWH = ccp.varied_divWH;
    tempL = ccp.imgW - ccp.varied_divL - ccp.varied_divWH;
    tempT = ccp.varied_divT;
    tempMaxL = ccp.varied_divMaxL;
    tempMaxT = ccp.varied_divMaxT;
    dxMax = tempL >= tempT ? tempT : tempL;
    AddEvent2(document, EventsType.mouseup, TopRight_mouseup, EventsType.mousemove, doc_TopRight_mousemove);
};
var doc_TopRight_mousemove = function (e) {
    varied_div_mouseup();//移动事件屏蔽，非常重要
    var dx = e.clientY - downY;
    if (dx < 0 && Math.abs(dx) > dxMax) {
        dx = -dxMax;
    }
    else if (dx > 0 && dx > tempWH - cfg.varied_divMIN) {
        dx = tempWH - cfg.varied_divMIN;
    }
    ccp.varied_divMaxL = tempMaxL + dx;
    ccp.varied_divMaxT = tempMaxT + dx;
    ccp.varied_divL = oldL;
    ccp.varied_divT = oldT + dx;
    ccp.varied_divWH = tempWH - dx;
    setLTWH(dom.varied_div, ccp.varied_divL, ccp.varied_divT, ccp.varied_divWH, ccp.varied_divWH);
    setvaried_div_img();
    setpreimg();
};
var TopRight_mouseup = function () {
    DelEvent2(document, EventsType.mouseup, TopRight_mouseup, EventsType.mousemove, doc_TopRight_mousemove);
};
///////////////////////////////////////////////////
var BottomRight_mousedown = function (e) {
    if (e.button > 0) {
        BottomRight_mouseup();
        return false;
    }
    e.preventDefault && e.preventDefault();
    downX = e.clientX;
    downY = e.clientY;
    oldL = ccp.varied_divL;
    oldT = ccp.varied_divT;
    tempWH = ccp.varied_divWH;
    tempL = ccp.imgW - ccp.varied_divL - ccp.varied_divWH;
    tempT = ccp.imgH - ccp.varied_divT - ccp.varied_divWH;
    tempMaxL = ccp.varied_divMaxL;
    tempMaxT = ccp.varied_divMaxT;
    dxMax = tempL >= tempT ? tempT : tempL;
    AddEvent2(document, EventsType.mouseup, BottomRight_mouseup, EventsType.mousemove, doc_BottomRight_mousemove);
};
var doc_BottomRight_mousemove = function (e) {
    varied_div_mouseup();//移动事件屏蔽，非常重要
    var dx = e.clientY - downY;
    if (dx > 0 && dx > dxMax) {
        dx = dxMax;
    }
    else if (dx < 0 && Math.abs(dx) > tempWH - cfg.varied_divMIN) {
        dx = -(tempWH - cfg.varied_divMIN);
    }
    ccp.varied_divMaxL = tempMaxL - dx;
    ccp.varied_divMaxT = tempMaxT - dx;
    ccp.varied_divL = oldL;
    ccp.varied_divT = oldT;
    ccp.varied_divWH = tempWH + dx;
    setLTWH(dom.varied_div, ccp.varied_divL, ccp.varied_divT, ccp.varied_divWH, ccp.varied_divWH);
    setvaried_div_img();
    setpreimg();
};
var BottomRight_mouseup = function () {
    DelEvent2(document, EventsType.mouseup, BottomRight_mouseup, EventsType.mousemove, doc_BottomRight_mousemove);
};
///////////////////////////////////////////////////
var BottomLeft_mousedown = function (e) {
    if (e.button > 0) {
        BottomLeft_mouseup();
        return false;
    }
    e.preventDefault && e.preventDefault();
    downX = e.clientX;
    downY = e.clientY;
    oldL = ccp.varied_divL;
    oldT = ccp.varied_divT;
    tempWH = ccp.varied_divWH;
    tempL = ccp.varied_divL;
    tempT = ccp.imgH - ccp.varied_divT - ccp.varied_divWH;
    tempMaxL = ccp.varied_divMaxL;
    tempMaxT = ccp.varied_divMaxT;
    dxMax = tempL >= tempT ? tempT : tempL;
    AddEvent2(document, EventsType.mouseup, BottomLeft_mouseup, EventsType.mousemove, doc_BottomLeft_mousemove);
};
var doc_BottomLeft_mousemove = function (e) {
    varied_div_mouseup();//移动事件屏蔽，非常重要
    var dx = e.clientY - downY;
    if (dx > 0 && dx > dxMax) {
        dx = dxMax;
    }
    else if (dx < 0 && Math.abs(dx) > tempWH - cfg.varied_divMIN) {
        dx = -(tempWH - cfg.varied_divMIN);
    }
    ccp.varied_divMaxL = tempMaxL - dx;
    ccp.varied_divMaxT = tempMaxT - dx;
    ccp.varied_divL = oldL - dx;
    ccp.varied_divT = oldT;
    ccp.varied_divWH = tempWH + dx;
    setLTWH(dom.varied_div, ccp.varied_divL, ccp.varied_divT, ccp.varied_divWH, ccp.varied_divWH);
    setvaried_div_img();
    setpreimg();
};
var BottomLeft_mouseup = function () {
    DelEvent2(document, EventsType.mouseup, BottomLeft_mouseup, EventsType.mousemove, doc_BottomLeft_mousemove);
};
///////////////////////////////////////////////////
var getDATA = function () {
    var parameter = location.search; //获取url中"?"符后的字串
    if (parameter.length == 0) {
        return 666;
    } else {
        var ss = parameter.split("&");
        url = ss[0].split("=")[1];
        cfg.needWH = ss[1].split("=")[1];
    }
    if (url.length == 0) {
        return 777;
    } else if (cfg.needWH == 0) {
        return 888;
    } else if (cfg.needWH > 1000) {
        return 999;
    }
    
    var canvas = document.createElement("canvas");
    canvas.style.display = "none";
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    canvas.width = canvas.height = cfg.needWH;
    ctx.fillRect(0, 0, cfg.needWH, cfg.needWH);
    var a = Math.ceil(ccp.varied_divL * ccp.imgN);
    var b = Math.ceil(ccp.varied_divT * ccp.imgN);
    var c = Math.ceil(ccp.varied_divWH * ccp.imgN);
    ctx.drawImage(dom.fixed_img, a, b, c, c, 0, 0, cfg.needWH, cfg.needWH);
    return canvas.toDataURL(ccp.imgtype, 1);
};
var callback = function () {
    var txt = xmlReq.responseText;
    alert(txt);
    window.opener = null;
    window.open('', '_self');
    window.close();
};
var Y_click = function () {
    var DATA = getDATA();
    DATA == 666 && alert("没有参数");
    DATA == 777 && alert("没有返回地址");
    DATA == 888 && alert("未给出返回图片大小");
    DATA == 999 && alert("图片大小不能超过 1000 X 1000");
    if (DATA == 666 || DATA == 777 || DATA == 888 || DATA == 999) {
        window.opener = null;
        window.open('', '_self');
        window.close();
    }//没有参数或参数错误关闭页面
    method = "post";
    msg = "";
    AJAX(url, method, "DATA=" + DATA, callback);
};
var N_click = function () {
    Hide3(dom.pre, dom.ccp, dom.bt);
};
///////////////////////////////////////////////////
var check_imgtype = function () {
    if (!inArray(ccp.imgtype, cfg.imgtype)) {
        alert("请选择正确的图片类型");
        return false;
    } else { return true; }
};
var check_imgsize = function () {
    if (ccp.imgsize > cfg.imgsize) {
        alert("图片不能超过"+(cfg.imgsize/1024)/1024+"M");
        return false;
    } else { return true; }
};
var set_pre = function () {
    ccp.preaWH = Math.round(ccp.preW * 0.6);
    ccp.prebWH = Math.round(ccp.preW * 0.5);
    ccp.precWH = Math.round(ccp.preW * 0.4);
    ccp.preaL = Math.round((ccp.preW - ccp.preaWH) / 2);
    ccp.prebL = Math.round((ccp.preW - ccp.prebWH) / 2);
    ccp.precL = Math.round((ccp.preW - ccp.precWH) / 2);
    ccp.pre4 = Math.round((ccp.preH - ccp.preaWH - ccp.prebWH - ccp.precWH) / 4);
    ccp.preaT = ccp.pre4;
    ccp.prebT = ccp.pre4 * 2 + ccp.preaWH;
    ccp.precT = ccp.pre4 * 3 + ccp.preaWH + ccp.prebWH;
    setLTWH(dom.prea, ccp.preaL, ccp.preaT, ccp.preaWH, ccp.preaWH);
    setLTWH(dom.preb, ccp.prebL, ccp.prebT, ccp.prebWH, ccp.prebWH);
    setLTWH(dom.prec, ccp.precL, ccp.precT, ccp.precWH, ccp.precWH);
    ////////////////////////////////////////////////////////////////
    ccp.ctnaWH = ccp.preaWH - ccp.ctnLT * 2;
    ccp.ctnbWH = ccp.prebWH - ccp.ctnLT * 2;
    ccp.ctncWH = ccp.precWH - ccp.ctnLT * 2;
    setLTWH(dom.ctna, ccp.ctnLT, ccp.ctnLT, ccp.ctnaWH, ccp.ctnaWH);
    setLTWH(dom.ctnb, ccp.ctnLT, ccp.ctnLT, ccp.ctnbWH, ccp.ctnbWH);
    setLTWH(dom.ctnc, ccp.ctnLT, ccp.ctnLT, ccp.ctncWH, ccp.ctncWH);
    dom.imga.src = dom.imgb.src = dom.imgc.src = ccp.imgURL;
};
var setYN = function (dom, n) {
    ccp.YNWH = ccp.YN_OUTWH - n * 2;
    setStyle(dom, "font-size", Math.floor(ccp.YNWH * 0.9) + "px");
    setLTWH(dom, n, n, ccp.YNWH, ccp.YNWH);
};
var Y_mouseover = function () {
    setYN(dom.Y, ccp.YNLT2);
};
var Y_mouseleave = function () {
    setYN(dom.Y, ccp.YNLT1);
};
var N_mouseover = function () {
    setYN(dom.N, ccp.YNLT2);
};
var N_mouseleave = function () {
    setYN(dom.N, ccp.YNLT1);
};
var set_bt = function () {
    ccp.YN_OUTWH = Math.round(ccp.btW * 0.6);
    ccp.YN_OUTR = Math.round((ccp.btW - ccp.YN_OUTWH) / 2);
    ccp.YN3 = Math.round((ccp.btH - ccp.YN_OUTWH * 2) / 3);
    ccp.Y_OUTT = ccp.YN3;
    ccp.N_OUTT = ccp.YN3 * 2 + ccp.YN_OUTWH;
    setRTWH(dom.Y_OUT, ccp.YN_OUTR, ccp.Y_OUTT, ccp.YN_OUTWH, ccp.YN_OUTWH);
    setRTWH(dom.N_OUT, ccp.YN_OUTR, ccp.N_OUTT, ccp.YN_OUTWH, ccp.YN_OUTWH);
    setYN(dom.Y, ccp.YNLT1);
    setYN(dom.N, ccp.YNLT1);
    AddEvent2(dom.Y, EventsType.mouseover, Y_mouseover, EventsType.mouseleave, Y_mouseleave);
    AddEvent2(dom.N, EventsType.mouseover, N_mouseover, EventsType.mouseleave, N_mouseleave);
};
var setvaried_div = function () {
    if (ccp.imgW > ccp.imgH) {
        ccp.varied_divWH = ccp.imgH < cfg.varied_divDEFAULT ? ccp.imgH : cfg.varied_divDEFAULT;
    }
    else {
        ccp.varied_divWH = ccp.imgW < cfg.varied_divDEFAULT ? ccp.imgW : cfg.varied_divDEFAULT;
    }
    ccp.varied_divL = Math.round((ccp.imgW - ccp.varied_divWH) / 2);
    ccp.varied_divT = Math.round((ccp.imgH - ccp.varied_divWH) / 2);
    ccp.varied_divMaxL = ccp.imgW - ccp.varied_divWH;
    ccp.varied_divMaxT = ccp.imgH - ccp.varied_divWH;
    setLTWH(dom.varied_div, ccp.varied_divL, ccp.varied_divT, ccp.varied_divWH, ccp.varied_divWH);
};
var setvaried_div_img = function () {
    ccp.varied_div_imgL = -ccp.varied_divL;
    ccp.varied_div_imgT = -ccp.varied_divT;
    setLT(dom.varied_div_img, ccp.varied_div_imgL, ccp.varied_div_imgT);
};
var setpreimg = function () {
    var p1, p2, p3;
    p1 = ccp.ctnaWH / ccp.varied_divWH;
    p2 = ccp.ctnbWH / ccp.varied_divWH;
    p3 = ccp.ctncWH / ccp.varied_divWH;
    ccp.imgaW = Math.round(p1 * ccp.imgW);
    ccp.imgaH = Math.round(p1 * ccp.imgH);
    ccp.imgaL = Math.round(p1 * ccp.varied_div_imgL);
    ccp.imgaT = Math.round(p1 * ccp.varied_div_imgT);
    ccp.imgbW = Math.round(p2 * ccp.imgW);
    ccp.imgbH = Math.round(p2 * ccp.imgH);
    ccp.imgbL = Math.round(p2 * ccp.varied_div_imgL);
    ccp.imgbT = Math.round(p2 * ccp.varied_div_imgT);
    ccp.imgcW = Math.round(p3 * ccp.imgW);
    ccp.imgcH = Math.round(p3 * ccp.imgH);
    ccp.imgcL = Math.round(p3 * ccp.varied_div_imgL);
    ccp.imgcT = Math.round(p3 * ccp.varied_div_imgT);
    setLTWH(dom.imga, ccp.imgaL, ccp.imgaT, ccp.imgaW, ccp.imgaH);
    setLTWH(dom.imgb, ccp.imgbL, ccp.imgbT, ccp.imgbW, ccp.imgbH);
    setLTWH(dom.imgc, ccp.imgcL, ccp.imgcT, ccp.imgcW, ccp.imgcH);
};
var set_ccp = function () {
    ccp.ctnL = ccp.preW + 3 + Math.ceil((ccp.ccpW - ccp.imgW) / 2);
    ccp.ctnT = 1 + Math.ceil((ccp.ccpH - ccp.imgH) / 2);
    setLTWH(dom.ctn, ccp.ctnL, ccp.ctnT, ccp.imgW, ccp.imgH);
    ccp.black_coverL = ccp.preW + 3;
    ccp.black_coverT = 1;
    setLTWH(dom.black_cover, ccp.black_coverL, ccp.black_coverT, ccp.ccpW, ccp.ccpH);
    setLTWH(dom.fixed_img, 0, 0, ccp.imgW, ccp.imgH);
    dom.fixed_img.src = ccp.imgURL;
    setvaried_div();
    setWH(dom.varied_div_img, ccp.imgW, ccp.imgH);
    dom.varied_div_img.src = ccp.imgURL;
    setvaried_div_img();
    setpreimg();
};
var setStart = function () {
    set_pre();
    set_bt();
    set_ccp();
    Show3(dom.pre, dom.ccp, dom.bt);
};
var setImgWH = function (src, type) {
    var image = new Image();
    image.onload = function () {
        var width = this.width, height = this.height;//图片的宽高
        var p = width / height;
        if (p > 1) {
            if (p > ccp.ccpW / 50) {
                alert("图片宽高比不能超过" + p);
                return;
            }
            else {
                if (height < 50) {
                    ccp.imgN = height / 50;
                    ccp.imgH = 50;
                    ccp.imgW = Math.round(ccp.imgH * p);
                }
                else if (width > ccp.ccpW) {
                    ccp.imgN = width / ccp.ccpW;
                    ccp.imgW = ccp.ccpW;
                    ccp.imgH = Math.round(ccp.imgW / p);
                }
                else {
                    ccp.imgN = 1;
                    ccp.imgW = width;
                    ccp.imgH = height;
                }
            }
        }
        else {
            if (p < 50 / ccp.ccpH) {
                alert("图片宽高比不能小于" + p);
                return;
            }
            else {
                if (width < 50) {
                    ccp.imgN = width / 50;
                    ccp.imgW = 50;
                    ccp.imgH = Math.round(ccp.imgW / p);
                }
                else if (height > ccp.ccpH) {
                    ccp.imgN = height / ccp.ccpH;
                    ccp.imgH = ccp.ccpH;
                    ccp.imgW = Math.round(ccp.imgH * p);
                }
                else {
                    ccp.imgN = 1;
                    ccp.imgW = width;
                    ccp.imgH = height;
                }
            }
        }
        ccp.imgURL = this.src;
        delete image;
        setStart();
    };
    image.onerror = function () {
        alert("图片已损坏，请上传正确图片");
    };
    image.src = src;
};
var SelectPicture_click = function () {
    dom.upfile = document.createElement("input");
    setAttr2(dom.upfile, "type", "file", "id", "upfile");
    dom.upfile.click();
    dom.upfile.onchange = function () {
        ccp.file = this.files[0];
        ccp.imgtype = ccp.file.type;
        if (!check_imgtype()) {
            return;
        } //检查文件类型
        ccp.imgsize = ccp.file.size;
        if (!check_imgsize()) {
            return;
        }; //检查图片大小
        var reader = new FileReader();
        reader.onload = function () {
            setImgWH(this.result, ccp.imgtype);
        };
        reader.readAsDataURL(ccp.file);
    };
};

