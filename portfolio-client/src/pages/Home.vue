<template>
  <div class="page-wrap">
    <link
      href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <!-- ─── HEADER ─────────────────────────────────────────────────── -->
    <header :class="['site-header', { scrolled: isScrolled }]">
      <div class="header-inner container">
        <a href="#home" class="logo">anubhav.</a>

        <nav class="desktop-nav">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            :class="[
              'nav-link',
              { active: activeSection === link.href.slice(1) },
            ]"
            >{{ link.name }}</a
          >
        </nav>

        <button
          class="burger"
          @click="mobileOpen = !mobileOpen"
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <nav v-if="mobileOpen" class="mobile-nav">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="mobile-link"
          @click="mobileOpen = false"
          >{{ link.name }}</a
        >
      </nav>
    </header>

    <main>
      <!-- ─── HERO ─────────────────────────────────────────────────── -->
      <section id="home" class="hero-section reveal">
        <div class="hero-bg-top"></div>
        <div class="hero-bg-bottom">
          <!-- Background decorative dots moved here for better blending -->
          <div class="bg-dots">
            <div class="dot-item dot-1"></div>
            <div class="dot-item dot-2"></div>
            <div class="dot-item dot-3"></div>
          </div>
        </div>

        <div class="container hero-content">
          <div class="hero-title-wrap">
            <h1 class="hero-title">
              Hi, I am
              <span class="name-dark">{{
                profile.name?.split(" ")[0] || "Anubhav"
              }}</span>
              <br />
              <span class="name-blue">{{
                profile.name?.split(" ").slice(1).join(" ") || "Singh"
              }}</span>
            </h1>
            <h2 class="hero-subtitle">
              {{ profile.title || "Frontend Developer" }}
            </h2>
          </div>

          <div class="hero-grid">
            <!-- Left: Photo + Socials -->
            <div class="hero-left">
              <div class="photo-section">
                <!-- Dots removed from here -->
                <div class="photo-ring">
                  <div class="photo-inner">
                    <img
                      src="/profile-photo.png"
                      alt="Profile"
                      class="profile-img"
                    />
                  </div>
                </div>
              </div>
              <div class="social-row">
                <!-- GitHub Light Button -->
                <a
                  :href="
                    profile.socialLinks?.github ||
                    'https://github.com/Anubhav3024'
                  "
                  target="_blank"
                  class="light-btn-wrap"
                >
                  <div class="light-button">
                    <button class="bt github">
                      <div class="light-holder">
                        <div class="dot"></div>
                        <div class="light"></div>
                      </div>
                      <div class="button-holder">
                        <svg
                          viewBox="0 0 496 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                          />
                        </svg>
                        <p>GitHub</p>
                      </div>
                    </button>
                  </div>
                </a>

                <!-- LinkedIn Light Button -->
                <a
                  :href="
                    profile.socialLinks?.linkedin ||
                    'https://linkedin.com/in/anubhav3024'
                  "
                  target="_blank"
                  class="light-btn-wrap"
                >
                  <div class="light-button">
                    <button class="bt linkedin">
                      <div class="light-holder">
                        <div class="dot"></div>
                        <div class="light"></div>
                      </div>
                      <div class="button-holder">
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.25h-3v-5.5c0-1.381-.112-2.623-2-2.623-1.887 0-2.171 1.146-2.171 2.537v5.586h-3v-11h2.842v1.522h.034c.396-.745 1.35-1.522 2.807-1.522 3.034 0 3.621 1.988 3.621 4.577v6.423z"
                          />
                        </svg>
                        <p>LinkedIn</p>
                      </div>
                    </button>
                  </div>
                </a>

                <!-- LeetCode Light Button -->
                <a
                  :href="
                    profile.socialLinks?.leetcode ||
                    'https://leetcode.com/anubhav3024'
                  "
                  target="_blank"
                  class="light-btn-wrap"
                >
                  <div class="light-button">
                    <button class="bt leetcode">
                      <div class="light-holder">
                        <div class="dot"></div>
                        <div class="light"></div>
                      </div>
                      <div class="button-holder">
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.483 0a1.374 1.374 0 00-.961.41L7.116 5.815a1.378 1.378 0 101.948 1.948l5.373-5.373L14.417.41A1.371 1.371 0 0013.483 0zM22.21 2.21a1.374 1.374 0 00-1.945 0L18.32 4.155l1.945 1.945.41-.41a1.378 1.378 0 10-1.948-1.948l-.41.41L13.79 0a1.374 1.374 0 00-1.945 0L0 11.845a1.374 1.374 0 000 1.945l11.845 11.845a1.374 1.374 0 001.945 0L24.155 13.79a1.374 1.374 0 000-1.945l-1.945-1.945a1.374 1.374 0 000-1.945l1.945-1.945a1.374 1.374 0 000-1.945zM12.87 23.13L1.72 11.98 11.98 1.72l11.15 11.15-11.15 11.15zM12.87 21.06l8.19-8.19-8.19-8.19-8.19 8.19 8.19 8.19zM10.8 11.98h4.14v2.07H10.8v-2.07z"
                          />
                        </svg>
                        <p>LeetCode</p>
                      </div>
                    </button>
                  </div>
                </a>

                <!-- Email Light Button -->
                <a
                  :href="`mailto:${profile.email || 'anubhav270803@gmail.com'}`"
                  class="light-btn-wrap"
                >
                  <div class="light-button">
                    <button class="bt email">
                      <div class="light-holder">
                        <div class="dot"></div>
                        <div class="light"></div>
                      </div>
                      <div class="button-holder">
                        <svg
                          viewBox="2 2 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2v.51l-8 6.22-8-6.22V6zM4 18V9.04l7.39 5.74c.18.14.4.21.61.21s.43-.07.61-.21L20 9.03v8.96H4Z"
                          />
                        </svg>
                        <p>Email</p>
                      </div>
                    </button>
                  </div>
                </a>
              </div>
            </div>

            <!-- ─── HERO RIGHT: BIO & CTA BUTTONS ─── -->
            <div class="hero-right">
              <div class="about-block">
                <p class="about-text">
                  <span class="text-on-white">{{
                    profile.about
                      ? profile.about.split("solutions,")[0]
                      : "passionate MERN Stack Developer specializing in building fast, scalable, and user-focused web applications using MongoDB, Express.js, React, and Node.js. I enjoy transforming complex ideas into clean, efficient digital "
                  }}</span
                  ><span class="text-on-navy">{{
                    profile.about
                      ? profile.about
                          .split("solutions,")
                          .slice(1)
                          .join("solutions,")
                      : "solutions, combining strong backend logic with intuitive frontend design to deliver seamless, real-world user experiences."
                  }}</span>
                </p>
              </div>
              <div class="hero-btns">
                <a
                  :href="`mailto:${profile.email || 'anubhav270803@gmail.com'}`"
                  class="btn btn-primary btn-lg"
                  >Hire Me</a
                >
                <a
                  :href="profile.resumeUrl || '/fullstack_resume.pdf'"
                  target="_blank"
                  class="btn btn-outline btn-lg"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    width="18"
                    height="18"
                  >
                    <path
                      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                    />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── JOURNEY ───────────────────────────────────────────────── -->
      <section id="journey" class="section bg-alt reveal">
        <div class="container">
          <h2 class="section-title">
            My <span class="text-gradient">Journey</span>
          </h2>
          <div class="journey-stack">
            <!-- ─── VERTICAL TIMELINE LINE ─── -->
            <!-- Experience -->
            <div v-if="experience.length" class="journey-segment">
              <h3 class="col-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="2 2 20 20"
                  class="title-icon"
                >
                  <path
                    d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M9 4h6v2H9zM4 20V8h3v12zm5 0V8h6v12zm8 0V8h3v12z"
                  ></path>
                </svg>
                Professional Experience
              </h3>
              <div v-if="loadingExperience" class="loading">Loading...</div>
              <div v-else class="card-list">
                <div
                  v-for="(exp, idx) in experience"
                  :key="exp._id"
                  :class="[
                    'card-gradient journey-card reveal',
                    `reveal-delay-${(idx % 4) + 1}`,
                  ]"
                >
                  <div class="jcard-top">
                    <div>
                      <div class="jcard-name">{{ exp.title }}</div>
                      <div class="jcard-sub">{{ exp.company }}</div>
                    </div>
                    <span class="jcard-year"
                      >{{ exp.startYear }}–{{ exp.endYear || "Present" }}</span
                    >
                  </div>
                  <p v-if="exp.description" class="jcard-desc">
                    {{ exp.description }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Education -->
            <div v-if="education.length" class="journey-segment">
              <h3 class="col-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="2 2 20 20"
                  class="title-icon"
                >
                  <path
                    d="m21.45 8.61-9-4.5a1 1 0 0 0-.89 0l-6 3-3 1.5-1 .5a1 1 0 0 0-.55.89v6h2v-5.38l2 1v3.83c0 2.06 3.12 4.56 7 4.56s7-2.49 7-4.56v-3.83l2.45-1.22c.34-.17.55-.52.55-.89s-.21-.72-.55-.89Zm-15 .29L12 6.12l6.76 3.38L12 12.88 5.24 9.5l1.21-.61ZM17 15.45c0 .76-2.11 2.56-5 2.56s-5-1.79-5-2.56v-2.83l4.55 2.28c.14.07.29.11.45.11s.31-.04.45-.11L17 12.62z"
                  ></path>
                </svg>
                Education
              </h3>
              <div v-if="loadingEducation" class="loading">Loading...</div>
              <div v-else class="journey-card-grid">
                <div
                  v-for="(ed, idx) in education"
                  :key="ed._id"
                  :class="[
                    'card-gradient journey-card edu-card reveal',
                    `reveal-delay-${(idx % 4) + 1}`,
                  ]"
                >
                  <div class="jcard-top">
                    <div>
                      <div class="jcard-name">{{ ed.degree }}</div>
                      <div class="jcard-sub">{{ ed.institution }}</div>
                    </div>
                    <!-- Score badge replaces date position -->
                    <span v-if="ed.score" class="jcard-score-badge">{{
                      ed.score
                    }}</span>
                  </div>
                  <p v-if="ed.description" class="jcard-desc">
                    {{ ed.description }}
                  </p>
                  <!-- Date at bottom-left -->
                  <div class="jcard-date-footer">
                    {{ ed.startYear }}–{{ ed.endYear || "Present" }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Certifications -->
            <div v-if="certifications.length" class="journey-segment">
              <h3 class="col-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="title-icon"
                >
                  <path
                    d="M13.08 8.63 12 6.44l-1.08 2.19-2.42.35 1.75 1.71-.41 2.41L12 11.96l2.16 1.14-.41-2.41 1.75-1.71z"
                  ></path>
                  <path
                    d="M17.16 3.01A2.02 2.02 0 0 0 15.42 2H8.58c-.72 0-1.38.39-1.74 1.01l-3.43 6c-.35.61-.35 1.37 0 1.98l3.43 6c.04.08.1.14.16.2v3.8c0 .35.18.67.47.85s.66.2.97.04l3.55-1.78 3.55 1.78a.997.997 0 0 0 1.45-.89v-3.8c.05-.07.11-.13.16-.2l3.43-6c.35-.61.35-1.37 0-1.98l-3.43-6ZM15.42 16H8.58l-3.43-6 3.43-6V3v1h6.84l3.43 6z"
                  ></path>
                </svg>
                Certifications
              </h3>
              <div v-if="loadingCerts" class="loading">Loading...</div>
              <div v-else class="journey-card-grid">
                <a
                  v-for="(cert, idx) in certifications"
                  :key="cert._id"
                  :href="cert.link || '#'"
                  target="_blank"
                  :class="[
                    'card-gradient journey-card cert-card-enhanced reveal',
                    `reveal-delay-${(idx % 4) + 1}`,
                  ]"
                >
                  <div v-if="cert.thumbnailUrl" class="cert-img-wrap">
                    <img :src="cert.thumbnailUrl" alt="Cert" />
                  </div>
                  <div class="jcard-top">
                    <div>
                      <div class="jcard-name">{{ cert.title }}</div>
                      <div class="jcard-sub">{{ cert.issuer }}</div>
                    </div>
                    <span class="jcard-year">{{ cert.year }}</span>
                  </div>
                </a>
              </div>
            </div>

            <!-- Contributions -->
            <div v-if="contributions.length" class="journey-segment">
              <h3 class="col-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 512 231.24"
                  class="title-icon"
                >
                  <path
                    d="M290.38 138.83c-.71-5.82 16.55-28.05 19.71-38.69 6.75-10.73 9.15-27.82 1.78-39.16-2.92-4.51-1.67-8.42-1.67-14.64 0-61.77-108.23-61.8-108.23 0 0 7.8 1.79 9.64-2.43 15.81-7.08 10.26-3.45 28.48 2.54 38.01 3.83 11.21 21.94 32.35 20.68 38.7-1.14 31.7 67.82 30.65 67.62-.03zM97.41 201.04h-3.05c-2.75 0-5.01-2.26-5.01-5.01v-8.11c0-2.75 2.26-5.01 5.01-5.01h18.12c2.75 0 5.01 2.26 5.01 5.01v8.11c0 2.75-2.26 5.01-5.01 5.01h-3.1l5.95 30.2H91.7l5.71-30.2zm31.71-44.08c-.56-4.67 13.31-22.54 15.85-31.1 5.43-8.63 7.36-22.35 1.43-31.48-2.35-3.61-1.34-6.76-1.34-11.77 0-49.64-87-49.67-87 0 0 6.28 1.44 7.75-1.95 12.72-5.69 8.25-2.77 22.89 2.04 30.55 3.08 9 17.63 26 16.63 31.1-.92 25.48 54.5 24.64 54.34-.02zm-67.53 14.88c-10.7 6.84-25.86 12.46-37.99 16.51C-.21 196.27-.14 197.37.03 231.24h84.15l-22.59-59.4zm69.48 59.4c2.92-37.9-4.5-36.26 27.22-48.14 15.86-5.93 29.94-13.45 44.47-22.54l27.23 70.68h-98.92zm174.58-73.9c13.3 8.51 26.01 15.5 41.1 20.53 29.62 9.86 29.54 11.23 29.33 53.37h-98.54l28.11-73.9zm108.94 43.7h3.06c2.74 0 5-2.26 5-5.01v-8.11c0-2.75-2.26-5.01-5-5.01h-18.13c-2.75 0-5.01 2.26-5.01 5.01v8.11c0 2.75 2.26 5.01 5.01 5.01h3.11l-5.95 30.2h23.62l-5.71-30.2zm-31.71-44.08c.56-4.67-13.31-22.54-15.84-31.1-5.44-8.63-7.36-22.35-1.44-31.48 2.35-3.61 1.34-6.76 1.34-11.77 0-49.64 87-49.67 87 0 0 6.28-1.44 7.75 1.95 12.72-5.69 8.25-2.77 22.89-2.04 30.55-3.08 9-17.63 26-16.63 31.1.92 25.48-54.5 24.64-54.34-.02zm67.54 14.88c10.69 6.84 25.85 12.46 37.98 16.51 23.81 7.92 23.74 9.02 23.57 42.89h-84.15l22.6-59.4zm-204.3 21.82h-3.81c-3.42 0-6.22-2.81-6.22-6.22v-10.1c0-3.42 2.8-6.23 6.22-6.23h22.55c3.43 0 6.23 2.81 6.23 6.23v10.1c0 3.41-2.8 6.22-6.23 6.22H261l7.4 37.58h-29.39l7.11-37.58z"
                  ></path>
                </svg>
                Leadership & Contributions
              </h3>
              <div v-if="loadingContribs" class="loading">Loading...</div>
              <div v-else class="journey-card-grid">
                <div
                  v-for="(c, idx) in contributions"
                  :key="c._id"
                  :class="[
                    'card-gradient journey-card leadership-card reveal',
                    `reveal-delay-${(idx % 4) + 1}`,
                  ]"
                >
                  <div class="leadership-top">
                    <div class="leadership-logo-wrap" v-if="c.thumbnailUrl">
                      <img
                        :src="c.thumbnailUrl"
                        alt="Logo"
                        class="leadership-logo"
                      />
                      <div class="insta-badge" v-if="c.instagramLink">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width="10"
                          height="10"
                        >
                          <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063 1.366.333 2.633 1.308 3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="leadership-title-group">
                      <div class="jcard-name">{{ c.title }}</div>
                      <div class="jcard-sub">{{ c.organization }}</div>
                    </div>
                    <span class="jcard-year">{{ c.year }}</span>
                  </div>
                  <p v-if="c.description" class="jcard-desc">
                    {{ c.description }}
                  </p>
                  <div class="leadership-footer" v-if="c.instagramLink">
                    <a
                      :href="c.instagramLink"
                      target="_blank"
                      class="btn-insta"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063 1.366.333 2.633 1.308 3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                        />
                      </svg>
                      Visit Page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ─── LEADERSHIP QUOTE SECTION (AUTO-TYPING) ─── -->

          <!-- Leadership Quote Section -->
          <div
            id="leadership-quote"
            class="quote-section-wrap reveal"
            ref="quoteSection"
          >
            <div class="quote-content">
              <span class="quote-text">"{{ displayedQuote }}"</span>
              <span v-if="isWriting" class="pencil-cursor">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="2 2 20 20"
                  style="transform: scaleX(-1) rotate(-10deg)"
                >
                  <path
                    d="M19 13.09V8c0-.44-.29-.83-.71-.96l-13-4c-.35-.11-.74-.01-1 .25l-1 1c-.26.26-.36.65-.25 1l4 13c.13.42.52.71.96.71h5.09l2.71 2.71c.2.2.45.29.71.29s.51-.1.71-.29l4.5-4.5a.996.996 0 0 0 0-1.41l-2.71-2.71Zm-2.5 6.5-2.29-2.29a1 1 0 0 0-.71-.29H8.74L5.7 7.12l4.38 4.38c-.04.16-.07.33-.07.51 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.18 0-.35.03-.51.07L7.12 5.7l9.89 3.04v4.76c0 .27.11.52.29.71l2.29 2.29z"
                  ></path>
                </svg>
              </span>
            </div>
            <div
              v-if="quoteDone"
              class="quote-author"
              :class="{ 'fade-in': quoteDone }"
            >
              - Simon Sinek
            </div>
          </div>

          <p
            v-if="
              !loadingExperience &&
              !loadingEducation &&
              !loadingCerts &&
              !loadingContribs &&
              !experience.length &&
              !education.length &&
              !certifications.length &&
              !contributions.length
            "
            class="empty-state"
            style="text-align: center"
          >
            Nothing to show in the journey yet.
          </p>
        </div>
      </section>

      <!-- ─── SKILLS ────────────────────────────────────────────────── -->
      <section id="skills" class="section bg-white reveal">
        <div class="container">
          <h2 class="section-title" style="color: #0a192f">
            Technical <span class="text-gradient">Skills</span>
          </h2>

          <div v-if="loadingSkills" class="loading" style="text-align: center">
            Loading...
          </div>
          <div v-else-if="skills.length" class="skills-grid">
            <div v-for="cat in skills" :key="cat._id" class="skill-card">
              <div class="skill-cat-title">{{ cat.category }}</div>
              <div class="skill-tags">
                <span v-for="skill in cat.skills" :key="skill" class="tag">{{
                  skill
                }}</span>
              </div>
            </div>
          </div>
          <p v-else class="empty-state" style="text-align: center">
            No skills entered yet.
          </p>

          <!-- ─── INFINITE LOGO ROLLER ─── -->
          <div class="skills-carousel-container">
            <div class="carousel-inner">
              <!-- Double the items for infinite scroll effect -->
              <div
                v-for="(item, index) in [...toolAttributes, ...toolAttributes]"
                :key="index"
                class="carousel-card"
                :style="{ '--color-card': item.color }"
              >
                <img :src="item.src" :alt="item.name" class="skill-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── PROJECTS ──────────────────────────────────────────────── -->
      <section id="projects" class="section reveal">
        <div class="container">
          <h2 class="section-title">
            My <span class="text-gradient">Projects</span>
          </h2>
          <div
            v-if="loadingProjects"
            class="loading"
            style="text-align: center"
          >
            Loading...
          </div>
          <div v-else-if="projects.length" class="projects-grid">
            <div
              v-for="(proj, idx) in projects"
              :key="proj._id"
              :class="[
                'project-card card-gradient reveal',
                `reveal-delay-${(idx % 3) + 1}`,
              ]"
            >
              <div v-if="proj.thumbnailUrl" class="proj-img-wrap">
                <img
                  :src="proj.thumbnailUrl"
                  :alt="proj.title"
                  class="proj-img"
                />
              </div>
              <div class="proj-body">
                <h3 class="proj-title">{{ proj.title }}</h3>
                <p class="proj-desc">{{ proj.description }}</p>
                <div class="proj-tags">
                  <span
                    v-for="tech in proj.techStack"
                    :key="tech"
                    class="tag"
                    >{{ tech }}</span
                  >
                </div>
                <div class="proj-links">
                  <a
                    v-if="proj.githubLink"
                    :href="proj.githubLink"
                    target="_blank"
                    class="btn btn-outline btn-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="14"
                      height="14"
                    >
                      <path
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    GitHub
                  </a>
                  <a
                    v-if="proj.liveLink"
                    :href="proj.liveLink"
                    target="_blank"
                    class="btn btn-primary btn-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      width="14"
                      height="14"
                    >
                      <path
                        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                      />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p v-else class="empty-state" style="text-align: center">
            No projects added yet.
            <a href="/admin" style="color: var(--primary)">Add one →</a>
          </p>
        </div>
      </section>
    </main>

    <!-- ─── FOOTER ────────────────────────────────────────────────────── -->
    <footer class="site-footer-bottom">
      <div class="container footer-inner">
        <p class="footer-copy">
          Copyright © 2024 by
          <span class="footer-name">{{ profile.name || "Anubhav Singh" }}</span>
          | All Rights Reserved.
        </p>
        <div class="footer-socials">
          <a
            :href="
              profile.socialLinks?.github || 'https://github.com/Anubhav3024'
            "
            target="_blank"
            class="footer-social-btn"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
          <a
            :href="
              profile.socialLinks?.linkedin ||
              'https://linkedin.com/in/anubhav3024'
            "
            target="_blank"
            class="footer-social-btn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a
            :href="
              profile.socialLinks?.leetcode ||
              'https://leetcode.com/anubhav3024'
            "
            target="_blank"
            class="footer-social-btn"
            title="LeetCode"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path
                d="M13.483 0a1.374 1.374 0 00-.961.41L7.116 5.815a1.378 1.378 0 101.948 1.948l5.373-5.373L14.417.41A1.371 1.371 0 0013.483 0zM22.21 2.21a1.374 1.374 0 00-1.945 0L18.32 4.155l1.945 1.945.41-.41a1.378 1.378 0 10-1.948-1.948l-.41.41L13.79 0a1.374 1.374 0 00-1.945 0L0 11.845a1.374 1.374 0 000 1.945l11.845 11.845a1.374 1.374 0 001.945 0L24.155 13.79a1.374 1.374 0 000-1.945l-1.945-1.945a1.374 1.374 0 000-1.945l1.945-1.945a1.374 1.374 0 000-1.945zM12.87 23.13L1.72 11.98 11.98 1.72l11.15 11.15-11.15 11.15zM12.87 21.06l8.19-8.19-8.19-8.19-8.19 8.19 8.19 8.19zM10.8 11.98h4.14v2.07H10.8v-2.07z"
              />
            </svg>
          </a>
          <a
            :href="`mailto:${profile.email || 'anubhav270803@gmail.com'}`"
            class="footer-social-btn"
            title="Email"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path
                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2v.51l-8 6.22-8-6.22V6zM4 18V9.04l7.39 5.74c.18.14.4.21.61.21s.43-.07.61-.21L20 9.03v8.96H4Z"
              />
            </svg>
          </a>
          <!-- Custom Hidden Admin Entry -->
          <a href="/admin" class="admin-btn-custom" title="Dashboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke-width="1.5"
              ></path>
              <path d="M8 12H16" stroke-width="1.5"></path>
              <path d="M12 16V8" stroke-width="1.5"></path>
            </svg>
          </a>
        </div>
        <button
          @click="scrollTop"
          class="btn btn-ghost btn-icon"
          title="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
// ─── API SERVICES ─────────────────────────────────────────────────────────────
import {
  getProfile,
  getExperience,
  getEducation,
  getCertifications,
  getContributions,
  getSkills,
  getProjects,
} from "../services/api.js";

// ─── State ─────────────────────────────────────────────────────────────────────
// ─── NAVIGATION LINKS ────────────────────────────────────────────────────────
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Journey", href: "#journey" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

// ─── UI & ACCESSIBILITY STATE ────────────────────────────────────────────────
const isScrolled = ref(false);
const mobileOpen = ref(false);
const activeSection = ref("home");

// ─── PORTFOLIO DATA STATE ────────────────────────────────────────────────────
const profile = ref({});
const experience = ref([]);
const education = ref([]);
const certifications = ref([]);
const contributions = ref([]);
const projects = ref([]);
const skills = ref([]);

// ─── LOADING INDICATORS ──────────────────────────────────────────────────────
const loadingExperience = ref(true);
const loadingEducation = ref(true);
const loadingCerts = ref(true);
const loadingContribs = ref(true);
const loadingSkills = ref(true);
const loadingProjects = ref(true);

// ─── SCROLL HANDLERS ─────────────────────────────────────────────────────────
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};
const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// ─── Data Fetching ─────────────────────────────────────────────────────────
const fetchAll = async () => {
  try {
    profile.value = (await getProfile()).data;
  } catch {}
  try {
    experience.value = (await getExperience()).data;
  } catch {
  } finally {
    loadingExperience.value = false;
  }
  try {
    education.value = (await getEducation()).data;
  } catch {
  } finally {
    loadingEducation.value = false;
  }
  try {
    certifications.value = (await getCertifications()).data;
  } catch {
  } finally {
    loadingCerts.value = false;
  }
  try {
    contributions.value = (await getContributions()).data;
  } catch {
  } finally {
    loadingContribs.value = false;
  }
  try {
    skills.value = (await getSkills()).data;
  } catch {
  } finally {
    loadingSkills.value = false;
  }
  try {
    projects.value = (await getProjects()).data;
  } catch {
  } finally {
    loadingProjects.value = false;
  }
};

const getIconUrl = (index) => {
  return new URL(`../assets/icons/icon${index}.png`, import.meta.url).href;
};

const toolAttributes = [
  { name: "Icon 1", src: getIconUrl(1), color: "#00d8ff" }, // Cyan
  { name: "Icon 2", src: getIconUrl(2), color: "#42b883" }, // Vue Green
  { name: "Icon 3", src: getIconUrl(3), color: "#3178c6" }, // TS Blue
  { name: "Icon 4", src: getIconUrl(4), color: "#f7df1e" }, // JS Yellow
  { name: "Icon 5", src: getIconUrl(5), color: "#38bdf8" }, // Tailwind Blue
  { name: "Icon 6", src: getIconUrl(6), color: "#e34f26" }, // HTML Orange
  { name: "Icon 7", src: getIconUrl(7), color: "#264de4" }, // CSS Blue
  { name: "Icon 8", src: getIconUrl(8), color: "#f05032" }, // Git Orange
  { name: "Icon 9", src: getIconUrl(9), color: "#339933" }, // Node Green
  { name: "Icon 10", src: getIconUrl(10), color: "#47a248" }, // MongoDB Green
  { name: "Icon 11", src: getIconUrl(11), color: "#3776ab" }, // Python Blue
  { name: "Icon 12", src: getIconUrl(12), color: "#007396" }, // Java Blue
  { name: "Icon 13", src: getIconUrl(13), color: "#61dafb" }, // React Blue
  { name: "Icon 14", src: getIconUrl(14), color: "#ff3e00" }, // Svelte Orange
  { name: "Icon 15", src: getIconUrl(15), color: "#007acc" }, // VSCode Blue
  { name: "Icon 16", src: getIconUrl(16), color: "#cc6699" }, // Sass Pink
];

// ─── Animated Quote Logic ──────────────────────────────────────────────────
const quoteText =
  "Leadership is not about being in charge. It is about taking care of those in your charge.";
const displayedQuote = ref("");
const isWriting = ref(false);
const quoteDone = ref(false);
const quoteSection = ref(null);

const startTyping = () => {
  if (isWriting.value || quoteDone.value) return;
  isWriting.value = true;
  let i = 0;
  const interval = setInterval(() => {
    displayedQuote.value += quoteText[i];
    i++;
    if (i >= quoteText.length) {
      clearInterval(interval);
      isWriting.value = false;
      quoteDone.value = true;
    }
  }, 50); // Speed of writing
};

const initObservers = () => {
  // Observer for the quote section
  const quoteObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        startTyping();
        quoteObserver.disconnect();
      }
    },
    { threshold: 0.5 },
  );
  if (quoteSection.value) quoteObserver.observe(quoteSection.value);

  // General Scroll Reveal Observer
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
  });

  // Nav Active Section Observer
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.6 },
  );

  document.querySelectorAll("section[id]").forEach((section) => {
    navObserver.observe(section);
  });
};

onMounted(async () => {
  window.addEventListener("scroll", handleScroll);
  await fetchAll();

  nextTick(() => {
    initObservers();
  });
});
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
/* ─── ANIMATIONS & UTILITIES ────────────────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}
.reveal.reveal-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* Staggered Delay Utilities */
.reveal-delay-1 {
  transition-delay: 0.1s;
}
.reveal-delay-2 {
  transition-delay: 0.2s;
}
.reveal-delay-3 {
  transition-delay: 0.3s;
}
.reveal-delay-4 {
  transition-delay: 0.4s;
}

/* ─── LAYOUT BASE ───────────────────────────────────────────────────────────── */
.page-wrap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

/* Header */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1.5rem 0;
}
.site-header.scrolled {
  background: rgba(255, 255, 255, 0.7); /* Frosted on white hero */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 1rem 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}

/* For navy background transitions */
.hero-bg-bottom ~ header.site-header.scrolled {
  background: rgba(10, 25, 47, 0.75);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6; /* Primary Blue */
  font-family: "Poppins", sans-serif;
}
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.nav-link {
  position: relative;
  font-weight: 700;
  color: #2563eb;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
}
.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #3b82f6;
  transition: width 0.3s ease;
  border-radius: 2px;
}
.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
.nav-link:hover {
  color: #1d4ed8;
  transform: translateY(-1px);
}
.nav-admin {
  font-size: 0.82rem !important;
}
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--foreground);
  border-radius: 2px;
}
.mobile-nav {
  display: flex;
  flex-direction: column;
  background: var(--card);
  border-top: 1px solid var(--border);
  padding: 1rem 1.5rem;
  gap: 0.75rem;
}
.mobile-link {
  font-weight: 500;
  color: var(--muted-fg);
  padding: 0.4rem 0;
}
.mobile-link:hover {
  color: var(--primary);
}

/* ─── HERO SECTION ───────────────────────────────────────────────────────────── */
.hero-section {
  position: relative;
  height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.hero-bg-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60%;
  background-color: #ffffff;
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
  background-size: 50px 50px;
}
.hero-bg-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background-color: #0a192f;
  background-image:
    linear-gradient(to right, rgba(59, 130, 246, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.06) 1px, transparent 1px);
  background-size: 50px 50px;
}
.hero-content {
  position: relative;
  z-index: 10;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 2.5rem;
}
.hero-title-wrap {
  text-align: center;
  margin-bottom: 2rem;
}
.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #0a192f;
  line-height: 1.2;
}
.name-dark {
  color: #0a192f;
}
.name-blue {
  color: #3b82f6;
}
.hero-subtitle {
  font-size: 1.1rem;
  font-weight: 500;
  color: #3b82f6;
  margin-top: 0.5rem;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1100px; /* Wider content */
  margin: 0 auto;
  width: 100%;
}
.hero-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.photo-section {
  position: relative;
  width: 380px; /* Reverted to 360px ring size + buffer */
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  transform: translateY(calc(10vh - 190px)); /* Reverted position */
}
/* Background dots */
.bg-dots {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.dot-item {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ffffff; /* White dots */
  filter: blur(4px);
  opacity: 0.3;
  animation: pulse 4s infinite alternate;
}
@keyframes pulse {
  from {
    opacity: 0.15;
    transform: scale(0.8);
  }
  to {
    opacity: 0.35;
    transform: scale(1.2);
  }
}
.dot-1 {
  bottom: 80px; /* Shifted upward as décor */
  left: 35%;
}
.dot-2 {
  bottom: 70px;
  left: 50%;
}
.dot-3 {
  bottom: 80px;
  right: 35%;
}

.photo-ring {
  position: relative;
  width: 360px; /* Reverted size */
  height: 360px;
  border-radius: 50%;
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
  z-index: 2;
  /* multiply removes white background from the image itself */
  mix-blend-mode: multiply;
}

/* Premium green glow shadow — dots float inside the halo */
.photo-ring::after {
  content: "";
  position: absolute;
  bottom: 40px; /* Shifted upward into the navy section */
  left: 50%;
  transform: translateX(-50%);
  width: 88%;
  height: 55px;
  background: radial-gradient(
    ellipse at center,
    rgba(59, 130, 246, 0.55) 0%,
    rgba(59, 130, 246, 0.25) 45%,
    rgba(59, 130, 246, 0) 100%
  );
  border-radius: 50%;
  filter: blur(10px);
  z-index: 1;
  animation: shadowPulse 3s ease-in-out infinite alternate;
}

@keyframes shadowPulse {
  from {
    opacity: 0.7;
    transform: translateX(-50%) scaleX(0.9);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scaleX(1.08);
  }
}
.photo-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
.profile-img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Shows full character circle */
  object-position: center;
}
.social-row {
  display: flex;
  justify-content: space-between;
  width: 420px; /* Increased from 380px to accommodate 4 icons comfortably */
  margin-top: -9.5rem; /* Shifting icons significantly upward into the blue section */
  height: 90px;
  align-items: flex-end;
  z-index: 5;
}

/* Light Buttons */
.light-btn-wrap {
  text-decoration: none;
}

.light-button button.bt {
  position: relative;
  height: 120px;
  display: flex;
  align-items: flex-end;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

/* Shared base — dark card */
.light-button button.bt .button-holder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  background-color: #111827; /* dark navy base */
  border-radius: 8px;
  font-weight: 700;
  transition: all 300ms ease;
}

.light-button button.bt .button-holder svg {
  height: 30px;
  width: 30px;
  transition: all 300ms ease;
}

.light-button button.bt .button-holder p {
  display: none;
}

/* GitHub default */
.light-button button.bt.github .button-holder {
  outline: rgba(101, 101, 121, 0.5) 2px solid;
  outline-offset: 3px;
}
.light-button button.bt.github .button-holder svg {
  fill: rgba(101, 101, 121, 0.85);
}

/* LinkedIn default */
.light-button button.bt.linkedin .button-holder {
  outline: rgba(0, 119, 181, 0.5) 2px solid;
  outline-offset: 3px;
}
.light-button button.bt.linkedin .button-holder svg {
  fill: rgba(0, 119, 181, 0.85);
}

/* Email default */
.light-button button.bt.email .button-holder {
  outline: rgba(239, 68, 68, 0.5) 2px solid;
  outline-offset: 3px;
}
.light-button button.bt.email .button-holder svg {
  fill: rgba(239, 68, 68, 0.85);
}

/* LeetCode default */
.light-button button.bt.leetcode .button-holder {
  outline: rgba(255, 161, 22, 0.5) 2px solid;
  outline-offset: 3px;
}
.light-button button.bt.leetcode .button-holder svg {
  fill: rgba(255, 161, 22, 0.85);
}

.light-button button.bt .light-holder {
  position: absolute;
  height: 120px;
  width: 80px;
  left: 50%;
  transform: translateX(-50%); /* Center beam over the button */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.light-button button.bt .light-holder .dot {
  position: absolute;
  top: 0;
  width: 8px;
  height: 8px;
  background-color: #1f2937;
  border-radius: 50%;
  z-index: 2;
}

.light-button button.bt .light-holder .light {
  position: absolute;
  top: 0;
  width: 120px;
  height: 80px;
  clip-path: polygon(50% 0%, 25% 100%, 75% 100%);
  background: transparent;
  transition: 400ms;
}

/* GitHub */
.light-button button.bt.github:hover .button-holder svg {
  fill: rgba(101, 101, 121, 1);
}
.light-button button.bt.github:hover .button-holder {
  color: rgba(101, 101, 121, 1);
  outline: rgba(101, 101, 121, 1) 2px solid;
  outline-offset: 2px;
}
.light-button button.bt.github:hover .light-holder .light {
  background: linear-gradient(
    180deg,
    rgba(101, 101, 121, 1) 0%,
    rgba(255, 255, 255, 0) 75%
  );
}

/* LinkedIn */
.light-button button.bt.linkedin:hover .button-holder svg {
  fill: rgba(0, 119, 181, 1);
}
.light-button button.bt.linkedin:hover .button-holder {
  color: rgba(0, 119, 181, 1);
  outline: rgba(0, 119, 181, 1) 2px solid;
  outline-offset: 2px;
}
.light-button button.bt.linkedin:hover .light-holder .light {
  background: linear-gradient(
    180deg,
    rgba(0, 119, 181, 1) 0%,
    rgba(255, 255, 255, 0) 75%
  );
}

/* Email */
.light-button button.bt.email:hover .button-holder svg {
  fill: #ef4444;
  stroke: #ef4444;
}
.light-button button.bt.email:hover .button-holder {
  color: #ef4444;
  outline: #ef4444 2px solid;
  outline-offset: 2px;
}
.light-button button.bt.email:hover .light-holder .light {
  background: linear-gradient(
    180deg,
    rgba(239, 68, 68, 1) 0%,
    rgba(255, 255, 255, 0) 75%
  );
}

/* LeetCode */
.light-button button.bt.leetcode:hover .button-holder svg {
  fill: #ffa116;
}
.light-button button.bt.leetcode:hover .button-holder {
  color: #ffa116;
  outline: #ffa116 2px solid;
  outline-offset: 2px;
}
.light-button button.bt.leetcode:hover .light-holder .light {
  background: linear-gradient(
    180deg,
    rgba(255, 161, 22, 1) 0%,
    rgba(255, 255, 255, 0) 75%
  );
}

.hero-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  margin-top: calc(
    10vh - 6.6rem
  ); /* Aligned for 3 lines in White, 2 lines in Navy */
  z-index: 10;
}
.about-block {
  position: relative;
  width: 100%;
  max-width: 630px;
  margin-bottom: 1.5rem;
}

/* Zoom-proof bio text coloring */
.text-on-white {
  color: #4a5568; /* Gray on white background */
}
.text-on-navy {
  color: #ffffff; /* White on navy background */
  font-weight: 600;
}

.about-text {
  font-size: 1.1rem;
  line-height: 2;
  font-weight: 450;
  margin-top: 8px; /* Fine-tuned alignment */
}
.hero-btns {
  display: flex;
  gap: 2rem; /* Increased for impact */
  margin-top: 1.5rem;
}
.btn {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.btn:active {
  transform: scale(0.96); /* Premium click feedback */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2) !important;
}
.btn-lg {
  padding: 0.8rem 2.2rem;
  font-size: 0.95rem;
}
.hero-btns .btn-primary,
.proj-links .btn-primary {
  position: relative;
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
  color: #ffffff !important;
  border: none;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3); /* Slightly more elegant shadow */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden; /* For shimmer */
}
.hero-btns .btn-primary:hover::before,
.proj-links .btn-primary:hover::before {
  animation: sweep 1.5s infinite;
}

@keyframes sweep {
  0% {
    left: -150%;
  }
  100% {
    left: 150%;
  }
}

/* Unified Hover State for Primary Buttons */
.hero-btns .btn-primary:hover,
.proj-links .btn-primary:hover {
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.5);
  transform: translateY(-3px) scale(1.02);
}

.hero-btns .btn-outline,
.proj-links .btn-outline {
  border-color: rgba(59, 130, 246, 0.6);
  color: #3b82f6;
  background: transparent;
  transition: all 0.3s ease;
}
.hero-btns .btn-outline:hover,
.proj-links .btn-outline:hover {
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  transform: translateY(-2px);
}

/* ─── JOURNEY SECTION ────────────────────────────────────────────────────────── */
.section {
  padding: 4rem 0;
}
.bg-alt {
  background-color: rgba(59, 130, 246, 0.03);
  background-image:
    linear-gradient(to right, rgba(59, 130, 246, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.06) 1px, transparent 1px);
  background-size: 50px 50px;
}
.bg-white {
  background-color: #ffffff;
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
  background-size: 50px 50px;
}
@keyframes routeFlow {
  0% {
    background-position: 0% -100%;
  }
  100% {
    background-position: 0% 100%;
  }
}
.journey-stack {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  margin-top: 3.5rem;
  padding-left: 1.5rem;
}
/* The Vertical "Route" Line - Now Animated */
.journey-stack::before {
  content: "";
  position: absolute;
  left: 43px; /* Centers under the 38px icons: 24px(pad) + 19px(center) */
  top: 10px;
  bottom: 50px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(59, 130, 246, 0.1) 0%,
    rgba(59, 130, 246, 0.8) 25%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(59, 130, 246, 0.8) 75%,
    rgba(59, 130, 246, 0.1) 100%
  );
  background-size: 100% 200%;
  animation: routeFlow 8s linear infinite;
  z-index: 0;
}
.journey-segment {
  position: relative;
  width: 100%;
}
.journey-card-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(320px, 1fr)
  ); /* Balanced width for 3-column layout on desktop */
  gap: 1.5rem;
}
/* Education card with bottom-pinned date footer */
.edu-card {
  display: flex;
  flex-direction: column;
  min-height: 160px; /* Slightly taller */
  padding: 1.5rem !important; /* More padding for air */
}

/* Score badge — top-right, replacing date */
.jcard-score-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
  font-size: 0.8rem;
  font-weight: 700;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

/* Date footer — bottom-left gray pill badge */
.jcard-date-footer {
  margin-top: auto;
  padding-top: 0.75rem;
  display: inline-flex;
  align-self: flex-start;
}

.jcard-date-footer span,
.jcard-date-footer {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  background: rgba(136, 146, 176, 0.12);
  color: var(--muted-fg);
  font-size: 0.78rem;
  font-weight: 600;
  border: 1px solid rgba(136, 146, 176, 0.25);
  letter-spacing: 0.02em;
}
/* Scroll Reveal Animations */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}
.reveal.reveal-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* Staggered Delay Utilities */
.reveal-delay-1 {
  transition-delay: 0.1s;
}
.reveal-delay-2 {
  transition-delay: 0.2s;
}
.reveal-delay-3 {
  transition-delay: 0.3s;
}
.reveal-delay-4 {
  transition-delay: 0.4s;
}

.cert-card-enhanced {
  display: flex !important;
  flex-direction: column;
  padding: 0 !important;
  overflow: hidden;
}
.cert-card-enhanced .jcard-top {
  padding: 1.25rem;
  margin-bottom: 0;
}
.cert-img-wrap {
  width: 100%;
  height: 160px;
  overflow: hidden;
  background: rgba(17, 34, 64, 0.8);
}
.cert-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.cert-card-enhanced:hover .cert-img-wrap img {
  transform: scale(1.05);
}

/* Leadership Card - Insta Style */
.leadership-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.leadership-top {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}
.leadership-logo-wrap {
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}
.leadership-logo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--primary);
  padding: 2px;
  background: #fff;
}
.insta-badge {
  position: absolute;
  bottom: -2px;
  right: -2px;
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  color: white;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #112240;
}
.leadership-title-group {
  flex-grow: 1;
}
.leadership-footer {
  margin-top: auto;
  padding-top: 0.5rem;
}
.btn-insta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  color: white;
  padding: 0.6rem 1.25rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  transition: opacity 0.2s;
}
.btn-insta:hover {
  opacity: 0.9;
}
.journey-col h3,
.col-title {
  font-size: 1.7rem; /* Significantly larger */
  font-weight: 800;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  color: #e6f1ff;
  letter-spacing: -0.02em;
}
.title-icon {
  width: 38px !important;
  height: 38px !important;
  padding: 8px;
  border-radius: 50%;
  background: #0a192f;
  border: 2px solid var(--primary);
  color: var(--primary);
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
  z-index: 2;
  flex-shrink: 0;
}
.journey-segment .card-list,
.journey-segment .journey-card-grid {
  padding-left: 3.5rem; /* Indent cards to align with the start of the title text (post-icon) */
}
.card-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.journey-card {
  padding: 1.25rem;
  border-radius: 0.75rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}
.journey-card:hover {
  border-color: rgba(59, 130, 246, 0.5) !important;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.1);
}
.jcard-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}
.jcard-name {
  font-weight: 800; /* Bolder */
  font-size: 1.1rem; /* Slightly larger */
  letter-spacing: -0.01em;
}
.jcard-sub {
  color: var(--primary);
  font-size: 0.88rem;
  margin-top: 0.5rem; /* Increased gap from name */
  font-weight: 500;
}
.jcard-year {
  font-size: 0.75rem;
  background: rgba(59, 130, 246, 0.15);
  color: var(--primary);
  padding: 0.2rem 0.55rem;
  border-radius: 1rem;
  white-space: nowrap;
  flex-shrink: 0;
  margin-left: 0.5rem;
}
.jcard-desc {
  font-size: 0.88rem;
  color: var(--muted-fg);
  line-height: 1.6;
  margin-top: 1rem; /* Added gap from sub-header */
}
.contrib-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}
.mt-2 {
  margin-top: 1rem;
}
.empty-state {
  color: var(--muted-fg);
  font-size: 0.88rem;
  font-style: italic;
}
.loading {
  color: var(--muted-fg);
  font-size: 0.88rem;
}

/* Quote Section */
.quote-section-wrap {
  margin-top: 4rem;
  padding: 3rem 2rem;
  text-align: center;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: transparent;
  border: none;
}

.quote-content {
  position: relative;
  display: inline-block;
  max-width: 800px;
}

.quote-text {
  font-size: 1.8rem;
  font-family: "Caveat", cursive;
  font-weight: 500;
  line-height: 1.4;
  color: #ccd6f6;
}

.pencil-cursor {
  display: inline-block;
  width: 32px;
  height: 32px;
  color: #3b82f6; /* Blue color */
  margin-left: 2px;
  animation: pencil-writing-refined 0.15s infinite alternate;
  vertical-align: sub; /* Sit at the bottom of the text line */
  filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.5));
  transform-origin: bottom right; /* Pivots from the writing tip */
}
.pencil-cursor svg {
  width: 100%;
  height: 100%;
  display: block;
}

@keyframes pencil-writing-refined {
  0% {
    transform: rotate(0deg) translate(0, 0);
  }
  100% {
    transform: rotate(-15deg) translate(-5px, -3px); /* Subtle scribing lift */
  }
}

.quote-author {
  margin-top: 1.5rem;
  font-size: 1rem;
  color: var(--primary);
  font-weight: 600;
  opacity: 0;
}

.fade-in {
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ─── SKILLS SECTION ─────────────────────────────────────────────────────────── */
.skills-carousel-container {
  width: 100%;
  overflow: hidden;
  padding: 3rem 0;
  position: relative;
  margin-bottom: 2rem;
}

.carousel-inner {
  display: flex;
  width: max-content;
  animation: scroll 30s linear infinite;
  gap: 2rem;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.carousel-inner:hover {
  animation-play-state: paused;
}

.carousel-card {
  width: 115px;
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03); /* Subtle glass */
  border: 1px solid rgba(17, 34, 64, 0.15);
  border-radius: 1.5rem;
  padding: 1.75rem;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  backdrop-filter: blur(4px);
}

.carousel-card:hover {
  transform: translateY(-15px) scale(1.1);
  background: white;
  border-color: var(--color-card);
  box-shadow:
    0 0 20px -10px var(--color-card),
    0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.skill-icon {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: all 0.5s ease;
  z-index: 2;
  filter: grayscale(0.2) opacity(0.85); /* Slightly muted when not hovered */
}

.carousel-card:hover .skill-icon {
  filter: drop-shadow(0 0 20px var(--color-card)) saturate(1.8) opacity(1);
  transform: scale(1.2);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  max-width: 1000px;
  margin: 0 auto;
}
.skill-card {
  background: #112240;
  border: 1px solid #233554;
  border-radius: 1rem;
  padding: 1.5rem;
  transition:
    border-color 0.2s,
    transform 0.2s;
}
.skill-card:hover {
  border-color: var(--primary);
  transform: translateY(-4px);
}
.skill-cat-title {
  font-weight: 700;
  font-size: 1rem;
  color: #e6f1ff;
  margin-bottom: 0.75rem;
}
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

/* ─── PROJECTS SECTION ───────────────────────────────────────────────────────── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1.25rem;
  overflow: hidden;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  perspective: 1000px;
}
.project-card:hover {
  transform: translateY(-8px) rotateX(2deg) rotateY(-2deg);
  border-color: rgba(59, 130, 246, 0.5) !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}
.project-card:hover .proj-img {
  transform: scale(1.08) translateZ(20px);
}
.proj-img-wrap {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: rgba(17, 34, 64, 0.8);
}
.proj-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.4s;
}
.project-card:hover .proj-img {
  transform: scale(1.04);
}
.proj-body {
  padding: 1.25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.proj-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.proj-desc {
  font-size: 0.83rem;
  color: var(--muted-fg);
  line-height: 1.55;
  flex-grow: 1;
  margin-bottom: 0.75rem;
}
.proj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1rem;
}
.proj-links {
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
}

/* ─── FOOTER SECTION ─────────────────────────────────────────────────────────── */
.site-footer-bottom {
  background: #020c1b;
  border-top: 1px solid #112240;
  padding: 1.5rem 0;
}

.admin-btn-custom {
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
}

.admin-btn-custom:hover {
  transform: rotate(90deg) scale(1.1);
  opacity: 1;
}

.admin-btn-custom svg {
  stroke: #8892b0; /* zinc-400 equivalent */
  fill: none;
  transition: all 0.3s ease;
}

.admin-btn-custom:hover svg {
  stroke: var(--primary);
  fill: rgba(59, 130, 246, 0.1);
}

.admin-btn-custom:active svg {
  stroke: #ffffff;
  fill: var(--primary);
  transition-duration: 0ms;
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer-copy {
  font-size: 0.82rem;
  color: #8892b0;
}
.footer-name {
  color: var(--primary);
}
.footer-socials {
  display: flex;
  gap: 0.5rem;
}
.footer-social-btn {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted-fg);
  border-radius: 0.35rem;
  transition:
    color 0.2s,
    background 0.2s;
}
.footer-social-btn:hover {
  color: var(--primary);
  background: rgba(59, 130, 246, 0.1);
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  .burger {
    display: flex;
  }
  .hero-section {
    height: auto;
    min-height: 100vh;
    padding-bottom: 4rem;
  }
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .hero-left {
    margin-bottom: 2rem;
    order: 1;
  }
  .photo-section {
    width: 280px;
    height: 280px;
    transform: none;
    margin-top: 2rem;
  }
  .photo-ring {
    width: 260px;
    height: 260px;
  }
  .social-row {
    width: 100%;
    max-width: 320px;
    margin-top: 1rem;
    justify-content: center;
    gap: 1rem;
    height: auto;
    align-items: center;
  }
  .light-button button.bt {
    height: 80px;
  }
  .light-button button.bt .button-holder {
    width: 50px;
    height: 50px;
  }
  .light-button button.bt .light-holder {
    height: 80px;
  }
  .hero-right {
    margin-top: 0;
    align-items: center;
    text-align: center;
    padding-left: 0;
    order: 2;
  }
  .about-block {
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
  .about-text {
    font-size: 1rem;
    line-height: 1.6;
  }
  .hero-btns {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    padding: 0 2rem;
  }
  .btn-lg {
    width: 100%;
  }
  .journey-grid {
    grid-template-columns: 1fr;
  }
  /* Journey Responsive Adjustments */
  .journey-stack {
    padding-left: 0rem;
    gap: 3rem;
  }
  .journey-stack::before {
    left: 23px;
  }
  .journey-segment .card-list,
  .journey-segment .journey-card-grid {
    padding-left: 2.5rem;
    grid-template-columns: 1fr;
  }
  .col-title {
    font-size: 1.3rem;
    gap: 0.75rem;
  }
  .edu-card,
  .journey-card {
    padding: 1rem !important;
  }
  .jcard-name {
    font-size: 1rem;
  }
  .jcard-desc {
    font-size: 0.85rem;
  }
  .cert-img-wrap {
    height: 140px;
  }
  /* Projects Responsive Adjustments */
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 0 1rem;
  }
  .project-card {
    transform: none !important;
    perspective: none !important;
  }
  .project-card:hover {
    transform: translateY(-5px) !important;
  }
  .proj-body {
    padding: 1rem;
  }
  .proj-title {
    font-size: 1rem;
  }
  .proj-desc {
    font-size: 0.8rem;
    line-height: 1.5;
  }
  .proj-img-wrap {
    aspect-ratio: 16/10;
  }
}
</style>
