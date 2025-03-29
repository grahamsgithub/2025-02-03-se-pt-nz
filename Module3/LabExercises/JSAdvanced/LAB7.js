 // 7. The following DigitalClock class uses an interval to print the time every second once 
// started, until stopped.

// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the 
// parameter precision – the number of ms between 'ticks'. This precision parameter 
// should default to 1 second if not supplied. 
// b) Create a new class AlarmClock that inherits from DigitalClock and adds the 
// parameter wakeupTime in the format hh:mm. When the clock reaches this time, it 
// should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should 
// default to 07:00 if not supplied.


// in the below code, I have created a DigitalClock class that prints the time every second
// and a PrecisionClock class that inherits from DigitalClock and adds the precision parameter
// which is the number of milliseconds between ticks.
// I have also created an AlarmClock class that inherits from DigitalClock and adds the wakeupTime
// parameter which is the time to wake up.
// The DigitalClock class has a display method that prints the time in the format hh:mm:ss
// The PrecisionClock class has a display method that prints the time in the format hh:mm:ss.millis
// The AlarmClock class has a display method that prints the time in the format hh:mm:ss    
// and checks if the current time matches the wakeupTime
// which I set to 5 seconds after the last time printed to console

// DigitalClock class
class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }

//NB uses the Date object to get the current time
// and formats it to hh:mm:ss
    display() {
        let date = new Date();
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;

        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
// the below code is a way to stop the clock
    stop() {
        clearInterval(this.timer);
    }

// the below code is a way to start the clock
// it sets the timer to call the display method every second
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}

// the below code is a way to create a new instance of the DigitalClock class
// by using the extends keyword
// and passing in the prefix parameter
//NB prefix is a string that is used to identify the clock
// this is a way to create a new class that inherits from another class


// PrecisionClock class
class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix);
        this.precision = precision;
    }

    display() {
        let date = new Date();
        let [hours, mins, secs, millis] = [
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ];

        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        if (millis < 100) millis = '0' + millis;
        if (millis < 10) millis = '00' + millis;

        console.log(`${this.prefix} ${hours}:${mins}:${secs}.${millis}`);
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}

//NB the below code is a way to create a new instance of the PrecisionClock class
// by using the extends keyword
// and passing in the prefix and precision parameters
// this class has a wakeupTime parameter which is the time to wake up
// but I used a different method to get the time closer to the last time printed
// so it is easier to test

// AlarmClock class
class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
        super(prefix);
        this.wakeupTime = wakeupTime;
    }

    display() {
        let date = new Date();
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;

        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

        if (`${hours}:${mins}` === this.wakeupTime) {
            console.log('Wake Up!');
            return this.stop();
        }
    }
}

// Sequencing logic
const myClock = new DigitalClock('my clock:');
myClock.start(); // Start myClock

setTimeout(() => {
    myClock.stop(); // Stop myClock after 5 seconds

    setTimeout(() => {
        const myPrecisionClock = new PrecisionClock('my precision clock:', 500);
        myPrecisionClock.start(); // Start myPrecisionClock

        let lastTime;
        const originalDisplay = myPrecisionClock.display.bind(myPrecisionClock);
        myPrecisionClock.display = function () {
            originalDisplay();
            const date = new Date();
            lastTime = {
                hours: date.getHours(),
                mins: date.getMinutes(),
                secs: date.getSeconds()
            };
        };

        // the below code stops myPrecisionClock after 5 seconds
        // it takes the last time printed to console
        // and adds 5 seconds to it
        // then it uses if statements to check if the seconds, minutes and hours
        // are greater than 60 or 24
        // and if so it resets them to 0
        // then it creates a new instance of the AlarmClock class
        // with the prefix 'my alarm clock:'
        // and the wakeup time
        // it then starts the myAlarmClock
        // which will print the time every second
        // until it reaches the wakeup time
        // and then it will print 'Wake Up!' and stop
        //ERROR: Mirza it prints the Wake Up! message and timing x 2 not sure why
        // can you explain why this is happening?


        setTimeout(() => {
            myPrecisionClock.stop(); // Stop myPrecisionClock after 5 seconds

            // Calculate wakeup time for AlarmClock
            let { hours, mins, secs } = lastTime;
            secs += 5;
            if (secs >= 60) {
                secs -= 60;
                mins += 1;
            }
            if (mins >= 60) {
                mins -= 60;
                hours += 1;
            }
            if (hours >= 24) {
                hours -= 24;
            }

            const wakeupTime = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
            const myAlarmClock = new AlarmClock('my alarm clock:', wakeupTime);
            myAlarmClock.start(); // Start myAlarmClock
        }, 5000); // Stop myPrecisionClock after 5 seconds
    }, 1000); // 1-second delay before starting myPrecisionClock
}, 5000); // Run myClock for 5 seconds