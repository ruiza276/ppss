# Pleasure Point Studios Website

A modern Next.js web application for Pleasure Point Studios - a surf-oriented accommodation business located in Sayulita, Mexico. The site provides studio rental information, policies, FAQs, and real-time surf conditions for guests.

![Pleasure Point Studios](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![Chakra UI](https://img.shields.io/badge/Chakra%20UI-3.0-teal?style=for-the-badge&logo=chakraui)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)

## ✨ Features

- **🏠 Studio Rentals** - Information about accommodation policies and availability
- **🌊 Live Surf Data** - Real-time tide and wave information via StormGlass API
- **❓ Interactive FAQs** - Accordion-style frequently asked questions
- **📋 Visual Policies** - Clear house rules and guidelines
- **📱 Responsive Design** - Optimized for mobile and desktop
- **🎨 Modern UI** - Clean design with custom branding

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14+ (App Router) |
| **Frontend** | React 18+ with TypeScript |
| **Styling** | Chakra UI v3 + Tailwind CSS |
| **Icons** | Lucide React |
| **API** | StormGlass Weather/Tide API |
| **Deployment** | Vercel (recommended) |
| **Fonts** | Geist + Goudy Bookletter 1911 |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pleasure-point-studios
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your StormGlass API credentials:
   ```env
   STORMGLASS_API_KEY=your_stormglass_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── FAQs/              # FAQ page with accordion
│   ├── Policies/          # Studio policies page
│   ├── SurfsUp/           # Live surf conditions
│   ├── pages/api/         # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Home page
└── components/
    └── ui/                # Reusable UI components
        ├── accordion.tsx  # FAQ accordion component
        ├── button.tsx     # Custom button component
        ├── menu.tsx       # Navigation menu
        └── ...           # Other UI components
```

## 🌊 API Integration

### StormGlass API
The app integrates with [StormGlass](https://stormglass.io/) to provide real-time surf conditions:

- **Location**: Puerto Vallarta, Mexico (20.8691°N, 105.4410°W)
- **Data**: Tide heights, wave timing, and tide types
- **Update Frequency**: Real-time data for current day + 1 day ahead

**API Endpoint**: `/app/pages/api/index.tsx`

## 🎨 Customization

### Theme Colors
The site uses a custom dark theme with pink accents:

```css
:root {
  --background: #000000;
  --foreground: #ff00c8;
}
```

### Fonts
- **Primary**: Geist (Vercel's font family)
- **Body**: Goudy Bookletter 1911

## 📄 Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Home page with vacancy information |
| `/FAQs` | Interactive FAQ accordion |
| `/Policies` | Visual studio policies |
| `/SurfsUp` | Live tide and wave data table |

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Environment Variables

```env
# StormGlass API (Required for surf data)
STORMGLASS_API_KEY=your_api_key_here

# Optional: Custom API URL
NEXT_PUBLIC_API_URL=https://your-domain.com/api
```

## 📱 Mobile Support

The application is fully responsive and optimized for:
- iPhone/Android smartphones
- Tablets
- Desktop screens
- Touch interfaces

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Contact the studio administrators (see FAQ page for contact methods)

## 🌍 Location

**Pleasure Point Studios**  
Puerto Vallarta, Jalisco, Mexico  
Coordinates: 20.8691°N, 105.4410°W

---

Built with ❤️