
 class CountdownTimer {
    constructor({ selector, targetDate } ) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.start();
    }


    updateTimer({ days, hours, mins, secs }) {
        const timerRef = document.querySelector(`${this.selector}`);
        const daysFieldRef = timerRef.querySelector('[data-value="days"]');
        const hoursFieldRef = timerRef.querySelector('[data-value="hours"]');
        const minsFieldRef = timerRef.querySelector('[data-value="mins"]');
        const secsFieldRef = timerRef.querySelector('[data-value="secs"]');
        daysFieldRef.textContent = days;
        hoursFieldRef.textContent = hours;
        minsFieldRef.textContent = mins;
        secsFieldRef.textContent = secs;
    }


    start() {
         
        function pad(value) {
            return String(value).padStart(2, "0");
        }

        function getTimeComponents(time) {

            const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
            const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
            const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
            
            return {days, hours, mins, secs}
        }
        
        const targetTime = this.targetDate;

        setInterval(() => {
            const currentTime = Date.now();
            const timeComponents = getTimeComponents(targetTime - currentTime );
            this.updateTimer(timeComponents)
        }, 1000);
    }
}


const countdownTimer1 = new CountdownTimer ({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
})

const countdownTimer2 = new CountdownTimer ({
    selector: '#timer-2',
    targetDate: new Date('Jul 18, 2022'),
})











// function updateTimer( {days, hours, mins, secs} ) {
//     daysFieldRef.textContent = days;
//     hoursFieldRef.textContent = hours;
//     minsFieldRef.textContent = mins;
//     secsFieldRef.textContent = secs;
// }







// const timer = {
//     start() {
//         // const startTime = Date.now();
//         const targetTime = new Date('Jul 17, 2021')

//         setInterval(() => {
//             const currentTime = Date.now();
//             const timeComponents = getTimeComponents(targetTime - currentTime);
//             const { days, hours, mins, secs } = timeComponents;
//             updateTimer(days, hours, mins, secs )
//             // console.log(currentTime - startTime);
//             // console.log(timeComponents);
//             console.log(`${days}:${hours}:${mins}:${secs}`);
//         }, 1000);
//     }
// }