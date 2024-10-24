// constants/api.js
const devApi = "https://3aa3yts4zj.execute-api.us-east-1.amazonaws.com/dev";  // URL de la API en desarrollo
const prodApi = "https://z5i64n32d6.execute-api.us-east-1.amazonaws.com/prod"; // URL de la API en producción

export const API_BASE_URL = false ? devApi : prodApi;