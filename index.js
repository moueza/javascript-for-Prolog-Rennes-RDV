document.addEventListener('DOMContentLoaded',domloaded,false);
//===
function domloaded(){
    const vers = " v14";
    console.log("in consol+" + vers);
    // jQuery methods go here...
    //document.getElementById("div1").innerHTML = "Hello JavaScript!";



    const str="#          xfruits                          xbaguette\n#      xboisson      xjambon                    xvaisselle\n#                xchips        xconserve\n#          xz                           xa\n";



    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    const regex = /#/g;
    var strtrim=str.replace(regex, '');
    console.log(str.replace(regex, ''));



    var strsplit= strtrim.split(/\r\n|\r|\n/);
    console.log( strtrim.split(/\r\n|\r|\n/).length);
    console.log(strtrim);

    /* for(var i=0;i>;){
       }*/



    var elt=  document.getElementById("textdiv") ;
    //var txtdiv =elt.innerHTML;
    //console.log(txtdiv);

    var splity= strtrim.split(/\r\n|\r|\n/);
    console.log("splity=");console.log(splity);  console.log("_____");
    console.log( strtrim.split(/\r\n|\r|\n/));
    console.log( strtrim.split(/\r\n|\r|\n/).length);
    var l= strtrim.split(/\r\n|\r|\n/).length;
    for(let lign=0;lign<l;lign++){
	console.log("lign="+lign+" "+strsplit[lign]);
    }

}





function next(){
    console.log("next");
}





