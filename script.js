const translations = {
    en: {
        'full-name': 'Dmitrii Sukharev',
        'job-title': 'Unity Developer',
        'languages-title': 'Languages',
        'russian': 'Russian:',
        'native': 'Native',
        'english': 'English:',
        'upper-intermediate': 'Upper-Intermediate',
        'location-title': 'Location',
        'location-text': 'Tbilisi, Georgia',
        'contact-title': 'Contact',
        'profile-title': 'Profile',
        'profile-text': 'Gaming enthusiast turned Unity developer with extensive experience across diverse genres. Deep understanding of what players enjoy and how games work, combined with passion for development. Constantly learning new technologies and perfecting the craft.',
        'skills-title': 'Skills',
        'learning-title': 'Currently Learning',
        'skill-sdk': 'SDK Integration',
        'skill-perf': 'Performance optimization',
        'skill-profiling': 'Profiling',
        'skill-platforms': 'Android/Web platforms',
        'skill-networking': 'Multiplayer Networking',
        'experience-title': 'Work Experience',
        'job-unity-dev': 'Unity Developer',
        'period-unity': 'Dec 2023 - Sept 2025',
        'duration-unity': '1 year 10 months',
        'exp-unity-1': 'Built complete game projects from scratch',
        'exp-unity-2': 'Worked with legacy codebases and refactored them',
        'exp-unity-3': 'Developed new features, fixed bugs, and implemented SDK',
        'job-qa-lead': 'QA Team Lead',
        'period-qa-lead': 'Oct 2021 - Dec 2023',
        'duration-qa-lead': '2 years 3 months',
        'exp-qa-lead-1': 'Managed QA processes and mentoring junior testers',
        'job-qa-tester': 'QA Tester',
        'period-qa-tester': 'Jul 2020 - Oct 2021',
        'duration-qa-tester': '1 year 4 months',
        'exp-qa-tester-1': 'Tested cross-genre game projects (casual, shooter, racing) on mobile and web platforms',
        'projects-title': 'Personal Projects',
        'project-roguelike': 'Roguelike',
        'badge-roguelike': '2D | Google Play',
        'desc-roguelike': 'A mobile game built from a purchased asset that I customized and successfully published.',
        'project-language': 'Language Learning App',
        'badge-language': '2D | In Development (~70% Complete)',
        'desc-language': 'App based on my original concept. Built from scratch in close collaboration with a designer.'
    },
    ru: {
        'full-name': 'Дмитрий Сухарев',
        'job-title': 'Unity Разработчик',
        'languages-title': 'Языки',
        'russian': 'Русский:',
        'native': 'Родной',
        'english': 'Английский:',
        'upper-intermediate': 'Выше среднего',
        'location-title': 'Местоположение',
        'location-text': 'Тбилиси, Грузия',
        'contact-title': 'Контакты',
        'profile-title': 'Профиль',
        'profile-text': 'Энтузиаст игр, ставший Unity разработчиком с обширным опытом в различных жанрах. Глубокое понимание того, что нравится игрокам и как работают игры, в сочетании со страстью к разработке. Постоянно изучаю новые технологии и совершенствую мастерство.',
        'skills-title': 'Навыки',
        'learning-title': 'Сейчас изучаю',
        'skill-sdk': 'Интеграция SDK',
        'skill-perf': 'Оптимизация производительности',
        'skill-profiling': 'Профилирование',
        'skill-platforms': 'Android/Web платформы',
        'experience-title': 'Опыт работы',
        'job-unity-dev': 'Unity Разработчик',
        'period-unity': 'Дек 2023 - Сент 2025',
        'duration-unity': '1 год 10 месяцев',
        'exp-unity-1': 'Создавал полные игровые проекты с нуля',
        'exp-unity-2': 'Работал с легаси кодом и рефакторил его',
        'exp-unity-3': 'Разрабатывал новые функции, исправлял баги и внедрял SDK',
        'job-qa-lead': 'Руководитель QA отдела',
        'period-qa-lead': 'Окт 2021 - Дек 2023',
        'duration-qa-lead': '2 года 3 месяца',
        'exp-qa-lead-1': 'Управлял процессами QA и наставничеством младших тестировщиков',
        'job-qa-tester': 'QA Тестировщик',
        'period-qa-tester': 'Июль 2020 - Окт 2021',
        'duration-qa-tester': '1 год 4 месяца',
        'exp-qa-tester-1': 'Тестировал игровые проекты разных жанров (казуальные, шутеры, гонки) на мобильных и веб платформах',
        'projects-title': 'Личные проекты',
        'project-roguelike': 'Рогалик',
        'badge-roguelike': '2D | Google Play',
        'desc-roguelike': 'Мобильная игра, построенная на основе купленного ассета, который я кастомизировал и успешно опубликовал.',
        'project-language': 'Приложение для изучения языков',
        'badge-language': '2D | В разработке (~70% готово)',
        'desc-language': 'Основанное на моей оригинальной концепции. Создано с нуля в тесном сотрудничестве с дизайнером.'
    }
};

let currentLanguage = 'en';

function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('ru')) {
        return 'ru';
    }
    return 'en';
}

function setLanguage(lang) {
    currentLanguage = lang;

    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="setLanguage('${lang}')"]`).classList.add('active');

    document.documentElement.lang = lang;
}

window.addEventListener('DOMContentLoaded', () => {
    const defaultLang = detectBrowserLanguage();
    setLanguage(defaultLang);
});