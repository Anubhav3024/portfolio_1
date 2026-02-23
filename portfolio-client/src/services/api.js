import axios from "axios";

const rawBaseURL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
let normalizedURL = rawBaseURL.trim();
if (!normalizedURL.includes("/api")) {
  normalizedURL = normalizedURL.endsWith("/")
    ? `${normalizedURL}api`
    : `${normalizedURL}/api`;
}
const baseURL = normalizedURL.endsWith("/")
  ? normalizedURL
  : `${normalizedURL}/`;
console.log("🛠️ Active API Base URL:", baseURL);

const api = axios.create({
  baseURL: baseURL,
});

// Automatically attach JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("admin_token");
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export default api;

// ─── Auth ────────────────────────────────────────────────────────────────────
export const loginAdmin = (data) => api.post("login", data);

// ─── Profile ──────────────────────────────────────────────────────────────────
export const getProfile = () => api.get("profile");
export const updateProfile = (data) => api.put("profile", data);

// ─── Education ───────────────────────────────────────────────────────────────
export const getEducation = () => api.get("education");
export const createEducation = (data) => api.post("education", data);
export const updateEducation = (id, data) => api.put(`education/${id}`, data);
export const deleteEducation = (id) => api.delete(`education/${id}`);

// ─── Certifications ───────────────────────────────────────────────────────────
export const getCertifications = () => api.get("certifications");
export const createCertification = (formData) =>
  api.post("certifications", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateCertification = (id, formData) =>
  api.put(`certifications/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteCertification = (id) => api.delete(`certifications/${id}`);

// ─── Contributions ────────────────────────────────────────────────────────────
export const getContributions = () => api.get("contributions");
export const createContribution = (formData) =>
  api.post("contributions", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateContribution = (id, formData) =>
  api.put(`contributions/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteContribution = (id) => api.delete(`contributions/${id}`);

// ─── Skills ───────────────────────────────────────────────────────────────────
export const getSkills = () => api.get("skills");
export const createSkill = (data) => api.post("skills", data);
export const updateSkill = (id, data) => api.put(`skills/${id}`, data);
export const deleteSkill = (id) => api.delete(`skills/${id}`);

// ─── Experience ──────────────────────────────────────────────────────────────
export const getExperience = () => api.get("experience");
export const createExperience = (data) => api.post("experience", data);
export const updateExperience = (id, data) => api.put(`experience/${id}`, data);
export const deleteExperience = (id) => api.delete(`experience/${id}`);

// ─── Projects ────────────────────────────────────────────────────────────────
export const getProjects = () => api.get("projects");
export const createProject = (formData) =>
  api.post("projects", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateProject = (id, formData) =>
  api.put(`projects/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteProject = (id) => api.delete(`projects/${id}`);
export const reorderProjects = (orders) =>
  api.post("projects/reorder", { orders });
