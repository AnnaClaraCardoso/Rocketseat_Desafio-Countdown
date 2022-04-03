const DEFAULT_TIME_LABELS = {
  d: 'Dias',
  h: 'Horas',
  m: 'Minutos',
  s: 'Segundos',
};

class Countdown {
  constructor(root, days, hours, minutes, seconds) {
    root.innerHTML = Countdown.getHTML()

    this.remainingSeconds = 0
    this.interval = null

    this.element = {
      days: root.querySelector('.days'),
      hours: root.querySelector('.hours'),
      minutes: root.querySelector('.minutes'),
      seconds: root.querySelector('.seconds'),
    }
    this.remainingSeconds = ((days*86400)+(hours*3600)+(minutes*60)+seconds)
  }

  updateInterfaceTime() {
    const days = Math.floor(this.remainingSeconds / 86400);
    const hours = Math.floor(this.remainingSeconds / 3600);
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;
    
    this.element.days.textContent = days.toString().padStart(2, "0");
    this.element.hours.textContent = hours.toString().padStart(2, "0");
    this.element.minutes.textContent = minutes.toString().padStart(2, "0");
    this.element.seconds.textContent = seconds.toString().padStart(2, "0");
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
  }

  static getHTML() {
    return `
    <span class="countdown-element days"></span>
    <span class="countdown-element">:</span>
    <span class="countdown-element hours"></span>
    <span class="countdown-element">:</span>
    <span class="countdown-element minutes"></span>
    <span class="countdown-element">:</span>
    <span class="countdown-element seconds"></span>
		`;
  }

}
  
new Countdown(
	document.querySelector(".countdown", 0, 0, 3, 30)
);