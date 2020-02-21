window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-54516992-1');
//  Google Analytics!

function DarkMode() {
  document.body.style.backgroundColor = "#121212"
  document.getElementById('text').innerHTML = "Dark Mode is now active"
  setTimeout(function(){ document.getElementById('text').innerHTML = ""; }, 3000);
}
// Dark Mode