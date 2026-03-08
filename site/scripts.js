// Minimal JS for mobile navigation toggle and dark-mode persistence
(function(){
  const html = document.documentElement;
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const nav = document.getElementById('primary-nav');
  const themeToggle = document.getElementById('theme-toggle');
  const THEME_KEY = 'site-theme';

  function setTheme(theme){
    if(theme === 'dark'){
      html.classList.add('dark');
      if(themeToggle) themeToggle.setAttribute('aria-pressed','true');
      localStorage.setItem(THEME_KEY,'dark');
    } else {
      html.classList.remove('dark');
      if(themeToggle) themeToggle.setAttribute('aria-pressed','false');
      localStorage.setItem(THEME_KEY,'light');
    }
  }

  function toggleTheme(){
    const isDark = html.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  }

  function initTheme(){
    const saved = localStorage.getItem(THEME_KEY);
    if(saved){
      setTheme(saved);
    } else {
      // Respect system preference by default
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  // Mobile nav toggle: toggles classes to make nav visible on small screens
  function toggleMobileNav(){
    if(!nav || !mobileToggle) return;
    const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    if(expanded){
      // close
      mobileToggle.setAttribute('aria-expanded','false');
      nav.classList.add('hidden');
      nav.classList.remove('block','absolute','right-4','top-16','p-4','rounded-lg','shadow-lg','bg-white','dark:bg-slate-900');
    } else {
      // open
      mobileToggle.setAttribute('aria-expanded','true');
      nav.classList.remove('hidden');
      nav.classList.add('block','absolute','right-4','top-16','p-4','rounded-lg','shadow-lg','bg-white','dark:bg-slate-900');
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    initTheme();

    if(mobileToggle){
      mobileToggle.addEventListener('click', toggleMobileNav);
    }

    if(themeToggle){
      themeToggle.addEventListener('click', toggleTheme);
    }

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      if(!nav || !mobileToggle) return;
      const isClickInside = nav.contains(e.target) || mobileToggle.contains(e.target);
      if(!isClickInside && mobileToggle.getAttribute('aria-expanded') === 'true'){
        toggleMobileNav();
      }
    });
  });
})();
