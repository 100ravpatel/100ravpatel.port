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

  function php() {
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

  function ja() {
    var elem = document.getElementById("php");   
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
  function boot() {
    var elem = document.getElementById("boot");   
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
  setInterval(showTime, 1000); 
  function showTime() { 
      let time = new Date(); 
      let hour = time.getHours(); 
      let min = time.getMinutes(); 
      let sec = time.getSeconds(); 
      am_pm = "AM"; 
    
      if (hour > 12) { 
          hour -= 12; 
          am_pm = "PM"; 
      } 
      if (hour == 0) { 
          hr = 12; 
          am_pm = "AM"; 
      } 
    
      hour = hour < 10 ? "0" + hour : hour; 
      min = min < 10 ? "0" + min : min; 
      sec = sec < 10 ? "0" + sec : sec; 
    
      let currentTime = hour + ":" 
              + min + ":" + sec + am_pm; 
    
      document.getElementById("clock") 
              .innerHTML = currentTime; 
  } 
  showTime();
