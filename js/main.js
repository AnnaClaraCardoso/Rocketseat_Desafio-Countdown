class Countdown {
  constructor(days, hours, minutes, seconds) {

    this.interval = null
    this.remainingSeconds = 0

    this.element = {
      days: document.querySelector('.days'),
      hours: document.querySelector('.hours'),
      minutes: document.querySelector('.minutes'),
      seconds: document.querySelector('.seconds'),
    }

    this.remainingSeconds = ((days*86400)+(hours*3600)+(minutes*60)+seconds)
    this.start()
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      // setando comandos de atualização do contador para o intervalo de 1 s
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.atFinish();
      }
    }, 1000);
  }

  atFinish() {
    clearInterval(this.interval);

    this.interval = null;

    this.endMessage()
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

  endMessage() {
    let section = document.querySelector('section')
    section.removeChild(document.querySelector('.countdown-to-subscribe'))
    section.removeChild(document.querySelector('button'))

    /* Adicionar elementos com messagem de aviso de término de prazo para inscrição */
  }

}

document.addEventListener("load", new Countdown(
    0, 
    0, 
    0, 
    10  
  )
)
