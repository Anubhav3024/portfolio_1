<template>
  <div class="admin-wrap">
    <!-- Sidebar -->
    <aside :class="['sidebar', { 'mobile-visible': adminMobileOpen }]">
      <div class="sidebar-logo">
        <span class="logo-text">anubhav.</span>
        <span class="logo-badge">CMS</span>
        <button class="burger admin-burger" @click="adminMobileOpen = false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="sidebar-nav">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="['sidebar-btn', { active: activeTab === tab.id }]"
          @click="
            activeTab = tab.id;
            adminMobileOpen = false;
          "
        >
          <span class="sidebar-icon">{{ tab.icon }}</span>
          <span>{{ tab.label }}</span>
        </button>
      </nav>
      <div class="sidebar-footer">
        <p class="sidebar-user">👤 {{ username }}</p>
        <button class="btn btn-outline btn-sm logout-btn" @click="handleLogout">
          Logout
        </button>
      </div>
    </aside>

    <!-- Overlay for mobile -->
    <div
      v-if="adminMobileOpen"
      class="admin-overlay"
      @click="adminMobileOpen = false"
    ></div>

    <button
      v-if="!adminMobileOpen"
      class="admin-mobile-toggle"
      @click="adminMobileOpen = true"
    >
      Menu
    </button>

    <!-- Main Content -->
    <main class="admin-main">
      <!-- Toast -->
      <transition name="toast-slide">
        <div v-if="toast.show" :class="['toast', toast.type]">
          {{ toast.message }}
        </div>
      </transition>

      <!-- ══════════════════════ PROFILE ════════════════════════ -->
      <section v-if="activeTab === 'profile'" class="admin-section">
        <div class="section-head">
          <h2 class="admin-title">Edit Profile</h2>
          <p class="admin-sub">Update your public profile information.</p>
        </div>
        <form @submit.prevent="saveProfile" class="profile-form">
          <div class="form-row">
            <div class="form-group">
              <label class="label">Full Name</label
              ><input
                v-model="pf.name"
                class="input"
                placeholder="Anubhav Singh"
              />
            </div>
            <div class="form-group">
              <label class="label">Title</label
              ><input
                v-model="pf.title"
                class="input"
                placeholder="Frontend Developer"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="label">About</label
            ><textarea
              v-model="pf.about"
              class="textarea"
              rows="4"
              placeholder="Describe yourself..."
            ></textarea>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="label">Email</label
              ><input
                v-model="pf.email"
                class="input"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div class="form-group">
              <label class="label">Resume URL</label
              ><input
                v-model="pf.resumeUrl"
                class="input"
                placeholder="https://..."
              />
            </div>
          </div>
          <div class="form-group">
            <label class="label">GitHub URL</label
            ><input
              v-model="pf.socialLinks.github"
              class="input"
              placeholder="https://github.com/..."
            />
          </div>
          <div class="form-group">
            <label class="label">LinkedIn URL</label
            ><input
              v-model="pf.socialLinks.linkedin"
              class="input"
              placeholder="https://linkedin.com/in/..."
            />
          </div>
          <div class="form-group">
            <label class="label">LeetCode URL</label
            ><input
              v-model="pf.socialLinks.leetcode"
              class="input"
              placeholder="https://leetcode.com/..."
            />
          </div>
          <button type="submit" class="btn btn-primary" :disabled="saving">
            {{ saving ? "Saving..." : "Save Profile" }}
          </button>
        </form>
      </section>

      <!-- ══════════════════════ EDUCATION ═════════════════════ -->
      <section v-if="activeTab === 'education'" class="admin-section">
        <div class="section-head">
          <h2 class="admin-title">Manage Education</h2>
          <button
            class="btn btn-primary btn-sm"
            @click="openModal('education')"
          >
            + Add Education
          </button>
        </div>
        <div v-if="education.length" class="item-list">
          <div v-for="ed in education" :key="ed._id" class="item-card">
            <div class="item-info">
              <div class="item-title">{{ ed.degree }}</div>
              <div class="item-sub">
                {{ ed.institution }} · {{ ed.startYear }}–{{
                  ed.endYear || "Present"
                }}
              </div>
            </div>
            <div class="item-actions">
              <button
                class="btn btn-outline btn-sm"
                @click="openModal('education', ed)"
              >
                Edit
              </button>
              <button
                class="btn btn-danger btn-sm"
                @click="deleteItem('education', ed._id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <p v-else class="empty-state">No education entries yet.</p>
      </section>

      <!-- ══════════════════════ CERTIFICATIONS ════════════════ -->
      <section v-if="activeTab === 'certifications'" class="admin-section">
        <div class="section-head">
          <h2 class="admin-title">Manage Certifications</h2>
          <button
            class="btn btn-primary btn-sm"
            @click="openModal('certifications')"
          >
            + Add Certification
          </button>
        </div>
        <div v-if="certifications.length" class="item-list">
          <div v-for="cert in certifications" :key="cert._id" class="item-card">
            <div class="item-info">
              <div class="item-title">{{ cert.title }}</div>
              <div class="item-sub">{{ cert.issuer }} · {{ cert.year }}</div>
            </div>
            <div class="item-actions">
              <button
                class="btn btn-outline btn-sm"
                @click="openModal('certifications', cert)"
              >
                Edit
              </button>
              <button
                class="btn btn-danger btn-sm"
                @click="deleteItem('certifications', cert._id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <p v-else class="empty-state">No certifications yet.</p>
      </section>

      <!-- ══════════════════════ CONTRIBUTIONS ═════════════════ -->
      <section v-if="activeTab === 'contributions'" class="admin-section">
        <div class="section-head">
          <h2 class="admin-title">Manage Contributions</h2>
          <button
            class="btn btn-primary btn-sm"
            @click="openModal('contributions')"
          >
            + Add Contribution
          </button>
        </div>
        <div v-if="contributions.length" class="item-list">
          <div v-for="c in contributions" :key="c._id" class="item-card">
            <div class="item-info">
              <div class="item-title">{{ c.title }}</div>
              <div class="item-sub">{{ c.organization }} · {{ c.year }}</div>
            </div>
            <div class="item-actions">
              <button
                class="btn btn-outline btn-sm"
                @click="openModal('contributions', c)"
              >
                Edit
              </button>
              <button
                class="btn btn-danger btn-sm"
                @click="deleteItem('contributions', c._id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <p v-else class="empty-state">No contributions yet.</p>
      </section>

      <!-- ══════════════════════ SKILLS ════════════════════════ -->
      <section v-if="activeTab === 'skills'" class="admin-section">
        <div class="section-head">
          <h2 class="admin-title">Manage Skills</h2>
          <button class="btn btn-primary btn-sm" @click="openModal('skills')">
            + Add Category
          </button>
        </div>
        <div v-if="skills.length" class="item-list">
          <div v-for="cat in skills" :key="cat._id" class="item-card">
            <div class="item-info">
              <div class="item-title">{{ cat.category }}</div>
              <div class="skill-chips">
                <span v-for="s in cat.skills" :key="s" class="tag">{{
                  s
                }}</span>
              </div>
            </div>
            <div class="item-actions">
              <button
                class="btn btn-outline btn-sm"
                @click="openModal('skills', cat)"
              >
                Edit
              </button>
              <button
                class="btn btn-danger btn-sm"
                @click="deleteItem('skills', cat._id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <p v-else class="empty-state">No skill categories yet.</p>
      </section>

      <!-- ══════════════════════ PROJECTS ══════════════════════ -->
      <section v-if="activeTab === 'projects'" class="admin-section">
        <div class="section-head">
          <h2 class="admin-title">Manage Projects</h2>
          <button class="btn btn-primary btn-sm" @click="openModal('projects')">
            + Add Project
          </button>
        </div>
        <div v-if="projects.length" class="projects-admin-grid">
          <div
            v-for="(proj, index) in projects"
            :key="proj._id"
            class="proj-admin-card"
          >
            <div v-if="proj.thumbnailUrl" class="proj-thumb">
              <img :src="proj.thumbnailUrl" :alt="proj.title" />
            </div>
            <div class="proj-info">
              <div class="item-title">{{ proj.title }}</div>
              <div class="proj-admin-tags">
                <span v-for="t in proj.techStack" :key="t" class="tag">{{
                  t
                }}</span>
              </div>
            </div>
            <div class="item-actions">
              <div class="reorder-btns">
                <button
                  class="btn-icon"
                  @click="moveProject(index, -1)"
                  :disabled="index === 0"
                  title="Move Up"
                >
                  ⬆️
                </button>
                <button
                  class="btn-icon"
                  @click="moveProject(index, 1)"
                  :disabled="index === projects.length - 1"
                  title="Move Down"
                >
                  ⬇️
                </button>
              </div>
              <button
                class="btn btn-outline btn-sm"
                @click="openModal('projects', proj)"
              >
                Edit
              </button>
              <button
                class="btn btn-danger btn-sm"
                @click="deleteItem('projects', proj._id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <p v-else class="empty-state">
          No projects yet. Click "+ Add Project" to get started.
        </p>
      </section>

      <!-- ══════════════════════ EXPERIENCE ════════════════════ -->
      <section v-if="activeTab === 'experience'" class="admin-section">
        <div class="section-head">
          <h2 class="admin-title">Manage Experience</h2>
          <button
            class="btn btn-primary btn-sm"
            @click="openModal('experience')"
          >
            + Add Experience
          </button>
        </div>
        <div v-if="experience.length" class="item-list">
          <div v-for="exp in experience" :key="exp._id" class="item-card">
            <div class="item-info">
              <div class="item-title">{{ exp.title }}</div>
              <div class="item-sub">
                {{ exp.company }} · {{ exp.startYear }}–{{
                  exp.endYear || "Present"
                }}
              </div>
            </div>
            <div class="item-actions">
              <button
                class="btn btn-outline btn-sm"
                @click="openModal('experience', exp)"
              >
                Edit
              </button>
              <button
                class="btn btn-danger btn-sm"
                @click="deleteItem('experience', exp._id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <p v-else class="empty-state">No experience entries yet.</p>
      </section>
    </main>

    <!-- ══════════════════════ MODAL ═════════════════════════════ -->
    <div v-if="modal.open" class="modal-backdrop" @click.self="closeModal">
      <div class="modal">
        <h3 class="modal-title">
          {{ modal.isEdit ? "Edit" : "Add" }} {{ modalTitles[modal.type] }}
        </h3>

        <!-- Education Form -->
        <template v-if="modal.type === 'education'">
          <div class="form-group">
            <label class="label">Degree</label
            ><input
              v-model="modalForm.degree"
              class="input"
              placeholder="B.Tech Computer Science"
            />
          </div>
          <div class="form-group">
            <label class="label">Institution</label
            ><input
              v-model="modalForm.institution"
              class="input"
              placeholder="IIT Bombay"
            />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="label">Start Year</label
              ><input
                v-model.number="modalForm.startYear"
                class="input"
                type="number"
                placeholder="2021"
              />
            </div>
            <div class="form-group">
              <label class="label">End Year</label
              ><input
                v-model.number="modalForm.endYear"
                class="input"
                type="number"
                placeholder="2025"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="label">Score (Percentage / CGPA)</label>
            <input
              v-model="modalForm.score"
              class="input"
              placeholder="8.5 CGPA or 85%"
            />
          </div>
          <div class="form-group">
            <label class="label">Description</label
            ><textarea
              v-model="modalForm.description"
              class="textarea"
              rows="3"
            ></textarea>
          </div>
        </template>

        <!-- Certification Form -->
        <template v-if="modal.type === 'certifications'">
          <div class="form-group">
            <label class="label">Title</label
            ><input
              v-model="modalForm.title"
              class="input"
              placeholder="React Developer"
            />
          </div>
          <div class="form-group">
            <label class="label">Issuer</label
            ><input
              v-model="modalForm.issuer"
              class="input"
              placeholder="HackerRank"
            />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="label">Year</label
              ><input
                v-model.number="modalForm.year"
                class="input"
                type="number"
                placeholder="2024"
              />
            </div>
            <div class="form-group">
              <label class="label">Certificate URL</label
              ><input
                v-model="modalForm.link"
                class="input"
                placeholder="https://..."
              />
            </div>
          </div>
          <div class="form-group">
            <label class="label">Certificate Thumbnail</label>
            <input
              type="file"
              @change="onFileChange"
              accept="image/*"
              class="input"
            />
            <div
              v-if="thumbnailPreview || modalForm.thumbnailUrl"
              class="thumb-preview"
            >
              <img
                :src="thumbnailPreview || modalForm.thumbnailUrl"
                alt="Preview"
              />
            </div>
          </div>
        </template>

        <!-- Contribution Form -->
        <template v-if="modal.type === 'contributions'">
          <div class="form-group">
            <label class="label">Title / Role</label
            ><input
              v-model="modalForm.title"
              class="input"
              placeholder="Club Head"
            />
          </div>
          <div class="form-group">
            <label class="label">Organization</label
            ><input
              v-model="modalForm.organization"
              class="input"
              placeholder="Kriti Art Club"
            />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="label">Year</label
              ><input
                v-model.number="modalForm.year"
                class="input"
                type="number"
                placeholder="2024"
              />
            </div>
            <div class="form-group">
              <label class="label">Instagram Page URL</label>
              <input
                v-model="modalForm.instagramLink"
                class="input"
                placeholder="https://instagram.com/..."
              />
            </div>
          </div>
          <div class="form-group">
            <label class="label">Organization Logo / Image</label>
            <input
              type="file"
              @change="onFileChange"
              accept="image/*"
              class="input"
            />
            <div
              v-if="thumbnailPreview || modalForm.thumbnailUrl"
              class="thumb-preview"
            >
              <img
                :src="thumbnailPreview || modalForm.thumbnailUrl"
                alt="Preview"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="label">Description</label
            ><textarea
              v-model="modalForm.description"
              class="textarea"
              rows="3"
            ></textarea>
          </div>
        </template>

        <!-- Skills Form -->
        <template v-if="modal.type === 'skills'">
          <div class="form-group">
            <label class="label">Category Name</label
            ><input
              v-model="modalForm.category"
              class="input"
              placeholder="Frontend"
            />
          </div>
          <div class="form-group">
            <label class="label">Skills (comma-separated)</label>
            <input
              v-model="modalForm.skillsRaw"
              class="input"
              placeholder="React, Vue, Tailwind CSS, TypeScript"
            />
          </div>
        </template>

        <!-- Project Form -->
        <template v-if="modal.type === 'projects'">
          <div class="form-group">
            <label class="label">Title</label
            ><input
              v-model="modalForm.title"
              class="input"
              placeholder="My Awesome Project"
            />
          </div>
          <div class="form-group">
            <label class="label">Description</label
            ><textarea
              v-model="modalForm.description"
              class="textarea"
              rows="3"
            ></textarea>
          </div>
          <div class="form-group">
            <label class="label">Tech Stack (comma-separated)</label
            ><input
              v-model="modalForm.techStackRaw"
              class="input"
              placeholder="React, Node.js, MongoDB"
            />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="label">GitHub URL</label
              ><input
                v-model="modalForm.githubLink"
                class="input"
                placeholder="https://github.com/..."
              />
            </div>
            <div class="form-group">
              <label class="label">Live URL</label
              ><input
                v-model="modalForm.liveLink"
                class="input"
                placeholder="https://..."
              />
            </div>
          </div>
          <div class="form-group">
            <label class="label">Thumbnail Image</label>
            <input
              type="file"
              @change="onFileChange"
              accept="image/*"
              class="input"
            />
            <div
              v-if="thumbnailPreview || modalForm.thumbnailUrl"
              class="thumb-preview"
            >
              <img
                :src="thumbnailPreview || modalForm.thumbnailUrl"
                alt="Preview"
              />
            </div>
          </div>
        </template>

        <!-- Experience Form -->
        <template v-if="modal.type === 'experience'">
          <div class="form-group">
            <label class="label">Title</label
            ><input
              v-model="modalForm.title"
              class="input"
              placeholder="Software Engineer"
            />
          </div>
          <div class="form-group">
            <label class="label">Company</label
            ><input
              v-model="modalForm.company"
              class="input"
              placeholder="Google"
            />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="label">Start Month</label>
              <select v-model="modalForm.startMonth" class="input">
                <option v-for="m in months" :key="m" :value="m">{{ m }}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="label">Start Year</label>
              <input
                v-model="modalForm.startYear"
                class="input"
                placeholder="2020"
              />
            </div>
          </div>
          <div class="form-group mt-2">
            <label class="checkbox-label">
              <input type="checkbox" v-model="modalForm.isPresent" />
              <span>I currently work here</span>
            </label>
          </div>
          <div class="form-row" v-if="!modalForm.isPresent">
            <div class="form-group">
              <label class="label">End Month</label>
              <select v-model="modalForm.endMonth" class="input">
                <option v-for="m in months" :key="m" :value="m">{{ m }}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="label">End Year</label>
              <input
                v-model="modalForm.endYear"
                class="input"
                placeholder="2024"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="label">Description</label
            ><textarea
              v-model="modalForm.description"
              class="textarea"
              rows="3"
              placeholder="Responsibilities and achievements..."
            ></textarea>
          </div>
        </template>

        <div class="modal-footer">
          <button class="btn btn-ghost btn-sm" @click="closeModal">
            Cancel
          </button>
          <button
            class="btn btn-primary btn-sm"
            @click="saveModal"
            :disabled="saving"
          >
            {{ saving ? "Saving..." : "Save" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/authStore.js";
import {
  getProfile,
  updateProfile,
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
  getCertifications,
  createCertification,
  updateCertification,
  deleteCertification,
  getContributions,
  createContribution,
  updateContribution,
  deleteContribution,
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  reorderProjects,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} from "../services/api.js";

const router = useRouter();
const auth = useAuthStore();
const username = computed(() => auth.username || "Admin");

const adminMobileOpen = ref(false);

const tabs = [
  { id: "profile", label: "Profile", icon: "👤" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "certifications", label: "Certifications", icon: "🏆" },
  { id: "contributions", label: "Contributions", icon: "🌟" },
  { id: "skills", label: "Skills", icon: "💻" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "experience", label: "Experience", icon: "💼" },
];

const modalTitles = {
  education: "Education",
  certifications: "Certification",
  contributions: "Contribution",
  skills: "Skill Category",
  projects: "Project",
  experience: "Experience",
};

const activeTab = ref("profile");
const saving = ref(false);
const toast = reactive({ show: false, message: "", type: "success" });
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// ── Data ─────────────────────────────────────────────────────────────────────
const pf = reactive({
  name: "",
  title: "",
  about: "",
  email: "",
  resumeUrl: "",
  socialLinks: { github: "", linkedin: "", leetcode: "", twitter: "" },
});
const education = ref([]);
const certifications = ref([]);
const contributions = ref([]);
const skills = ref([]);
const projects = ref([]);
const experience = ref([]);

// ── Modal state ───────────────────────────────────────────────────────────────
const modal = reactive({ open: false, type: "", isEdit: false, id: null });
const modalForm = reactive({});
const thumbnailPreview = ref(null);
const thumbnailFile = ref(null);

const openModal = (type, existing = null) => {
  modal.type = type;
  modal.isEdit = !!existing;
  modal.id = existing?._id || null;
  thumbnailPreview.value = null;
  thumbnailFile.value = null;

  // Reset form
  Object.keys(modalForm).forEach((k) => delete modalForm[k]);

  if (existing) {
    Object.assign(modalForm, JSON.parse(JSON.stringify(existing)));
    if (type === "skills")
      modalForm.skillsRaw = (existing.skills || []).join(", ");
    if (type === "projects")
      modalForm.techStackRaw = (existing.techStack || []).join(", ");
    if (type === "experience") {
      if (existing.startYear) {
        const [m, y] = existing.startYear.split(" ");
        modalForm.startMonth = m || "Jan";
        modalForm.startYear = y || "";
      }
      if (existing.endYear) {
        const [m, y] = existing.endYear.split(" ");
        modalForm.endMonth = m || "Jan";
        modalForm.endYear = y || "";
      } else {
        modalForm.isPresent = true;
      }
    }
  } else {
    if (type === "skills") modalForm.skillsRaw = "";
    if (type === "projects") modalForm.techStackRaw = "";
    if (type === "experience") {
      modalForm.startMonth = "Jan";
      modalForm.endMonth = "Jan";
      modalForm.isPresent = false;
    }
  }
  modal.open = true;
};
const closeModal = () => {
  modal.open = false;
};

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  thumbnailFile.value = file;
  thumbnailPreview.value = URL.createObjectURL(file);
};

// ── Toast ─────────────────────────────────────────────────────────────────────
const showToast = (message, type = "success") => {
  toast.message = message;
  toast.type = type;
  toast.show = true;
  setTimeout(() => (toast.show = false), 3000);
};

// ── Fetch all data ────────────────────────────────────────────────────────────
const fetchAll = async () => {
  try {
    const r = await getProfile();
    Object.assign(pf, r.data);
    if (!pf.socialLinks)
      pf.socialLinks = { github: "", linkedin: "", leetcode: "", twitter: "" };
  } catch {}
  try {
    education.value = (await getEducation()).data;
  } catch {}
  try {
    certifications.value = (await getCertifications()).data;
  } catch {}
  try {
    contributions.value = (await getContributions()).data;
  } catch {}
  try {
    skills.value = (await getSkills()).data;
  } catch {}
  try {
    projects.value = (await getProjects()).data;
  } catch {}
  try {
    experience.value = (await getExperience()).data;
  } catch {}
};

// ── Profile Save ──────────────────────────────────────────────────────────────
const saveProfile = async () => {
  saving.value = true;
  try {
    await updateProfile(pf);
    showToast("Profile updated!");
  } catch {
    showToast("Failed to update profile.", "error");
  }
  saving.value = false;
};

// ── Generic Modal Save ────────────────────────────────────────────────────────
const saveModal = async () => {
  saving.value = true;
  const { type, isEdit, id } = modal;
  try {
    if (type === "education") {
      isEdit
        ? await updateEducation(id, modalForm)
        : await createEducation(modalForm);
      education.value = (await getEducation()).data;
    } else if (type === "certifications") {
      const fd = new FormData();
      fd.append("title", modalForm.title || "");
      fd.append("issuer", modalForm.issuer || "");
      fd.append("year", modalForm.year || "");
      fd.append("link", modalForm.link || "");
      if (thumbnailFile.value) fd.append("thumbnail", thumbnailFile.value);
      isEdit
        ? await updateCertification(id, fd)
        : await createCertification(fd);
      certifications.value = (await getCertifications()).data;
    } else if (type === "contributions") {
      const fd = new FormData();
      fd.append("title", modalForm.title || "");
      fd.append("organization", modalForm.organization || "");
      fd.append("year", modalForm.year || "");
      fd.append("description", modalForm.description || "");
      fd.append("instagramLink", modalForm.instagramLink || "");
      if (thumbnailFile.value) fd.append("thumbnail", thumbnailFile.value);
      isEdit ? await updateContribution(id, fd) : await createContribution(fd);
      contributions.value = (await getContributions()).data;
    } else if (type === "skills") {
      const payload = {
        category: modalForm.category,
        skills: modalForm.skillsRaw
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      };
      isEdit ? await updateSkill(id, payload) : await createSkill(payload);
      skills.value = (await getSkills()).data;
    } else if (type === "projects") {
      const fd = new FormData();
      fd.append("title", modalForm.title || "");
      fd.append("description", modalForm.description || "");
      fd.append("githubLink", modalForm.githubLink || "");
      fd.append("liveLink", modalForm.liveLink || "");
      fd.append(
        "techStack",
        JSON.stringify(
          modalForm.techStackRaw
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
        ),
      );
      if (thumbnailFile.value) fd.append("thumbnail", thumbnailFile.value);
      isEdit ? await updateProject(id, fd) : await createProject(fd);
      projects.value = (await getProjects()).data;
    } else if (type === "experience") {
      const payload = { ...modalForm };
      payload.startYear =
        `${modalForm.startMonth} ${modalForm.startYear}`.trim();
      payload.endYear = modalForm.isPresent
        ? ""
        : `${modalForm.endMonth} ${modalForm.endYear}`.trim();

      isEdit
        ? await updateExperience(id, payload)
        : await createExperience(payload);
      experience.value = (await getExperience()).data;
    }
    showToast(`${modalTitles[type]} ${isEdit ? "updated" : "created"}!`);
    closeModal();
  } catch (err) {
    showToast(err?.response?.data?.message || "Error saving.", "error");
  }
  saving.value = false;
};

// ── Project Reordering Logic ──────────────────────────────────────────────────
const moveProject = async (index, direction) => {
  const newIndex = index + direction;
  if (newIndex < 0 || newIndex >= projects.value.length) return;

  const list = [...projects.value];
  const item = list.splice(index, 1)[0];
  list.splice(newIndex, 0, item);
  projects.value = list;

  // Save order to backend
  try {
    const orders = projects.value.map((p, i) => ({ id: p._id, order: i }));
    await reorderProjects(orders);
  } catch (err) {
    showToast("Failed to save new order.", "error");
  }
};

// ── Generic Delete ────────────────────────────────────────────────────────────
const deleteItem = async (type, id) => {
  if (!confirm("Are you sure you want to delete this?")) return;
  try {
    if (type === "education") {
      await deleteEducation(id);
      education.value = education.value.filter((e) => e._id !== id);
    } else if (type === "certifications") {
      await deleteCertification(id);
      certifications.value = certifications.value.filter((c) => c._id !== id);
    } else if (type === "contributions") {
      await deleteContribution(id);
      contributions.value = contributions.value.filter((c) => c._id !== id);
    } else if (type === "skills") {
      await deleteSkill(id);
      skills.value = skills.value.filter((s) => s._id !== id);
    } else if (type === "projects") {
      await deleteProject(id);
      projects.value = projects.value.filter((p) => p._id !== id);
    } else if (type === "experience") {
      await deleteExperience(id);
      experience.value = experience.value.filter((e) => e._id !== id);
    }
    showToast("Deleted successfully.");
  } catch {
    showToast("Failed to delete.", "error");
  }
};

// ── Logout ────────────────────────────────────────────────────────────────────
const handleLogout = () => {
  auth.logout();
  router.push("/admin/login");
};

onMounted(fetchAll);
</script>

<style scoped>
.admin-wrap {
  display: flex;
  min-height: 100vh;
}

/* ─── Sidebar ─────────────────────────────────────────────────────── */
.sidebar {
  width: 240px;
  flex-shrink: 0;
  background: #0d1f3c;
  border-right: 1px solid #233554;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  height: 100vh;
}
.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1.25rem;
  margin-bottom: 2rem;
}
.logo-text {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary);
  font-family: "Poppins", sans-serif;
}
.logo-badge {
  font-size: 0.6rem;
  font-weight: 700;
  padding: 0.1rem 0.4rem;
  background: rgba(59, 130, 246, 0.2);
  color: var(--primary);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 0.2rem;
  letter-spacing: 0.04em;
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 0.75rem;
  gap: 0.25rem;
}
.sidebar-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.65rem 0.75rem;
  border-radius: 0.5rem;
  background: none;
  border: none;
  color: var(--muted-fg);
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  text-align: left;
}
.sidebar-btn:hover {
  background: rgba(59, 130, 246, 0.08);
  color: var(--foreground);
}
.sidebar-btn.active {
  background: rgba(59, 130, 246, 0.15);
  color: var(--primary);
}
.sidebar-icon {
  font-size: 1rem;
  width: 1.2rem;
  text-align: center;
}
.sidebar-footer {
  padding: 1rem 1.25rem;
  border-top: 1px solid #233554;
  margin-top: auto;
}
.sidebar-user {
  font-size: 0.8rem;
  color: var(--muted-fg);
  margin-bottom: 0.75rem;
}
.logout-btn {
  width: 100%;
  justify-content: center;
}

/* ─── Main ────────────────────────────────────────────────────────── */
.admin-main {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  position: relative;
}
.admin-section {
  max-width: 860px;
}
.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.admin-title {
  font-size: 1.5rem;
  font-weight: 700;
}
.admin-sub {
  font-size: 0.85rem;
  color: var(--muted-fg);
  margin-top: 0.2rem;
}

/* ─── Profile Form ────────────────────────────────────────────────── */
.profile-form {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 650px;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* ─── Item List ───────────────────────────────────────────────────── */
.item-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.item-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #112240;
  border: 1px solid #233554;
  border-radius: 0.6rem;
  padding: 1rem 1.25rem;
  gap: 1rem;
  flex-wrap: wrap;
}
.item-info {
  flex: 1;
}
.item-title {
  font-weight: 600;
  font-size: 0.92rem;
}
.item-sub {
  font-size: 0.8rem;
  color: var(--muted-fg);
  margin-top: 0.2rem;
}
.item-actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}
.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.4rem;
}

/* ─── Projects Admin ──────────────────────────────────────────────── */
.projects-admin-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.proj-admin-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #112240;
  border: 1px solid #233554;
  border-radius: 0.6rem;
  padding: 0.75rem 1.25rem;
  flex-wrap: wrap;
}
.proj-thumb {
  width: 80px;
  height: 55px;
  border-radius: 0.4rem;
  overflow: hidden;
  flex-shrink: 0;
  background: rgba(59, 130, 246, 0.1);
}
.proj-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.proj-info {
  flex: 1;
}
.proj-admin-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-top: 0.3rem;
}

/* ─── Thumbnail Preview ───────────────────────────────────────────── */
.thumb-preview {
  margin-top: 0.6rem;
  width: 140px;
  height: 90px;
  border-radius: 0.4rem;
  overflow: hidden;
  border: 1px solid #233554;
  background: rgba(59, 130, 246, 0.05);
}
.thumb-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ─── Toast ───────────────────────────────────────────────────────── */
.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: all 0.3s ease;
}
.toast-slide-enter-from,
.toast-slide-leave-to {
  transform: translateX(120%);
  opacity: 0;
}

/* ─── Empty State ─────────────────────────────────────────────────── */
.empty-state {
  color: var(--muted-fg);
  font-style: italic;
  font-size: 0.88rem;
  padding: 1rem 0;
}

@media (max-width: 640px) {
  .sidebar {
    position: fixed;
    left: -260px;
    top: 0;
    bottom: 0;
    z-index: 1001;
    transition: left 0.3s ease;
    display: flex; /* Override display: none if present */
  }
  .sidebar.mobile-visible {
    left: 0;
  }
  .admin-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
  .admin-mobile-toggle {
    display: block;
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 999;
    background: var(--primary);
    color: white;
    border: none;
    padding: 0.75rem 1.25rem;
    border-radius: 2rem;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
  .admin-burger {
    display: flex;
    margin-left: auto;
  }
  .admin-main {
    padding: 1rem;
    padding-top: 4rem;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
}
.admin-mobile-toggle {
  display: none;
}
.admin-burger {
  display: none;
}
.proj-admin-card .item-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.reorder-btns {
  display: flex;
  gap: 0.25rem;
}
.btn-icon {
  background: none;
  border: 1px solid #233554;
  border-radius: 0.25rem;
  color: var(--primary);
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  font-size: 0.8rem;
  transition: var(--transition);
}
.btn-icon:hover:not(:disabled) {
  background: rgba(59, 130, 246, 0.1);
  border-color: var(--primary);
}
.btn-icon:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: var(--foreground);
  cursor: pointer;
  user-select: none;
}
.checkbox-label input {
  width: 1rem;
  height: 1rem;
  cursor: pointer;
}
.mt-2 {
  margin-top: 0.75rem;
}
</style>
