
(function($){
  $.fn.replaceText=function(b,a,c){
    return this.each(function(){
      var f=this.firstChild,g,e,d=[];
      if(f){
        do{
          if(f.nodeType===3){
            g=f.nodeValue;
            e=g.replace(b,a);
            console.log(g, b, a);
            if(e!==g){
              if(!c&&/</.test(e)){
                $(f).before(e);
                d.push(f)
              }else{
                f.nodeValue=e
              }
            }
          }
        }while(f=f.nextSibling)
      }
      d.length&&$(d).remove()
    })
  }
})(jQuery);


$(document).ready(function() {
  var dictionary = [
    "cascade",
    "agile",
    "sexy",
    "robust",
    "deep dive",
    "drill down",
    "pivot",
    "platform",
    "UX",
    "syngergy",
    "disruptive",
    "lean",
    "bring to the table",
    "best of breed",
    "holistic",
    "leverage",
    "paradigm shift",
    "outside the box",
    "streamline",
    "engagement",
    "bandwidth",
    "best practices",
    "ping",
    "offline",
    "circle back",
    "touch base",
    "reach out",
    "mission critical",
    "deck",
    "KPI",
    "SME",
    "back burner",
    "bootstrap",
    "benchmark",
    "big data",
    "convergence",
    "thought leader",
    "low-hanging fruit",
    "silos"
  ];


  var generatedReplace = [];
  var generatedReplaceUpper = [];
  for (var i = 0, len = dictionary.length; i < len; i++) {
    var word = dictionary[i].replace(/([[^$.|?*+(){}])/g, '\\$1'); //Create RegExp
    generatedReplace.push(word);
    generatedReplaceUpper.push(word.toUpperCase())
  }
  generatedReplace = new RegExp("\\b(?:" + generatedReplace.join("|") + ")\\b", "g");
  generatedReplaceUpper = new RegExp("\\b(?:" + generatedReplaceUpper.join("|") + ")\\b", "g");
  $("body *").replaceText(generatedReplace, "sloth");
  $("body *").replaceText(generatedReplaceUpper, "Sloth");
});
