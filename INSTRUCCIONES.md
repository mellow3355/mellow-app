# 🎂 Mellow — Instrucciones de despliegue

## Paso 1 — Crear proyecto Firebase (15 min)

1. Ve a https://console.firebase.google.com
2. Clic en "Agregar proyecto" → nombre: "mellow-app"
3. Desactiva Google Analytics → Crear proyecto

### Activar Authentication
- Menú izquierdo → Authentication → Comenzar
- Pestaña "Sign-in method" → Email/contraseña → Activar
- Pestaña "Users" → Agregar usuarios:
  - owner@mellow.com      / mellow2025
  - caracas@mellow.com    / ccs2025
  - barquisimeto@mellow.com / bqto2025
  - maracaibo@mellow.com  / mcbo2025

### Activar Firestore
- Menú → Firestore Database → Crear base de datos
- Modo producción → Selecciona región "us-east1" → Listo

### Activar Storage
- Menú → Storage → Comenzar → Modo producción → Listo

### Reglas de seguridad Firestore
Ve a Firestore → Reglas → pega esto:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Reglas de Storage
Ve a Storage → Reglas → pega esto:
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Paso 2 — Copiar credenciales Firebase

1. Proyecto Firebase → ⚙️ Configuración → Tus apps → Agregar app Web (</>)
2. Nombre: "mellow-web" → Registrar
3. Copia el objeto `firebaseConfig` que aparece
4. En `admin.html` busca `const FIREBASE_CONFIG = {` y reemplaza con tus valores reales

## Paso 3 — Desplegar en Vercel (5 min)

1. Ve a https://vercel.com → Inicia sesión con GitHub
2. "New Project" → "Upload" (arrastra la carpeta mellow-app)
3. O conecta un repositorio de GitHub:
   - Crea repo en GitHub, sube los archivos
   - Vercel → Import → selecciona el repo
4. Clic en Deploy → en 2 minutos está live

### Dominio personalizado
En Vercel → Settings → Domains → agrega tu dominio

## Archivos del proyecto
- admin.html — Panel de administración (Firebase conectado)
- tienda.html — Tienda del cliente (separado)
- vercel.json — Configuración de rutas
- firebase-config.js — Referencia de configuración

## Datos que se guardan en Firebase

| Colección | Contenido |
|-----------|-----------|
| orders | Todos los pedidos con sede, estado, cliente, fecha |
| products | Catálogo de productos con fotos |
| tasa | Historial de tasas del día |
| schedules | Horarios por sede |
| settings | Banner y configuraciones |

## URLs finales
- Tienda cliente: https://tu-proyecto.vercel.app/
- Admin: https://tu-proyecto.vercel.app/admin

