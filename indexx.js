 if ('AmbientLightSensor' in window) {
    const sensor = new AmbientLightSensor();

    sensor.onreading = () => {
        let lux = sensor.illuminance;
        let color;

        // Change color based on light intensity
        if (lux < 100) {
            color = '#2c3e50'; // Dark Blue for low light
        } else if (lux < 500) {
            color = '#3498db'; // Blue for moderate light
        } else {
            color = '#ecf0f1'; // Light Gray for bright light
        }

        document.documentElement.style.setProperty('--bg-color', color);
    };

    sensor.onerror = (event) => {
        console.log(event.error.name, event.error.message);
    };

    sensor.start();
} else {
    console.log('AmbientLightSensor is not supported in this browser.');
}
