
# ✅ Checklist de Deploy para Vercel

## Pre-Deploy

### 1. Verificación de Archivos Esenciales
- ✅ `package.json` - Configurado correctamente
- ✅ `vercel.json` - Configuración de Vercel incluida
- ✅ `tsconfig.json` - TypeScript configurado
- ✅ `tailwind.config.js` - Tailwind CSS configurado
- ✅ `vite.config.ts` - Vite configurado (si existe)
- ✅ `.vercelignore` - Archivos a ignorar especificados

### 2. Dependencias
```bash
# Verificar que todas las dependencias estén instaladas
npm install

# Verificar que no haya vulnerabilidades críticas
npm audit
```

### 3. Build Local
```bash
# Hacer un build local para verificar que no hay errores
npm run build

# Preview del build
npm run preview
```

## Deploy en Vercel

### Método 1: GitHub + Vercel (Recomendado)

#### Paso 1: Subir a GitHub
```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Commit inicial
git commit -m "Initial commit - Soluciones Industriales de Antioquia"

# Crear rama main
git branch -M main

# Agregar remote (reemplaza con tu URL)
git remote add origin https://github.com/tu-usuario/soluciones-industriales.git

# Push a GitHub
git push -u origin main
```

#### Paso 2: Conectar con Vercel
1. Ve a [vercel.com/new](https://vercel.com/new)
2. Autoriza acceso a GitHub
3. Selecciona tu repositorio
4. Vercel detectará automáticamente:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click en **Deploy**
6. ¡Listo! Tu sitio estará en línea en ~2 minutos

### Método 2: Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Login en Vercel
vercel login

# Deploy a preview
vercel

# Deploy a producción
vercel --prod
```

## Post-Deploy

### 1. Verificaciones Funcionales

#### ✅ Navegación
- [ ] Todas las páginas cargan correctamente
- [ ] Links internos funcionan
- [ ] Navegación responsive funciona

#### ✅ Formularios y Contacto
- [ ] Formulario de contacto envía a WhatsApp
- [ ] Click en teléfono abre app de llamadas
- [ ] Click en WhatsApp abre chat
- [ ] Click en email abre cliente de correo

#### ✅ Modales
- [ ] Modal de Política de Privacidad abre/cierra correctamente
- [ ] Modal de Términos de Uso abre/cierra correctamente
- [ ] Scroll funciona dentro de modales
- [ ] Modales son responsive

#### ✅ Animaciones
- [ ] Contadores animados funcionan (HomePage, AboutPage)
- [ ] Animaciones de scroll se activan correctamente
- [ ] Hover effects funcionan en botones y cards
- [ ] Partículas flotantes en footer se ven bien

#### ✅ Responsive
- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Menú hamburguesa funciona en mobile

#### ✅ Performance
- [ ] Lighthouse score > 90
- [ ] Imágenes cargan correctamente
- [ ] No hay errores en consola
- [ ] Tiempo de carga < 3 segundos

### 2. SEO Básico
- [ ] Título de página correcto
- [ ] Meta description presente
- [ ] Favicon visible
- [ ] Open Graph tags (opcional)

### 3. Configuración de Dominio (Opcional)

Si tienes un dominio personalizado:

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio
4. Configura DNS según instrucciones de Vercel
5. Espera propagación DNS (5-30 minutos)

## Troubleshooting

### Error: "Build failed"
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Error: "404 on refresh"
- ✅ Verificar que `vercel.json` tenga rewrites configurados
- ✅ El archivo ya está incluido en el proyecto

### Error: "Module not found"
```bash
# Verificar que todas las dependencias estén en package.json
npm install framer-motion lucide-react react-router-dom
```

### Imágenes no cargan
- Verificar que las URLs de imágenes sean accesibles
- Usar rutas absolutas o CDN

## Variables de Entorno (Si aplica)

Si necesitas variables de entorno:

1. Crea archivo `.env.local` (no subir a git)
2. En Vercel: Settings → Environment Variables
3. Agrega las variables necesarias
4. Redeploy el proyecto

## Monitoreo Post-Deploy

### Analytics (Opcional)
```bash
# Instalar Vercel Analytics
npm install @vercel/analytics

# Agregar en App.tsx
import { Analytics } from '@vercel/analytics/react'

// En el return
<Analytics />
```

### Speed Insights (Opcional)
```bash
npm install @vercel/speed-insights

# Agregar en App.tsx
import { SpeedInsights } from '@vercel/speed-insights/react'

// En el return
<SpeedInsights />
```

## Comandos Útiles de Vercel

```bash
# Ver logs del deploy
vercel logs

# Listar todos los deploys
vercel ls

# Remover un deploy
vercel rm [deployment-url]

# Ver información del proyecto
vercel inspect

# Abrir dashboard de Vercel
vercel open
```

## Contacto de Soporte

Si tienes problemas con el deploy:

1. **Documentación Vercel:** [vercel.com/docs](https://vercel.com/docs)
2. **Soporte Vercel:** [vercel.com/support](https://vercel.com/support)
3. **Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**¡Tu sitio está listo para producción!** 🚀

Última actualización: Enero 2024
