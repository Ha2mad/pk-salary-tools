const svg = (d, size = 24) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${d}</svg>`;
export const icons = {
  logo: svg('<path d="M4 19V9l8-5 8 5v10"/><path d="M9 19v-6h6v6"/>', 20),
  calc: svg('<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M12 11h0M15 11h1M8 15h2M12 15h0M15 15h1M8 18h2"/>'),
  trend: svg('<path d="M3 17l6-6 4 4 7-7"/><path d="M14 8h6v6"/>'),
  coins: svg('<ellipse cx="9" cy="7" rx="6" ry="3"/><path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7"/><path d="M9 15v2c0 1.7 2.7 3 6 3s6-1.3 6-3v-5c0-1.7-2.7-3-6-3"/>'),
  shield: svg('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>', 18),
  doc: svg('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>', 18),
  bolt: svg('<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>', 18),
  menu: svg('<path d="M4 6h16M4 12h16M4 18h16"/>', 20),
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>', 18)
};
