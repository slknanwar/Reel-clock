# NextJS Clock

A responsive clock web app built with Next.js, React, Radix UI, and Tailwind CSS.

## Features

- Animated digital clock display
- Responsive design for desktop and mobile
- Accessible UI components using Radix UI
- Firebase Hosting ready

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd <your-repo-directory>
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

   This will install all required dependencies, including:

   - `next`
   - `react`
   - `react-dom`
   - `tailwindcss`
   - `autoprefixer`
   - `postcss`
   - `typescript`
   - `@radix-ui/react-*` (UI primitives)
   - `lucide-react`
   - `class-variance-authority`
   - `clsx`
   - `react-hook-form`
   - `react-day-picker`
   - `recharts`
   - `tailwind-merge`
   - `@types/react`, `@types/node` (for TypeScript)

3. **Set up Tailwind CSS (if not already):**
   Tailwind is already configured via `tailwind.config.js` and `postcss.config.js`.

4. **Development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

5. **Build for production:**
   ```sh
   npm run build
   npm start
   ```

6. **Firebase Hosting (optional):**
   - Install Firebase CLI: `npm install -g firebase-tools`
   - Login: `firebase login`
   - Deploy: `firebase deploy`

## Project Structure

```
src/
  app/                # Next.js app directory
  components/         # React components (UI, clock, etc.)
  hooks/              # Custom React hooks
  lib/                # Utility functions
public/               # Static assets
firebase.json         # Firebase Hosting config
tailwind.config.js    # Tailwind CSS config
postcss.config.js     # PostCSS config
package.json          # Project dependencies and scripts
```

## Notes

- Make sure all local imports (e.g., `@/lib/utils`, `@/components/ui/button`) exist in your `src` directory.
- If you add new UI primitives from Radix UI, install the corresponding `@radix-ui/react-*` package.

## License

MIT