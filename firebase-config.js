// ══════════════════════════════════════════════════════
//  MELLOW — Firebase Config
//  Reemplaza estos valores con los de tu proyecto Firebase
// ══════════════════════════════════════════════════════
export const FIREBASE_CONFIG = {
  apiKey:            "TU_API_KEY_AQUI",
  authDomain:        "mellow-app.firebaseapp.com",
  projectId:         "mellow-app",
  storageBucket:     "mellow-app.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId:             "TU_APP_ID"
};

// ══ SEDES CONFIG ══
export const SEDES = {
  caracas:      { label:'Caracas',      short:'CCS',  color:'#2a5c9a', wa:'584242708381', deliveryFee: 3 },
  barquisimeto: { label:'Barquisimeto', short:'BQto', color:'#1a7a3c', wa:'584241000001', deliveryFee: 3 },
  maracaibo:    { label:'Maracaibo',    short:'Mcbo', color:'#8b3a8b', wa:'584261000001', deliveryFee: 3 },
};

// ══ USUARIOS (Firebase Auth email/pass) ══
// owner@mellow.com      → ve todas las sedes
// caracas@mellow.com    → solo Caracas
// barquisimeto@mellow.com → solo Barquisimeto
// maracaibo@mellow.com  → solo Maracaibo
export const USER_SEDE_MAP = {
  'owner@mellow.com':        'all',
  'caracas@mellow.com':      'caracas',
  'barquisimeto@mellow.com': 'barquisimeto',
  'maracaibo@mellow.com':    'maracaibo',
};
