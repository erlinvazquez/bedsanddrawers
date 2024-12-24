import Alpine from 'alpinejs';

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

// Initialize Alpine
window.Alpine = Alpine;
Alpine.start();