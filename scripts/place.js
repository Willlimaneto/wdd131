document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const temperature = 27; 
const windSpeed = 10; 

function calculateWindChill(temp, wind) {
	return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

const windChillEl = document.getElementById('windchill');

if (temperature <= 10 && windSpeed > 4.8) {
	windChillEl.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
	windChillEl.textContent = "N/A";
}