
# Soluciones Industriales de Antioquia S.A.S

Sitio web corporativo para empresa líder en soluciones industriales integrales.

## 🚀 Deploy en Vercel

### Opción 1: Deploy Automático (Recomendado)

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Add New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Vite
   - Click en "Deploy"

### Opción 2: Deploy Manual con Vercel CLI

1. **Instala Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Deploy a Producción:**
   ```bash
   vercel --prod
   ```

## 🛠️ Desarrollo Local

### Instalación

```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
```

### Preview del build

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de UI base
│   ├── Footer.tsx      # Footer con diseño industrial tech
│   ├── Navigation.tsx  # Navegación principal
│   ├── PrivacyModal.tsx
│   └── TermsModal.tsx
├── pages/              # Páginas principales
│   ├── divisions/      # Páginas de divisiones de productos
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── SolutionsPage.tsx
│   ├── SectorsPage.tsx
│   ├── TeamPage.tsx
│   └── ContactPage.tsx
├── hooks/              # Custom React hooks
└── App.tsx            # Componente principal con rutas

```

## ✨ Características

- ⚡ **Vite** - Build tool ultra rápido
- ⚛️ **React 18** - Última versión de React
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎭 **Framer Motion** - Animaciones profesionales
- 📱 **Responsive** - Diseño adaptable a todos los dispositivos
- 🎯 **TypeScript** - Type safety
- 🚀 **Optimizado para Vercel** - Deploy instantáneo

## 🔧 Configuración de Vercel

El proyecto incluye `vercel.json` con la configuración óptima:

- ✅ Rewrites para SPA (Single Page Application)
- ✅ Build command configurado
- ✅ Output directory especificado
- ✅ Framework detection (Vite)

## 📞 Funcionalidades de Contacto

- **Teléfono fijo:** Click to call
- **WhatsApp:** Integración directa
- **Email:** Click to email
- **Formulario:** Envío automático a WhatsApp

## 🎨 Tema y Diseño

- **Paleta de colores:** Dark navy (#0a1628) con acentos cyan/blue
- **Tipografía:** System fonts para máximo rendimiento
- **Animaciones:** Framer Motion con micro-interacciones premium
- **Footer:** Diseño industrial tech con partículas flotantes

## 📊 Performance

- ✅ Lazy loading de imágenes
- ✅ Code splitting por rutas
- ✅ Optimización de assets
- ✅ Lighthouse score: 90+

## 🔒 Legal

- Política de Privacidad completa
- Términos y Condiciones detallados
- Cumplimiento Ley 1581 de 2012 (Colombia)

## 📝 Licencia

© 2024 Soluciones Industriales de Antioquia S.A.S. Todos los derechos reservados.

## 🤝 Soporte

Para soporte técnico o consultas:
- **Email:** Soluciones_ind@une.net.co
- **Teléfono:** (604) 238 91 98
- **WhatsApp:** 320 770 2522
