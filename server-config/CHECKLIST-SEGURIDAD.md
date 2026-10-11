# Checklist de seguridad — Río de Gloria

Este sitio es **estático** (HTML, CSS, JS y fotos): no tiene base de datos, usuarios, formularios ni claves.
Por eso muchos puntos de la lista de 20 no aplican hoy. Se marcan como "Preparado" si pasan a aplicar al agregar un formulario, un login o un panel.

| # | Punto | Estado | Detalle |
|---|-------|--------|---------|
| 1 | Ocultar API keys | ✅ Cumple | No hay claves en el código. Escaneo de secretos limpio. |
| 2 | Eliminar secretos de Git | ✅ Cumple | `.gitignore` bloquea `.env`, llaves y credenciales. |
| 3 | Key pública para DB | ⚪ No aplica | No hay base de datos. |
| 4 | Row-Level Security | ⚪ No aplica | No hay base de datos. |
| 5 | Encriptar datos sensibles | ⚪ No aplica | No se guardan datos. HTTPS cifra el tráfico. |
| 6 | Forzar autenticación | ⚪ No aplica | No hay áreas privadas. |
| 7 | Restringir acceso a registros | ⚪ No aplica | No hay registros. |
| 8 | Bloquear manipulación de campos | ⚪ No aplica | No hay formularios. |
| 9 | Proteger session cookies | ⚪ No aplica | El sitio no usa cookies. |
| 10 | Hashear contraseñas | ⚪ No aplica | No hay contraseñas. |
| 11 | Rate limiting | 🟡 Servidor | Incluido en `nginx.conf.snippet`. En Netlify/Cloudflare se activa en el panel (ver abajo). |
| 12 | Protección contra bots | 🟡 Servidor | Bloqueo de escáneres conocidos en `.htaccess`/nginx. Recomendado Cloudflare gratis. |
| 13 | Parametrizar queries | ⚪ No aplica | No hay consultas a base de datos. |
| 14 | Validar inputs | ⚪ No aplica | No hay campos de entrada. |
| 15 | Sanitizar contenido | ✅ Cumple | `main.js` usa `textContent`, nunca `innerHTML`. CSP bloquea scripts ajenos. |
| 16 | Restringir archivos | ✅ Cumple | Solo se sirven tipos web conocidos; se bloquean archivos ocultos, `server-config/` y listado de carpetas. |
| 17 | Devolver datos necesarios | ⚪ No aplica | No hay API. |
| 18 | Security headers | ✅ Cumple | CSP estricta, HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, COOP/CORP. |
| 19 | Forzar HTTPS | ✅ Cumple | `upgrade-insecure-requests`, HSTS y redirección 301 en las configs. |
| 20 | Escanear dependencias | ✅ Cumple | **Cero dependencias externas.** Las fuentes ahora están dentro del sitio (carpeta `fonts/`), ya no se cargan de Google. |

## Para activar en tu hosting
- **Netlify / Cloudflare Pages:** copia `server-config/_headers` a la raíz del sitio. HTTPS ya es automático.
- **Apache / cPanel:** copia `server-config/.htaccess` a la raíz.
- **Nginx:** pega `nginx.conf.snippet` en tu bloque `server`.
- **Rate limiting y bots en Cloudflare (gratis):** Security → WAF → Rate limiting rules (por ejemplo, 100 peticiones por minuto por IP) y activar "Bot Fight Mode".
- **No subas** la carpeta `server-config/` al sitio público; es solo de referencia.

## Si en el futuro agregas un formulario, login o base de datos
Los puntos 3 al 10, 13, 14 y 17 pasan a ser obligatorios. Avísame y los implementamos desde el inicio (validación en servidor, consultas parametrizadas, RLS, etc.).
