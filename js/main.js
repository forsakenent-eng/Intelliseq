// ============================================
// INTELLISEQ — Shared JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Scroll reveal ----
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    reveals.forEach(el => observer.observe(el));
  }

  // ---- Nav scroll state ----
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 24);
    });
  }

  // ---- Mobile hamburger ----
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }

  // ---- Active nav link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Accordion ----
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const body = trigger.nextElementSibling;
      const isOpen = trigger.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-trigger').forEach(t => {
        t.classList.remove('open');
        if (t.nextElementSibling) t.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        trigger.classList.add('open');
        body.classList.add('open');
      }
    });
  });

  // ---- Smooth anchor scroll with offset ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
