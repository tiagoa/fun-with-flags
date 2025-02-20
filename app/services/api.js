const ApiClient = (baseUrl) => ({
	async get(endpoint) {
		try {
			const response = await fetch(`${baseUrl}${endpoint}`);
			if (!response.ok) {
				return [null, response.statusText];
			}
			const data = await response.json();
			return [data, null];
		} catch (error) {
			console.error('failed to fetch:',error);
			return [null, error.message];
		}
	}
})
const api = ApiClient("https://restcountries.com/v3.1/");
const countriesApi = {
	getAll: () => api.get("all?fields=cca3,flags,name,capital,region,population")
}

export { countriesApi };