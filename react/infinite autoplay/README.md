Infinite autoplay slider with slow animation speed on mouse hover.


**Intuition:**

To animate cards smoothly as they move left:

- Move Cards Left: Continuously reduce their translateX value to slide them left.
- Reset Position: When a card moves completely out of view, reset its position to the end of the row.

However, this reset can create a noticeable gap during the transition.

**Solution:**

- Duplicate the Cards: Add a copy of the card items at the end of the original row.
This ensures that as the first set moves out of view, the duplicate set is already there, creating a seamless loop with no gaps.

**Visualise with the image below** -   

![SliderVisualisation](https://github.com/user-attachments/assets/ba0b8205-d998-45be-bd65-35af4587e555)

**`window.requestAnimationFrame()`**  
The requestAnimationFrame function runs the callback we give it right before the screen updates for the next frame. This is great for creating smooth animations.

However, since the animation depends on the device's frame rate, it might run faster on devices with a higher refresh rate. For example, on a device with a 120Hz refresh rate, the animation will move faster than on a 60Hz device.

To fix this, we can calculate the time difference between two frames (how long it took for the last frame to finish). Then, we use this time difference to adjust the animation's movement. For example, if we're moving something horizontally, we can calculate how far it should move based on the time difference: translateX(value).

This way, the animation speed will stay consistent, no matter the device's refresh rate.

**Prerequisites** -   

[MDN - requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)
