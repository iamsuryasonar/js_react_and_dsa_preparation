window.onload = () => {
    let root = document.querySelector(':root');
    let timeline = document.querySelector('.timeline');

    let isDragging = false;

    timeline.addEventListener('pointerdown', pointerDown);
    timeline.addEventListener('pointermove', pointerMove);
    timeline.addEventListener('pointerup', pointerUp);

    function setPointer(e) {
        let timelinePosition = timeline.getBoundingClientRect();

        let newProgress = (e.clientX - timelinePosition.left) / timeline.clientWidth * 100;

        if (newProgress < 0) {
            newProgress = 0;
        }

        if (newProgress > 100) {
            newProgress = 100;
        }

        root.style.setProperty('--progress', `${newProgress}%`);
    }

    function pointerDown(e) {
        timeline.setPointerCapture(e.pointerId); /* to make pointer item follow the drag cursor */

        isDragging = true;

        setPointer(e);
    }

    function pointerMove(e) {
        if (isDragging) {
            setPointer(e);
        }
    }

    function pointerUp(e) {
        isDragging = false;
    }
}