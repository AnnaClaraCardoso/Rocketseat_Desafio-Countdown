const DEFAULT_TIME_LABELS = {
  d: 'Dias',
  h: 'Horas',
  m: 'Minutos',
  s: 'Segundos',
};

class Countdown {
  constructor(counterHTML, days, hours, minutes, seconds) {

    counterHTML.innerHTML = `
      
      <span class="countdown-element days"></span>
      <span class="countdown-element">:</span>
      <span class="countdown-element hours"></span>
      <span class="countdown-element">:</span>
      <span class="countdown-element minutes"></span>
      <span class="countdown-element">:</span>
      <span class="countdown-element seconds"></span>
    `

    this.interval = null
    this.remainingSeconds = 0

    this.element = {
      days: counterHTML.querySelector('.days'),
      hours: counterHTML.querySelector('.hours'),
      minutes: counterHTML.querySelector('.minutes'),
      seconds: counterHTML.querySelector('.seconds'),
    }

    this.remainingSeconds = ((days*86400)+(hours*3600)+(minutes*60)+seconds)
    this.start()
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);

    this.interval = null;

    endMessage
  }

  updateInterfaceTime() {
    const days = Math.floor(this.remainingSeconds / 86400);
    const hours = Math.floor(this.remainingSeconds / 3600);
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;
    
    this.element.days.textContent = days.toString().padStart(2, "0"); // .padStart() > valores padrões para elementos de texto
    this.element.hours.textContent = hours.toString().padStart(2, "0");
    this.element.minutes.textContent = minutes.toString().padStart(2, "0");
    this.element.seconds.textContent = seconds.toString().padStart(2, "0");
  }

}

document.addEventListener("load", new Countdown(
    document.querySelector(".countdown"), 
    0, 
    0, 
    0, 
    10  
  )
)

const modal = document.querySelector('.modal.')

document.querySelector('.subscribe-btn').addEventListener('click')
