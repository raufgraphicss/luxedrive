import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Language = 'en' | 'tr' | 'az' | 'ru' | 'es' | 'de';

export const languageNames: Record<Language, string> = {
  en: 'English',
  tr: 'Türkçe',
  az: 'Azərbaycanca',
  ru: 'Русский',
  es: 'Español',
  de: 'Deutsch',
};

export const languageFlags: Record<Language, string> = {
  en: '🇬🇧',
  tr: '🇹🇷',
  az: '🇦🇿',
  ru: '🇷🇺',
  es: '🇪🇸',
  de: '🇩🇪',
};

type TranslationKey = 
  // Navigation
  | 'nav.home'
  | 'nav.browse'
  | 'nav.compare'
  | 'nav.aiConsultant'
  // Hero
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.searchPlaceholder'
  | 'hero.exploreCars'
  | 'hero.aiConsultant'
  // Categories
  | 'category.superSport'
  | 'category.luxurySuv'
  | 'category.electric'
  | 'category.general'
  | 'category.luxury'
  // Stats
  | 'stats.brands'
  | 'stats.models'
  | 'stats.aiConsultant'
  // Comparison
  | 'compare.title'
  | 'compare.subtitle'
  | 'compare.startComparing'
  | 'compare.selectCar'
  | 'compare.selectCarA'
  | 'compare.selectCarB'
  | 'compare.performance'
  | 'compare.scores'
  // Car Details
  | 'car.hp'
  | 'car.torque'
  | 'car.acceleration'
  | 'car.topSpeed'
  | 'car.engineType'
  | 'car.price'
  | 'car.comfort'
  | 'car.speed'
  | 'car.sportiness'
  | 'car.travel'
  | 'car.budget'
  | 'car.power'
  | 'car.overall'
  | 'car.specs'
  | 'car.reviews'
  | 'car.buyNow'
  | 'car.watchVideo'
  // Browse
  | 'browse.title'
  | 'browse.subtitle'
  | 'browse.searchPlaceholder'
  | 'browse.allCountries'
  | 'browse.allBrands'
  | 'browse.noResults'
  // Why Us
  | 'whyUs.title'
  | 'whyUs.dataAccuracy'
  | 'whyUs.dataAccuracyDesc'
  | 'whyUs.luxuryUI'
  | 'whyUs.luxuryUIDesc'
  | 'whyUs.aiDriven'
  | 'whyUs.aiDrivenDesc'
  // Testimonials
  | 'testimonials.title'
  // AI Consultant
  | 'ai.title'
  | 'ai.subtitle'
  | 'ai.placeholder'
  | 'ai.welcome'
  // Footer
  | 'footer.rights'
  | 'footer.privacy'
  | 'footer.terms'
  | 'footer.contact';

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.browse': 'Browse',
    'nav.compare': 'Compare',
    'nav.aiConsultant': 'AI Consultant',
    // Hero
    'hero.title': 'The Future of Driving',
    'hero.subtitle': 'Discover the world\'s most prestigious automobiles with cutting-edge AI insights',
    'hero.searchPlaceholder': 'Search for your dream car...',
    'hero.exploreCars': 'Explore Cars',
    'hero.aiConsultant': 'AI Consultant',
    // Categories
    'category.superSport': 'Super Sport',
    'category.luxurySuv': 'Luxury SUV',
    'category.electric': 'Electric',
    'category.general': 'General',
    'category.luxury': 'Luxury',
    // Stats
    'stats.brands': 'Premium Brands',
    'stats.models': 'Car Models',
    'stats.aiConsultant': 'AI Consultant',
    // Comparison
    'compare.title': 'Compare Side by Side',
    'compare.subtitle': 'Make informed decisions with our detailed comparison tool. Analyze specs, performance, and more.',
    'compare.startComparing': 'Start Comparing',
    'compare.selectCar': 'Select a car',
    'compare.selectCarA': 'Select Car A',
    'compare.selectCarB': 'Select Car B',
    'compare.performance': 'Performance',
    'compare.scores': 'Scores',
    // Car Details
    'car.hp': 'HP',
    'car.torque': 'Nm Torque',
    'car.acceleration': '0-100 km/h',
    'car.topSpeed': 'Top Speed',
    'car.engineType': 'Engine Type',
    'car.price': 'Price',
    'car.comfort': 'Comfort',
    'car.speed': 'Speed',
    'car.sportiness': 'Sportiness',
    'car.travel': 'Travel',
    'car.budget': 'Budget-Friendly',
    'car.power': 'Power',
    'car.overall': 'Overall',
    'car.specs': 'Technical Specifications',
    'car.reviews': 'User Reviews',
    'car.buyNow': 'Buy Now',
    'car.watchVideo': 'Watch Video',
    // Browse
    'browse.title': 'Browse All Cars',
    'browse.subtitle': 'Explore our complete collection',
    'browse.searchPlaceholder': 'Search by brand or model...',
    'browse.allCountries': 'All Countries',
    'browse.allBrands': 'All Brands',
    'browse.noResults': 'No cars found matching your criteria.',
    // Why Us
    'whyUs.title': 'Why Choose LuxeDrive',
    'whyUs.dataAccuracy': 'Precise Data',
    'whyUs.dataAccuracyDesc': 'Verified specifications from official manufacturers',
    'whyUs.luxuryUI': 'Premium Experience',
    'whyUs.luxuryUIDesc': 'Apple-inspired design with attention to every detail',
    'whyUs.aiDriven': 'AI-Powered',
    'whyUs.aiDrivenDesc': 'Smart recommendations tailored to your preferences',
    // Testimonials
    'testimonials.title': 'What Our Users Say',
    // AI Consultant
    'ai.title': 'AI Car Consultant',
    'ai.subtitle': 'Get personalized car recommendations from our AI expert',
    'ai.placeholder': 'Ask me anything about cars...',
    'ai.welcome': 'Hello! I\'m your personal car consultant. Tell me about your preferences and I\'ll recommend the perfect car for you.',
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact',
  },
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.browse': 'Keşfet',
    'nav.compare': 'Karşılaştır',
    'nav.aiConsultant': 'AI Danışman',
    // Hero
    'hero.title': 'Sürüşün Geleceği',
    'hero.subtitle': 'Yapay zeka destekli analizlerle dünyanın en prestijli otomobillerini keşfedin',
    'hero.searchPlaceholder': 'Hayalinizdeki arabayı arayın...',
    'hero.exploreCars': 'Arabaları Keşfet',
    'hero.aiConsultant': 'AI Danışman',
    // Categories
    'category.superSport': 'Süper Spor',
    'category.luxurySuv': 'Lüks SUV',
    'category.electric': 'Elektrikli',
    'category.general': 'Genel',
    'category.luxury': 'Lüks',
    // Stats
    'stats.brands': 'Premium Marka',
    'stats.models': 'Araba Modeli',
    'stats.aiConsultant': 'AI Danışman',
    // Comparison
    'compare.title': 'Yan Yana Karşılaştır',
    'compare.subtitle': 'Detaylı karşılaştırma aracımızla bilinçli kararlar verin. Özellikleri ve performansı analiz edin.',
    'compare.startComparing': 'Karşılaştırmaya Başla',
    'compare.selectCar': 'Araba seçin',
    'compare.selectCarA': 'Araba A Seçin',
    'compare.selectCarB': 'Araba B Seçin',
    'compare.performance': 'Performans',
    'compare.scores': 'Puanlar',
    // Car Details
    'car.hp': 'BG',
    'car.torque': 'Nm Tork',
    'car.acceleration': '0-100 km/s',
    'car.topSpeed': 'Maksimum Hız',
    'car.engineType': 'Motor Tipi',
    'car.price': 'Fiyat',
    'car.comfort': 'Konfor',
    'car.speed': 'Hız',
    'car.sportiness': 'Sportiflik',
    'car.travel': 'Seyahat',
    'car.budget': 'Bütçe Dostu',
    'car.power': 'Güç',
    'car.overall': 'Genel',
    'car.specs': 'Teknik Özellikler',
    'car.reviews': 'Kullanıcı Yorumları',
    'car.buyNow': 'Şimdi Satın Al',
    'car.watchVideo': 'Video İzle',
    // Browse
    'browse.title': 'Tüm Arabaları Keşfet',
    'browse.subtitle': 'Koleksiyonumuzu keşfedin',
    'browse.searchPlaceholder': 'Marka veya model ara...',
    'browse.allCountries': 'Tüm Ülkeler',
    'browse.allBrands': 'Tüm Markalar',
    'browse.noResults': 'Kriterlerinize uygun araba bulunamadı.',
    // Why Us
    'whyUs.title': 'Neden LuxeDrive',
    'whyUs.dataAccuracy': 'Hassas Veriler',
    'whyUs.dataAccuracyDesc': 'Resmi üreticilerden doğrulanmış özellikler',
    'whyUs.luxuryUI': 'Premium Deneyim',
    'whyUs.luxuryUIDesc': 'Her detaya özen gösteren Apple tarzı tasarım',
    'whyUs.aiDriven': 'AI Destekli',
    'whyUs.aiDrivenDesc': 'Tercihlerinize göre akıllı öneriler',
    // Testimonials
    'testimonials.title': 'Kullanıcılarımız Ne Diyor',
    // AI Consultant
    'ai.title': 'AI Araba Danışmanı',
    'ai.subtitle': 'AI uzmanımızdan kişiselleştirilmiş araba önerileri alın',
    'ai.placeholder': 'Arabalar hakkında her şeyi sorun...',
    'ai.welcome': 'Merhaba! Ben kişisel araba danışmanınızım. Tercihlerinizi söyleyin, sizin için mükemmel arabayı önereceğim.',
    // Footer
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Şartları',
    'footer.contact': 'İletişim',
  },
  az: {
    // Navigation
    'nav.home': 'Ana Səhifə',
    'nav.browse': 'Kəşf Et',
    'nav.compare': 'Müqayisə Et',
    'nav.aiConsultant': 'AI Məsləhətçi',
    // Hero
    'hero.title': 'Sürüşün Gələcəyi',
    'hero.subtitle': 'Süni intellekt dəstəkli analizlərlə dünyanın ən prestijli avtomobillərini kəşf edin',
    'hero.searchPlaceholder': 'Xəyal etdiyiniz avtomobili axtarın...',
    'hero.exploreCars': 'Avtomobilləri Kəşf Et',
    'hero.aiConsultant': 'AI Məsləhətçi',
    // Categories
    'category.superSport': 'Super Sport',
    'category.luxurySuv': 'Lüks SUV',
    'category.electric': 'Elektrik',
    'category.general': 'Ümumi',
    'category.luxury': 'Lüks',
    // Stats
    'stats.brands': 'Premium Marka',
    'stats.models': 'Avtomobil Modeli',
    'stats.aiConsultant': 'AI Məsləhətçi',
    // Comparison
    'compare.title': 'Yan-yana Müqayisə',
    'compare.subtitle': 'Ətraflı müqayisə alətimizlə məlumatlı qərarlar verin.',
    'compare.startComparing': 'Müqayisəyə Başla',
    'compare.selectCar': 'Avtomobil seçin',
    'compare.selectCarA': 'Avtomobil A Seçin',
    'compare.selectCarB': 'Avtomobil B Seçin',
    'compare.performance': 'Performans',
    'compare.scores': 'Xallar',
    // Car Details
    'car.hp': 'At Gücü',
    'car.torque': 'Nm Tork',
    'car.acceleration': '0-100 km/s',
    'car.topSpeed': 'Maksimum Sürət',
    'car.engineType': 'Mühərrik Tipi',
    'car.price': 'Qiymət',
    'car.comfort': 'Rahatlıq',
    'car.speed': 'Sürət',
    'car.sportiness': 'Sportivlik',
    'car.travel': 'Səyahət',
    'car.budget': 'Büdcəyə Uyğun',
    'car.power': 'Güc',
    'car.overall': 'Ümumi',
    'car.specs': 'Texniki Xüsusiyyətlər',
    'car.reviews': 'İstifadəçi Rəyləri',
    'car.buyNow': 'İndi Al',
    'car.watchVideo': 'Video İzlə',
    // Browse
    'browse.title': 'Bütün Avtomobilləri Kəşf Et',
    'browse.subtitle': 'Kolleksiyamızı kəşf edin',
    'browse.searchPlaceholder': 'Marka və ya model axtar...',
    'browse.allCountries': 'Bütün Ölkələr',
    'browse.allBrands': 'Bütün Markalar',
    'browse.noResults': 'Kriteriyalarınıza uyğun avtomobil tapılmadı.',
    // Why Us
    'whyUs.title': 'Niyə LuxeDrive',
    'whyUs.dataAccuracy': 'Dəqiq Məlumatlar',
    'whyUs.dataAccuracyDesc': 'Rəsmi istehsalçılardan təsdiqlənmiş xüsusiyyətlər',
    'whyUs.luxuryUI': 'Premium Təcrübə',
    'whyUs.luxuryUIDesc': 'Hər detala diqqət yetirən Apple tərzi dizayn',
    'whyUs.aiDriven': 'AI Dəstəkli',
    'whyUs.aiDrivenDesc': 'Seçimlərinizə uyğun ağıllı tövsiyələr',
    // Testimonials
    'testimonials.title': 'İstifadəçilərimiz Nə Deyir',
    // AI Consultant
    'ai.title': 'AI Avtomobil Məsləhətçisi',
    'ai.subtitle': 'AI mütəxəssisindən fərdi avtomobil tövsiyələri alın',
    'ai.placeholder': 'Avtomobillər haqqında hər şeyi soruşun...',
    'ai.welcome': 'Salam! Mən şəxsi avtomobil məsləhətçinizəm. Seçimlərinizi deyin, sizin üçün mükəmməl avtomobil tövsiyə edəcəyəm.',
    // Footer
    'footer.rights': 'Bütün hüquqlar qorunur.',
    'footer.privacy': 'Məxfilik Siyasəti',
    'footer.terms': 'İstifadə Şərtləri',
    'footer.contact': 'Əlaqə',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.browse': 'Каталог',
    'nav.compare': 'Сравнить',
    'nav.aiConsultant': 'AI Консультант',
    // Hero
    'hero.title': 'Будущее Вождения',
    'hero.subtitle': 'Откройте для себя самые престижные автомобили мира с помощью ИИ-аналитики',
    'hero.searchPlaceholder': 'Найдите автомобиль вашей мечты...',
    'hero.exploreCars': 'Смотреть Каталог',
    'hero.aiConsultant': 'AI Консультант',
    // Categories
    'category.superSport': 'Суперспорт',
    'category.luxurySuv': 'Люкс SUV',
    'category.electric': 'Электрические',
    'category.general': 'Общие',
    'category.luxury': 'Люкс',
    // Stats
    'stats.brands': 'Премиум Брендов',
    'stats.models': 'Моделей Авто',
    'stats.aiConsultant': 'AI Консультант',
    // Comparison
    'compare.title': 'Сравнение Бок о Бок',
    'compare.subtitle': 'Принимайте обоснованные решения с нашим детальным инструментом сравнения.',
    'compare.startComparing': 'Начать Сравнение',
    'compare.selectCar': 'Выберите автомобиль',
    'compare.selectCarA': 'Выберите Авто A',
    'compare.selectCarB': 'Выберите Авто B',
    'compare.performance': 'Производительность',
    'compare.scores': 'Оценки',
    // Car Details
    'car.hp': 'Л.С.',
    'car.torque': 'Нм Крутящий Момент',
    'car.acceleration': '0-100 км/ч',
    'car.topSpeed': 'Макс. Скорость',
    'car.engineType': 'Тип Двигателя',
    'car.price': 'Цена',
    'car.comfort': 'Комфорт',
    'car.speed': 'Скорость',
    'car.sportiness': 'Спортивность',
    'car.travel': 'Путешествия',
    'car.budget': 'Бюджетность',
    'car.power': 'Мощность',
    'car.overall': 'Общая',
    'car.specs': 'Технические Характеристики',
    'car.reviews': 'Отзывы Пользователей',
    'car.buyNow': 'Купить Сейчас',
    'car.watchVideo': 'Смотреть Видео',
    // Browse
    'browse.title': 'Каталог Автомобилей',
    'browse.subtitle': 'Исследуйте нашу полную коллекцию',
    'browse.searchPlaceholder': 'Поиск по марке или модели...',
    'browse.allCountries': 'Все Страны',
    'browse.allBrands': 'Все Марки',
    'browse.noResults': 'Автомобили по вашим критериям не найдены.',
    // Why Us
    'whyUs.title': 'Почему LuxeDrive',
    'whyUs.dataAccuracy': 'Точные Данные',
    'whyUs.dataAccuracyDesc': 'Проверенные характеристики от официальных производителей',
    'whyUs.luxuryUI': 'Премиум Опыт',
    'whyUs.luxuryUIDesc': 'Дизайн в стиле Apple с вниманием к каждой детали',
    'whyUs.aiDriven': 'С Поддержкой ИИ',
    'whyUs.aiDrivenDesc': 'Умные рекомендации под ваши предпочтения',
    // Testimonials
    'testimonials.title': 'Отзывы Пользователей',
    // AI Consultant
    'ai.title': 'AI Консультант по Авто',
    'ai.subtitle': 'Получите персонализированные рекомендации от нашего AI эксперта',
    'ai.placeholder': 'Спросите меня о любых автомобилях...',
    'ai.welcome': 'Здравствуйте! Я ваш персональный консультант по автомобилям. Расскажите о ваших предпочтениях, и я подберу идеальный автомобиль для вас.',
    // Footer
    'footer.rights': 'Все права защищены.',
    'footer.privacy': 'Политика Конфиденциальности',
    'footer.terms': 'Условия Использования',
    'footer.contact': 'Контакты',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.browse': 'Explorar',
    'nav.compare': 'Comparar',
    'nav.aiConsultant': 'Consultor IA',
    // Hero
    'hero.title': 'El Futuro de Conducir',
    'hero.subtitle': 'Descubre los automóviles más prestigiosos del mundo con análisis de IA',
    'hero.searchPlaceholder': 'Busca el coche de tus sueños...',
    'hero.exploreCars': 'Explorar Coches',
    'hero.aiConsultant': 'Consultor IA',
    // Categories
    'category.superSport': 'Super Deportivo',
    'category.luxurySuv': 'SUV de Lujo',
    'category.electric': 'Eléctrico',
    'category.general': 'General',
    'category.luxury': 'Lujo',
    // Stats
    'stats.brands': 'Marcas Premium',
    'stats.models': 'Modelos de Coches',
    'stats.aiConsultant': 'Consultor IA',
    // Comparison
    'compare.title': 'Compara Lado a Lado',
    'compare.subtitle': 'Toma decisiones informadas con nuestra herramienta de comparación detallada.',
    'compare.startComparing': 'Empezar a Comparar',
    'compare.selectCar': 'Selecciona un coche',
    'compare.selectCarA': 'Selecciona Coche A',
    'compare.selectCarB': 'Selecciona Coche B',
    'compare.performance': 'Rendimiento',
    'compare.scores': 'Puntuaciones',
    // Car Details
    'car.hp': 'CV',
    'car.torque': 'Nm Par Motor',
    'car.acceleration': '0-100 km/h',
    'car.topSpeed': 'Velocidad Máxima',
    'car.engineType': 'Tipo de Motor',
    'car.price': 'Precio',
    'car.comfort': 'Confort',
    'car.speed': 'Velocidad',
    'car.sportiness': 'Deportividad',
    'car.travel': 'Viajes',
    'car.budget': 'Económico',
    'car.power': 'Potencia',
    'car.overall': 'General',
    'car.specs': 'Especificaciones Técnicas',
    'car.reviews': 'Opiniones de Usuarios',
    'car.buyNow': 'Comprar Ahora',
    'car.watchVideo': 'Ver Video',
    // Browse
    'browse.title': 'Explorar Todos los Coches',
    'browse.subtitle': 'Explora nuestra colección completa',
    'browse.searchPlaceholder': 'Buscar por marca o modelo...',
    'browse.allCountries': 'Todos los Países',
    'browse.allBrands': 'Todas las Marcas',
    'browse.noResults': 'No se encontraron coches con tus criterios.',
    // Why Us
    'whyUs.title': 'Por Qué LuxeDrive',
    'whyUs.dataAccuracy': 'Datos Precisos',
    'whyUs.dataAccuracyDesc': 'Especificaciones verificadas de fabricantes oficiales',
    'whyUs.luxuryUI': 'Experiencia Premium',
    'whyUs.luxuryUIDesc': 'Diseño inspirado en Apple con atención a cada detalle',
    'whyUs.aiDriven': 'Impulsado por IA',
    'whyUs.aiDrivenDesc': 'Recomendaciones inteligentes adaptadas a tus preferencias',
    // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Usuarios',
    // AI Consultant
    'ai.title': 'Consultor de Coches IA',
    'ai.subtitle': 'Obtén recomendaciones personalizadas de nuestro experto IA',
    'ai.placeholder': 'Pregúntame cualquier cosa sobre coches...',
    'ai.welcome': '¡Hola! Soy tu consultor personal de coches. Cuéntame tus preferencias y te recomendaré el coche perfecto para ti.',
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.contact': 'Contacto',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.browse': 'Durchsuchen',
    'nav.compare': 'Vergleichen',
    'nav.aiConsultant': 'KI-Berater',
    // Hero
    'hero.title': 'Die Zukunft des Fahrens',
    'hero.subtitle': 'Entdecken Sie die prestigeträchtigsten Automobile der Welt mit KI-gestützten Einblicken',
    'hero.searchPlaceholder': 'Suchen Sie Ihr Traumauto...',
    'hero.exploreCars': 'Autos Entdecken',
    'hero.aiConsultant': 'KI-Berater',
    // Categories
    'category.superSport': 'Supersport',
    'category.luxurySuv': 'Luxus-SUV',
    'category.electric': 'Elektrisch',
    'category.general': 'Allgemein',
    'category.luxury': 'Luxus',
    // Stats
    'stats.brands': 'Premium-Marken',
    'stats.models': 'Automodelle',
    'stats.aiConsultant': 'KI-Berater',
    // Comparison
    'compare.title': 'Seite an Seite Vergleichen',
    'compare.subtitle': 'Treffen Sie informierte Entscheidungen mit unserem detaillierten Vergleichstool.',
    'compare.startComparing': 'Vergleich Starten',
    'compare.selectCar': 'Wählen Sie ein Auto',
    'compare.selectCarA': 'Wählen Sie Auto A',
    'compare.selectCarB': 'Wählen Sie Auto B',
    'compare.performance': 'Leistung',
    'compare.scores': 'Bewertungen',
    // Car Details
    'car.hp': 'PS',
    'car.torque': 'Nm Drehmoment',
    'car.acceleration': '0-100 km/h',
    'car.topSpeed': 'Höchstgeschwindigkeit',
    'car.engineType': 'Motortyp',
    'car.price': 'Preis',
    'car.comfort': 'Komfort',
    'car.speed': 'Geschwindigkeit',
    'car.sportiness': 'Sportlichkeit',
    'car.travel': 'Reisen',
    'car.budget': 'Budgetfreundlich',
    'car.power': 'Leistung',
    'car.overall': 'Gesamt',
    'car.specs': 'Technische Daten',
    'car.reviews': 'Nutzerbewertungen',
    'car.buyNow': 'Jetzt Kaufen',
    'car.watchVideo': 'Video Ansehen',
    // Browse
    'browse.title': 'Alle Autos Durchsuchen',
    'browse.subtitle': 'Erkunden Sie unsere komplette Sammlung',
    'browse.searchPlaceholder': 'Nach Marke oder Modell suchen...',
    'browse.allCountries': 'Alle Länder',
    'browse.allBrands': 'Alle Marken',
    'browse.noResults': 'Keine Autos nach Ihren Kriterien gefunden.',
    // Why Us
    'whyUs.title': 'Warum LuxeDrive',
    'whyUs.dataAccuracy': 'Präzise Daten',
    'whyUs.dataAccuracyDesc': 'Verifizierte Spezifikationen von offiziellen Herstellern',
    'whyUs.luxuryUI': 'Premium-Erlebnis',
    'whyUs.luxuryUIDesc': 'Von Apple inspiriertes Design mit Liebe zum Detail',
    'whyUs.aiDriven': 'KI-Gestützt',
    'whyUs.aiDrivenDesc': 'Intelligente Empfehlungen nach Ihren Präferenzen',
    // Testimonials
    'testimonials.title': 'Was Unsere Nutzer Sagen',
    // AI Consultant
    'ai.title': 'KI-Autoberater',
    'ai.subtitle': 'Erhalten Sie personalisierte Empfehlungen von unserem KI-Experten',
    'ai.placeholder': 'Fragen Sie mich alles über Autos...',
    'ai.welcome': 'Hallo! Ich bin Ihr persönlicher Autoberater. Erzählen Sie mir von Ihren Vorlieben und ich empfehle Ihnen das perfekte Auto.',
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.contact': 'Kontakt',
  },
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('luxedrive-language');
    return (saved as Language) || 'en';
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('luxedrive-language', lang);
  }, []);

  const t = useCallback((key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key;
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

export const useTranslation = () => {
  const { t } = useI18n();
  return t;
};
