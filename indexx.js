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
  function isPointInsideAABB(point, box) {
    return (
      point.x >= box.minX &&
      point.x <= box.maxX &&
      point.y >= box.minY &&
      point.y <= box.maxY &&
      point.z >= box.minZ &&
      point.z <= box.maxZ
    );
  }
  function intersect(sphere, other) {
    // we are using multiplications because it's faster than calling Math.pow
    const distance = Math.sqrt(
      (sphere.x - other.x) * (sphere.x - other.x) +
        (sphere.y - other.y) * (sphere.y - other.y) +
        (sphere.z - other.z) * (sphere.z - other.z),
    );
    return distance < sphere.radius + other.radius;
  }
  