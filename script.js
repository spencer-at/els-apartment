const pageLanguage = document.documentElement.lang === "de" ? "de" : "en";

const copy = {
  en: {
    menuOpen: "Open menu",
    menuClose: "Close menu",
    invalidStayTitle: "Request not sent",
    invalidStay: "Please select a valid stay before submitting.",
    priceRequiredTitle: "Price check required",
    priceRequired: "Please wait until the current price and availability have been checked.",
    unavailable: "These dates are not available. Please choose another period.",
    liveRequired: "Live availability must be restored before this request can be submitted.",
    sendingTitle: "Sending request",
    sending: "Please keep this page open while we reserve your dates.",
    processingTitle: "Request is being processed",
    processing: "The server has not returned a confirmation yet. Please do not submit again. We will preserve your booking reference as soon as the response arrives.",
    successTitle: "Request sent successfully",
    successMessage: "Your booking request has been received.",
    bookingReference: " Booking reference: {id}.",
    emailSent: " A confirmation email has been sent to you.",
    emailFailed: " Your request was saved, but the confirmation email could not be sent. We will contact you directly.",
    failedTitle: "Request not sent",
    failedMessage: "The request could not be completed. Please check your details and try again.",
    submittedTitle: "Request submitted",
    submitted: "Your request reached the booking service. Please do not submit it again. We will contact you using the email address or phone number provided.",
    sendingButton: "Sending request…",
    from: "From",
    perMonth: "/ month",
    selectDates: "Select your dates to calculate the stay.",
    checking: "Checking live availability and price…",
    selectCheckIn: "Select your check-in date first.",
    chooseCheckOut: "Choose a check-out date between {min} and {max}.",
    minimumStay: "The minimum stay is 29 nights. Your selection is {nights} nights.",
    maximumStay: "The maximum stay is six calendar months. Please check out by {date}.",
    staySummary: "{nights} nights · {start} to {end}",
    overlap: "These dates overlap an existing booking or temporary hold.",
    invalidCodeTitle: "Booking code not applied",
    invalidCodeMessage: "This booking code is invalid, inactive or not valid for the selected stay.",
    discountCode: "Booking code {code}",
    discount: "Discount",
    nights: "nights",
    cleaning: "Final cleaning",
    total: "Estimated accommodation total",
    deposit: "Refundable deposit",
    disclaimer: "The quote is recalculated and stored by the booking server when you submit.",
    estimate: "Estimated price only. Live availability is temporarily unavailable.",
    festivalRate: "July / August Festival rate",
    standardRate: "Standard rate"
  },
  de: {
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    invalidStayTitle: "Anfrage nicht gesendet",
    invalidStay: "Bitte wählen Sie vor dem Absenden einen gültigen Aufenthaltszeitraum.",
    priceRequiredTitle: "Preisprüfung erforderlich",
    priceRequired: "Bitte warten Sie, bis der aktuelle Preis und die Verfügbarkeit geprüft wurden.",
    unavailable: "Diese Reisedaten sind nicht verfügbar. Bitte wählen Sie einen anderen Zeitraum.",
    liveRequired: "Die Live-Verfügbarkeit muss wiederhergestellt sein, bevor die Anfrage gesendet werden kann.",
    sendingTitle: "Anfrage wird gesendet",
    sending: "Bitte lassen Sie diese Seite geöffnet, während wir Ihre Reisedaten vorläufig reservieren.",
    processingTitle: "Anfrage wird verarbeitet",
    processing: "Der Server hat noch keine Bestätigung zurückgegeben. Bitte senden Sie die Anfrage nicht erneut.",
    successTitle: "Anfrage erfolgreich gesendet",
    successMessage: "Ihre Buchungsanfrage ist bei uns eingegangen.",
    bookingReference: " Buchungsreferenz: {id}.",
    emailSent: " Eine Bestätigung wurde per E-Mail an Sie gesendet.",
    emailFailed: " Ihre Anfrage wurde gespeichert, die Bestätigungs-E-Mail konnte jedoch nicht gesendet werden. Wir kontaktieren Sie direkt.",
    failedTitle: "Anfrage nicht gesendet",
    failedMessage: "Die Anfrage konnte nicht abgeschlossen werden. Bitte prüfen Sie Ihre Angaben und versuchen Sie es erneut.",
    submittedTitle: "Anfrage übermittelt",
    submitted: "Ihre Anfrage hat den Buchungsservice erreicht. Bitte senden Sie sie nicht erneut. Wir kontaktieren Sie über die angegebene E-Mail-Adresse oder Telefonnummer.",
    sendingButton: "Anfrage wird gesendet…",
    from: "Ab",
    perMonth: "/ Monat",
    selectDates: "Wählen Sie Ihre Reisedaten, um den Aufenthalt zu berechnen.",
    checking: "Live-Verfügbarkeit und Preis werden geprüft…",
    selectCheckIn: "Wählen Sie zuerst Ihr Anreisedatum.",
    chooseCheckOut: "Wählen Sie ein Abreisedatum zwischen {min} und {max}.",
    minimumStay: "Der Mindestaufenthalt beträgt 29 Nächte. Ihre Auswahl umfasst {nights} Nächte.",
    maximumStay: "Der Höchstaufenthalt beträgt sechs Kalendermonate. Bitte reisen Sie spätestens am {date} ab.",
    staySummary: "{nights} Nächte · {start} bis {end}",
    overlap: "Diese Reisedaten überschneiden sich mit einer bestehenden Buchung oder vorläufigen Reservierung.",
    invalidCodeTitle: "Buchungscode nicht angewendet",
    invalidCodeMessage: "Dieser Buchungscode ist ungültig, inaktiv oder für den gewählten Aufenthalt nicht verwendbar.",
    discountCode: "Buchungscode {code}",
    discount: "Rabatt",
    nights: "Nächte",
    cleaning: "Endreinigung",
    total: "Voraussichtlicher Unterkunftspreis",
    deposit: "Rückzahlbare Kaution",
    disclaimer: "Das Angebot wird beim Absenden vom Buchungsserver neu berechnet und gespeichert.",
    estimate: "Nur geschätzter Preis. Die Live-Verfügbarkeit ist vorübergehend nicht erreichbar.",
    festivalRate: "Festspielpreis Juli / August",
    standardRate: "Standardpreis"
  }
}[pageLanguage];

const galleryPhotos = [
  ["8745", "Bedroom with double bed and soft natural light", "Schlafzimmer mit Doppelbett und weichem Tageslicht"],
  ["8942", "Lavender detail on the covered balcony", "Lavendel-Detail auf dem überdachten Balkon"],
  ["8945", "Balcony table and seating for two", "Balkontisch und Sitzplätze für zwei"],
  ["8956", "Covered balcony at ELS_Apartment", "Überdachter Balkon des ELS_Apartments"],
  ["8905", "Microwave and compact kitchen appliances", "Mikrowelle und kompakte Küchengeräte"],
  ["8909", "Nespresso machine, kettle and kitchen sink", "Nespresso-Maschine, Wasserkocher und Küchenspüle"],
  ["8897", "Fully equipped kitchen with oven and refrigerator", "Voll ausgestattete Küche mit Backofen und Kühlschrank"],
  ["8926", "Kitchen sink and practical cleaning supplies", "Küchenspüle und praktische Reinigungsutensilien"],
  ["8941", "Cookware, knives and kitchen accessories", "Kochgeschirr, Messer und Küchenzubehör"],
  ["8881", "Living room with Smart TV and soundbar", "Wohnzimmer mit Smart-TV und Soundbar"],
  ["8919", "Built-in dishwasher in the kitchen", "Integrierter Geschirrspüler in der Küche"],
  ["8921", "Glasses and tableware in the kitchen cabinets", "Gläser und Geschirr in den Küchenschränken"],
  ["8958", "Glass shower enclosure in the bathroom", "Glasduschkabine im Badezimmer"],
  ["8836", "Living room decor and warm ambient lighting", "Wohnzimmerdekoration und warme Beleuchtung"],
  ["8826", "Convertible sofa and coffee table in the living room", "Schlafsofa und Couchtisch im Wohnzimmer"],
  ["8853", "Dining area with seating for four", "Essbereich mit Sitzplätzen für vier Personen"],
  ["8885", "Dining table set for a comfortable meal", "Gedeckter Esstisch für eine gemütliche Mahlzeit"],
  ["8915", "Cookware and storage in the fitted kitchen", "Kochgeschirr und Stauraum in der Einbauküche"],
  ["8959", "Bathroom with shower, washbasin and washing machine", "Badezimmer mit Dusche, Waschbecken und Waschmaschine"],
  ["8842", "Bright furnished living room with convertible sofa", "Helles möbliertes Wohnzimmer mit Schlafsofa"],
  ["8800", "Entrance storage with mirror and decorative details", "Stauraum im Eingangsbereich mit Spiegel und Dekoration"],
  ["8747", "Double bed with bedside lighting", "Doppelbett mit Nachttischbeleuchtung"],
  ["8975", "Walk-in shower fittings", "Armaturen der bodengleichen Dusche"],
  ["8752", "Spacious bedroom with double bed and wardrobe", "Geräumiges Schlafzimmer mit Doppelbett und Kleiderschrank"],
  ["8749", "Bedside table and reading lamp", "Nachttisch und Leselampe"],
  ["8783", "Vacuum cleaner and iron provided", "Staubsauger und Bügeleisen inklusive"],
  ["8806", "Welcoming entrance hall with storage", "Einladender Eingangsbereich mit Stauraum"],
  ["8765", "Bedroom wardrobe with brass handles", "Schlafzimmerschrank mit Messinggriffen"],
  ["8816", "Large entrance mirror and shoe cabinet", "Großer Eingangsspiegel und Schuhschrank"],
  ["8772", "Generous wardrobe drawers and storage", "Großzügige Schubladen und Stauraum im Kleiderschrank"]
].map(([id, en, de]) => ({
  id,
  caption: pageLanguage === "de" ? de : en
}));

document.addEventListener("DOMContentLoaded", () => {
  const fallbackPricing = {
    baseNightlyRate: 85,
    festivalNightlyRate: 95,
    festivalMonths: [7, 8],
    cleaningFee: 0,
    deposit: 2100,
    currency: "EUR"
  };

  if (window.lucide) {
    window.lucide.createIcons();
  }

  document.querySelectorAll("[data-language]").forEach((link) => {
    link.addEventListener("click", () => {
      localStorage.setItem("els-language", link.dataset.language);
    });
  });

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-button");
  const bookingForm = document.querySelector("#booking-form");
  const checkIn = document.querySelector("#check-in");
  const checkOut = document.querySelector("#check-out");
  const staySummary = document.querySelector("#stay-summary");
  const priceSummary = document.querySelector("#price-summary");
  const formStatus = document.querySelector("#form-status");
  const requestId = document.querySelector("#request-id");
  const formStartedAt = document.querySelector("#form-started-at");
  const monthlyFromRate = document.querySelector("#monthly-from-rate");
  const bookingCode = document.querySelector("#booking-code");
  const submitButton = bookingForm?.querySelector(".booking-submit");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 120);
  }, { passive: true });

  menuButton.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? copy.menuClose : copy.menuOpen);
    menuButton.innerHTML = open
      ? '<i data-lucide="x"></i>'
      : '<i data-lucide="menu"></i>';
    if (window.lucide) window.lucide.createIcons();
  });

  header.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", copy.menuOpen);
      menuButton.innerHTML = '<i data-lucide="menu"></i>';
      if (window.lucide) window.lucide.createIcons();
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

  setupPhotoGallery();

  if (!bookingForm || !checkIn || !checkOut) return;

  const endpoint = bookingForm.action;
  let latestQuote = null;
  let quoteRequestNumber = 0;
  let submissionPending = false;
  let submissionTimer = null;
  let codeUpdateTimer = null;

  requestId.value = createRequestId();
  formStartedAt.value = String(Date.now());

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  checkIn.min = toDateInput(today);
  checkOut.disabled = true;

  loadPricingConfig();

  checkIn.addEventListener("change", () => {
    if (checkIn.value) {
      const start = parseLocalDate(checkIn.value);
      checkOut.value = toDateInput(addDays(start, 29));
    }
    updateBookingEstimate();
  });

  checkOut.addEventListener("change", updateBookingEstimate);
  bookingCode?.addEventListener("input", () => {
    bookingCode.value = bookingCode.value.toUpperCase().replace(/[^A-Z0-9_-]/g, "");
    clearTimeout(codeUpdateTimer);
    codeUpdateTimer = setTimeout(updateBookingEstimate, 350);
  });

  bookingForm.addEventListener("submit", (event) => {
    clearFormStatus();
    const validation = validateDates();
    if (!validation.valid) {
      event.preventDefault();
      showFormStatus("error", copy.invalidStayTitle, copy.invalidStay);
      return;
    }

    if (!latestQuote || latestQuote.key !== quoteKey()) {
      event.preventDefault();
      showFormStatus("error", copy.priceRequiredTitle, copy.priceRequired);
      updateBookingEstimate();
      return;
    }

    if (latestQuote.available !== true) {
      event.preventDefault();
      showFormStatus(
        "error",
        copy.invalidStayTitle,
        latestQuote.available === false
          ? copy.unavailable
          : copy.liveRequired
      );
      return;
    }

    if (latestQuote.codeValid === false) {
      event.preventDefault();
      showFormStatus("error", copy.invalidCodeTitle, copy.invalidCodeMessage);
      return;
    }

    showFormStatus("pending", copy.sendingTitle, copy.sending);
    submissionPending = true;
    clearTimeout(submissionTimer);
    submissionTimer = setTimeout(() => {
      if (!submissionPending) return;
      setSubmitting(false);
      showFormStatus(
        "pending",
        copy.processingTitle,
        copy.processing
      );
    }, 20000);
    setSubmitting(true);
  });

  window.addEventListener("message", (event) => {
    if (!event.data || event.data.type !== "els-booking") return;
    if (event.origin && !/\.googleusercontent\.com$|^https:\/\/script\.google\.com$/.test(event.origin)) return;

    submissionPending = false;
    clearTimeout(submissionTimer);
    setSubmitting(false);

    if (event.data.success) {
      const bookingReference = event.data.bookingId
        ? copy.bookingReference.replace("{id}", event.data.bookingId)
        : "";
      const emailConfirmation = event.data.emailSent === true
        ? copy.emailSent
        : event.data.emailSent === false
          ? copy.emailFailed
          : "";
      showFormStatus(
        "success",
        copy.successTitle,
        `${copy.successMessage}${bookingReference}${emailConfirmation}`
      );
      bookingForm.reset();
      requestId.value = createRequestId();
      formStartedAt.value = String(Date.now());
      checkOut.disabled = true;
      latestQuote = null;
      staySummary.className = "stay-summary";
      staySummary.textContent = copy.selectDates;
      priceSummary.hidden = true;
    } else {
      showFormStatus("error", copy.failedTitle, pageLanguage === "de" ? copy.failedMessage : event.data.message);
    }
  });

  const resultFrame = document.querySelector(".booking-result-frame");
  resultFrame?.addEventListener("load", () => {
    if (!submissionPending) return;
    setTimeout(() => {
      if (!submissionPending) return;
      submissionPending = false;
      clearTimeout(submissionTimer);
      setSubmitting(false);
      showFormStatus(
        "success",
        copy.submittedTitle,
        copy.submitted
      );
      formStatus.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 1200);
  });

  function setSubmitting(submitting) {
    submitButton.disabled = submitting;
    submitButton.classList.toggle("sending", submitting);
    submitButton.innerHTML = submitting
      ? `<span>${escapeHtml(copy.sendingButton)}</span><i data-lucide="loader-circle"></i>`
      : `<span>${escapeHtml(submitButton.dataset.defaultLabel)}</span><i data-lucide="arrow-up-right"></i>`;
    if (window.lucide) window.lucide.createIcons();
  }

  function clearFormStatus() {
    formStatus.hidden = true;
    formStatus.className = "form-status";
    formStatus.innerHTML = "";
  }

  function showFormStatus(type, title, message) {
    const icon = type === "success" ? "circle-check" : type === "pending" ? "loader-circle" : "circle-alert";
    formStatus.hidden = false;
    formStatus.className = `form-status ${type}`;
    formStatus.innerHTML =
      `<span class="form-status-icon"><i data-lucide="${icon}"></i></span>` +
      `<div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(message)}</p></div>`;
    if (window.lucide) window.lucide.createIcons();
  }

  async function loadPricingConfig() {
    try {
      const config = await bookingApi(endpoint, { action: "config" });
      const lowestNightlyRate = Math.min(config.baseNightlyRate, config.festivalNightlyRate);
      monthlyFromRate.textContent = `${copy.from} ${formatCurrency(lowestNightlyRate * 30, config.currency)} ${copy.perMonth}`;
    } catch (error) {
      const lowestNightlyRate = Math.min(
        fallbackPricing.baseNightlyRate,
        fallbackPricing.festivalNightlyRate
      );
      monthlyFromRate.textContent =
        `${copy.from} ${formatCurrency(lowestNightlyRate * 30, fallbackPricing.currency)} ${copy.perMonth}`;
    }
  }

  async function updateBookingEstimate() {
    latestQuote = null;
    const validation = validateDates();
    priceSummary.hidden = true;

    if (!validation.valid) return;

    const currentRequest = ++quoteRequestNumber;
    priceSummary.hidden = false;
    priceSummary.className = "price-summary loading";
    priceSummary.textContent = copy.checking;

    try {
      const quote = await bookingApi(endpoint, {
        action: "quote",
        checkIn: checkIn.value,
        checkOut: checkOut.value,
        bookingCode: bookingCode?.value || ""
      });

      if (currentRequest !== quoteRequestNumber) return;

      quote.key = quoteKey();
      latestQuote = quote;
      renderQuote(quote);
    } catch (error) {
      if (currentRequest !== quoteRequestNumber) return;
      const quote = calculateFallbackQuote(
        parseLocalDate(checkIn.value),
        parseLocalDate(checkOut.value),
        fallbackPricing
      );
      quote.key = quoteKey();
      quote.available = null;
      latestQuote = quote;
      renderFallbackQuote(quote);
    }
  }

  function validateDates() {
    clearFormStatus();
    staySummary.className = "stay-summary";

    if (!checkIn.value) {
      checkOut.value = "";
      checkOut.disabled = true;
      staySummary.textContent = copy.selectCheckIn;
      return { valid: false };
    }

    const start = parseLocalDate(checkIn.value);
    const minimumEnd = addDays(start, 29);
    const maximumEnd = addMonths(start, 6);
    checkOut.disabled = false;
    checkOut.min = toDateInput(minimumEnd);
    checkOut.max = toDateInput(maximumEnd);

    if (!checkOut.value) {
      staySummary.textContent = copy.chooseCheckOut
        .replace("{min}", formatDate(minimumEnd))
        .replace("{max}", formatDate(maximumEnd));
      return { valid: false };
    }

    const end = parseLocalDate(checkOut.value);
    const nights = Math.round((end - start) / 86400000);

    if (end < minimumEnd) {
      staySummary.textContent = copy.minimumStay.replace("{nights}", nights);
      staySummary.classList.add("invalid");
      return { valid: false };
    }

    if (end > maximumEnd) {
      staySummary.textContent = copy.maximumStay.replace("{date}", formatDate(maximumEnd));
      staySummary.classList.add("invalid");
      return { valid: false };
    }

    staySummary.textContent = copy.staySummary
      .replace("{nights}", nights)
      .replace("{start}", formatDate(start))
      .replace("{end}", formatDate(end));
    staySummary.classList.add("valid");
    return { valid: true, nights };
  }

  function renderQuote(quote) {
    if (quote.codeValid === false) {
      priceSummary.className = "price-summary unavailable";
      priceSummary.innerHTML =
        `<strong>${escapeHtml(copy.invalidCodeTitle)}</strong>` +
        `<p>${escapeHtml(copy.invalidCodeMessage)}</p>`;
      return;
    }

    if (!quote.available) {
      priceSummary.className = "price-summary unavailable";
      priceSummary.textContent = copy.overlap;
      return;
    }

    const lines = quote.segments.map((segment) => (
      `<div class="price-line"><span>${escapeHtml(localizeRateLabel(segment.label))} · ${segment.nights} ${copy.nights}</span>` +
      `<strong>${formatCurrency(segment.subtotal, quote.currency)}</strong></div>`
    )).join("");

    const cleaningLine = quote.cleaningFee > 0
      ? `<div class="price-line"><span>${copy.cleaning}</span><strong>${formatCurrency(quote.cleaningFee, quote.currency)}</strong></div>`
      : "";
    const discountLine = quote.discount > 0
      ? `<div class="price-line discount"><span>${escapeHtml(copy.discountCode.replace("{code}", quote.bookingCode))}</span>` +
        `<strong>−${formatCurrency(quote.discount, quote.currency)}</strong></div>`
      : "";

    priceSummary.className = "price-summary";
    priceSummary.innerHTML =
      `<div class="price-breakdown">${lines}${discountLine}${cleaningLine}` +
      `<div class="price-line total"><span>${copy.total}</span><strong>${formatCurrency(quote.total, quote.currency)}</strong></div>` +
      `<div class="price-line deposit"><span>${copy.deposit}</span><strong>${formatCurrency(quote.deposit, quote.currency)}</strong></div>` +
      `<p class="price-disclaimer">${copy.disclaimer}</p></div>`;
  }

  function renderFallbackQuote(quote) {
    renderQuote({ ...quote, available: true });
    priceSummary.classList.add("estimate");
    priceSummary.insertAdjacentHTML(
      "afterbegin",
      `<p class="price-warning">${copy.estimate}</p>`
    );
  }

  function quoteKey() {
    return `${checkIn.value}|${checkOut.value}|${bookingCode?.value || ""}`;
  }
});

function setupPhotoGallery() {
  const lightbox = document.querySelector("#photo-lightbox");
  const image = document.querySelector("#lightbox-image");
  const caption = document.querySelector("#lightbox-caption");
  const counter = document.querySelector("#lightbox-counter");
  const thumbs = document.querySelector("#lightbox-thumbs");
  const closeButton = lightbox?.querySelector(".lightbox-close");
  const previousButton = lightbox?.querySelector(".lightbox-prev");
  const nextButton = lightbox?.querySelector(".lightbox-next");

  if (!lightbox || !image || !caption || !counter || !thumbs) return;

  let currentIndex = 0;
  let opener = null;
  let thumbnailsBuilt = false;
  let pointerStartX = null;

  const fullPath = (photo) => `/images/gallery/full/pp-${photo.id}.webp`;
  const thumbPath = (photo) => `/images/gallery/thumbs/pp-${photo.id}.webp`;

  function normalizeIndex(index) {
    return (index + galleryPhotos.length) % galleryPhotos.length;
  }

  function buildThumbnails() {
    if (thumbnailsBuilt) return;
    galleryPhotos.forEach((photo, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "lightbox-thumb";
      button.dataset.index = String(index);
      button.setAttribute(
        "aria-label",
        pageLanguage === "de" ? `Foto ${index + 1} anzeigen` : `Show photo ${index + 1}`
      );
      button.innerHTML = `<img src="${thumbPath(photo)}" alt="" loading="lazy" width="74" height="52">`;
      button.addEventListener("click", () => showPhoto(index));
      thumbs.appendChild(button);
    });
    thumbnailsBuilt = true;
  }

  function preloadAdjacent() {
    [-1, 1].forEach((offset) => {
      const preload = new Image();
      preload.src = fullPath(galleryPhotos[normalizeIndex(currentIndex + offset)]);
    });
  }

  function showPhoto(index) {
    currentIndex = normalizeIndex(index);
    const photo = galleryPhotos[currentIndex];
    image.src = fullPath(photo);
    image.alt = photo.caption;
    caption.textContent = photo.caption;
    counter.textContent = `${currentIndex + 1} / ${galleryPhotos.length}`;

    thumbs.querySelectorAll(".lightbox-thumb").forEach((button) => {
      const active = Number(button.dataset.index) === currentIndex;
      button.classList.toggle("active", active);
      button.setAttribute("aria-current", active ? "true" : "false");
      if (active) button.scrollIntoView({ block: "nearest", inline: "center" });
    });

    preloadAdjacent();
  }

  function openGallery(index, trigger) {
    opener = trigger;
    buildThumbnails();
    showPhoto(index);
    lightbox.showModal();
    document.body.classList.add("lightbox-open");
    closeButton?.focus();
  }

  function closeGallery() {
    lightbox.close();
  }

  document.querySelectorAll("[data-gallery-index]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openGallery(Number(trigger.dataset.galleryIndex) || 0, trigger);
    });
  });

  closeButton?.addEventListener("click", closeGallery);
  previousButton?.addEventListener("click", () => showPhoto(currentIndex - 1));
  nextButton?.addEventListener("click", () => showPhoto(currentIndex + 1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeGallery();
  });

  lightbox.addEventListener("close", () => {
    document.body.classList.remove("lightbox-open");
    opener?.focus();
  });

  lightbox.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPhoto(currentIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showPhoto(currentIndex + 1);
    }
  });

  lightbox.addEventListener("pointerdown", (event) => {
    pointerStartX = event.clientX;
  });

  lightbox.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(distance) < 60) return;
    showPhoto(currentIndex + (distance < 0 ? 1 : -1));
  });
}

function bookingApi(endpoint, parameters) {
  return new Promise((resolve, reject) => {
    const callback = `_elsBooking_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const timeout = window.setTimeout(() => finish(new Error("Booking API timeout")), 12000);

    const finish = (error, data) => {
      window.clearTimeout(timeout);
      delete window[callback];
      script.remove();
      if (error) reject(error);
      else resolve(data);
    };

    window[callback] = (data) => {
      if (!data || data.success === false) {
        finish(new Error(data?.message || "Booking API error"));
      } else {
        finish(null, data);
      }
    };

    const url = new URL(endpoint);
    Object.entries({ ...parameters, callback }).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    script.src = url.toString();
    script.onerror = () => finish(new Error("Booking API unavailable"));
    document.head.appendChild(script);
  });
}

function parseLocalDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function addMonths(date, months) {
  const result = new Date(date);
  const originalDay = result.getDate();
  result.setDate(1);
  result.setMonth(result.getMonth() + months);
  const lastDay = new Date(result.getFullYear(), result.getMonth() + 1, 0).getDate();
  result.setDate(Math.min(originalDay, lastDay));
  return result;
}

function formatDate(date) {
  return new Intl.DateTimeFormat(pageLanguage === "de" ? "de-AT" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date);
}

function formatCurrency(value, currency) {
  return new Intl.NumberFormat(pageLanguage === "de" ? "de-AT" : "en-AT", {
    style: "currency",
    currency: currency || "EUR",
    maximumFractionDigits: 2
  }).format(value);
}

function calculateFallbackQuote(checkIn, checkOut, pricing) {
  const segments = [];
  let current = new Date(checkIn);
  let accommodation = 0;

  while (current < checkOut) {
    const festival = pricing.festivalMonths.includes(current.getMonth() + 1);
    const rate = festival ? pricing.festivalNightlyRate : pricing.baseNightlyRate;
    const type = festival ? "festival" : "standard";
    const label = festival ? copy.festivalRate : copy.standardRate;
    const lastSegment = segments[segments.length - 1];

    if (lastSegment?.type === type) {
      lastSegment.nights += 1;
      lastSegment.subtotal += rate;
    } else {
      segments.push({ type, label, nights: 1, nightlyRate: rate, subtotal: rate });
    }

    accommodation += rate;
    current.setDate(current.getDate() + 1);
  }

  return {
    nights: segments.reduce((sum, segment) => sum + segment.nights, 0),
    accommodation,
    cleaningFee: pricing.cleaningFee,
    total: accommodation + pricing.cleaningFee,
    deposit: pricing.deposit,
    currency: pricing.currency,
    segments
  };
}

function localizeRateLabel(label) {
  const normalized = String(label || "").toLowerCase();
  if (normalized.includes("festival") || normalized.includes("july") || normalized.includes("august")) {
    return copy.festivalRate;
  }
  if (normalized.includes("standard")) return copy.standardRate;
  return label;
}

function createRequestId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `ELS-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
