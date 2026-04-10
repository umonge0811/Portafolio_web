# CLAUDE.md — Ticodevcr Web

Este archivo le da a Claude Code contexto completo del proyecto para que cada sesión
arranque con la misma calidad de salida, sin tener que re-explicar nada.

---

## Visión General del Proyecto

| Campo | Valor |
|-------|-------|
| **Cliente** | Ticodevcr |
| **Tipo** | Sitio empresa (SPA estático) + Portal de Clientes (planificado) |
| **País** | Costa Rica |
| **Stack** | HTML5 · CSS3 · JavaScript ES6+ · Sin framework · Sin build step |
| **Dev** | `npm run dev` → `npx serve . --listen 3000` |
| **Rama activa** | `claude/review-repository-WzaIy` |
| **Repo** | `umonge0811/Portafolio_web` |

---

## Arquitectura de Archivos

```
/
├── index.html                  # SPA principal (única página pública)
├── sitemap.xml                 # SEO — actualizar <lastmod> en cada deploy
├── robots.txt                  # Instrucciones a crawlers
├── BRAND.md                    # Guía de marca (colores, fuentes, logos)
├── CLAUDE.md                   # Este archivo
│
├── css/
│   ├── style.css               # Estilos principales + variables de marca + animaciones
│   ├── bento.css               # Grid bento del portfolio
│   └── styleCarousel.css       # Marquee de logos de tecnologías
│
├── js/
│   ├── translations.js         # Strings ES/EN para i18n
│   └── i18n.js                 # Motor i18n (data-i18n attributes)
│
├── js_scritp.js                # JS principal: scroll spy, form, video hover, scroll reveal
├── modal.js                    # Modal: open/close (DOMContentLoaded safe)
│
└── assets/
    ├── marca/LOGO/             # 4 variantes de logo de marca
    ├── svg/                    # Íconos SVG de tecnologías
    ├── videos/                 # Videos demo de proyectos
    └── img/
        ├── og-image.jpg        # ⚠️ PENDIENTE: crear 1200×630px para OG/Twitter
        └── favicon/            # favicon-32x32.png
```

---

## Identidad de Marca

Ver `BRAND.md` para guía completa. Referencia rápida:

| Variable CSS | HEX | Uso |
|-------------|-----|-----|
| `--color-primario` | `#038C8C` | Botones, íconos, acentos interactivos |
| `--color-azul-marino` | `#111D40` | Fondos de secciones (Nosotros, Servicios) |
| `--color-azul-oscuro` | `#0B1726` | Fondo del body |
| `--color-blanco` | `#F2F2F2` | Texto sobre fondos oscuros |
| `--color-verde-lima` | `#B8E986` | Badges, detalles secundarios |
| `--color-turquesa` | `#13F2F2` | Hovers, detalles dinámicos |

**Fuentes:** Montserrat (títulos) · Poppins (subtítulos) · Avenir Next (cuerpo)

**Logos:**
- Teal (hero/navbar): `assets/marca/LOGO/PNG LOGO COLOR PRIMARIO/LOGO COLOR PRINCIPAL_Mesa de trabajo 1.png`
- Blanco (footer): `assets/marca/LOGO/PNG LOGO NEGATIVO/LOGO NEGATIVO_Mesa de trabajo 1 copia.png`

---

## Sistema i18n

Todo texto visible al usuario usa atributos `data-i18n`. **Nunca** hardcodear strings directamente en HTML.

| Atributo | Uso |
|----------|-----|
| `data-i18n="key"` | Texto simple (`textContent`) |
| `data-i18n-html="key"` | HTML con tags (`innerHTML`, permite `<span>`) |
| `data-i18n-ph="key"` | `placeholder` de inputs/textarea |

Los strings están en `js/translations.js`. Siempre agregar `es` **y** `en` para cada key nueva.
El toggle ES/EN persiste en `localStorage` bajo la key `ticodev-lang`.

---

## Sistema de Animaciones

CSS puro + IntersectionObserver. Sin librerías externas.

| Clase | Efecto | Usar en |
|-------|--------|---------|
| `hero-anim hero-d1..d6` | fadeUp CSS al cargar | Elementos del hero únicamente |
| `reveal` | fadeUp al hacer scroll | Párrafos, items, contenido general |
| `reveal-heading` | fadeDown al hacer scroll | Títulos `<h2>` de secciones |
| `reveal-scale` | scaleIn al hacer scroll | Cards y grids |
| `d-1 .. d-5` | Delays 100–500ms (stagger) | Listas y grids |

JS agrega clase `in-view` via IntersectionObserver en `js_scritp.js`.
Respeta `prefers-reduced-motion` — desactiva todo para accesibilidad.

---

## Regla Crítica de JavaScript

**Los scripts cargan en `<head>` SIN `defer`.** Cuando el script corre, el body no existe aún.

- **NUNCA** usar `document.querySelector()` ni `document.querySelectorAll()` a nivel raíz
- **SIEMPRE** envolver queries DOM en `document.addEventListener('DOMContentLoaded', ...)`
- Funciones como `mostrarOcultarMenu()`, `abrirDemo()` están bien a nivel raíz porque solo se *llaman* desde `onclick` (que se ejecuta después)
- `modal.js` maneja los clicks del bento-grid y el botón `.close` — no duplicar en `js_scritp.js`

---

## Requisitos SEO

### Dominio de producción
`https://ticodevcr.com` — actualizar en `canonical`, `og:url`, JSON-LD y `sitemap.xml` al deployar.

### Checklist por página
- [ ] `<title>` único, 50–60 chars, keyword principal + marca
- [ ] `<meta name="description">` 140–160 chars, incluir CTA y teléfono
- [ ] `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- [ ] Twitter Card: `summary_large_image`
- [ ] OG image `og-image.jpg` de 1200×630px en `assets/img/` (**pendiente de crear**)
- [ ] JSON-LD: `Organization` + `LocalBusiness` + `WebSite` en `<head>`
- [ ] `<link rel="canonical">` en cada página
- [ ] `sitemap.xml` en raíz con `<lastmod>` actualizado
- [ ] `robots.txt` en raíz
- [ ] Todos los `<img>` con `alt` descriptivo
- [ ] `<html lang="es">` (ya configurado)

### Keywords objetivo (Costa Rica)
- `desarrollo web Costa Rica`
- `software empresarial Costa Rica`
- `aplicaciones web Costa Rica`
- `CRM ERP Costa Rica`
- `sitios web corporativos Costa Rica`

### Herramientas de verificación recomendadas
- Google Search Console → indexación y rendimiento
- Google Rich Results Test → validar JSON-LD
- Facebook Sharing Debugger → validar OG tags
- PageSpeed Insights → Core Web Vitals

---

## Contacto e Info de la Empresa

```
Empresa:  Ticodevcr
País:     Costa Rica
Tel:      +506 6282-8588
Email:    info@ticodevcr.com
WhatsApp: https://wa.me/50662828588
GitHub:   https://github.com/umonge0811
```

Coordenadas para mapa e iframe: `lat: 10.1863, lng: -83.7830`
Formspree endpoint del formulario: `https://formspree.io/f/xanwkdgd`

---

## Secciones del Sitio

| ID | Nombre | Background |
|----|--------|-----------|
| `#inicio` | Hero | Imagen de fondo + overlay oscuro |
| `#nosotros` | Nosotros / About | `--color-azul-marino` |
| `#servicios` | Servicios | `--color-azul-marino` |
| `#portfolio` | Portfolio (Bento Grid) | Body default |
| `#demos` | Demos de Proyectos | Body default |
| `#tecnologias` | Tecnologías | Body default |
| `#contacto` | Contacto | Body default |

---

## Próxima Fase Planificada: Portal de Clientes

Stack propuesto: **Astro + Supabase**
- `/portal/` — Login y dashboard del cliente
- `/admin/` — Backoffice administrativo
- Supabase para autenticación, BD (PostgreSQL) y storage
- No requiere backend propio
