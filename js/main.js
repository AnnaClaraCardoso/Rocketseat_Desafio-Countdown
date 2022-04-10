class Countdown {
  //constructor( Date() )
  constructor(current_date) {

    this.attCounter = null
    this.remainingSeconds = 0

    this.element = {
      days: document.querySelector('.days'),
      hours: document.querySelector('.hours'),
      minutes: document.querySelector('.minutes'),
      seconds: document.querySelector('.seconds'),
    }

    // remainingSeconds = current_date - event-date
    this.remainingSeconds = Math.floor((new Date("December 5, 2022 14:00:00").getTime() - current_date.getTime()) / 1000)
    this.start()
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.attCounter = setInterval(() => {
      // setando comandos de atualização do contador para o intervalo de 1 s
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.atFinish();
      }
    }, 1000);
  }

  atFinish() {
    clearInterval(this.attCounter);

    this.attCounter = null;

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

document.addEventListener("load", new Countdown(new Date("December 5, 2022 13:59:50")))

showModal = () => {
  const main = document.querySelector('main')

  let modalHTML = ` 
    <div class="modal">
      <div class="modal-header">
        <h3>Title</h3>
      </div>
      <div class="modal-body">
        <p>dslmfdsnlç</p>
        <label for="recipient-name" class=""></label>
        <input id="name-input" type="submit" value="">
        <input id="email-input" type="submit" value="">
        <input id="phone_number-input" type="submit" value="">
      </div>
    </div> 
  `

  main.appendChild(modalHTML)
}
