'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { trackMapInteraction } from '@/components/analytics/google-analytics';
import { apartments } from '@/data/apartments';

/* ═══════════════════════════════════════════════════════════════════════
   VILLA OLIMPIA — Interactive Floor Plan Map v3.0
   9 appartamenti (6 Piano Terra + 3 Primo Piano)
   Layout semplificato, pulito e scalabile (no planimetria originale)
   ═══════════════════════════════════════════════════════════════════════ */

// ─── Amenity icon system (Lucide-style SVG paths) ─────────────────────
type AmenityType =
  | 'terrace' | 'sea_view' | 'garden_view' | 'pool_view'
  | 'kitchen' | 'ac' | 'wifi' | 'tv' | 'linens' | 'bath_products'
  | 'garden' | 'bbq' | 'patio' | 'quiet' | 'family' | 'modern'
  | 'spacious' | 'premium' | 'direct_access' | 'panoramic' | 'first_floor';

const AMENITY_ICONS: Record<AmenityType, { path: string; viewBox?: string }> = {
  terrace:       { path: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6' },
  sea_view:      { path: 'M2 12c1.5-3 4.5-3 6 0s4.5 3 6 0 4.5-3 6 0M2 17c1.5-3 4.5-3 6 0s4.5 3 6 0 4.5-3 6 0' },
  garden_view:   { path: 'M12 22V8M7 12c-2.5-2-2.5-6 0-8 1.5 2 3.5 3 5 3M17 12c2.5-2 2.5-6 0-8-1.5 2-3.5 3-5 3M7 20c-2-1.5-2-5 0-6.5 1.5 1 3 1.5 5 1.5M17 20c2-1.5 2-5 0-6.5-1.5 1-3 1.5-5 1.5' },
  pool_view:     { path: 'M2 12h20M6 8a4 4 0 0 1 4 4M14 8a4 4 0 0 1 4 4M2 17c1.5-2 4-2 5.5 0s4 2 5.5 0 4-2 5.5 0' },
  kitchen:       { path: 'M3 11h18M5 11V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M8 8h0M12 8h0M16 8h0' },
  ac:            { path: 'M12 2v4M4.93 4.93l2.83 2.83M2 12h4M4.93 19.07l2.83-2.83M12 18v4M19.07 19.07l-2.83-2.83M22 12h-4M19.07 4.93l-2.83 2.83' },
  wifi:          { path: 'M5 12.55a11 11 0 0 1 14 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01' },
  tv:            { path: 'M4 7h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM7 21h10' },
  linens:        { path: 'M2 6s1.5-2 5-2 5 2 5 2 1.5-2 5-2 5 2 5 2M2 12s1.5-2 5-2 5 2 5 2 1.5-2 5-2 5 2 5 2M2 18s1.5-2 5-2 5 2 5 2 1.5-2 5-2 5 2 5 2' },
  bath_products: { path: 'M4 4h16v2H4zM6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6M10 10v6M14 10v6' },
  garden:        { path: 'M12 22V12M8 6c-2-2-2-5 0-5 2 0 4 3 4 6M16 6c2-2 2-5 0-5-2 0-4 3-4 6M6 18c-3-1-3-5 0-5 2 0 5 2 6 5M18 18c3-1 3-5 0-5-2 0-5 2-6 5' },
  bbq:           { path: 'M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM5 21l3-9h8l3 9M8 21h8' },
  patio:         { path: 'M4 18h16M4 18V8l8-4 8 4v10M9 18v-4h6v4M12 4v3' },
  quiet:         { path: 'M12 3a6 6 0 0 0 9 9c-3 4-7.5 6-12.6 6A9 9 0 0 1 12 3z' },
  family:        { path: 'M16 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM8 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2' },
  modern:        { path: 'M12 2l2.09 6.26L21 9.27l-5.18 3.75L17.82 20 12 16.27 6.18 20l1.64-7.03L2 9.24l6.91-1z' },
  spacious:      { path: 'M21 3H3v18h18V3zM9 3v18M3 9h18' },
  premium:       { path: 'M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01z' },
  direct_access: { path: 'M12 2v8l4-4M12 10l-4-4M3 17a9 9 0 0 0 18 0' },
  panoramic:     { path: 'M2 12c0-4 3-8 10-8s10 4 10 8M2 12c0 4 3 8 10 8s10-4 10-8M2 12h20M12 4v16' },
  first_floor:   { path: 'M3 21h18M3 7v14M21 7v14M7 7V3h10v4M10 21v-4h4v4M7 11h10M7 15h10' },
};

const AMENITY_LABELS: Record<Lang, Record<AmenityType, string>> = {
  it: {
    terrace: 'Terrazza', sea_view: 'Vista Mare', garden_view: 'Vista Giardino',
    pool_view: 'Vista Piscina', kitchen: 'Cucina Completa', ac: 'Aria Condizionata',
    wifi: 'WiFi Gratuito', tv: 'Smart TV', linens: 'Biancheria', bath_products: 'Kit Bagno',
    garden: 'Giardino', bbq: 'Barbecue', patio: 'Patio Privato', quiet: 'Zona Tranquilla',
    family: 'Ideale Famiglie', modern: 'Design Moderno', spacious: 'Living Spazioso',
    premium: 'Premium', direct_access: 'Accesso Diretto', panoramic: 'Vista Panoramica',
    first_floor: 'Primo Piano',
  },
  en: {
    terrace: 'Terrace', sea_view: 'Sea View', garden_view: 'Garden View',
    pool_view: 'Pool View', kitchen: 'Full Kitchen', ac: 'Air Conditioning',
    wifi: 'Free WiFi', tv: 'Smart TV', linens: 'Bed Linen', bath_products: 'Bath Kit',
    garden: 'Garden', bbq: 'Barbecue', patio: 'Private Patio', quiet: 'Quiet Area',
    family: 'Family Friendly', modern: 'Modern Design', spacious: 'Spacious Living',
    premium: 'Premium', direct_access: 'Direct Access', panoramic: 'Panoramic View',
    first_floor: 'First Floor',
  },
  de: {
    terrace: 'Terrasse', sea_view: 'Meerblick', garden_view: 'Gartenblick',
    pool_view: 'Poolblick', kitchen: 'Voll Küche', ac: 'Klimaanlage',
    wifi: 'Gratis WLAN', tv: 'Smart TV', linens: 'Bettwäsche', bath_products: 'Bad-Set',
    garden: 'Garten', bbq: 'Grill', patio: 'Privat Patio', quiet: 'Ruhige Lage',
    family: 'Familienfreundlich', modern: 'Modernes Design', spacious: 'Geräumig',
    premium: 'Premium', direct_access: 'Direkter Zugang', panoramic: 'Panoramablick',
    first_floor: 'Obergeschoss',
  },
};

// ─── Color palette ────────────────────────────────────────────────────
const COLORS: Record<string, { main: string; hover: string; text: string; accent: string; light: string }> = {
  fiordaliso: { main: '#4A8FE7', hover: '#3B7AD4', text: '#FFF', accent: '#D6E4F7', light: '#EBF2FC' },
  orchidea:   { main: '#9B6AB8', hover: '#8A59A7', text: '#FFF', accent: '#E4D5F0', light: '#F3EDF8' },
  tulipano:   { main: '#E06060', hover: '#CC4C4C', text: '#FFF', accent: '#F5D5D5', light: '#FCEAEA' },
  frangipane: { main: '#D9A030', hover: '#C48E20', text: '#FFF', accent: '#F5E6C0', light: '#FDF5E3' },
  giglio:     { main: '#E07BA0', hover: '#CC6790', text: '#FFF', accent: '#F5D5E3', light: '#FCECF2' },
  lavanda:    { main: '#8B7EC0', hover: '#7A6DB0', text: '#FFF', accent: '#DDD5EE', light: '#EEEBF6' },
  geranio:    { main: '#D44D4D', hover: '#C03A3A', text: '#FFF', accent: '#F0CCCC', light: '#FAEAEA' },
  gardenia:   { main: '#4BAA82', hover: '#3B9A72', text: '#FFF', accent: '#CCF0E0', light: '#E6F8F0' },
  azalea:     { main: '#E06899', hover: '#CC5488', text: '#FFF', accent: '#F5D0E0', light: '#FCEAF2' },
};

const FONT_PLAYFAIR = "var(--font-playfair), 'Playfair Display', serif";
const FONT_INTER = "var(--font-inter), 'Inter', system-ui, sans-serif";

// ─── Layout system (scalable) ─────────────────────────────────────────
type LayoutRect = { x: number; y: number; w: number; h: number; unit?: 'pct' | 'abs' };

type ViewBox = { width: number; height: number };

const VIEWBOXES: Record<'terra' | 'primo', ViewBox> = {
  terra: { width: 1000, height: 620 },
  primo: { width: 1000, height: 320 },
};

function resolveRect(layout: LayoutRect, view: ViewBox) {
  const unit = layout.unit ?? 'pct';
  if (unit === 'abs') return layout;
  return {
    x: (layout.x / 100) * view.width,
    y: (layout.y / 100) * view.height,
    w: (layout.w / 100) * view.width,
    h: (layout.h / 100) * view.height,
  };
}

// ─── Apartment data ───────────────────────────────────────────────────
interface AptData {
  id: string;
  name: string;
  floor: 'terra' | 'primo';
  sqm: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  premium?: boolean;
  layout: LayoutRect;
  amenities: AmenityType[];
  highlight?: string; // unique selling point
}

// Piano Terra — layout in percent (scalable)
const PIANO_TERRA: AptData[] = [
  { id: 'fiordaliso', name: 'Fiordaliso', floor: 'terra',
    sqm: 50, guests: 4, bedrooms: 1, bathrooms: 1,
    layout: { x: 0, y: 0, w: 50, h: 52 },
    amenities: ['terrace', 'pool_view', 'garden', 'bbq', 'ac', 'wifi', 'kitchen', 'tv', 'linens', 'bath_products'],
    highlight: 'Vista diretta piscina' },
  { id: 'orchidea', name: 'Orchidea', floor: 'terra',
    sqm: 48, guests: 4, bedrooms: 1, bathrooms: 2,
    layout: { x: 50, y: 0, w: 50, h: 30 },
    amenities: ['panoramic', 'sea_view', 'spacious', 'ac', 'wifi', 'kitchen', 'tv', 'linens'],
    highlight: 'Terrazza panoramica vista mare' },
  { id: 'tulipano', name: 'Tulipano', floor: 'terra',
    sqm: 47, guests: 4, bedrooms: 1, bathrooms: 1,
    layout: { x: 50, y: 30, w: 50, h: 22 },
    amenities: ['direct_access', 'pool_view', 'patio', 'ac', 'wifi', 'kitchen', 'tv', 'linens', 'family'],
    highlight: 'Accesso diretto giardino e patio' },
  { id: 'frangipane', name: 'Frangipane', floor: 'terra',
    sqm: 45, guests: 6, bedrooms: 2, bathrooms: 1,
    layout: { x: 0, y: 52, w: 34, h: 48 },
    amenities: ['terrace', 'garden_view', 'kitchen', 'ac', 'wifi', 'tv', 'linens', 'bath_products'],
    highlight: 'Unico PT con 2 camere doppie' },
  { id: 'giglio', name: 'Giglio', floor: 'terra',
    sqm: 46, guests: 6, bedrooms: 2, bathrooms: 1,
    layout: { x: 34, y: 52, w: 32, h: 48 },
    amenities: ['kitchen', 'ac', 'wifi', 'tv', 'linens', 'bath_products', 'patio', 'garden'],
    highlight: 'Camera + letto 1½ piazza' },
  { id: 'lavanda', name: 'Lavanda', floor: 'terra',
    sqm: 45, guests: 4, bedrooms: 1, bathrooms: 1,
    layout: { x: 66, y: 52, w: 34, h: 48 },
    amenities: ['terrace', 'garden_view', 'quiet', 'ac', 'wifi', 'kitchen', 'tv', 'linens', 'bath_products'],
    highlight: 'Veranda privata, massima privacy' },
];

// Primo Piano — layout in percent (scalable)
const PRIMO_PIANO: AptData[] = [
  { id: 'geranio', name: 'Geranio', floor: 'primo',
    sqm: 65, guests: 6, bedrooms: 2, bathrooms: 2, premium: true,
    layout: { x: 0, y: 0, w: 35, h: 100 },
    amenities: ['panoramic', 'sea_view', 'garden_view', 'spacious', 'kitchen', 'ac', 'wifi', 'tv', 'premium', 'first_floor'],
    highlight: 'Il più grande e completo — 2 balconi panoramici' },
  { id: 'gardenia', name: 'Gardenia', floor: 'primo',
    sqm: 52, guests: 4, bedrooms: 1, bathrooms: 1,
    layout: { x: 35, y: 0, w: 30, h: 100 },
    amenities: ['sea_view', 'spacious', 'kitchen', 'ac', 'wifi', 'tv', 'linens', 'bath_products', 'first_floor'],
    highlight: 'Balcone vista mare Ionio' },
  { id: 'azalea', name: 'Azalea', floor: 'primo',
    sqm: 50, guests: 4, bedrooms: 1, bathrooms: 1,
    layout: { x: 65, y: 0, w: 35, h: 100 },
    amenities: ['panoramic', 'sea_view', 'modern', 'kitchen', 'ac', 'wifi', 'tv', 'linens', 'bath_products', 'first_floor'],
    highlight: 'Terrazza privata con tramonto spettacolare' },
];

// ─── Translations ─────────────────────────────────────────────────────
const translations = {
  it: {
    groundFloor: 'Piano Terra', firstFloor: 'Primo Piano',
    legend: 'Legenda',
    guests: 'ospiti', bedrooms: 'camere', bathrooms: 'bagni',
    bedroom: 'camera', bathroom: 'bagno', premium: 'Premium',
    clickToExplore: 'Clicca un appartamento per i dettagli',
    sqm: 'mq', amenities: 'Servizi e Comfort',
    close: 'Chiudi', from: 'da', perNight: '/notte',
  },
  en: {
    groundFloor: 'Ground Floor', firstFloor: 'First Floor',
    legend: 'Legend',
    guests: 'guests', bedrooms: 'bedrooms', bathrooms: 'bathrooms',
    bedroom: 'bedroom', bathroom: 'bathroom', premium: 'Premium',
    clickToExplore: 'Click an apartment for details',
    sqm: 'sqm', amenities: 'Amenities & Comfort',
    close: 'Close', from: 'from', perNight: '/night',
  },
  de: {
    groundFloor: 'Erdgeschoss', firstFloor: 'Obergeschoss',
    legend: 'Legende',
    guests: 'Gäste', bedrooms: 'Schlafzimmer', bathrooms: 'Badezimmer',
    bedroom: 'Schlafzimmer', bathroom: 'Badezimmer', premium: 'Premium',
    clickToExplore: 'Wohnung anklicken für Details',
    sqm: 'qm', amenities: 'Ausstattung & Komfort',
    close: 'Schließen', from: 'ab', perNight: '/Nacht',
  },
} as const;

type Lang = keyof typeof translations;

// Prices derivati da data/apartments.ts (fonte canonica)
const DEFAULT_PRICE = 120;

const PRICES: Record<string, number> = apartments.reduce((map, apt) => {
  // Gli id della mappa sono i nomi in minuscolo (es. "Fiordaliso" -> "fiordaliso")
  const key = apt.name.toLowerCase();
  map[key] = apt.price ?? DEFAULT_PRICE;
  return map;
}, {} as Record<string, number>);

// ─── Icon component ───────────────────────────────────────────────────
function AmenityIcon({ type, size = 18, color = 'currentColor' }: { type: AmenityType; size?: number; color?: string }) {
  const icon = AMENITY_ICONS[type];
  if (!icon) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox || '0 0 24 24'}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d={icon.path} />
    </svg>
  );
}

// ─── Detail Panel ─────────────────────────────────────────────────────
function ApartmentDetailPanel({
  apt,
  lang,
  onClose,
}: {
  apt: AptData;
  lang: Lang;
  onClose: () => void;
}) {
  const t = translations[lang];
  const c = COLORS[apt.id];
  const amenityLabels = AMENITY_LABELS[lang];
  const price = PRICES[apt.id];
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [apt.id]);

  const bedroomLabel = apt.bedrooms === 1 ? t.bedroom : t.bedrooms;
  const bathroomLabel = apt.bathrooms === 1 ? t.bathroom : t.bathrooms;

  return (
    <div
      ref={panelRef}
      className="mt-5 rounded-2xl border-2 overflow-hidden shadow-lg animate-in slide-in-from-top-2"
      style={{ borderColor: c.main }}
    >
      {/* Header */}
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{ background: `linear-gradient(135deg, ${c.main}, ${c.hover})` }}
      >
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-white" style={{ fontFamily: FONT_PLAYFAIR }}>{apt.name}</h3>
          {apt.premium && (
            <span className="px-2.5 py-0.5 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
              ★ {t.premium}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          aria-label={t.close}
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="bg-white p-5">
        {/* Highlight */}
        {apt.highlight && (
          <p className="text-sm font-medium mb-4 px-3 py-2 rounded-lg" style={{ backgroundColor: c.light, color: c.hover }}>
            {apt.highlight}
          </p>
        )}

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          {[
            { icon: '📐', value: `${apt.sqm}`, unit: t.sqm },
            { icon: '👥', value: `${apt.guests}`, unit: t.guests },
            { icon: '🛏️', value: `${apt.bedrooms}`, unit: bedroomLabel },
            { icon: '🚿', value: `${apt.bathrooms}`, unit: bathroomLabel },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-100"
            >
              <span className="text-lg">{stat.icon}</span>
              <div>
                <span className="text-lg font-bold text-slate-800">{stat.value}</span>
                <span className="text-xs text-slate-500 ml-1">{stat.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities grid */}
        <h4 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-3">
          {t.amenities}
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {apt.amenities.map((amenity) => (
            <div
              key={amenity}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors hover:shadow-sm"
              style={{
                borderColor: c.accent,
                backgroundColor: c.light,
              }}
            >
              <AmenityIcon type={amenity} size={16} color={c.main} />
              <span className="text-xs font-medium text-slate-700">
                {amenityLabels[amenity]}
              </span>
            </div>
          ))}
        </div>

        {/* Price */}
        {price && (
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              {t.from} <span className="text-2xl font-bold text-slate-800">€{price}</span>{t.perNight}
            </span>
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: c.main }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── SVG Apartment Rectangle ──────────────────────────────────────────
function ApartmentRect({
  apt,
  rect,
  isSelected,
  onClick,
  lang,
}: {
  apt: AptData;
  rect: { x: number; y: number; w: number; h: number };
  isSelected: boolean;
  onClick: () => void;
  lang: Lang;
}) {
  const [hovered, setHovered] = useState(false);
  const t = translations[lang];
  const c = COLORS[apt.id];
  const r = 18;

  const bedroomLabel = apt.bedrooms === 1 ? t.bedroom : t.bedrooms;
  const bathroomLabel = apt.bathrooms === 1 ? t.bathroom : t.bathrooms;

  const nameSize = rect.w < 240 ? 16 : rect.w < 320 ? 18 : 20;
  const infoSize = rect.w < 260 ? 10.5 : 11.5;

  return (
    <g
      className="cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`${apt.name} — ${apt.sqm} ${t.sqm}, ${apt.guests} ${t.guests}`}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ outline: 'none' }}
    >
      {/* Selection glow */}
      {isSelected && (
        <rect
          x={rect.x - 6} y={rect.y - 6}
          width={rect.w + 12} height={rect.h + 12}
          rx={r + 6} fill="none" stroke="#FBBF24" strokeWidth={3.5} opacity={0.95}
        />
      )}

      {/* Shadow */}
      <rect
        x={rect.x + 4} y={rect.y + 4}
        width={rect.w} height={rect.h}
        rx={r} fill="rgba(15,23,42,0.18)"
      />

      {/* Main body */}
      <rect
        x={rect.x} y={rect.y}
        width={rect.w} height={rect.h}
        rx={r}
        fill={`url(#grad-${apt.id})`}
        stroke={hovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.55)'}
        strokeWidth={2}
        filter="url(#softShadow)"
        style={{
          transition: 'transform 0.2s ease, filter 0.2s ease',
          transformOrigin: 'center',
          transformBox: 'fill-box',
          transform: hovered ? 'scale(1.01)' : 'scale(1)',
        }}
      />

      {/* Gloss overlay */}
      <rect
        x={rect.x} y={rect.y}
        width={rect.w} height={rect.h}
        rx={r}
        fill="url(#glass)"
        opacity={hovered ? 0.4 : 0.28}
        pointerEvents="none"
      />

      {/* Premium badge */}
      {apt.premium && (
        <>
          <rect x={rect.x + rect.w - 90} y={rect.y + 10} width={78} height={24} rx={12} fill="rgba(251,191,36,0.92)" />
          <text x={rect.x + rect.w - 51} y={rect.y + 27} textAnchor="middle" fill="#78350F" fontSize={11} fontWeight={700} fontFamily={FONT_INTER}>
            ★ {t.premium}
          </text>
        </>
      )}

      {/* Name */}
      <text
        x={rect.x + rect.w / 2} y={rect.y + rect.h * 0.38}
        textAnchor="middle" fill={c.text}
        fontSize={nameSize} fontWeight={700}
        fontFamily={FONT_PLAYFAIR}
      >
        {apt.name}
      </text>

      {/* Size */}
      <text
        x={rect.x + rect.w / 2} y={rect.y + rect.h * 0.56}
        textAnchor="middle" fill={c.text}
        fontSize={12.5} fontWeight={600} opacity={0.95}
        fontFamily={FONT_INTER}
      >
        {apt.sqm} {t.sqm}
      </text>

      {/* Info line */}
      <text
        x={rect.x + rect.w / 2} y={rect.y + rect.h * 0.72}
        textAnchor="middle" fill={c.text}
        fontSize={infoSize} opacity={0.92}
        fontFamily={FONT_INTER}
      >
        {apt.guests} {t.guests} · {apt.bedrooms} {bedroomLabel} · {apt.bathrooms} {bathroomLabel}
      </text>

      {/* "tap to expand" hint on hover */}
      {hovered && (
        <text
          x={rect.x + rect.w / 2} y={rect.y + rect.h * 0.88}
          textAnchor="middle" fill="rgba(255,255,255,0.78)"
          fontSize={10} fontFamily={FONT_INTER}
        >
          {t.clickToExplore.split(' ').slice(0, 3).join(' ')}...
        </text>
      )}
    </g>
  );
}

// ─── Main Component ───────────────────────────────────────────────────
interface VillaOlimpiaMapProps {
  language?: Lang;
  onApartmentClick?: (apartmentId: string) => void;
}

const VillaOlimpiaMap = ({ language = 'it', onApartmentClick }: VillaOlimpiaMapProps) => {
  const [activeFloor, setActiveFloor] = useState<'terra' | 'primo'>('terra');
  const [selectedApartment, setSelectedApartment] = useState<string | null>(null);
  const t = translations[language];

  const handleClick = (id: string) => {
    setSelectedApartment((prev) => (prev === id ? null : id));
    onApartmentClick?.(id);
    trackMapInteraction(`apartment_click_${id}`);
  };

  const apartments = activeFloor === 'terra' ? PIANO_TERRA : PRIMO_PIANO;
  const view = VIEWBOXES[activeFloor];
  const viewBox = `0 0 ${view.width} ${view.height}`;
  const allApartments = [...PIANO_TERRA, ...PRIMO_PIANO];
  const selectedApt = allApartments.find((a) => a.id === selectedApartment) || null;

  return (
    <section className="w-full py-10 sm:py-14 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Floor Tabs */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex rounded-full bg-white shadow-md border border-slate-200 p-1">
            {(['terra', 'primo'] as const).map((floor) => {
              const isActive = activeFloor === floor;
              const label = floor === 'terra' ? t.groundFloor : t.firstFloor;
              const count = floor === 'terra' ? 6 : 3;
              return (
                <button
                  key={floor} type="button"
                  onClick={() => { setActiveFloor(floor); setSelectedApartment(null); }}
                  className={
                    `relative px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-semibold
                    transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                    ${isActive ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'}`
                  }
                  aria-pressed={isActive}
                >
                  {label}
                  <span className={`ml-1.5 text-xs font-medium ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Map + Legend */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* SVG Map */}
          <div className="flex-1 min-w-0 w-full">
            <div className="bg-gradient-to-br from-slate-100 via-white to-amber-50/60 rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-3 sm:p-5">
              <svg
                viewBox={viewBox}
                className="w-full h-auto"
                role="img"
                aria-label={`Villa Olimpia - ${activeFloor === 'terra' ? t.groundFloor : t.firstFloor}`}
                style={{ maxHeight: activeFloor === 'terra' ? '560px' : '320px' }}
              >
                <defs>
                  <linearGradient id="floor-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F8FAFC" />
                    <stop offset="100%" stopColor="#E2E8F0" />
                  </linearGradient>
                  <radialGradient id="floor-spot" cx="75%" cy="25%" r="75%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.9} />
                    <stop offset="70%" stopColor="#E2E8F0" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#CBD5F5" stopOpacity={0.15} />
                  </radialGradient>
                  <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.55} />
                    <stop offset="40%" stopColor="#FFFFFF" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
                  </linearGradient>
                  <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.25" />
                  </filter>
                  {Object.entries(COLORS).map(([id, c]) => (
                    <linearGradient key={id} id={`grad-${id}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={c.light} />
                      <stop offset="55%" stopColor={c.main} />
                      <stop offset="100%" stopColor={c.hover} />
                    </linearGradient>
                  ))}
                </defs>

                <rect width="100%" height="100%" rx="28" fill="url(#floor-bg)" />
                <rect width="100%" height="100%" rx="28" fill="url(#floor-spot)" />
                <rect x="10" y="10" width={view.width - 20} height={view.height - 20} rx="24" fill="none" stroke="rgba(148,163,184,0.35)" strokeWidth={1.5} />

                {apartments.map((apt) => {
                  const rect = resolveRect(apt.layout, view);
                  return (
                    <ApartmentRect
                      key={apt.id}
                      apt={apt}
                      rect={rect}
                      isSelected={selectedApartment === apt.id}
                      onClick={() => handleClick(apt.id)}
                      lang={language}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Detail Panel — expands below the map */}
            {selectedApt && selectedApt.floor === activeFloor && (
              <ApartmentDetailPanel
                apt={selectedApt}
                lang={language}
                onClose={() => setSelectedApartment(null)}
              />
            )}
          </div>

          {/* Legend sidebar */}
          <div className="w-full lg:w-56 shrink-0">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-md p-5 lg:sticky lg:top-6">
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">{t.legend}</h3>

              <div className="space-y-1.5">
                {allApartments.map((apt) => {
                  const c = COLORS[apt.id];
                  const isCurrentFloor = apt.floor === activeFloor;
                  const isSelected = selectedApartment === apt.id;
                  return (
                    <button
                      key={apt.id} type="button"
                      onClick={() => {
                        if (apt.floor !== activeFloor) setActiveFloor(apt.floor);
                        handleClick(apt.id);
                      }}
                      className={
                        `w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-left
                        transition-all duration-150 hover:bg-slate-50
                        ${isSelected ? 'ring-2 ring-amber-300 bg-amber-50/50' : ''}
                        ${isCurrentFloor ? 'opacity-100' : 'opacity-40'}`
                      }
                    >
                      <span className="w-4 h-4 rounded-sm shrink-0 border border-white shadow-sm" style={{ backgroundColor: c.main }} />
                      <span className="text-xs font-medium text-slate-700 truncate">{apt.name}</span>
                      <span className="text-[10px] text-slate-400 ml-auto whitespace-nowrap">{apt.sqm}{t.sqm}</span>
                    </button>
                  );
                })}
              </div>

              <p className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 leading-relaxed">
                👆 {t.clickToExplore}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillaOlimpiaMap;

export const MAP_CONFIG = {
  apartments: [...PIANO_TERRA, ...PRIMO_PIANO],
  viewboxes: VIEWBOXES,
  colors: COLORS,
  lastUpdated: '2026-02-09T00:00:00.000Z',
};

/** Wrapper with router navigation */
export function VillaOlimpiaMapWithRouter({ language = 'it' }: { language?: Lang }) {
  const router = useRouter();
  return (
    <VillaOlimpiaMap
      language={language}
      onApartmentClick={(id) => router.push(`/appartamenti/${id}`)}
    />
  );
}
