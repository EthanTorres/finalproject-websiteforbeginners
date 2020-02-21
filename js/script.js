window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-54516992-1');
//  Google Analytics!

$("#darkmode").click(function(){
  var text = $("text");
  var background = document.body
  var h1 = $("h1")
  var h2 = $("h2")
  var h3 = $("h3")
  var h4 = $("h4")
  var h5 = $("h5")
  var h6 = $("h6")
  var p = $("p")
  var a = $("a")
  text.show();
  background.style.backgroundColor = "#121212";
  h1.color = "white";
  h2.color = "white";
  h3.color = "white";
  h4.color = "white";
  h5.color = "white";
  h6.color = "white";
  p.color = "white";
  a.color = "white";
});
// Dark Mode