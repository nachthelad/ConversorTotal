# ConversorTotal — Backlog de Mejoras

Audit basado en: Vercel React Best Practices, Web Design Guidelines, SEO.
Foco especial en **mobile UX para facilitar conversiones**.

---

## 🔴 CRÍTICO — Mobile UX (impacto directo en conversiones)

### [x] 1. Cambiar `type="text"` a `type="number"` (o `inputmode="decimal"`) en inputs de conversión
**Archivo:** `components/converters/flexible-unit-converter.tsx` líneas 279, 319
**Problema:** En mobile, `type="text"` abre el teclado alfanumérico. El usuario tiene que cambiar a numérico manualmente.
**Fix:** Cambiar a `inputMode="decimal"` + `type="text"` (para permitir valores como "5'11"") o `type="number"` en conversores que no usan formatos especiales.
```tsx
// Para conversores simples (peso, temperatura, área, etc.)
<Input inputMode="decimal" type="text" ... />
// Para longitud (formato compuesto, ya maneja strings)
<Input inputMode="text" type="text" ... />
```

---

### [x] 2. Eliminar `maximum-scale=1` del viewport
**Archivo:** `app/layout.tsx` línea 98
**Problema:** `maximum-scale=1` deshabilita el pinch-to-zoom en iOS/Android. Es una violación de accesibilidad (WCAG 1.4.4) y Google lo penaliza en Core Web Vitals mobile.
**Fix:**
```ts
export const viewport = "width=device-width, initial-scale=1";
```

---

### [x] 3. Hacer el layout del conversor responsive (Select + Input)
**Archivo:** `components/converters/flexible-unit-converter.tsx` líneas 266-288, 304-328
**Problema:** `<div className="flex space-x-2">` con `w-[180px]` fijo para el Select + Input `flex-1`. En pantallas de 320-375px el Select ocupa más de la mitad del espacio, dejando el input muy angosto.
**Fix:** Apilar verticalmente en mobile:
```tsx
<div className="flex flex-col sm:flex-row gap-2">
  <Select ...>
    <SelectTrigger className="w-full sm:w-[180px]">
```

---

### [x] 4. Aumentar tamaño de touch targets en botones pequeños
**Archivos:** `flexible-unit-converter.tsx`, `mobile-menu.tsx`, `header.tsx`
**Problema:** Botones con `h-7 text-xs` (presets), `size="sm"` (Copiar/Compartir). WCAG requiere mínimo 44×44px. En mobile los presets son casi imposibles de tocar con precisión.
**Fix:**
```tsx
// Presets — de h-7 a h-9 mínimo
className="px-3 py-2 h-9 text-sm flex items-center gap-1 rounded-full"

// Botones Copiar/Compartir — de size="sm" a size="default"
<Button variant="outline" onClick={...} className="flex items-center gap-2 h-10">
```

---

### [x] 5. Hacer el botón de swap más prominente en mobile
**Archivo:** `components/converters/flexible-unit-converter.tsx` línea 291-301
**Problema:** El botón swap (`ArrowUpDown`) es `size="icon"` (40×40px en desktop). En mobile debería ser más grande y con texto.
**Fix:**
```tsx
<Button variant="outline" onClick={swapUnits} className="rounded-full gap-2 px-4 sm:px-2 sm:size-10">
  <ArrowUpDown className="h-4 w-4" />
  <span className="sm:hidden text-sm">Intercambiar</span>
</Button>
```

---

### [x] 6. Mostrar resultado de forma más destacada en mobile
**Problema:** El resultado se muestra en un `Input` igual al de entrada. En mobile no es claro qué es el resultado y qué es la entrada.
**Fix:** Cuando hay resultado, el campo "Hacia" debe tener un fondo diferente (bg-primary/10, texto más grande) que lo diferencie visualmente de la entrada.
```tsx
<Input
  className={`flex-1 ${toValue ? "bg-primary/10 font-semibold text-lg" : ""}`}
  readOnly={/* el usuario puede editar pero visualmente se distingue */}
  ...
/>
```

---

## 🟠 ALTO — Performance y React patterns

### [x] 7. Reemplazar el patrón `mounted` en Header por `suppressHydrationWarning` puntual
**Archivo:** `components/layout/header.tsx` líneas 32-62
**Problema:** El header completo se renderiza en blanco hasta que el client hydrata, causando CLS (Cumulative Layout Shift). El anti-pattern `if (!mounted) return <skeleton>` bloquea SSR del nav.
**Fix:** Mover `suppressHydrationWarning` solo al botón de tema (el único elemento que difiere):
```tsx
// Quitar el bloque if (!mounted) return ...
// En el botón de tema:
<Button suppressHydrationWarning onClick={...}>
  {mounted ? <SunOrMoon /> : <div className="h-5 w-5" />}
</Button>
```

---

### [x] 8. Agregar Suspense boundaries en homepage para streaming
**Archivo:** `app/page.tsx`
**Problema:** 9 secciones se renderizan de forma síncrona. `CurrencyConversions` muy probablemente hace fetch de datos — si tarda, bloquea toda la página.
**Fix:** Envolver secciones pesadas con Suspense:
```tsx
import { Suspense } from "react";

<Suspense fallback={<div className="h-48 animate-pulse bg-muted rounded-xl" />}>
  <CurrencyConversions />
</Suspense>
```

---

### [x] 9. Agregar `type="number"` explícito en viewport (Next.js 15+)
**Archivo:** `app/layout.tsx`
**Problema:** `export const viewport = "width=..."` es una string, pero Next.js 15+ espera un objeto `Viewport`. Usar el tipo correcto para aprovechar TypeScript y el API actualizado.
**Fix:**
```ts
import type { Viewport } from "next";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};
```

---

### [x] 10. Lazy-load secciones below-fold en homepage
**Archivo:** `app/page.tsx`
**Problema:** `ComprehensiveOverview`, `CTASection`, `FAQSection` son componentes pesados que están debajo del fold. Se cargan en el bundle inicial sin necesidad.
**Fix:**
```tsx
import dynamic from "next/dynamic";
const ComprehensiveOverview = dynamic(() =>
  import("@/components/sections/comprehensive-overview").then(m => m.ComprehensiveOverview)
);
const FAQSection = dynamic(() =>
  import("@/components/sections/faq-section").then(m => m.FAQSection)
);
```

---

### [ ] 11. Usar `useCallback` con dependencias primitivas en el hook de exchange rates
**Archivo:** `hooks/use-exchange-rates.ts`
**Problema:** Verificar que el interval de 3 minutos no recrea objetos innecesariamente. Las referencias a funciones en `setInterval` pueden causar re-renders en cascada si no están memoizadas.
**Fix:** Revisar y agregar `useCallback` con dependencias vacías `[]` en la función de fetch.

---

## 🟡 MEDIO — SEO

### [ ] 12. Agregar `BreadcrumbList` schema en páginas de conversores
**Archivos:** Todas las `app/conversor-*/page.tsx`
**Problema:** Las páginas de conversor solo tienen `FAQPage` schema. Agregar `BreadcrumbList` mejora los rich snippets en Google.
**Fix:**
```tsx
// En cada página de conversor
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://conversortotal.online" },
    { "@type": "ListItem", position: 2, name: "Conversor de Temperatura", item: "https://conversortotal.online/conversor-temperatura" },
  ]
};
```

---

### [x] 13. Agregar `HowTo` schema en páginas de conversores
**Archivos:** `app/conversor-temperatura/page.tsx` y similares
**Problema:** El contenido explica paso a paso cómo usar el conversor pero no tiene el markup `HowTo`. Este schema habilita rich results en Google con pasos expandidos.
**Fix:** Agregar schema `HowTo` junto al FAQPage schema existente.

---

### [ ] 14. Mover `export const metadata` antes del `export default function`
**Archivo:** `app/page.tsx` líneas 33-109
**Problema:** El metadata está declarado DESPUÉS del componente. Aunque Next.js lo maneja correctamente, es anti-convencional y puede confundir herramientas de análisis estático.
**Fix:** Mover el bloque `export const metadata` antes de `export default function HomePage`.

---

### [x] 15. Acortar el template de título
**Archivo:** `app/layout.tsx` línea 19
**Problema:** Template: `"%s | ConversorTotal - Conversor Online Gratis"` resulta en títulos de ~65-70 chars que se truncan en Google (máx 60 chars recomendado).
**Fix:**
```ts
template: "%s | ConversorTotal",
```
Y optimizar el `%s` de cada página para que sea descriptivo por sí solo.

---

### [ ] 16. Agregar meta `description` específica por conversor con keywords long-tail
**Archivos:** Páginas de conversor que comparten estructura genérica
**Problema:** Las descriptions son genéricas. Google prefiere descriptions únicas que coincidan con la intención de búsqueda exacta.
**Ejemplo para temperatura:**
Actual: *"Convierte temperatura de Celsius a Fahrenheit y viceversa al instante."*
Mejorado: *"Conversor de temperatura online: Celsius ↔ Fahrenheit ↔ Kelvin. Resultados instantáneos. Ej: 37°C = 98.6°F | 100°C = 212°F. Gratis y sin registro."*

---

### [ ] 17. Agregar `og:locale:alternate` para variantes de español
**Archivo:** `app/layout.tsx`
**Problema:** Solo hay `locale: "es_AR"` en OG. Agregar `es_ES` y `es_MX` como alternates puede mejorar CTR en otros mercados hispanohablantes.

---

## 🟡 MEDIO — Accesibilidad y Web Design

### [x] 18. Agregar `aria-label` a botones de acción sin texto visible
**Archivo:** `components/converters/flexible-unit-converter.tsx`
**Problema:** El botón swap solo tiene un ícono (`ArrowUpDown`). El atributo `title` no es suficiente para screen readers.
**Fix:**
```tsx
<Button aria-label="Intercambiar unidades" ...>
  <ArrowUpDown className="h-4 w-4" aria-hidden="true" />
</Button>
```

---

### [x] 19. Agregar `autocomplete` y `inputMode` en inputs de conversión
**Archivo:** `components/converters/flexible-unit-converter.tsx`
**Problema:** Sin `autoComplete="off"` el browser puede sugerir valores de historial inapropiados en campos de conversión.
```tsx
<Input
  autoComplete="off"
  inputMode="decimal"
  ...
/>
```

---

### [ ] 20. Mejorar contraste del texto `text-muted-foreground` en tarjetas
**Archivos:** Varios componentes de sección
**Problema:** `text-muted-foreground` en modo claro puede caer por debajo del ratio 4.5:1 requerido por WCAG AA sobre fondos `bg-muted`.
**Fix:** Auditar con DevTools o Lighthouse y ajustar el CSS variable `--muted-foreground` si es necesario.

---

### [x] 21. Agregar `skip to content` link para accesibilidad con teclado
**Archivo:** `app/layout.tsx`
**Problema:** No existe un "Skip to main content" link. Los usuarios de teclado deben tabear por todo el header para llegar al conversor.
**Fix:**
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded z-50">
  Ir al contenido principal
</a>
// Y en main:
<main id="main-content" ...>
```

---

### [x] 22. Mejorar el empty state del conversor (guiar al usuario)
**Archivo:** `components/converters/flexible-unit-converter.tsx`
**Problema:** Cuando el conversor está vacío, no hay ninguna guía visual. En mobile esto hace que el usuario no sepa qué hacer primero.
**Fix:** Agregar placeholder descriptivo o un hint visual debajo del input vacío.

---

## 🟢 BAJO — Performance adicional

### [ ] 23. Cachear la función `convertUnits` para inputs repetidos
**Archivo:** `lib/conversion-units.ts` + `flexible-unit-converter.tsx`
**Problema:** `convertUnits` se llama en cada keystroke. Para conversiones de la misma categoría y unidades, el resultado es determinista — puede cachearse.
**Fix:** Usar `useMemo` o un `Map` de cache a nivel módulo para conversiones recientes.

---

### [ ] 24. Precargar páginas de conversores populares al hover
**Archivo:** `components/layout/header.tsx`, `components/sections/main-action-cards.tsx`
**Problema:** Los links de navegación no tienen prefetch activo en hover.
**Fix:** Next.js `<Link>` hace prefetch automático en viewport por defecto, pero se puede optimizar con `prefetch={true}` explícito en links del header.

---

### [x] 25. Reducir bundle de Radix UI eliminando componentes no usados
**Archivo:** `package.json`
**Problema:** El proyecto importa ~30 paquetes de Radix UI. Auditar cuáles realmente se usan con `next-bundle-analyzer`.
**Fix:**
```bash
ANALYZE=true pnpm build
```
Eliminar de `package.json` los `@radix-ui/*` que no aparezcan en el bundle.

---

### [x] 26. Agregar `content-visibility: auto` en secciones below-fold
**Archivo:** `app/globals.css` o inline en secciones de la homepage
**Problema:** Las secciones debajo del fold (FAQ, ComprehensiveOverview) se pintan aunque no estén en viewport.
**Fix:**
```css
.below-fold-section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}
```

---

## 📱 MOBILE — UX específico para conversiones (resumen de impacto)

| # | Mejora | Impacto en conversión |
|---|--------|-----------------------|
| 1 | Teclado numérico en inputs | 🔥 Alto — reduce fricción |
| 2 | Eliminar maximum-scale=1 | 🔥 Alto — accesibilidad + SEO |
| 3 | Layout responsive Select+Input | 🔥 Alto — evita overflow |
| 4 | Touch targets más grandes | 🔥 Alto — usabilidad |
| 5 | Swap button más prominente | 🟠 Medio — descubribilidad |
| 6 | Resultado más destacado | 🟠 Medio — claridad |
| 22 | Empty state con guía | 🟡 Bajo — onboarding |

---

## Orden de ataque recomendado

```
Sprint 1 (impacto inmediato mobile):
  Tasks: #2, #1, #3, #4

Sprint 2 (performance + SEO):
  Tasks: #7, #9, #8, #15, #12

Sprint 3 (accesibilidad + polish):
  Tasks: #21, #18, #19, #5, #6, #22

Sprint 4 (optimizaciones avanzadas):
  Tasks: #10, #13, #16, #25, #26
```
