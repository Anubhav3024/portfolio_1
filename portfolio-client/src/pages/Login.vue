<template>
  <div class="login-wrap">
    <div class="login-card">
      <div class="login-logo">
        <span class="logo-text">anubhav.</span>
        <span class="logo-badge">Admin</span>
      </div>

      <h1 class="login-title">Admin Login</h1>
      <p class="login-sub">Sign in to manage your portfolio</p>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label class="label">Username</label>
          <input
            v-model="form.username"
            class="input"
            type="text"
            placeholder="admin"
            required
            autocomplete="username"
          />
        </div>
        <div class="form-group">
          <label class="label">Password</label>
          <input
            v-model="form.password"
            class="input"
            type="password"
            placeholder="••••••••"
            required
            autocomplete="current-password"
          />
        </div>

        <p v-if="error" class="login-error">{{ error }}</p>

        <button
          type="submit"
          class="btn btn-primary login-btn"
          :disabled="loading"
        >
          <span v-if="loading" class="spinner-sm"></span>
          <span>{{ loading ? "Signing in..." : "Sign In" }}</span>
        </button>
      </form>

      <a href="/" class="login-back">← Back to Portfolio</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/authStore.js";

const router = useRouter();
const auth = useAuthStore();

const form = ref({ username: "", password: "" });
const error = ref("");
const loading = ref(false);

const handleLogin = async () => {
  error.value = "";
  loading.value = true;
  try {
    await auth.login(form.value);
    router.push("/admin");
  } catch (err) {
    error.value =
      err?.response?.data?.message || "Login failed. Check credentials.";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-wrap {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.login-card {
  width: 100%;
  max-width: 400px;
  background: #112240;
  border: 1px solid #233554;
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}
.login-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  font-family: "Poppins", sans-serif;
}
.logo-badge {
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  background: rgba(59, 130, 246, 0.2);
  color: var(--primary);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 0.25rem;
  letter-spacing: 0.05em;
}
.login-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}
.login-sub {
  color: var(--muted-fg);
  font-size: 0.88rem;
  margin-bottom: 1.75rem;
}
.login-form {
  display: flex;
  flex-direction: column;
}
.login-error {
  color: #f87171;
  font-size: 0.82rem;
  margin-bottom: 0.75rem;
}
.login-btn {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  gap: 0.5rem;
}
.login-back {
  display: block;
  text-align: center;
  margin-top: 1.25rem;
  font-size: 0.85rem;
  color: var(--muted-fg);
  transition: color 0.2s;
}
.login-back:hover {
  color: var(--primary);
}
.spinner-sm {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
</style>
