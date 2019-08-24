const s = document.getElementById("secondHand");
const ctxS = s.getContext("2d");
const m = document.getElementById("minuteHand");
const ctxM = m.getContext("2d");
const h = document.getElementById("hourHand");
const ctxH = h.getContext("2d");
const c = document.getElementById("clockFace");
const ctxC = c.getContext("2d");

function resize() {
  let size = document.documentElement.clientWidth / 3;
  c.style.width = `${size}px`;
  h.style.width = `${size}px`;
  m.style.width = `${size}px`;
  s.style.width = `${size}px`;
}

resize();

window.onresize = resize;

ctxC.beginPath();
ctxC.strokeStyle = "darkslategray";
ctxC.lineWidth = 4;
ctxC.lineCap = "round";
for (x = 0; x < 360; x = x + 30) {
  ctxC.moveTo(
    300 + 205 * Math.cos((Math.PI / 180) * x),
    300 + 205 * Math.sin((Math.PI / 180) * x)
  );
  ctxC.lineTo(
    300 + 210 * Math.cos((Math.PI / 180) * x),
    300 + 210 * Math.sin((Math.PI / 180) * x)
  );
  ctxC.stroke();
}

const tick = () => {
  let date = new Date();
  let timeS = date.getSeconds();
  let timeM = date.getMinutes();
  let timeH = date.getHours();

  let angleS = -90 + timeS * 6;
  ctxS.clearRect(0, 0, 600, 600);
  ctxS.beginPath();
  ctxS.moveTo(
    300 + 10 * Math.cos((Math.PI / 180) * angleS),
    300 + 10 * Math.sin((Math.PI / 180) * angleS)
  );
  ctxS.strokeStyle = "darkslategray";
  ctxS.lineCap = "round";
  ctxS.lineWidth = 2;
  ctxS.shadowColor = "darkslategray";
  ctxS.shadowOffsetX = 6;
  ctxS.shadowOffsetY = 6;
  ctxS.shadowBlur = 10;
  ctxS.lineTo(
    300 + 190 * Math.cos((Math.PI / 180) * angleS),
    300 + 190 * Math.sin((Math.PI / 180) * angleS)
  );
  ctxS.stroke();

  let angleM = -90 + timeM * 6 + timeS * 0.0996;
  ctxM.clearRect(0, 0, 600, 600);
  ctxM.beginPath();
  ctxM.moveTo(
    300 + 10 * Math.cos((Math.PI / 180) * angleM),
    300 + 10 * Math.sin((Math.PI / 180) * angleM)
  );
  ctxM.strokeStyle = "darkslategray";
  ctxM.lineCap = "round";
  ctxM.lineWidth = 6;
  ctxM.shadowColor = "darkslategray";
  ctxM.shadowOffsetX = 4;
  ctxM.shadowOffsetY = 4;
  ctxM.shadowBlur = 8;
  ctxM.lineTo(
    300 + 195 * Math.cos((Math.PI / 180) * angleM),
    300 + 195 * Math.sin((Math.PI / 180) * angleM)
  );
  ctxM.stroke();

  let angleH = -90 + timeH * 30 + timeM * 0.4998;
  ctxH.clearRect(0, 0, 600, 600);
  ctxH.beginPath();
  ctxH.moveTo(
    300 + 10 * Math.cos((Math.PI / 180) * angleH),
    300 + 10 * Math.sin((Math.PI / 180) * angleH)
  );
  ctxH.strokeStyle = "darkslategray";
  ctxH.lineCap = "round";
  ctxH.lineWidth = 8;
  ctxH.shadowColor = "darkslategray";
  ctxH.shadowOffsetX = 2;
  ctxH.shadowOffsetY = 2;
  ctxH.shadowBlur = 4;
  ctxH.lineTo(
    300 + 150 * Math.cos((Math.PI / 180) * angleH),
    300 + 150 * Math.sin((Math.PI / 180) * angleH)
  );
  ctxH.stroke();
};

setInterval(tick, 1000);
