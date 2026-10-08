// TestSoft Lab (testsoftlab.com) - Interactive Engineering Suite

document.addEventListener('DOMContentLoaded', () => {
  // 1. Hero Device Preview Switcher
  const previewChips = document.querySelectorAll('.preview-chip');
  const heroScreenImg = document.getElementById('hero-screen-img');

  previewChips.forEach(chip => {
    chip.addEventListener('click', () => {
      previewChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const newSrc = chip.getAttribute('data-img');
      if (newSrc && heroScreenImg) {
        heroScreenImg.style.opacity = '0';
        heroScreenImg.style.transform = 'scale(0.96)';
        setTimeout(() => {
          heroScreenImg.src = newSrc;
          heroScreenImg.style.opacity = '1';
          heroScreenImg.style.transform = 'scale(1)';
        }, 180);
      }
    });
  });

  // 2. Portfolio Domain Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const appCards = document.querySelectorAll('.app-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      appCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          const categories = card.getAttribute('data-category') || '';
          if (categories.includes(filter)) {
            card.style.display = 'flex';
            card.style.opacity = '1';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // 3. Technical App Inspector Modal
  const modal = document.getElementById('app-modal');
  const modalClose = document.getElementById('modal-close');
  const inspectBtns = document.querySelectorAll('.btn-inspect');

  const modalIcon = document.getElementById('modal-app-icon');
  const modalTitle = document.getElementById('modal-app-title');
  const modalTagline = document.getElementById('modal-app-tagline');
  const modalSubsystem = document.getElementById('modal-app-subsystem');
  const modalScreenshot = document.getElementById('modal-app-screenshot');
  const modalDesc = document.getElementById('modal-app-desc');
  const modalTech = document.getElementById('modal-app-tech');
  const modalPrice = document.getElementById('modal-app-price');
  const modalStoreBtn = document.getElementById('modal-store-btn');

  inspectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.app-card');
      if (!card) return;

      const name = card.getAttribute('data-name');
      const tagline = card.getAttribute('data-tagline');
      const tech = card.getAttribute('data-tech');
      const price = card.getAttribute('data-price');
      const img = card.getAttribute('data-img');
      const icon = card.getAttribute('data-icon');
      const desc = card.getAttribute('data-desc');
      const appid = card.getAttribute('data-appid');

      modalTitle.textContent = name;
      modalTagline.innerHTML = tagline;
      modalSubsystem.textContent = tech;
      modalTech.textContent = tech;
      modalPrice.textContent = price;
      modalDesc.textContent = desc;
      modalIcon.src = icon;
      modalScreenshot.src = img;

      if (appid) {
        modalStoreBtn.href = `https://apps.apple.com/app/id${appid}`;
        modalStoreBtn.style.display = 'inline-flex';
      } else {
        modalStoreBtn.style.display = 'none';
      }

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // 4. Dynamic Email Inquiry Generator
  const contactTopic = document.getElementById('contact-topic');
  const emailComposeBtn = document.getElementById('email-compose-btn');

  if (contactTopic && emailComposeBtn) {
    contactTopic.addEventListener('change', () => {
      const topic = contactTopic.value;
      const subject = encodeURIComponent(`[TestSoft Lab Inquiry] ${topic}`);
      const body = encodeURIComponent(`Dear Hayri Odabaş & TestSoft Engineering Team,\n\nI am contacting you regarding: ${topic}.\n\nDetails / Scope of Inquiry:\n\nKind regards,\n`);
      emailComposeBtn.href = `mailto:hayriodabas@testsoftlab.com?subject=${subject}&body=${body}`;
    });
  }

  // 5. Navbar Scroll Elevation
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.14)';
      navbar.style.background = 'rgba(7, 9, 14, 0.92)';
    } else {
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
      navbar.style.background = 'rgba(7, 9, 14, 0.78)';
    }
  });
});
