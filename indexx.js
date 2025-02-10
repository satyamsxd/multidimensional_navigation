document.getElementById('instructions').addEventListener('click', () => {
    document.getElementById('instructions').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('instructions').style.display = 'none';
    }, 1000); // After fade-out completes
    canvas.requestPointerLock = canvas.requestPointerLock ||
                                canvas.mozRequestPointerLock ||
                                canvas.webkitRequestPointerLock;
    canvas.requestPointerLock();
  });
  