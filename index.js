document.addEventListener('DOMContentLoaded', domloaded, false);
//===
function domloaded() {
    const vers = " v14";
    console.log("in consol+" + vers);
    // jQuery methods go here...
    //document.getElementById("div1").innerHTML = "Hello JavaScript!";

    const str = "#          xfruits                          xbaguette\n#      xboisson      xjambon                    xvaisselle\n#                xchips        xconserve\n#          xz                           xa\n";

    const strBackticks = `
#          xfruits                          xbaguette
#      xboisson      xjambon                    xvaisselle
#                xchips        xconserve
#          xz                           xa`;

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    const regex = /#/g;
    var strtrim = str.replace(regex, '');
    var strtrimBackticks = strBackticks.replace(regex, '');

    console.log(str.replace(regex, ''));
    console.log('back =' + strBackticks.replace(regex, ''));

    var strsplit = strtrim.split(/\r\n|\r|\n/);
    var strsplitBacktricks = strtrimBackticks.split(/\r\n|\r|\n/);

    console.log(strtrim.split(/\r\n|\r|\n/).length);
    console.log(strtrim);
    console.log("" + strtrimBackticks.split(/\r\n|\r|\n/).length);
    console.log("lbl478 strtrimBackticks :");
    console.log(strtrimBackticks);

    /* for(var i=0;i>;){
       }*/

    var elt = document.getElementById("textdiv");
    //var txtdiv =elt.innerHTML;
    //console.log(txtdiv);

    var splity = strtrim.split(/\r\n|\r|\n/);
    var splityBackticks = strtrimBackticks.split(/\r\n|\r|\n/);

    console.log("splity=");
    console.log(splity);
    console.log("_____");
    console.log("splityBackticks=");
    console.log(splityBackticks);
    console.log("_____");

    console.log(strtrim.split(/\r\n|\r|\n/));
    console.log(strtrim.split(/\r\n|\r|\n/).length);
    var l = strtrim.split(/\r\n|\r|\n/).length;
    var lBack = strtrimBackticks.split(/\r\n|\r|\n/).length;
    var word = null;
    var indx = -999;
    for (let lign = 0; lign < l; lign++) {
        console.log("lign=" + lign + " " + strsplit[lign]);
    }
    for (let lign = 0; lign < lBack; lign++) {
        console.log("Back lign=" + lign + " " + strsplit[lign]);
        var currentTextOfLine = strsplit[lign];
        let pattern = /[\w]+/i;
        word = null;
        let pointer = 0;
        console.log("lbl090 Back pointer NEW = " + pointer);
        do {
            console.log("lbl100 DO");
            word = currentTextOfLine.match(pattern);
            //word="xz";
            console.log("lbl102 Back regex word = ___" + word + "____");

            if (word != null) {
                console.log("lbl106 Back length =" + word.length);
                indx = currentTextOfLine.indexOf(word, pointer);
                pointer = indx + word.length;
                console.log("lbl112 Back index = " + indx);
                console.log("lbl122 Back pointer = " + pointer);
            } else {
                console.log("lbl123 word NULL");
            }
        } while ((indx < 500) && (indx >= 0) && (word != ""));

    }

    //indexof regex
    var allLines, lastWordOfLine = false;

    cptLine = 0;
    charOfLine = 0;

}

function next() {
    console.log("next");
}
