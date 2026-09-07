/* ============================================================
   i18n.js — English / Arabic translations for the portfolio.
   HTML holds the default (English) copy inline for SEO; this
   object is the source of truth used when switching languages.
   Keys map to [data-i18n="key"] elements (textContent) and
   [data-i18n-html="key"] elements (innerHTML, for line breaks).
   Technical terms, tech tags and proper store names are kept in
   English in both languages on purpose.
   ============================================================ */
window.I18N = {
  en: {
    "meta.role_tag": "Software Engineer",
    "meta.title": "Omar Ahmed | Flutter Developer",

    // Nav
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.resume": "Resume",
    "nav.menu": "Menu",
    "nav.skip": "Skip to content",

    // Hero
    "hero.badge": "Available for work",
    "hero.open_title": "Open to work",
    "hero.open_cta": "Let’s talk",
    "hero.open_desc": "I’m looking to join a product-driven company with strong engineering practices, a culture of growth, and a team that cares about building things the right way. I want to grow as an engineer, work on meaningful products, and use modern AI-assisted workflows to build and ship high-quality software faster.",
    "hero.greeting": "Hi, I’m",
    "hero.name": "Omar Ahmed",
    "hero.role": "Software Engineer · Flutter & Mobile Engineer",
    "hero.summary": "I design, build, and ship production Flutter apps for iOS and Android — end to end, from first idea to a polished release on the store.",
    "hero.location": "Cairo, Egypt",
    "hero.cta_contact": "Get in touch",
    "hero.cta_resume": "Download résumé",

    // Stats
    "stats.apps_label": "Production apps shipped",
    "stats.years_label": "Years of experience",
    "stats.issues_label": "Critical issues resolved",
    "stats.mentored_label": "Junior devs mentored",
    "stats.years_value": "~3",
    "stats.apps_value": "10+",
    "stats.issues_value": "30+",
    "stats.mentored_value": "3",

    // About
    "about.title": "About",
    "about.kicker": "Who I am",
    "about.p1": "I build and ship cross-platform mobile apps end to end — across e-commerce, booking, education, pet services, farm management, social media, and AI-powered sports tech. I take features from product requirements through API integration, testing, release preparation, and production support, collaborating closely with product, design, backend, and QA teams.",
    "about.p2": "I’m strong in Flutter architecture, REST API integration, Firebase, payments, testing, and CI/CD, with foundational Node.js/Express and database knowledge, and I lean on AI-assisted development workflows to move faster and write better code.",
    "about.highlights_title": "Core strengths",
    "about.h1": "Full Arabic/English localization with RTL layout support across production apps.",
    "about.h2": "OWASP Mobile Top 10 practices — secure storage, safe API-key handling, release obfuscation.",
    "about.h3": "Offline-first data access and sync for low-connectivity environments.",
    "about.h4": "Secure payments end to end — Stripe, PayTabs, Apple Pay, and in-app purchases.",
    "about.h5": "Clean Architecture (Bloc/Cubit) with CI/CD delivery to the App Store & Google Play.",

    // Experience
    "exp.title": "Experience",
    "exp.kicker": "Where I’ve worked",
    "exp.present": "Present",

    "exp.ga.role": "Flutter Developer",
    "exp.ga.company": "Gamearound",
    "exp.ga.type": "Remote · Full-time",
    "exp.ga.dates": "Jan 2024 – Present",
    "exp.ga.b1": "Built and maintained 7+ production Flutter apps across booking, education, pet services, farm management, and sports technology.",
    "exp.ga.b2": "Delivered features from product requirements through API integration, testing, release prep, and production support with product, design, backend, and QA teams.",
    "exp.ga.b3": "Built an AI-powered golf ball-tracking feature using Python, OpenCV, YOLOv8, and TensorFlow Lite for ball detection, trajectory classification, and launch-angle calculation.",
    "exp.ga.b4": "Used AI-assisted development workflows to speed up implementation, improve code quality, support debugging, and produce better technical documentation.",

    "exp.gp.role": "Flutter Developer",
    "exp.gp.company": "Golden Packages",
    "exp.gp.type": "Remote · Part-time",
    "exp.gp.dates": "Apr 2025 – Oct 2025",
    "exp.gp.b1": "Developed and maintained RCA Shop, a production e-commerce Flutter app published on Google Play and the App Store.",
    "exp.gp.b2": "Delivered business features — Deal of the Day, Featured Products, Seasonal Categories, and Product Collections — to improve product discovery and engagement.",
    "exp.gp.b3": "Integrated PayTabs for secure, smooth online payments.",
    "exp.gp.b4": "Resolved 15+ performance issues and improved the checkout flow, UI consistency, and release quality.",

    // Projects
    "projects.title": "Projects",
    "projects.kicker": "Selected work",
    "projects.status_testing": "In testing",
    "projects.status_live": "Live",

    "proj.anonq.desc": "Led the full mobile build of an anonymous Q&A social platform — anonymous questions, a public answer feed, profiles, and user blocking — with a server-side ML moderation service, RevenueCat premium unlocks, deep links, and FCM push. Feature-based Clean Architecture with Cubit and full AR/EN + RTL.",
    "proj.jaime.desc": "AI-powered golf swing analysis: server-side ball detection and tracking with YOLO and OpenCV (Kalman filter + ROI tracking), trajectory classification, golfer skeleton tracking, real-time live practice feedback, and ElevenLabs text-to-speech coaching.",
    "proj.herd.desc": "Built from scratch — a production app for farmers to manage animal records, events, and services. Offline-friendly data access and sync for low-connectivity farms, with optimized large-dataset handling for faster loading.",
    "proj.rca.desc": "Production e-commerce app on Google Play and the App Store. Delivered Deal of the Day, Featured Products, Seasonal Categories, and Collections; integrated secure PayTabs & Apple Pay; resolved 15+ issues and improved stability.",
    "proj.hdcutz.desc": "A multi-app salon platform spanning customer, staff, and admin experiences. Integrated Stripe payments and Firebase Cloud Messaging for bookings, payments, and real-time notifications, on a Clean Architecture base.",
    "proj.pooch.desc": "Pet-services app with features for services, payments, and user management. Integrated Stripe, redesigned key UI areas, and resolved 20+ critical performance issues for a smoother, more consistent experience.",

    "btn.appstore": "App Store",
    "btn.googleplay": "Google Play",

    // Skills
    "skills.title": "Skills",
    "skills.kicker": "What I work with",
    "skills.g1": "Mobile (Flutter) & Architecture",
    "skills.g2": "Backend (Basic)",
    "skills.g3": "Data, APIs & Firebase",
    "skills.g4": "Tools, Testing & Delivery",
    "skills.g5": "AI & Computer Vision",

    // Contact
    "contact.title": "Contact",
    "contact.kicker": "Let’s talk",
    "contact.heading": "Have a project or role in mind?",
    "contact.text": "I’m open to Flutter / mobile engineering opportunities. The fastest way to reach me is email — I’ll get back to you quickly.",
    "contact.email_btn": "Email me",
    "contact.resume_btn": "Download résumé",

    // Education & languages
    "edu.title": "Education & Languages",
    "edu.degree": "B.Sc. in Accounting",
    "edu.school": "Faculty of Commerce, Damietta University",
    "edu.gpa": "GPA 3.4 / 4.0 (B+)",
    "edu.langs_title": "Languages",
    "edu.lang_ar": "Arabic — Native / Bilingual",
    "edu.lang_en": "English — Proficient",

    // Footer
    "footer.tagline": "Software Engineer · Flutter Developer",
    "footer.built": "Built with HTML, CSS & JavaScript.",
    "footer.rights": "All rights reserved.",

    // Controls (aria)
    "aria.theme": "Toggle light / dark theme",
    "aria.lang": "Switch language",
    "aria.top": "Back to top"
  },

  ar: {
    "meta.role_tag": "مهندس برمجيات",
    "meta.title": "عمر أحمد | مطوّر Flutter",

    // Nav
    "nav.about": "نبذة",
    "nav.experience": "الخبرات",
    "nav.projects": "المشاريع",
    "nav.skills": "المهارات",
    "nav.contact": "تواصل",
    "nav.resume": "السيرة الذاتية",
    "nav.menu": "القائمة",
    "nav.skip": "تخطَّ إلى المحتوى",

    // Hero
    "hero.badge": "متاح للعمل",
    "hero.open_title": "متاح للعمل",
    "hero.open_cta": "لنتحدث",
    "hero.open_desc": "أتطلّع للانضمام إلى شركة تركّز على المنتج بممارسات هندسية قوية، وثقافة نمو، وفريق يهتم ببناء الأشياء بالطريقة الصحيحة. أريد أن أنمو كمهندس، وأن أعمل على منتجات ذات قيمة، وأن أستخدم أدوات العمل الحديثة المدعومة بالذكاء الاصطناعي لبناء وإطلاق برمجيات عالية الجودة بسرعة أكبر.",
    "hero.greeting": "مرحبًا، أنا",
    "hero.name": "عمر أحمد",
    "hero.role": "مهندس برمجيات · مهندس Flutter وموبايل",
    "hero.summary": "أصمّم وأبني وأطلق تطبيقات Flutter إنتاجية لنظامي iOS و Android — من الفكرة الأولى حتى إصدار متقن على المتجر.",
    "hero.location": "القاهرة، مصر",
    "hero.cta_contact": "تواصل معي",
    "hero.cta_resume": "تحميل السيرة الذاتية",

    // Stats
    "stats.apps_label": "تطبيق إنتاجي منشور",
    "stats.years_label": "سنوات خبرة",
    "stats.issues_label": "مشكلة حرجة تم حلها",
    "stats.mentored_label": "مطورين تم إرشادهم",
    "stats.years_value": "~3",
    "stats.apps_value": "+10",
    "stats.issues_value": "+30",
    "stats.mentored_value": "3",

    // About
    "about.title": "نبذة عني",
    "about.kicker": "من أنا",
    "about.p1": "أبني وأطلق تطبيقات موبايل متعددة المنصات من البداية للنهاية — في مجالات التجارة الإلكترونية والحجوزات والتعليم وخدمات الحيوانات الأليفة وإدارة المزارع والتواصل الاجتماعي وتقنيات الرياضة المدعومة بالذكاء الاصطناعي. أنقل الميزات من متطلبات المنتج إلى ربط الواجهات والاختبار والتحضير للإصدار ودعم الإنتاج، بالتعاون الوثيق مع فرق المنتج والتصميم والباك اند وضمان الجودة.",
    "about.p2": "لديّ أساس قوي في معمارية Flutter وربط REST API و Firebase والمدفوعات والاختبار و CI/CD، مع معرفة أساسية بـ Node.js/Express وقواعد البيانات، وأعتمد على أدوات التطوير المدعومة بالذكاء الاصطناعي لأعمل بسرعة أكبر وأكتب كودًا أفضل.",
    "about.highlights_title": "نقاط القوة",
    "about.h1": "ترجمة كاملة للعربية/الإنجليزية مع دعم تخطيط RTL عبر تطبيقات إنتاجية.",
    "about.h2": "ممارسات OWASP Mobile Top 10 — تخزين آمن، تعامل آمن مع مفاتيح الـ API، وتشويش الإصدارات.",
    "about.h3": "وصول للبيانات ومزامنة تعمل دون اتصال للبيئات ضعيفة الشبكة.",
    "about.h4": "مدفوعات آمنة من البداية للنهاية — Stripe و PayTabs و Apple Pay والمشتريات داخل التطبيق.",
    "about.h5": "معمارية نظيفة (Bloc/Cubit) وتسليم CI/CD إلى App Store و Google Play.",

    // Experience
    "exp.title": "الخبرات",
    "exp.kicker": "أماكن عملي",
    "exp.present": "حتى الآن",

    "exp.ga.role": "مطور Flutter",
    "exp.ga.company": "Gamearound",
    "exp.ga.type": "عن بُعد · دوام كامل",
    "exp.ga.dates": "يناير 2024 – حتى الآن",
    "exp.ga.b1": "بناء وصيانة أكثر من 7 تطبيقات Flutter إنتاجية في مجالات الحجوزات والتعليم وخدمات الحيوانات الأليفة وإدارة المزارع وتقنيات الرياضة.",
    "exp.ga.b2": "تنفيذ الميزات من متطلبات المنتج إلى ربط الواجهات والاختبار والتحضير للإصدار ودعم الإنتاج مع فرق المنتج والتصميم والباك اند وضمان الجودة.",
    "exp.ga.b3": "بناء ميزة تتبّع كرة الجولف مدعومة بالذكاء الاصطناعي باستخدام Python و OpenCV و YOLOv8 و TensorFlow Lite للكشف عن الكرة وتصنيف المسار وحساب زاوية الانطلاق.",
    "exp.ga.b4": "استخدام أدوات التطوير المدعومة بالذكاء الاصطناعي لتسريع التنفيذ وتحسين جودة الكود ودعم تصحيح الأخطاء وإنتاج توثيق تقني أفضل.",

    "exp.gp.role": "مطور Flutter",
    "exp.gp.company": "Golden Packages",
    "exp.gp.type": "عن بُعد · دوام جزئي",
    "exp.gp.dates": "أبريل 2025 – أكتوبر 2025",
    "exp.gp.b1": "تطوير وصيانة RCA Shop، تطبيق تجارة إلكترونية إنتاجي منشور على Google Play و App Store.",
    "exp.gp.b2": "تنفيذ ميزات تجارية — صفقة اليوم والمنتجات المميزة والفئات الموسمية ومجموعات المنتجات — لتحسين اكتشاف المنتجات والتفاعل.",
    "exp.gp.b3": "دمج PayTabs لتجربة دفع إلكتروني آمنة وسلسة.",
    "exp.gp.b4": "حل أكثر من 15 مشكلة أداء وتحسين مسار الدفع واتساق الواجهة وجودة الإصدار.",

    // Projects
    "projects.title": "المشاريع",
    "projects.kicker": "أعمال مختارة",
    "projects.status_testing": "قيد الاختبار",
    "projects.status_live": "منشور",

    "proj.anonq.desc": "قدت البناء الكامل لتطبيق تواصل اجتماعي للأسئلة والأجوبة المجهولة — أسئلة مجهولة، وموجز إجابات عام، وملفات شخصية، ونظام حظر للمستخدمين — مع خدمة إشراف بالذكاء الاصطناعي من جهة الخادم، وميزات مدفوعة عبر RevenueCat، وروابط عميقة، وإشعارات FCM. معمارية Clean Architecture قائمة على الميزات مع Cubit ودعم كامل للعربية/الإنجليزية و RTL.",
    "proj.jaime.desc": "تحليل ضربة الجولف بالذكاء الاصطناعي: كشف وتتبّع الكرة من جهة الخادم باستخدام YOLO و OpenCV (مرشّح كالمان + تتبّع ROI)، وتصنيف المسار، وتتبّع هيكل اللاعب، وتغذية راجعة فورية أثناء التدريب، وتدريب صوتي عبر ElevenLabs.",
    "proj.herd.desc": "بُني من الصفر — تطبيق إنتاجي للمزارعين لإدارة سجلات الحيوانات والأحداث والخدمات. وصول للبيانات ومزامنة تعمل دون اتصال جيد للمزارع محدودة الشبكة، مع معالجة محسّنة لمجموعات البيانات الكبيرة لتحميل أسرع.",
    "proj.rca.desc": "تطبيق تجارة إلكترونية إنتاجي على Google Play و App Store. تنفيذ صفقة اليوم والمنتجات المميزة والفئات الموسمية والمجموعات؛ ودمج مدفوعات آمنة عبر PayTabs و Apple Pay؛ وحل أكثر من 15 مشكلة وتحسين الاستقرار.",
    "proj.hdcutz.desc": "منصة صالون متعددة التطبيقات تغطي تجارب العميل والموظف والمدير. دمج مدفوعات Stripe و Firebase Cloud Messaging للحجوزات والمدفوعات والإشعارات الفورية، على أساس Clean Architecture.",
    "proj.pooch.desc": "تطبيق خدمات للحيوانات الأليفة بميزات للخدمات والمدفوعات وإدارة المستخدمين. دمج Stripe، وإعادة تصميم مناطق رئيسية في الواجهة، وحل أكثر من 20 مشكلة أداء حرجة لتجربة أكثر سلاسة واتساقًا.",

    "btn.appstore": "App Store",
    "btn.googleplay": "Google Play",

    // Skills
    "skills.title": "المهارات",
    "skills.kicker": "أدواتي",
    "skills.g1": "الموبايل (Flutter) والمعمارية",
    "skills.g2": "الباك اند (أساسي)",
    "skills.g3": "البيانات والواجهات و Firebase",
    "skills.g4": "الأدوات والاختبار والإصدار",
    "skills.g5": "الذكاء الاصطناعي والرؤية الحاسوبية",

    // Contact
    "contact.title": "تواصل",
    "contact.kicker": "لنتحدث",
    "contact.heading": "لديك مشروع أو وظيفة في ذهنك؟",
    "contact.text": "أنا منفتح على فرص هندسة Flutter / الموبايل. أسرع وسيلة للوصول إليّ هي البريد الإلكتروني — سأرد عليك بسرعة.",
    "contact.email_btn": "راسلني",
    "contact.resume_btn": "تحميل السيرة الذاتية",

    // Education & languages
    "edu.title": "التعليم واللغات",
    "edu.degree": "بكالوريوس محاسبة",
    "edu.school": "كلية التجارة، جامعة دمياط",
    "edu.gpa": "المعدل 3.4 / 4.0 (B+)",
    "edu.langs_title": "اللغات",
    "edu.lang_ar": "العربية — لغة أم / ثنائي اللغة",
    "edu.lang_en": "الإنجليزية — إتقان",

    // Footer
    "footer.tagline": "مهندس برمجيات · مطور Flutter",
    "footer.built": "بُني باستخدام HTML و CSS و JavaScript.",
    "footer.rights": "جميع الحقوق محفوظة.",

    // Controls (aria)
    "aria.theme": "تبديل الوضع الفاتح / الداكن",
    "aria.lang": "تبديل اللغة",
    "aria.top": "العودة للأعلى"
  }
};
