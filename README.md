# Fahmin - Portfolio & Blog

A minimalist, high-performance personal portfolio and blog built with the latest web technologies. This project showcases my projects, experience, and writings with a focus on clean design, typography, and speed.

![Portfolio Preview](public/og.png)

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Bundler**: [Turbopack](https://nextjs.org/docs/architecture/turbopack)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: TypeScript
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode)
- **Deployment**: Vercel

## ✨ Features

- **Blog (Sanity CMS)**: Blog posts are managed in [Sanity](https://sanity.io). Run the studio to create posts; the site shows them on `/blog` and homepage “Recent Published”.
- **Dynamic Content**: Projects and Experience data managed centrally in `lib/data.ts` for easy updates.
- **Responsive Design**: Fully responsive layout optimized for mobile and desktop.
- **Dark Mode**: System-aware dark mode toggle.
- **Performance**: Static Generation (SSG) for lightning-fast page loads.
- **Typography**: Uses `Geist` and `Playfair Display` for a sophisticated reading experience.
- **Interactive Elements**: Micro-interactions, hover effects, and filtered views (e.g., Proof of Work).

## 🛠️ Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/fahmmin/fahmmin.github.io.git
    cd fahmmin.github.io
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    # or
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `app/components/`: Reusable UI components (Navbar, Projects, Experience, etc.).
- `lib/data.ts`: Centralized data source for projects, experience, and social links.
- `lib/sanity.ts`: Sanity client and GROQ queries for blog posts.
- `sanity/`: Sanity Studio (schemas: **post**, **category**). Run with `pnpm studio`.
- `public/`: Static assets (images, fonts, PDFs).

## 📝 Blog (Sanity CMS)

1. **Create a Sanity project** at [sanity.io/manage](https://sanity.io/manage) and copy your **Project ID**.
2. **Configure env**: Copy `.env.example` to `.env.local` and set:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>`
   - `NEXT_PUBLIC_SANITY_DATASET=production`
3. **Run the Studio** (to create and edit posts):
   ```bash
   pnpm studio
   ```
   Studio runs at [http://localhost:3333](http://localhost:3333). Create **Categories** and **Blog Post** documents; set a slug and publish.
4. **Site**: The blog list is at `/blog`; each post is at `/blog/[slug]`. “Recent Published” on the homepage shows the latest 3 posts.

Without a configured project ID, the blog and homepage show empty states and the app still builds and runs.

## 🎨 Customization

To personalize this portfolio:

1.  **Update Data**: Modify `lib/data.ts` to update your general info, social links, projects, and experience/timeline.
2.  **Update Resume**: Replace `public/Fahmin_Resume.pdf` with your own resume file.
3.  **Styles**: Tweak `app/globals.css` or Tailwind config for color scheme changes.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
