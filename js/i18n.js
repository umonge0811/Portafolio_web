const I18N = {
    lang: 'es',

    init() {
        this.lang = localStorage.getItem('ticodev-lang') || 'es';
        this.apply();
        this.updateToggle();
    },

    toggle() {
        this.lang = this.lang === 'es' ? 'en' : 'es';
        localStorage.setItem('ticodev-lang', this.lang);
        this.apply();
        this.updateToggle();
    },

    apply() {
        const t = translations[this.lang];
        if (!t) return;

        // Texto simple
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) el.textContent = t[key];
        });

        // HTML (permite <span>, <b>, etc. dentro)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (t[key] !== undefined) el.innerHTML = t[key];
        });

        // Placeholders de inputs/textarea
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (t[key] !== undefined) el.placeholder = t[key];
        });

        // Atributo lang del documento
        document.documentElement.lang = this.lang;
    },

    updateToggle() {
        const btn = document.getElementById('lang-toggle');
        if (!btn) return;
        // Muestra el idioma al que cambiará (el otro)
        btn.textContent = this.lang === 'es' ? 'EN' : 'ES';
        btn.setAttribute('title', this.lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
    }
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
