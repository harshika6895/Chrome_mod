// Defining Class
class Clock {
    // Constructor Function to initialize the Clock Class
    constructor(options) {
      // Selecting Element
      this._el = $.el('#clock');
      this._delimiter = options.delimiter;
      // Defining Format
      this._twentyFourHourClock = options.twentyFourHourClock;
      this._setTime = this._setTime.bind(this);
      // Toggle options for Quick Suggestions
      this._el.addEventListener('click', options.toggleHelp);

      // Starting the Clock
      this._start();
    }
  
    _setTime() {
      // Creating a Deafult Javascript Date Object
      const date = new Date();
      // Getting Hours
      let hours = $.pad(date.getHours());

      // Determining AM/PM
      let amPm = '';
  
      if (!this._twentyFourHourClock) {
        hours = date.getHours();
        if (hours > 12) hours -= 12;
        else if (hours === 0) hours = 12;
  
        amPm =
          `&nbsp;<span class="am-pm">` +
          `${date.getHours() >= 12 ? 'PM' : 'AM'}</span>`;
      }
      
      const minutes = $.pad(date.getMinutes());
      this._el.innerHTML = `${hours}${this._delimiter}:${minutes}${amPm}`;
      this._el.setAttribute('datetime', date.toTimeString());
    }
  
    _start() {
      this._setTime();
      // Setting Refresh time to 1000
      setInterval(this._setTime, 1000);
    }
  }