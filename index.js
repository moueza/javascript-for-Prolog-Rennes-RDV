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
    var indx = 0;
    const pattern = /[a-zA-Z0-9]+/g;

    for (let lign = 0; lign < l; lign++) {
	console.log("lbl70 lign=" + lign + " " + strsplit[lign]);
    }
    for (let lign = 0; lign < lBack; lign++) {
	console.log("lbl80 Back lign=" + lign + " " + strsplit[lign]);
	const currentTextOfLine = strsplit[lign];
	//const pattern = /\w+/i;

	//https: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#syntax
	//w+ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
	indx = 0;
	wordArr = null;

	wordArr = currentTextOfLine.match(pattern);
	if (wordArr != null) {
	    console.log("lbl90  wordArr = " + wordArr);

	    let noOfWord = 0;
	    let pointer = 0;
	    do {
		//new wordArr[0]
		console.log("lbl100 DO noOfWord =" + noOfWord);
		//word="xz";
		console.log(
		    "lbl102 Back regex word = ___" + wordArr[noOfWord] + "____"
		);
		console.log("lbl106 Back length =" + wordArr[noOfWord].length);
		console.log("vs");
		console.log(
		    "lbl107 Back chars =" + getCharacterLength(wordArr[noOfWord])
		);

		indx = currentTextOfLine.indexOf(wordArr[noOfWord], pointer);
		pointer = indx + wordArr[noOfWord].length;

		console.log("lbl112 Back index = " + indx);
		console.log("lbl122 Back pointer = " + pointer);

		noOfWord++;
	    } while (
		noOfWord < 10 &&
		    noOfWord < wordArr.length  &&
		    indx >= 0 &&
		    wordArr[noOfWord] != ""
	    );
	} else {
	    console.log("lbl123 word NULL");
	}
    }

    //indexof regex
    var allLines,
	lastWordOfLine = false;

    cptLine = 0;
    charOfLine = 0;

    testy();





    //write to file
    /* javascript "to a file"
       https://www.tutorialspoint.com/how-to-read-and-write-a-file-using-javascript*/
    const fs = require('fs')
    let fInput = "You are reading the content from Tutorials Point"
    fs.writeFile('tp.txt', fInput, (err) => {
	
	if (err) throw err;
	else{
	    console.log("WRITE The file is updated with the given data")
	}
    })
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
