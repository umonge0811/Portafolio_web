# Ticodevcr — Brand Guide (Referencia Rápida)

## Identidad
- **Nombre:** TicoDev / Ticodevcr
- **País:** Costa Rica
- **Eslogan:** "Soluciones Digitales a la Medida"
- **Descripción:** Empresa de desarrollo web, apps y software empresarial

## Paleta de Colores

### Primarios
| Nombre | HEX | RGB | Uso |
|--------|-----|-----|-----|
| Verde Azulado | `#038C8C` | 3, 140, 140 | Botones, íconos, acentos interactivos, `--color-primario` |
| Azul Marino | `#111D40` | 17, 29, 64 | Fondos de secciones principales, `--color-azul-marino` |
| Blanco | `#F2F2F2` | 242, 242, 242 | Texto sobre fondos oscuros, `--color-blanco` |

### Secundarios
| Nombre | HEX | RGB | Uso |
|--------|-----|-----|-----|
| Verde Lima | `#B8E986` | 184, 233, 134 | Badges, detalles, highlights, `--color-verde-lima` |
| Turquesa | `#13F2F2` | 19, 242, 242 | Hovers dinámicos, efectos llamativos, `--color-turquesa` |
| Azul Oscuro | `#0B1726` | 11, 23, 38 | Fondos body y secciones alternas, `--color-azul-oscuro` |

### Variables CSS disponibles en `css/style.css`
```css
--color-primario: #038C8C;
--color-azul-marino: #111D40;
--color-azul-oscuro: #0B1726;
--color-blanco: #F2F2F2;
--color-verde-lima: #B8E986;
--color-turquesa: #13F2F2;
```

## Tipografía

| Rol | Fuente | Variable CSS |
|-----|--------|-------------|
| Títulos (H1, H2, H3) | Montserrat | `var(--font-titulo)` |
| Subtítulos, botones | Poppins | `var(--font-subtitulo)` |
| Cuerpo de texto | Avenir Next | `var(--font-cuerpo)` |

Archivos de fuentes: `assets/marca/FUENTES/`

## Logos

| Versión | Archivo | Usar en |
|---------|---------|---------|
| Color Primario (teal) | `assets/marca/LOGO/PNG COLOR PRIMARIO 2/LOGO COLOR PRIMARIO 2_Mesa de trabajo 1 copia 3.png` | Hero, header (fondo oscuro) |
| Negativo (blanco) | `assets/marca/LOGO/PNG LOGO NEGATIVO/LOGO NEGATIVO_Mesa de trabajo 1 copia.png` | Footer, fondos muy oscuros |
| Positivo (negro) | `assets/marca/LOGO/PNG LOGO POSITIVO/LOGO NEGATIVO_Mesa de trabajo 1 copia 2.png` | Fondos claros/blancos |
| Azul marino | `assets/marca/LOGO/PNG COLOR PRIMARIO 3/LOGO COLOR PRIMARIO 3_Mesa de trabajo 1 copia 4.png` | Fondos neutros |
| Ícono solo (teal) | `assets/img/LOGO COLOR PRIMARIO 2_Mesa de trabajo 1 copia 3.png` | Favicon, ícono pequeño |

## Contacto Empresa
- **Teléfono:** +506 6282-8588
- **Email:** info@ticodevcr.com
- **WhatsApp:** https://wa.me/50662828588
- **GitHub:** https://github.com/umonge0811

## Estructura del Sitio

```
/                     ← Sitio público (index.html)
  #inicio             ← Hero con logo y CTA
  #nosotros           ← Misión, valores, stats
  #servicios          ← 4 tarjetas de servicios
  #portfolio          ← Proyectos bento grid
  #demos              ← Videos demostración
  #tecnologias        ← Stack tecnológico
  #contacto           ← Formulario + info empresa

/portal/              ← Portal clientes (Fase 2)
/admin/               ← Backoffice admin (Fase 2)
```

## Assets de Marca Adicionales
- `assets/marca/SOCIAL MEDIA/` — Banners y flyers para redes sociales
- `assets/marca/MOCKUPS/` — Mockups de merchandising y uniformes
- `assets/marca/ICONOGRAFIA/` — Elementos gráficos adicionales
- `assets/marca/MANUAL DE MARCA TICODEV FINAL 2.pdf` — Manual completo de marca
