export const ENVIRONMENT = {
	baseURL: process?.env?.FRONTEND_API_ENDPOINT || process.env.GITPOD_WORKSPACE_URL.replace('://','://8080-') ||'http://localhost:8080'|| '',
};
