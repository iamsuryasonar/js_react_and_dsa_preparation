let progress = document.getElementById("progress");

let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");

let value = 0;
let isProgress = false;

startBtn.addEventListener('click', (e) => {
    if (isProgress) return;

    isProgress = true;

    let intervalId = setInterval(() => {
        progress.value = value;
        value = value + 1;

        if (value > 100) {
            isProgress = false;
            clearInterval(intervalId);
        }
    }, 10);
})

resetBtn.addEventListener('click', (e) => {
    value = 0;
    progress.value = value;
})
