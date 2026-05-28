/* main.js — SpeakPaste Landing Page */

// --- Scroll-driven nav transparency ---
const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// --- Scroll reveal for .reveal elements ---
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger child reveals inside grids
        const delay = entry.target.dataset.delay ?? 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Number(delay));
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

// Assign stagger delays to grid children
document.querySelectorAll('.features-grid .feature-card').forEach((card, i) => {
  card.dataset.delay = i * 80;
});
document.querySelectorAll('.steps .step').forEach((step, i) => {
  step.dataset.delay = i * 120;
});

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// --- Copy gatekeeper command ---
function copyGatekeeperCmd() {
  const cmd = 'xattr -d com.apple.quarantine /Applications/SpeakPaste.app';
  navigator.clipboard.writeText(cmd).then(() => {
    const label = document.querySelector('.copy-label');
    if (label) {
      label.textContent = 'Copied!';
      setTimeout(() => { label.textContent = 'Copy'; }, 2200);
    }
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = cmd;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
}

// Expose to global for onclick attribute
window.copyGatekeeperCmd = copyGatekeeperCmd;

// --- Smooth anchor scroll ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// --- Track download button clicks (console only — no analytics) ---
document.querySelectorAll('[id$="-download-btn"]').forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('[SpeakPaste] Download initiated');
  });
});
