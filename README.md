# ProGenHub Innovation

A website for **ProGenHub Innovation**, a Nigerian non-profit organisation that rewards schools and students for exceptional academic performance and special talents. The platform enables donations, volunteer sign-ups, event tracking, and public awareness of the organisation's work.

---

## Live Demo

[View Live →](Ongoing)

---

## About ProGenHub

ProGenHub Innovation is an education-focused non-profit that identifies and celebrates high-performing schools and students across Nigeria. Through awards, scholarships, funding, and public outreach, the organisation creates visibility for academic excellence and drives communities to invest in education.

---

## Features

- **Landing page** — hero section with mission statement, stats, and call-to-action
- **About page** — mission, vision, team profiles, awards history, and supporters
- **Services page** — educational support, awards, scholarships, and funding programmes
- **Projects page** — showcasing completed and ongoing initiatives
- **Donate page** — NGN donation form with preset amounts, custom input, one-time and monthly options
- **Events page** — upcoming and past events listings
- **Media page** — photo and video gallery
- **Quiz page** — interactive quiz component
- **Sign in / Sign up** — user authentication pages
- **Volunteer dialog** — modal form for volunteer sign-ups
- **Contact page** — contact form, map, and location details
- **Newsletter subscription** — email capture in the footer
- **Fully responsive** — mobile-first design across all pages

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) |
| Charts | [Recharts](https://recharts.org/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Font | [Roboto](https://fonts.google.com/specimen/Roboto) via next/font |
| Deployment | [Vercel](https://vercel.com/) |

---

## Project Structure

```
progen-main/
├── public/
│   └── images/              # All site images
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Home page
│   │   ├── layout.tsx       # Root layout (header, footer, font)
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── donate/          # Donate page + /donate/now
│   │   ├── events/          # Events page
│   │   ├── media/           # Media gallery page
│   │   ├── projects/        # Projects page
│   │   ├── quiz/            # Quiz page
│   │   ├── services/        # Services page
│   │   ├── signin/          # Sign in page
│   │   └── signup/          # Sign up page
│   ├── components/
│   │   ├── ui/              # shadcn/ui base components
│   │   ├── about/           # About page components
│   │   ├── contact/         # Contact page components
│   │   ├── donate/          # Donate page components
│   │   ├── events/          # Events page components
│   │   ├── media/           # Media page components
│   │   ├── projects/        # Projects page components
│   │   ├── quiz/            # Quiz component
│   │   ├── services/        # Services page components
│   │   ├── header.tsx       # Global navigation header
│   │   ├── footer.tsx       # Global footer with newsletter
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── services-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── donation-stats.tsx
│   │   ├── contribution-section.tsx
│   │   ├── signin-form.tsx
│   │   ├── signup-form.tsx
│   │   └── volunteer-dialog.tsx
│   └── lib/
│       └── utils.ts
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://npmjs.com/) or [pnpm](https://pnpm.io/)

### 1. Clone the repository

```bash
git clone https://github.com/TundeAwogbami/progen.git
cd progen
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment

This project deploys to [Vercel](https://vercel.com/) with zero configuration:

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com/) → "Add New Project"
3. Import the `progen` repository
4. Click **Deploy** — Vercel auto-detects Next.js

No environment variables are required for the current version.

---

## Roadmap

- [ ] Connect donate form to a payment gateway (Paystack or Flutterwave)
- [ ] Connect contact form to an email service (Resend or Nodemailer)
- [ ] Add authentication with Supabase or NextAuth
- [ ] Build out the Media gallery with real images and videos
- [ ] Add a CMS (Sanity or Contentlayer) for blog and events content
- [ ] Replace Lorem Ipsum placeholder text with real content

---

## Author

**Tunde Awogbami** — Freelance Web Developer, Lagos, Nigeria

- [GitHub](https://github.com/TundeAwogbami)
- [LinkedIn](https://linkedin.com/in/tundeawogbami)

---

## License

Built for ProGenHub Innovation. All rights reserved.