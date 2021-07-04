function time(){
    const deg = 6;
    const o = document.querySelector('#o');
    const m = document.querySelector('#m');
    const s = document.querySelector('#s');
      var gg = new Date();
      var oo = gg.getHours() * 30;
      var mm = gg.getMinutes() * deg;
      var ss = gg.getSeconds() * deg;
      o.style.transform = `rotateZ(${(oo)+(mm/12)}deg)`;
      m.style.transform = `rotateZ(${mm}deg)`;
      s.style.transform = `rotateZ(${ss}deg)`;
    }
window.setInterval(time, 1000);