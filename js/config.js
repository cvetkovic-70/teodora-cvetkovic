if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
	var appConfig = {
		'base' : 'http://' + location.hostname + ":" + location.port,
	}	
} else {
	var appConfig = {
		'base': 'https://cvetkovic-70.github.io/teodora-cvetkovic',
	}
}

axios.defaults.baseURL = appConfig.base;
	