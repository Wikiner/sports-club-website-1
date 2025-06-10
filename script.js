// Управление темной темой
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  const html = document.documentElement;

  // Проверяем сохраненную тему или системные предпочтения
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    html.classList.add("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    html.classList.remove("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }

  // Обработчик переключения темы
  themeToggle.addEventListener("click", function () {
    const isDark = html.classList.contains("dark");

    if (isDark) {
      html.classList.remove("dark");
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
      localStorage.setItem("theme", "dark");
    }
  });

  // Управление мобильным меню
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      const isOpen = !mobileMenu.classList.contains("hidden");

      if (isOpen) {
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      } else {
        mobileMenu.classList.remove("hidden");
        menuIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      }
    });

    // Закрываем меню при клике на ссылку
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      });
    });

    // Закрываем меню при клике вне его
    document.addEventListener("click", function (event) {
      if (
        !mobileMenuBtn.contains(event.target) &&
        !mobileMenu.contains(event.target)
      ) {
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }
    });
  }

  // Плавная анимация появления элементов при скролле
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
      }
    });
  }, observerOptions);

  // Наблюдаем за элементами, которые должны анимироваться
  const animatedElements = document.querySelectorAll(
    ".grid > div, .bg-white, .bg-gray-800",
  );
  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // Обработчики для кнопок "Записаться"
  const enrollButtons = document.querySelectorAll(
    'button:contains("Записаться")',
  );
  document.addEventListener("click", function (event) {
    if (event.target.textContent === "Записаться") {
      event.preventDefault();
      showBookingModal();
    }
  });

  // Функция показа модального окна записи (заглушка)
  function showBookingModal() {
    alert(
      "Функция записи на тренировку будет доступна в ближайшее время!\n\nПожалуйста, свяжитесь с нами по телефону +7 (999) 123-45-67 для записи.",
    );
  }

  // Улучшение доступности - управление с клавиатуры
  document.addEventListener("keydown", function (event) {
    // Закрытие мобильного меню по Escape
    if (event.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });

  // Прелоадер для изображений
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", function () {
        this.classList.add("loaded");
      });
    }
  });
});

// Функция для плавного скролла к элементу
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Обработка форм (если появятся в будущем)
function submitForm(formData) {
  console.log("Отправка формы:", formData);
  // Здесь будет логика отправки данных
}

// Утилиты для работы с localStorage
const storage = {
  set: function (key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("Не удалось сохранить в localStorage:", e);
    }
  },

  get: function (key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.warn("Не удалось получить из localStorage:", e);
      return null;
    }
  },

  remove: function (key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn("Не удалось удалить из localStorage:", e);
    }
  },
};

// Функция для отслеживания производительности
function trackPerformance() {
  if ("performance" in window) {
    window.addEventListener("load", function () {
      setTimeout(function () {
        const perfData = performance.getEntriesByType("navigation")[0];
        console.log(
          "Время загрузки страницы:",
          perfData.loadEventEnd - perfData.loadEventStart,
          "мс",
        );
      }, 100);
    });
  }
}

// Запускаем отслеживание производительности
trackPerformance();
