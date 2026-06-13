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
  const submitButton = bookingForm?.querySelector(".booking-submit");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 120);
  }, { passive: true });

  menuButton.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.innerHTML = open
      ? '<i data-lucide="x"></i>'
      : '<i data-lucide="menu"></i>';
    if (window.lucide) window.lucide.createIcons();
  });

  header.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
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

  if (!bookingForm || !checkIn || !checkOut) return;

  const endpoint = bookingForm.action;
  let latestQuote = null;
  let quoteRequestNumber = 0;
  let submissionPending = false;
  let submissionTimer = null;

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

  bookingForm.addEventListener("submit", (event) => {
    clearFormStatus();
    const validation = validateDates();
    if (!validation.valid) {
      event.preventDefault();
      showFormStatus("error", "Request not sent", "Please select a valid stay before submitting.");
      return;
    }

    if (!latestQuote || latestQuote.key !== quoteKey()) {
      event.preventDefault();
      showFormStatus("error", "Price check required", "Please wait until the current price and availability have been checked.");
      updateBookingEstimate();
      return;
    }

    if (latestQuote.available !== true) {
      event.preventDefault();
      showFormStatus(
        "error",
        "Request not sent",
        latestQuote.available === false
          ? "These dates are not available. Please choose another period."
          : "Live availability must be restored before this request can be submitted."
      );
      return;
    }

    showFormStatus("pending", "Sending request", "Please keep this page open while we reserve your dates.");
    submissionPending = true;
    clearTimeout(submissionTimer);
    submissionTimer = setTimeout(() => {
      if (!submissionPending) return;
      setSubmitting(false);
      showFormStatus(
        "pending",
        "Request is being processed",
        "The server has not returned a confirmation yet. Please do not submit again. We will preserve your booking reference as soon as the response arrives."
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
        ? ` Booking reference: ${event.data.bookingId}.`
        : "";
      const emailConfirmation = event.data.emailSent === true
        ? " A confirmation email has been sent to you."
        : event.data.emailSent === false
          ? " Your request was saved, but the confirmation email could not be sent. We will contact you directly."
          : "";
      showFormStatus(
        "success",
        "Request sent successfully",
        `${event.data.message}${bookingReference}${emailConfirmation}`
      );
      bookingForm.reset();
      requestId.value = createRequestId();
      formStartedAt.value = String(Date.now());
      checkOut.disabled = true;
      latestQuote = null;
      staySummary.className = "stay-summary";
      staySummary.textContent = "Select your dates to calculate the stay.";
      priceSummary.hidden = true;
    } else {
      showFormStatus("error", "Request not sent", event.data.message);
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
        "Request submitted",
        "Your request reached the booking service. Please do not submit it again. We will contact you using the email address or phone number provided."
      );
      formStatus.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 1200);
  });

  function setSubmitting(submitting) {
    submitButton.disabled = submitting;
    submitButton.classList.toggle("sending", submitting);
    submitButton.innerHTML = submitting
      ? '<span>Sending request…</span><i data-lucide="loader-circle"></i>'
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
      monthlyFromRate.textContent = `From ${formatCurrency(lowestNightlyRate * 30, config.currency)} / month`;
    } catch (error) {
      const lowestNightlyRate = Math.min(
        fallbackPricing.baseNightlyRate,
        fallbackPricing.festivalNightlyRate
      );
      monthlyFromRate.textContent =
        `From ${formatCurrency(lowestNightlyRate * 30, fallbackPricing.currency)} / month`;
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
    priceSummary.textContent = "Checking live availability and price…";

    try {
      const quote = await bookingApi(endpoint, {
        action: "quote",
        checkIn: checkIn.value,
        checkOut: checkOut.value
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
      staySummary.textContent = "Select your check-in date first.";
      return { valid: false };
    }

    const start = parseLocalDate(checkIn.value);
    const minimumEnd = addDays(start, 29);
    const maximumEnd = addMonths(start, 6);
    checkOut.disabled = false;
    checkOut.min = toDateInput(minimumEnd);
    checkOut.max = toDateInput(maximumEnd);

    if (!checkOut.value) {
      staySummary.textContent = `Choose a check-out date between ${formatDate(minimumEnd)} and ${formatDate(maximumEnd)}.`;
      return { valid: false };
    }

    const end = parseLocalDate(checkOut.value);
    const nights = Math.round((end - start) / 86400000);

    if (end < minimumEnd) {
      staySummary.textContent = `The minimum stay is 29 nights. Your selection is ${nights} nights.`;
      staySummary.classList.add("invalid");
      return { valid: false };
    }

    if (end > maximumEnd) {
      staySummary.textContent = `The maximum stay is six calendar months. Please check out by ${formatDate(maximumEnd)}.`;
      staySummary.classList.add("invalid");
      return { valid: false };
    }

    staySummary.textContent = `${nights} nights · ${formatDate(start)} to ${formatDate(end)}`;
    staySummary.classList.add("valid");
    return { valid: true, nights };
  }

  function renderQuote(quote) {
    if (!quote.available) {
      priceSummary.className = "price-summary unavailable";
      priceSummary.textContent = "These dates overlap an existing booking or temporary hold.";
      return;
    }

    const lines = quote.segments.map((segment) => (
      `<div class="price-line"><span>${escapeHtml(segment.label)} · ${segment.nights} nights</span>` +
      `<strong>${formatCurrency(segment.subtotal, quote.currency)}</strong></div>`
    )).join("");

    const cleaningLine = quote.cleaningFee > 0
      ? `<div class="price-line"><span>Final cleaning</span><strong>${formatCurrency(quote.cleaningFee, quote.currency)}</strong></div>`
      : "";

    priceSummary.className = "price-summary";
    priceSummary.innerHTML =
      `<div class="price-breakdown">${lines}${cleaningLine}` +
      `<div class="price-line total"><span>Estimated accommodation total</span><strong>${formatCurrency(quote.total, quote.currency)}</strong></div>` +
      `<div class="price-line deposit"><span>Refundable deposit</span><strong>${formatCurrency(quote.deposit, quote.currency)}</strong></div>` +
      `<p class="price-disclaimer">The quote is recalculated and stored by the booking server when you submit.</p></div>`;
  }

  function renderFallbackQuote(quote) {
    renderQuote({ ...quote, available: true });
    priceSummary.classList.add("estimate");
    priceSummary.insertAdjacentHTML(
      "afterbegin",
      '<p class="price-warning">Estimated price only. Live availability is offline because the updated Google Apps Script has not yet been deployed.</p>'
    );
  }

  function quoteKey() {
    return `${checkIn.value}|${checkOut.value}`;
  }
});

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
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date);
}

function formatCurrency(value, currency) {
  return new Intl.NumberFormat("de-AT", {
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
    const label = festival ? "July / August Festival rate" : "Standard rate";
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
