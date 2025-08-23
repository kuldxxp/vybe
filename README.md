# Vybe — AI Website & App Builder

> Generate full‑stack web apps from a single prompt.  
> **Stack:** Next.js 15 • React • TypeScript • Tailwind CSS • Inngest (workflows) • Prisma • PostgreSQL • (optional) Auth • (optional) E2B/Docker sandbox

<p align="center">
  <img src="./public/og.png" alt="Vybe preview" width="720"/>
</p>

[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-20232a.svg?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748.svg?logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-4169E1.svg?logo=postgresql)](https://www.postgresql.org/)
[![Inngest](https://img.shields.io/badge/Inngest-Workflows-0b76e0.svg)](https://www.inngest.com/)

---

## ✨ Overview

**Vybe** is an AI‑assisted website/app builder inspired by lovable.dev. Provide a short product description and Vybe plans tasks, scaffolds a Next.js app, generates code, and serves a live preview. Long‑running and retryable steps are orchestrated with **Inngest**; data is stored with **Prisma + PostgreSQL**. Optionally, integrate an auth provider and a secure code execution sandbox.

> **Note:** This project is educational and not affiliated with lovable.dev.

---

## 🚀 Features

- **Prompt → App:** Turn a textual brief into a working Next.js project.
- **Agentic Workflows:** Inngest functions for planning, scaffolding, codegen, install, preview, deploy.
- **Live Preview & Iteration:** Inspect builds and refine prompts without leaving the browser.
- **Type‑safe Data:** Prisma schema & migrations for Projects, Builds, Artifacts, etc.
- **Pluggable AI Providers:** Bring your own keys for OpenAI / Anthropic / xAI (optional).
- **Optional Auth:** Add Clerk or NextAuth for users/teams.
- **Sandboxed Execution:** Run generated code in isolated environments (E2B or Docker) (optional).

---

## 🧱 Tech Stack

- **Frontend:** Next.js 15 (App Router), React, Tailwind CSS, TypeScript  
- **Backend:** Next.js Route Handlers (`app/api/*`), Inngest functions  
- **Data:** PostgreSQL, Prisma ORM  
- **Optional:** Auth (Clerk or NextAuth), E2B/Docker for code execution

---

## 🗂️ Project Structure

```
/app
  /api
    /inngest/route.ts         # Inngest serve endpoint
    /generate/route.ts        # Accepts prompt -> enqueues build
  /(dashboard)                # UI for projects/builds/editor
  layout.tsx
  page.tsx

/inngest
  client.ts                   # Inngest client
  functions/
    build.requested.ts        # Plan -> scaffold -> codegen -> install -> preview
    deploy.requested.ts       # Optional deploy pipeline
    cleanup.scheduled.ts      # Cron for retention

/prisma
  schema.prisma               # Project, Build, Artifact, User, etc.
  migrations/…

/src
  /components                 # UI primitives
  /lib                        # db, ai, sandbox, utils
  /server                     # server-only helpers

/public
  og.png                      # social preview image (optional)
```

---

## ⚡ Quickstart

### 1) Prerequisites
- Node.js **20+**
- **pnpm** (`npm i -g pnpm`)
- **PostgreSQL** (local Docker or hosted like Neon/Railway)
- (Optional) **Inngest CLI** for local workflow dev: `npx inngest-cli@latest`
- (Optional) API keys for model providers / auth / sandbox

### 2) Install
```bash
git clone <your-repo-url> vybe
cd vybe
pnpm install
```

### 3) Configure Environment
Create `.env` (use the example below and fill in secrets):

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Database (PostgreSQL)
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DB?schema=public

# Inngest (required for cloud; for local dev the CLI can sign requests)
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=

# AI providers (optional)
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
XAI_API_KEY=

# Auth (optional)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

### 4) Database
```bash
pnpm prisma generate
pnpm prisma migrate dev --name init
```

### 5) Run Dev Servers
**Next.js app:**
```bash
pnpm dev
```

**Inngest dev (separate terminal):**
```bash
npx inngest-cli@latest dev
```

Open **http://localhost:3000**

---

## 📜 License

MIT © kuldxxp
