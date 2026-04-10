/**
 * Cookie Consent — Ticodevcr
 * ─────────────────────────────────────────────
 * Preferencias guardadas en localStorage bajo 'ticodev-cookies'
 * Categorías: necessary (siempre activas) · analytics (opcional → GA4)
 *
 * Para activar Google Analytics:
 *   1. Obtén tu Measurement ID en analytics.google.com (formato G-XXXXXXXXXX)
 *   2. Reemplaza el valor de GA_ID abajo con tu ID real
 */

const COOKIES = {

    KEY:   'ticodev-cookies',
    GA_ID: 'G-ZWH6QXGPR0',

    // ── Persistencia ────────────────────────────────────────
    get() {
        try { return JSON.parse(localStorage.getItem(this.KEY)); }
        catch { return null; }
    },

    set(prefs) {
        localStorage.setItem(this.KEY, JSON.stringify({
            ...prefs,
            savedAt: Date.now()
        }));
    },

    // ── Google Analytics 4 ──────────────────────────────────
    loadGA() {
        // No carga si el ID sigue siendo el placeholder
        if (!this.GA_ID || this.GA_ID === 'G-XXXXXXXXXX') return;
        if (window._gaLoaded) return;
        window._gaLoaded = true;

        const s = document.createElement('script');
        s.src = `https://www.googletagmanager.com/gtag/js?id=${this.GA_ID}`;
        s.async = true;
        document.head.appendChild(s);

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', this.GA_ID, {
            anonymize_ip: true,          // buenas prácticas de privacidad
            cookie_flags: 'SameSite=None;Secure'
        });
    },

    // ── Inicialización ──────────────────────────────────────
    init() {
        const prefs = this.get();

        if (!prefs) {
            // Primera visita — mostrar banner después de que las animaciones del hero terminen
            setTimeout(() => this.showBanner(), 1800);
            return;
        }

        // Ya eligió — respetar preferencia y mostrar botón de reabrir
        if (prefs.analytics) this.loadGA();
        this.showReopenBtn();
    },

    // ── Banner ──────────────────────────────────────────────
    showBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.classList.add('visible');
    },

    hideBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.classList.remove('visible');
        this.showReopenBtn();
    },

    // ── Acciones del banner ─────────────────────────────────
    acceptAll() {
        this.set({ necessary: true, analytics: true });
        this.loadGA();
        this.hideBanner();
    },

    rejectAll() {
        this.set({ necessary: true, analytics: false });
        this.hideBanner();
    },

    // ── Modal de personalización ─────────────────────────────
    showModal() {
        const prefs    = this.get() || {};
        const toggle   = document.getElementById('toggle-analytics');
        if (toggle) toggle.checked = prefs.analytics !== false;

        const modal = document.getElementById('cookie-modal');
        if (modal) modal.classList.add('visible');
    },

    hideModal() {
        const modal = document.getElementById('cookie-modal');
        if (modal) modal.classList.remove('visible');
    },

    saveCustom() {
        const toggle    = document.getElementById('toggle-analytics');
        const analytics = toggle ? toggle.checked : false;
        this.set({ necessary: true, analytics });
        if (analytics) this.loadGA();
        this.hideModal();
        this.hideBanner();
    },

    // ── Botón para reabrir la configuración ─────────────────
    showReopenBtn() {
        const btn = document.getElementById('cookie-reopen');
        if (btn) btn.classList.add('visible');
    },

    reopenSettings() {
        this.showModal();
    }
};

document.addEventListener('DOMContentLoaded', () => COOKIES.init());
