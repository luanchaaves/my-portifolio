/**
 * Luan Chaves - DevOps Engineer Portfolio
 * Core JavaScript Logic: Navigation, Scroll Tracking, Animations, Metrics Count-up,
 * Architecture Diagram Interactivity, and Form Handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-ready');
  initNavbar();
  initScrollProgress();
  initScrollReveal();
  initMetricCounters();
  initArchitectureTabs();
  initFormHandler();
  initCopyButtons();
  initGithubStats();
});

/* ==========================================================================
   1. Navigation & Mobile Menu
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const btnMenu = document.getElementById('btn-menu');
  const menuMobile = document.getElementById('menu-mobile');
  const overlay = document.getElementById('overlay-menu');
  const btnFechar = document.getElementById('btn-fechar');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky header background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Open mobile menu
  function openMenu() {
    menuMobile?.classList.add('abrir-menu');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
    btnFechar?.focus();
  }

  // Close mobile menu
  function closeMenu() {
    menuMobile?.classList.remove('abrir-menu');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  btnMenu?.addEventListener('click', openMenu);
  btnFechar?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  // Close when clicking mobile links
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuMobile?.classList.contains('abrir-menu')) {
      closeMenu();
    }
  });

  // Active section indicator using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const navMap = new Map();
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      navMap.set(href.substring(1), link);
    }
  });

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(l => l.classList.remove('active'));
        mobileNavLinks.forEach(l => l.classList.remove('active'));

        const activeDesktopLink = navMap.get(id);
        if (activeDesktopLink) {
          activeDesktopLink.classList.add('active');
        }

        const activeMobileLink = document.querySelector(`.mobile-nav-link[href="#${id}"]`);
        if (activeMobileLink) {
          activeMobileLink.classList.add('active');
        }
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(sec => sectionObserver.observe(sec));
}

/* ==========================================================================
   2. Scroll Progress Bar
   ========================================================================== */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    progressBar.style.width = `${scrolled}%`;
  }, { passive: true });
}

/* ==========================================================================
   3. Scroll Reveal Animation
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('revealed'));
    return;
  }

  // Pre-reveal elements already visible in viewport
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= viewportHeight * 0.95 && rect.bottom >= 0) {
      el.classList.add('revealed');
    }
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -30px 0px'
  });

  reveals.forEach(el => {
    if (!el.classList.contains('revealed')) {
      revealObserver.observe(el);
    }
  });
}

/* ==========================================================================
   4. Metric Counters Animation
   ========================================================================== */
function initMetricCounters() {
  const counterElements = document.querySelectorAll('.metric-number[data-target]');
  if (counterElements.length === 0) return;

  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const isDecimal = el.getAttribute('data-decimal') === 'true';
        const duration = 1500;
        const startTime = performance.now();

        function updateCount(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = target * easeOut;

          if (isDecimal) {
            el.textContent = `${prefix}${currentVal.toFixed(1)}${suffix}`;
          } else {
            el.textContent = `${prefix}${Math.floor(currentVal)}${suffix}`;
          }

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = `${prefix}${target}${suffix}`;
          }
        }

        requestAnimationFrame(updateCount);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counterElements.forEach(el => countObserver.observe(el));
}

/* ==========================================================================
   5. Architecture Diagram Tabs
   ========================================================================== */
function initArchitectureTabs() {
  const tabs = document.querySelectorAll('.arch-tab-btn');
  const panels = document.querySelectorAll('.arch-diagram-panel');

  if (!tabs.length || !panels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPanelId = tab.getAttribute('data-target');

      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('hidden', 'true');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const activePanel = document.getElementById(targetPanelId);
      if (activePanel) {
        activePanel.classList.add('active');
        activePanel.removeAttribute('hidden');
      }
    });
  });
}

/* ==========================================================================
   6. Contact Form Handling
   ========================================================================== */
function initFormHandler() {
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Enviar Mensagem';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="bi bi-arrow-repeat spin"></i> Enviando...';
    }

    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        showFormMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
        form.reset();
      } else {
        fallbackMailto(formData);
      }
    } catch (err) {
      fallbackMailto(formData);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });

  function fallbackMailto(formData) {
    const nome = formData.get('nome') || '';
    const email = formData.get('email') || '';
    const mensagem = formData.get('mensagem') || '';
    const subject = encodeURIComponent(`Contato Portfólio DevOps - ${nome}`);
    const body = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`);
    
    showFormMessage('Redirecionando para envio de e-mail...', 'info');
    setTimeout(() => {
      window.location.href = `mailto:luanchaves1011@gmail.com?subject=${subject}&body=${body}`;
    }, 800);
  }

  function showFormMessage(text, type) {
    if (!formStatus) return;
    formStatus.textContent = text;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';

    setTimeout(() => {
      formStatus.style.display = 'none';
    }, 6000);
  }
}

/* ==========================================================================
   7. Copy to Clipboard Utility
   ========================================================================== */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="bi bi-check2"></i> Copiado!';
        btn.classList.add('copied');

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.warn('Clipboard write failed', err);
      }
    });
  });
}

/* ==========================================================================
   8. GitHub Public Stats Integration
   ========================================================================== */
async function initGithubStats() {
  const reposCountEl = document.getElementById('gh-repos-count');
  const followersCountEl = document.getElementById('gh-followers-count');
  if (!reposCountEl && !followersCountEl) return;

  const username = 'luanchaaves';
  
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (!userRes.ok) throw new Error('GitHub API error');
    const user = await userRes.json();

    if (reposCountEl && typeof user.public_repos === 'number') {
      reposCountEl.textContent = `${user.public_repos}`;
    }
    if (followersCountEl && typeof user.followers === 'number') {
      followersCountEl.textContent = `${user.followers}`;
    }
  } catch (err) {
    // Keep static fallback
    console.info('Using static fallback for GitHub statistics.');
  }
}
