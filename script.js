// Language translations
const translations = {
    en: {
        "company-name": "Netline",
        "home": "Home",
        "products": "Products",
        "services": "Services",
        "about": "About",
        "contact": "Contact",
        "banner-title": "Welcome to Netline",
        "banner-text": "Cutting-edge technology solutions for business and life",
        "get-started": "Get Started",
        "our-services": "Our Services",
        "web-dev": "Web Development",
        "web-dev-desc": "Professional website development for your business needs",
        "mobile-apps": "Mobile Apps",
        "mobile-apps-desc": "Custom mobile applications for Android and iOS platforms",
        "cloud-services": "Cloud Services",
        "cloud-services-desc": "Reliable cloud hosting for websites and applications",
        "about-netline": "About Netline",
        "about-text": "Netline is a leading technology solutions provider established in 2020.",
        "contact-us": "Contact Us",
        "address": "Sulaymaniyah, Kurdistan, Iraq",
        "rights": "All rights reserved"
    },
    ku: {
        "company-name": "Netline",
        "home": "سەرەکی",
        "products": "بەرهەمەکان",
        "services": "خزمەتگوزاریەکان",
        "about": "دەربارە",
        "contact": "پەیوەندی",
        "banner-title": "بەخێربێن بۆ Netline",
        "banner-text": "پێشکەوتووترین ڕێگاچارەکانی تەکنەلۆجیا بۆ کار و ژیان",
        "get-started": "دەستپێبکە",
        "our-services": "خزمەتگوزاریەکانمان",
        "web-dev": "دروستکردنی وێبسایت",
        "web-dev-desc": "دروستکردنی وێبسایتی پیشەگەری بۆ کار و پیشەگەریەکەت",
        "mobile-apps": "ئەپلیکەیشن",
        "mobile-apps-desc": "دروستکردنی ئەپلیکەیشنی مۆبایل بۆ سیستەمی ئەندرۆید و iOS",
        "cloud-services": "خزمەتگوزاری کلۆود",
        "cloud-services-desc": "خزمەتگوزاری کلۆود و هۆستینگ بۆ ماڵپەڕ و ئەپەکان",
        "about-netline": "دەربارەی Netline",
        "about-text": "کۆمپانیای Netline پێشکەشکەری ڕێگاچارە تەکنەلۆژیایەکانە لە ساڵی 2020 دامەزراوە.",
        "contact-us": "پەیوەندیمان پێوەبکە",
        "address": "سلێمانی, کوردستان, عێراق",
        "rights": "هەموو مافەکان پارێزراوە"
    }
};

// Set current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Language switching function
function switchLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ku' ? 'rtl' : 'ltr';
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update elements with IDs
    const elementsWithIds = ['banner-title', 'banner-text', 'company-name'];
    elementsWithIds.forEach(id => {
        const element = document.getElementById(id);
        if (element && translations[lang][id]) {
            element.textContent = translations[lang][id];
        }
    });
}

// Initialize with English
switchLanguage('en');