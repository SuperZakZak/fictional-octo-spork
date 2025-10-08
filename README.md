# Blooma - Custom Printed Clothing & Accessories Website

A fully responsive, animated, and interactive website for Blooma, a studio specializing in custom-printed clothing and accessories using DTF (Direct-to-Film) and Vinyl printing technologies.

## 🎯 Features

### Core Sections
- **Hero Section**: Dynamic animated background simulating printing film on fabric with compelling CTAs
- **Technologies Comparison**: Interactive split layout comparing DTF vs Vinyl printing with animations
- **Products Showcase**: 3D product viewer with rotating models and color picker for t-shirts, hoodies, and tote bags
- **Pricing Calculator**: Interactive calculator with dynamic comparison between Vinyl and DTF pricing
- **Use Cases Gallery**: Horizontally scrolling gallery showcasing different applications
- **Design Configurator**: Real-time design preview with upload functionality and quote generation
- **Quiz Feature**: Interactive quiz to help customers choose the right printing method
- **Contact Form**: Multi-step form with CRM integration support and instant messaging options

### Technical Highlights
- **Framework**: Next.js 14 with App Router and TypeScript
- **Animations**: GSAP and Framer Motion for smooth, professional animations
- **3D Graphics**: Three.js with React Three Fiber for interactive product models
- **Styling**: Tailwind CSS with custom animations and gradients
- **Form Handling**: React Dropzone for file uploads
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Setup product images** (Important!):
   
   The site uses product images that change when you click on colors. You have two options:

   **Option A: Use placeholder images (for testing)**
   ```bash
   # SVG placeholders are already created in /public/images/products/
   # Just run the dev server and they will work!
   ```

   **Option B: Add your own product images**
   - See detailed instructions in: **[IMAGES_FINAL_INSTRUCTIONS.md](./IMAGES_FINAL_INSTRUCTIONS.md)**
   - Quick summary: Place images in `/public/images/products/{product}/{color}.{format}`
   - **Supported formats**: AVIF, WebP, PNG (with automatic fallback)
   - See **[IMAGE_FORMATS_SUPPORT.md](./IMAGE_FORMATS_SUPPORT.md)** for format details
   - Required: 18 images (3 products × 6 colors)
   
   **Option C: Convert existing images to modern formats**
   ```bash
   # Install sharp-cli for image conversion
   npm install -g sharp-cli
   
   # Run the conversion script
   ./scripts/convert-images.sh
   ```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
windsurf-project/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with navigation and footer
│   │   ├── page.tsx            # Home page with all sections
│   │   └── globals.css         # Global styles and Tailwind imports
│   ├── components/
│   │   ├── navigation.tsx      # Responsive navigation with mobile menu
│   │   ├── footer.tsx          # Footer with links and contact info
│   │   └── product-3d-viewer.tsx # 3D product visualization component
│   └── features/
│       └── home/
│           ├── hero-section.tsx           # Animated hero with canvas background
│           ├── technologies-section.tsx   # DTF vs Vinyl comparison
│           ├── products-section.tsx       # Product showcase with 3D viewer
│           ├── pricing-section.tsx        # Interactive pricing calculator
│           ├── use-cases-section.tsx      # Horizontal scrolling gallery
│           ├── configurator-section.tsx   # Design upload and preview
│           ├── quiz-section.tsx           # Printing method recommendation quiz
│           └── contact-section.tsx        # Contact form with integrations
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Design Features

### Animations
- **GSAP ScrollTrigger**: Scroll-based animations for section reveals
- **Framer Motion**: Component transitions and micro-interactions
- **Canvas Animations**: Custom particle system for hero background
- **3D Interactions**: Rotating product models with OrbitControls

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized for all screen sizes

### Color Palette
- **Primary**: Pink/Red gradient (#E74C63)
- **Accent**: Blue gradient (#0EA5E9)
- **Neutral**: Gray scale for backgrounds and text
- **Gradients**: Dynamic gradients for CTAs and highlights

## 🔧 Customization

### Update Contact Information
Edit `src/components/footer.tsx` and `src/features/home/contact-section.tsx`:
- Email address
- Phone number
- Location
- Social media links

### Modify Products
Edit `src/features/home/products-section.tsx`:
- Add/remove products
- Update colors and sizes
- Modify product descriptions

### Adjust Pricing
Edit `src/features/home/pricing-section.tsx`:
- Update base prices
- Modify discount tiers
- Change size options

### CRM Integration
In `src/features/home/contact-section.tsx`, replace the simulated API call with your actual CRM webhook:
```typescript
// Replace this section in handleSubmit
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

## 🌐 Multilingual Support (Future Enhancement)

The project is structured to support multiple languages. To implement:
1. Install `next-intl`
2. Create translation files in `/messages` directory
3. Wrap components with translation hooks

## 📱 Instant Messaging Integration

### WhatsApp
Update the phone number in:
- `src/features/home/configurator-section.tsx`
- `src/features/home/contact-section.tsx`

Replace `https://wa.me/?text=` with `https://wa.me/351XXXXXXXXX?text=`

### Telegram
Update the Telegram username in contact section:
Replace `https://t.me/blooma_printing` with your actual Telegram handle

## 🎯 SEO Optimization

The website includes:
- Semantic HTML5 structure
- Meta tags for social sharing (Open Graph)
- Descriptive alt texts for images
- Fast loading times with Next.js optimization
- Mobile-friendly design

### Update SEO
Edit `src/app/layout.tsx` to customize:
- Page title
- Meta description
- Keywords
- Open Graph tags

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## 🖼️ Image Format Support

The site supports modern image formats with automatic fallback:

### Supported Formats (Priority Order)
1. **AVIF** - Best compression (up to 85% smaller than PNG)
2. **WebP** - Good compression with wide browser support
3. **PNG** - Universal fallback format

### How It Works
- The site automatically tries to load AVIF first
- If AVIF fails, it falls back to WebP
- If WebP fails, it loads PNG
- No manual intervention needed!

### Benefits
- **Faster Loading**: Up to 85% smaller file sizes
- **Better SEO**: Improved Core Web Vitals scores
- **Automatic**: Works transparently for users
- **Compatible**: Falls back to PNG for older browsers

See **[IMAGE_FORMATS_SUPPORT.md](./IMAGE_FORMATS_SUPPORT.md)** for detailed documentation.

## 📊 Performance

- **Lighthouse Score Target**: 90+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Image Optimization**: AVIF/WebP with automatic fallback

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **GSAP**: Professional-grade animation library
- **Framer Motion**: React animation library
- **Three.js**: 3D graphics library
- **React Three Fiber**: React renderer for Three.js
- **React Dropzone**: File upload handling
- **Lucide React**: Icon library

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a custom project for Blooma. For modifications or enhancements, please contact the development team.

## 📄 License

Proprietary - All rights reserved by Blooma

## 📞 Support

For technical support or questions:
- Email: info@blooma.pt
- Website: [blooma.pt](https://blooma.pt)

---

**Built with ❤️ for Blooma** - We print your vision. Beautifully.
