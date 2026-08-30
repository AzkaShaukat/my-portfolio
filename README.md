# Azka Shaukat - Portfolio

> **Live Demo:** [https://my-portfolio-rho-snowy-69.vercel.app/](https://my-portfolio-rho-snowy-69.vercel.app/)

Welcome to the source code of my personal portfolio website. I am an **AI/ML Engineer and Full-Stack Developer** passionate about bridging the gap between raw data algorithms and production-ready applications. 

## 🛠 Tech Stack

This portfolio is built with modern, scalable web technologies to ensure optimal performance, accessibility, and SEO.

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [Lenis](https://lenis.studiofreight.com/) (Smooth Scrolling)
- **Email Service:** [Nodemailer](https://nodemailer.com/) (Server Actions)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Key Features

- **Next.js Server Actions:** Secure, server-side processing for the contact form directly interacting with SMTP without exposing credentials.
- **Dynamic Theming:** Built-in Light/Dark mode switcher with system preference detection.
- **Fully Responsive:** Carefully tailored layout for mobile, tablet, and desktop viewports.
- **SEO Optimized:** Metadata, Open Graph tags, and valid HTML markup out of the box.

## 💻 Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/AzkaShaukat/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your SMTP email credentials if you wish to test the contact form locally:
   ```env
   NODEMAILER_HOST=smtp.gmail.com
   NODEMAILER_PORT=465
   NODEMAILER_USER=your.email@gmail.com
   NODEMAILER_PASS=your-16-letter-app-password
   USER_TO=your.email@gmail.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📫 Get In Touch

- **LinkedIn:** [Azka Shaukat](https://www.linkedin.com/in/azka-shaukat/)
- **Email:** azkashaukat786@gmail.com

---

*Designed and engineered by Azka Shaukat.*
