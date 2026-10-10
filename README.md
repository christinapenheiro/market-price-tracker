# 🛒 বাজার দর (BazarDor)

A responsive, real-time daily market price tracking platform designed to keep consumers informed about commodity prices across various markets in Bangladesh. **BazarDor** provides clear visual insights into daily price changes, price fluctuations, risers and fallers, and detailed market analyses.

---

## 🚀 Key Features

1. **Live Price Ticker & Market Insights:**
   - Features an infinite-scrolling marquee (ticker) right below the navigation bar displaying real-time updates for key commodities with unit prices, market trends, and Bengali indicator badges (`▲` green for increase, `▼` red for decrease).
   - Dedicated dashboard sections displaying **"আজ দাম বেড়েছে ▲"** (Top Risers) and **"আজ দাম কমেছে ▼"** (Top Fallers).

2. **Categorized Product Browsing & Dynamic Sorting:**
   - Browse daily commodities filtered by categories (e.g., Rice, Vegetables, Fish, Spices) with responsive dynamic routing.
   - Smart sorting controls (`ডিফল্ট`, `দাম: কম থেকে বেশি`, `দাম: বেশি থেকে কম`) accurately handling Bengali numeric values.

3. **Detailed Market Analytics (Protected Route):**
   - In-depth product analysis page displaying min, max, and average prices alongside localized price breakdowns across various local bazaars.
   - Protected route accessible exclusively to authenticated users.

4. **Robust Authentication System:**
   - Secure authentication system powered by **BetterAuth** supporting Email/Password logins and OAuth Social Logins (Google / GitHub).
   - Instant toast feedback notifications upon sign-in, sign-up, sign-out, or access restrictions.

5. **Profile Management & Live Updates:**
   - Dedicated user profile dashboard allowing registered users to seamlessly view and update their account information with immediate persistence.

---

## 🛠️ Technologies Used

- **Framework:** Next.js (App Router)
- **Language:** JavaScript / TypeScript
- **Styling:** Tailwind CSS, DaisyUI / HeroUI
- **Authentication:** BetterAuth (Email/Password, Google & GitHub OAuth)
- **Notifications:** React Hot Toast
- **Deployment:** Vercel

---

## ⚙️ API Reference

**Base URLs:**
- Primary API: `https://api.api-store.workers.dev/api/bazardor`
- Backup API: `https://api.abcz.workers.dev/api/bazardor`

**Endpoints:**
| Route | Method | Description |
| :--- | :--- | :--- |
| `/products` | `GET` | Fetch all products |
| `/products?category={slug}` | `GET` | Filter products by category |
| `/products/{id}` | `GET` | Fetch single product details |
| `/categories` | `GET` | Fetch all commodity categories |
| `/categories/{slug}` | `GET` | Fetch specific category details |

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18.x or later recommended)
- npm / yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bazardor.git
   cd bazardor
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add your authentication credentials:
   ```env
   BETTER_AUTH_SECRET=your_auth_secret
   BETTER_AUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🌐 Live Demo & Repository

- **Live Site:** https://market-price-tracker-two.vercel.app/
- **GitHub Repository:** https://github.com/christinapenheiro/market-price-tracker

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).