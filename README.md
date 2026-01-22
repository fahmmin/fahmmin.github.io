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
- `lib/posts.ts`: Blog post definitions.
- `public/`: Static assets (images, fonts, PDFs).

## 🎨 Customization

To personalize this portfolio:

1.  **Update Data**: Modify `lib/data.ts` to update your general info, social links, projects, and experience/timeline.
2.  **Update Resume**: Replace `public/Fahmin_Resume.pdf` with your own resume file.
3.  **Styles**: Tweak `app/globals.css` or Tailwind config for color scheme changes.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
