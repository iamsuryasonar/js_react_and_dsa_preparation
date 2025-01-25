window.onload = () => {
    const dragable = document.querySelector('.dragable')
    const container = document.querySelector('.container')

    let dragging = false;
    let initialPosition = {
        left: '0px',
        top: '0px'
    }

    /* works only with mouse */
    /* 
        dragable.addEventListener('mousedown', mouseDown);
        dragable.addEventListener('mousemove', mouseMove);
        dragable.addEventListener('mouseleave', mouseUp);
        dragable.addEventListener('mouseup', mouseUp); 
    */

    /* works only with touch */
    /*
        dragable.addEventListener('touchdown', mouseDown);
        dragable.addEventListener('touchmove', mouseMove);
        dragable.addEventListener('touchleave', mouseUp);
        dragable.addEventListener('touchup', mouseUp); 
    */

    /* works with all pointer events (mouse,touch and stylus) */
    dragable.addEventListener('pointerdown', mouseDown);
    dragable.addEventListener('pointermove', mouseMove);
    dragable.addEventListener('pointerleave', mouseUp);
    dragable.addEventListener('pointerup', mouseUp);
    dragable.addEventListener('pointercancel', mouseCancel);

    function mouseDown(e) {
        dragable.setPointerCapture(e.pointerId); /* to make dragable item follow the pointer */
        dragging = true;

        initialPosition.left = `${e.clientX - (dragable.clientWidth / 2)}px`;
        initialPosition.top = `${e.clientY - (dragable.clientWidth / 2)}px`
    }

    function isDragableItemInsideContainer() {
        let containerLeft = container.getBoundingClientRect().left;
        let containerRight = container.getBoundingClientRect().right;
        let containerTop = container.getBoundingClientRect().top;
        let containerBottom = container.getBoundingClientRect().bottom;

        let dragableLeft = dragable.getBoundingClientRect().left;
        let dragableRight = dragable.getBoundingClientRect().right;
        let dragableTop = dragable.getBoundingClientRect().top;
        let dragableBottom = dragable.getBoundingClientRect().bottom;

        if (dragableRight > containerRight || dragableBottom > containerBottom || dragableLeft < containerLeft || dragableTop < containerTop) {
            return false;
        }

        return true;
    }

    function mouseMove(e) {
        if (!dragging) return;

        if (isDragableItemInsideContainer()) {
            dragable.style.left = `${e.clientX - (dragable.clientWidth / 2)}px`;
            dragable.style.top = `${e.clientY - (dragable.clientHeight / 2)}px`;
        } else {
            dragging = false;

            dragable.style.left = initialPosition.left;
            dragable.style.top = initialPosition.top;
        }
    }

    function mouseUp(e) {
        dragging = false;
    }

    function mouseCancel(e) {
        console.log('event cancelled')
    }
}