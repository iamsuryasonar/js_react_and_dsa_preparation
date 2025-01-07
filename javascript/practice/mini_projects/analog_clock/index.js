const seconds_hand = document.getElementById('seconds_hand');
const minutes_hand = document.getElementById('minutes_hand');
const hours_hand = document.getElementById('hours_hand');
const digital_time = document.getElementById('digital_time')
const hands = document.getElementById('hands');

function getCurrentTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const time = hours + ':' + minutes + ':' + seconds;
    const secondsAngle = seconds * (360 / 60);
    const minutesAngle = minutes * (360 / 60) + (secondsAngle / 60);
    const hoursAngle = hours * 30 + (minutesAngle / 60);

    return { time, secondsAngle, minutesAngle, hoursAngle };
}

function renderHands() {
    let j = 0;

    for (let i = 0; i < 360; i += 6) {
        const innerDiv1 = document.createElement('div');
        const innerDiv2 = document.createElement('div');
        const outerDiv = document.createElement('div');

        if (j === 5 || j === 0) {
            j = 0;
            innerDiv1.style = 'width: 92%; height: 2px'
            innerDiv2.style = 'width: 8%; height: 2px; background-color: black; place-self: end;'
            outerDiv.style = 'width: 100%; height: 2px; position:absolute; top: 50%; display:flex'
        } else {
            innerDiv1.style = 'width: 95%; height: 2px'
            innerDiv2.style = 'width: 5%; height: 2px; background-color: black; place-self: end;'
            outerDiv.style = 'width: 100%; height: 2px; position:absolute; top: 50%; display:flex'
        }

        outerDiv.appendChild(innerDiv1);
        outerDiv.appendChild(innerDiv2);
        outerDiv.style.rotate = `${i}deg`;
        hands.append(outerDiv);

        j++;
    }
}

renderHands();

function updateUi() {
    seconds_hand.style.rotate = `${getCurrentTime().secondsAngle}deg`;
    minutes_hand.style.rotate = `${getCurrentTime().minutesAngle}deg`;
    hours_hand.style.rotate = `${getCurrentTime().hoursAngle}deg`;
    digital_time.textContent = getCurrentTime().time;
}

setInterval(() => {
    updateUi();
}, 1000);