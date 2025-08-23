# Vybe — AI Website & App Builder

> Build production‑ready full‑stack apps from a single prompt.  
> **Stack:** Next.js 15 • React 19 • Tailwind CSS v4 • Inngest (agents/workflows) • Prisma • PostgreSQL • Clerk (Auth & Billing) • E2B (secure code sandbox)

<p align="center">
  <img src="./public/og.png" alt="Vybe preview" width="720"/>
</p>

[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232a.svg?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748.svg?logo=prisma)](https://www.prisma.io/)
[![Postgres](https://img.shields.io/badge/PostgreSQL-DB-4169E1.svg?logo=postgresql)](https://www.postgresql.org/)
[![Inngest](https://img.shields.io/badge/Inngest-Workflows-0b76e0.svg)](https://www.inngest.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth%20%26%20Billing-6C47FF.svg)](https://clerk.com/)
[![E2B](https://img.shields.io/badge/E2B-Code%20Sandbox-000.svg)](https://e2b.dev/)

---

## ✨ What Vybe Does

- **Prompt‑to‑App Generation** – Describe the product; Vybe plans tasks, scaffolds a Next.js project, and writes code.
- **Agentic Workflows with Inngest** – Reliable background jobs for codegen, dependency installs, previews, and deploys.
- **Live Preview & Visual Editing** – See builds in real time; iterate without leaving the browser.
- **Auth & Billing** – Sign‑in/up and subscriptions powered by Clerk (drop‑in UI; orgs/teams supported).
- **Database & ORM** – PostgreSQL + Prisma for models, migrations, and type‑safe queries.
- **Code Execution Sandbox** – Securely run AI‑generated code in isolated cloud sandboxes via E2B.
- **Multi‑Model Provider Support** – Bring your own keys for OpenAI, Anthropic, and xAI (Grok).
- **One‑Click Ship** – Export to Git or deploy to your host of choice (e.g., Vercel).

> **Note:** Vybe is an educational project inspired by lovable.dev. It is not affiliated with Lovable.

---

## 🧱 Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS v4
- **Backend**: Route Handlers (`app/api/*`), Inngest functions for long‑running/agent tasks
- **Data**: PostgreSQL (local, Docker, or Neon), Prisma ORM
- **Auth & Billing**: Clerk (users, orgs, subscriptions)
- **AI & Execution**: OpenAI / Anthropic / xAI (Grok) + E2B sandbox for safe code execution
- **Tooling**: TypeScript, ESLint, Prettier, pnpm

---

## 🗂️ Project Structure

