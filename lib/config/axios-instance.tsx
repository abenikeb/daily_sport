import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	AxiosError,
} from "axios";

const axiosInstance: AxiosInstance = axios.create({
	baseURL: "/api",
	timeout: 5000,
	withCredentials: true,
	headers: {},
});

// Request interceptor
axiosInstance.interceptors.request.use(
	(config: AxiosRequestConfig | any) => {
		// Set default headers
		config.headers.Accept = "application/json";

		let accessToken = process.env.ACCESS_TOKEN;
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		// Set Content-Type header for multipart/form-data
		if (config.url.includes("/upload")) {
			config.headers["Content-Type"] = "multipart/form-data";
		}

		return config;
	},
	(error: AxiosError) => {
		console.error("Request interceptor error:", error);
		return Promise.reject(error);
	}
);

// Response interceptor
axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	(error: AxiosError) => {
		// Handle response errors
		const ExpectedError =
			error.response &&
			error.response.status >= 400 &&
			error.response.status <= 500;
		if (!ExpectedError) {
			console.error("Unexpected Error:", error);
		} else {
			console.error("Expected Error:", error);
		}

		return Promise.reject(error); // pass control to catch
	}
);

export default axiosInstance;
