function getAirQuality(city) {
	const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`;
	const options = {
		method: "GET",
		headers: {
		"X-RapidAPI-Key": "4141fa634emsh91338397febc5b7p12ab65jsn58b2ed9949dc",
		"X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
		},
	};

	(async () => {
		try {
		const response = await fetch(url, options);
		let result = await response.json();
		let arr = [];
        var overall = 0;
		for (var key in result) {
			var conc = result[key];
			console.log(conc);

            if (Number.isInteger(conc)) {
                overall = conc;
            }

			for (var con in conc) {
			arr.push(conc[con]);
			}
		}

		new_city = ''
		city_array = city.split(' ');
		for (city in city_array){
			new_city = new_city.concat(city_array[city][0].toUpperCase(), city_array[city].slice(1, ), ' ')
		}
		
		name1.innerHTML = new_city;
        overall_aqi.innerHTML = overall;
        overall_aqi.style.color = getColor(overall);
		co.innerHTML = arr[1];
        co.style.color = getColor(arr[1]);
		no2.innerHTML = arr[3];
        no2.style.color = getColor(arr[3]);
		o3.innerHTML = arr[5];
        o3.style.color = getColor(arr[5]);
		so2.innerHTML = arr[7];
        so2.style.color = getColor(arr[7]);
		pm25.innerHTML = arr[9];
        pm25.style.color = getColor(arr[9]);
		pm10.innerHTML = arr[11];
        pm10.style.color = getColor(arr[11]);
		} catch (error) {
		console.error(error);
		}
	})();
}
  
function getAirQualityCities(city) {
	const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`;
	const options = {
		method: "GET",
		headers: {
		"X-RapidAPI-Key": "4141fa634emsh91338397febc5b7p12ab65jsn58b2ed9949dc",
		"X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
		},
	};

	(async () => {
		try {
		const response = await fetch(url, options);
		let result = await response.json();
		let arr = [];
        var overall = 0;
		for (var key in result) {
			var conc = result[key];

            if (Number.isInteger(conc)) {
                overall = conc;
            }

			for (var con in conc) {
			arr.push(conc[con]);
			}
		}

        console.log(arr);
		
        document.getElementById(city + "AQI").innerHTML = overall;
		document.getElementById(city + "CO").innerHTML = arr[1];
		document.getElementById(city + "NO2").innerHTML = arr[3];
		document.getElementById(city + "O3").innerHTML = arr[5];
		document.getElementById(city + "SO2").innerHTML = arr[7];
		document.getElementById(city + "PM25").innerHTML = arr[9];
		document.getElementById(city + "PM10").innerHTML = arr[11];
		} catch (error) {
		console.error(error);
		}
	})();
}

function getColor(value) {
    if (value >= 0 && value <= 50) {
        return "green";
    } else if (value >= 51 && value <= 100) {
        return "gold";
    } else if (value >= 101 && value <= 150) {
        return "orange";
    } else if (value >= 151 && value <= 200) {
        return "red";
    } else if (value >= 201 && value <= 300) {
        return "purple";
    } else {
        return "maroon";
    }
}

submit1.addEventListener("click", (e) => {
	e.preventDefault();
	city = city1.value;
	getAirQuality(city);
});

document.addEventListener("DOMContentLoaded", () => {
	getAirQuality("Toronto");
	const cities = ["New York", "Toronto", "Mumbai", "Berlin"];
	for (city in cities) {
		getAirQualityCities(cities[city]);
	}
});
