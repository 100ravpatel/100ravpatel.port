function ht() {
    var elem = document.getElementById("ht");   
    var width =0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 95) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  /* for css3 button */ 

  function cs() {
    var elem = document.getElementById("cs");   
    var width =0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 85) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

/* for javaScript button */ 

  function js() {
    var elem = document.getElementById("js");   
    var width =0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 70) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

/* for Python button */ 

  function py() {
    var elem = document.getElementById("py");   
    var width =0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

/* for java button */ 

  function ja() {
    var elem = document.getElementById("ja");   
    var width =0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 30) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  function php() {
    var elem = document.getElementById("php");   
    var width =0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 5) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }
