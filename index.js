document.addEventListener("DOMContentLoaded", domloaded, false);
//===
function domloaded() {
  const vers = " v14";
  console.log("in consol+" + vers);
  // jQuery methods go here...
  //document.getElementById("div1").innerHTML = "Hello JavaScript!";

  const str =
    "#          xfruits                          xbaguette\n#      xboisson      xjambon                    xvaisselle\n#                xchips        xconserve\n#          xz                           xa\n";

  const strBackticks = `
#          xfruits                          xbaguette
#      xboisson      xjambon                    xvaisselle
#                xchips        xconserve
#          xz                           xa`;

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  const regex = /#/i;
  var strtrim = str.replace(regex, "");
  var strtrimBackticks = strBackticks.replace(regex, "");

  console.log(str.replace(regex, ""));
  console.log("back =" + strBackticks.replace(regex, ""));

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
  var wordArr = null;
  var indx = -999;
  for (let lign = 0; lign < l; lign++) {
    console.log("lign=" + lign + " " + strsplit[lign]);
  }
  for (let lign = 0; lign < lBack; lign++) {
    console.log("Back lign=" + lign + " " + strsplit[lign]);
    var currentTextOfLine = strsplit[lign];
    //const pattern = /\w+/i;
    const pattern = /[a-zA-Z0-9]+/i;

    //https: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#syntax
    //w+ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    wordArr = null;
    let pointer = 0;
    console.log("lbl090 Back pointer NEW = " + pointer);
    var cpt = 0;
    do {
      console.log("lbl100 DO");
      wordArr = currentTextOfLine.match(pattern);
      //word="xz";
      console.log("lbl102 Back regex word = ___" + wordArr[0] + "____");

      if (wordArr != null) {
        console.log("lbl104 Back regex word = ___" + wordArr[0] + "____");
        console.log("lbl106 Back length =" + wordArr[0].length);
        console.log("vs");
        console.log("lbl107 Back chars =" + getCharacterLength(wordArr[0]));

        indx = currentTextOfLine.indexOf(wordArr[0], pointer);
        indx = 0;
        pointer = indx + wordArr[0].length;
        console.log("lbl112 Back index = " + indx);
        console.log("lbl122 Back pointer = " + pointer);
      } else {
        console.log("lbl123 word NULL");
      }
      cpt++;
    } while (cpt < 10 && indx >= 0 && wordArr[0] != "");
  }

  //indexof regex
  var allLines,
    lastWordOfLine = false;

  cptLine = 0;
  charOfLine = 0;

  testy();
}

function next() {
  console.log("next");
}

/**https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length*/
function getCharacterLength(str) {
  // The string iterator that is used here iterates over characters,
  //  not mere code units
  return [...str].length;
}

function testy() {
  console.log("TEST...");
  const str =
    "#          xfruits                          xbaguette\n#      xboisson      xjambon    ";
  console.log("lbl300 bip");
  const pattern2 = /[a-zA-Z0-9]+/i;
  console.log("lbl301 bip");
  let word2 = str.match(pattern2);
  console.log("lbl301.5 bip");
  console.log("lbl302 TEST Back regex word = ___" + word2[0] + "____");
  console.log("lbl303 bip");

  console.log("lbl306 TEST Back length =" + word2[0].length);
  console.log("lbl308 bip");
  console.log("...TEST");
}
