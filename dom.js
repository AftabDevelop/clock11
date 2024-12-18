function timing(){
const timer = document.getElementById("root");
const now = new Date();
const indianTime = now.toLocaleTimeString();
timer.innerHTML=indianTime;
const d1 = document.getElementById('date');
const today = new Date();
const todayDay = today.toLocaleDateString();
d1.innerHTML="Today Date is "+todayDay;
}
setInterval(timing,1000); //har 1sec me ye function call karega
const timer = document.getElementById("root");
timer.style.fontSize="100px";
timer.style.fontFamily="Orbitron";
// timer.style.height="100vh";
timer.style.marginTop="200px";
timer.style.display="flex";
timer.style.justifyContent="center";
timer.style.alignItems="center";
timer.style.overflowY="hidden";
const d1 = document.getElementById('date');
d1.style.fontSize="50px";
d1.style.display="flex";
d1.style.justifyContent="center";
d1.style.alignItems="center";
d1.style.fontFamily="Orbitron";

