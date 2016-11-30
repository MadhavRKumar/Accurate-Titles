
var body = document.body;
var walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null, false);
var node;
while(node=walker.nextNode()){
  var text = node.nodeValue.replace(/[a]lt(ernative)?[- ][r]ight(er)*s?/ig, "neo nazis");
  text = text.replace(/[a]lt(ernative)?[- ][l]eft/ig, "neo-nazis that believe in climate change and smoke weed");
  node.nodeValue = text;
}
