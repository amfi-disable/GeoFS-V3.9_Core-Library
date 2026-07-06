// ==UserScript==
// @name                GeoFS-V3.9_Core-Library
// @name:vi             GeoFS-V3.9_Thư-Viện-Cốt-Lõi
// @name:zh-CN          GeoFS-V3.9_核心库
// @name:zh-TW          GeoFS-V3.9_核心庫
// @name:ja             GeoFS-V3.9_コアライブラリ
// @name:ko             GeoFS-V3.9_핵심-라이브러리
// @name:fr             GeoFS-V3.9_Bibliothèque-Principale
// @name:de             GeoFS-V3.9_Kernbibliothek
// @name:es             GeoFS-V3.9_Biblioteca-Principal
// @name:pt-BR          GeoFS-V3.9_Biblioteca-Central
// @name:pt-PT          GeoFS-V3.9_Biblioteca-Central
// @name:ru             GeoFS-V3.9_Core-Library
// @name:ar             GeoFS-V3.9_المكتبة-الأساسية
// @name:tr             GeoFS-V3.9_Çekirdek-Kütüphane
// @name:id             GeoFS-V3.9_Perpustakaan-Inti
// @name:th             GeoFS-V3.9_ห้องสมุดหลัก
// @name:pl             GeoFS-V3.9_Biblioteka-Podstawowa
// @name:nl             GeoFS-V3.9_Kernbibliotheek
// @name:it             GeoFS-V3.9_Biblioteca-Principale
// @name:sv             GeoFS-V3.9_Kärnbibliotek
// @name:da             GeoFS-V3.9_Kernebibliotek
// @name:fi             GeoFS-V3.9_Ydinkirjasto
// @name:nb             GeoFS-V3.9_Kjernebibliotek
// @name:cs             GeoFS-V3.9_Základní-Knihovna
// @name:hu             GeoFS-V3.9_Core-Library
// @name:ro             GeoFS-V3.9_Biblioteca-De-Bază
// @name:uk             GeoFS-V3.9_Основна-Бібліотека
// @name:hi             GeoFS-V3.9_कोर-लाइब्रेरी
// @name:bn             GeoFS-V3.9_মূল-গ্রন্থাগার
// @name:fa             GeoFS-V3.9_کتابخانه-هسته
// @name:he             GeoFS-V3.9_ספריית-ליבה
// @name:ms             GeoFS-V3.9_Perpustakaan-Teras
// @name:fil            GeoFS-V3.9_Pangunahing-Aklatan
// @name:el             GeoFS-V3.9_Βιβλιοθήκη-Πυρήνα
// @name:hr             GeoFS-V3.9_Osnovna-Knjižnica
// @name:sk             GeoFS-V3.9_Základná-Knižnica
// @name:bg             GeoFS-V3.9_Основна-Библиотека
// @name:sr             GeoFS-V3.9_Цоре-Либрари
// @name:lt             GeoFS-V3.9_Pagrindinė-Biblioteka
// @name:lv             GeoFS-V3.9_Galvenā-Bibliotēka
// @name:et             GeoFS-V3.9_Põhiraamatukogu
// @name:sl             GeoFS-V3.9_Osnovna-Knjižnica
// @name:ca             GeoFS-V3.9_Biblioteca-Bàsica
// @name:af             GeoFS-V3.9_Kernbiblioteek
// @name:sw             GeoFS-V3.9_Maktaba-Ya-Msingi
// @name:zu             GeoFS-V3.9_I-Core-Library
// @name:mn             GeoFS-V3.9_Үндсэн-Номын-Сан
// @name:my             GeoFS-V3.9_အခြေခံစာကြည့်တိုက်
// @name:km             GeoFS-V3.9_បណ្ណាល័យស្នូល
// @name:lo             GeoFS-V3.9_ຫໍສະໝຸດຫຼັກ
// @name:ur             GeoFS-V3.9_کور-لائبریری

// @description         The foundational API for the GeoFS-V3.9 ecosystem, providing secure initialization and standardized communication for all modular components. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:vi      API nền tảng cho hệ sinh thái GeoFS-V3.9, cung cấp khả năng khởi tạo an toàn và giao tiếp được tiêu chuẩn hóa cho tất cả các thành phần mô-đun. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zh-CN   GeoFS-V3.9 生态系统的基础 API，为所有模块化组件提供安全初始化和标准化通信。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zh-TW   GeoFS-V3.9 生態系統的基礎 API，為所有模組化元件提供安全初始化和標準化通訊。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ja      GeoFS-V3.9 エコシステムの基本 API で、すべてのモジュラー コンポーネントに安全な初期化と標準化された通信を提供します。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ko      GeoFS-V3.9 생태계를 위한 기본 API로, 모든 모듈식 구성 요소에 대한 보안 초기화 및 표준화된 통신을 제공합니다. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fr      L'API fondamentale de l'écosystème GeoFS-V3.9, fournissant une initialisation sécurisée et une communication standardisée pour tous les composants modulaires. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:de      Die grundlegende API für das GeoFS-V3.9-Ökosystem, die sichere Initialisierung und standardisierte Kommunikation für alle modularen Komponenten bietet. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:es      La API fundamental para el ecosistema GeoFS-V3.9, que proporciona inicialización segura y comunicación estandarizada para todos los componentes modulares. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pt-BR   A API fundamental para o ecossistema GeoFS-V3.9, fornecendo inicialização segura e comunicação padronizada para todos os componentes modulares. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pt-PT   A API fundamental para o ecossistema GeoFS-V3.9, proporcionando uma inicialização segura e uma comunicação padronizada para todos os componentes modulares. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ru      Базовый API для экосистемы GeoFS-V3.9, обеспечивающий безопасную инициализацию и стандартизированную связь для всех модульных компонентов. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ar      واجهة برمجة التطبيقات الأساسية للنظام البيئي GeoFS-V3.9، مما يوفر تهيئة آمنة واتصالًا موحدًا لجميع المكونات المعيارية. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:tr      GeoFS-V3.9 ekosisteminin temel API'si olup, tüm modüler bileşenler için güvenli başlatma ve standartlaştırılmış iletişim sağlar. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:id      API dasar untuk ekosistem GeoFS-V3.9, menyediakan inisialisasi aman dan komunikasi terstandarisasi untuk semua komponen modular. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:th      API พื้นฐานสำหรับระบบนิเวศ GeoFS-V3.9 ให้การเริ่มต้นที่ปลอดภัยและการสื่อสารที่เป็นมาตรฐานสำหรับส่วนประกอบโมดูลาร์ทั้งหมด © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pl      Podstawowy interfejs API ekosystemu GeoFS-V3.9, zapewniający bezpieczną inicjalizację i standaryzowaną komunikację dla wszystkich komponentów modułowych. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:nl      De fundamentele API voor het GeoFS-V3.9-ecosysteem, die veilige initialisatie en gestandaardiseerde communicatie biedt voor alle modulaire componenten. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:it      L'API fondamentale per l'ecosistema GeoFS-V3.9, che fornisce un'inizializzazione sicura e una comunicazione standardizzata per tutti i componenti modulari. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sv      Grundläggande API för GeoFS-V3.9-ekosystemet, ger säker initiering och standardiserad kommunikation för alla modulära komponenter. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:da      Det grundlæggende API for GeoFS-V3.9-økosystemet, der giver sikker initialisering og standardiseret kommunikation for alle modulære komponenter. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fi      GeoFS-V3.9-ekosysteemin perustava API, joka tarjoaa turvallisen alustuksen ja standardoidun tiedonsiirron kaikille modulaarisille komponenteille. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:nb      Grunnleggende API for GeoFS-V3.9-økosystemet, gir sikker initialisering og standardisert kommunikasjon for alle modulære komponenter. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:cs      Základní API pro ekosystém GeoFS-V3.9 poskytující bezpečnou inicializaci a standardizovanou komunikaci pro všechny modulární komponenty. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hu      A GeoFS-V3.9 ökoszisztéma alapozó API, amely biztonságos inicializálást és szabványos kommunikációt biztosít az összes moduláris komponens számára. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ro      API-ul de bază pentru ecosistemul GeoFS-V3.9, care oferă inițializare sigură și comunicare standardizată pentru toate componentele modulare. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:uk      Основний API для екосистеми GeoFS-V3.9, що забезпечує безпечну ініціалізацію та стандартизований зв’язок для всіх модульних компонентів. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hi      जियोएफएस-वी3.9 पारिस्थितिकी तंत्र के लिए मूलभूत एपीआई, सभी मॉड्यूलर घटकों के लिए सुरक्षित आरंभीकरण और मानकीकृत संचार प्रदान करता है। © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:bn      GeoFS-V3.9 ইকোসিস্টেমের জন্য ফাউন্ডেশনাল API, সমস্ত মডুলার উপাদানগুলির জন্য সুরক্ষিত সূচনা এবং প্রমিত যোগাযোগ প্রদান করে। © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fa      API اساسی برای اکوسیستم GeoFS-V3.9، ارائه اولیه ایمن و ارتباطات استاندارد شده برای همه اجزای ماژولار. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:he      ה-API הבסיסי עבור המערכת האקולוגית GeoFS-V3.9, המספק אתחול מאובטח ותקשורת סטנדרטית עבור כל הרכיבים המודולריים. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ms      API asas untuk ekosistem GeoFS-V3.9, menyediakan permulaan selamat dan komunikasi piawai untuk semua komponen modular. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fil     Ang foundational API para sa GeoFS-V3.9 ecosystem, na nagbibigay ng secure na pagsisimula at standardized na komunikasyon para sa lahat ng modular na bahagi. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:el      Το θεμελιώδες API για το οικοσύστημα GeoFS-V3.9, που παρέχει ασφαλή αρχικοποίηση και τυποποιημένη επικοινωνία για όλα τα αρθρωτά στοιχεία. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hr      Temeljni API za GeoFS-V3.9 ekosustav, koji pruža sigurnu inicijalizaciju i standardiziranu komunikaciju za sve modularne komponente. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sk      Základné API pre ekosystém GeoFS-V3.9, ktoré poskytuje bezpečnú inicializáciu a štandardizovanú komunikáciu pre všetky modulárne komponenty. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:bg      Основополагащият API за екосистемата GeoFS-V3.9, осигуряващ сигурна инициализация и стандартизирана комуникация за всички модулни компоненти. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sr      Основни АПИ за ГеоФС-В3.9 екосистем, који обезбеђује сигурну иницијализацију и стандардизовану комуникацију за све модуларне компоненте. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lt      Pagrindinis „GeoFS-V3.9“ ekosistemos API, užtikrinantis saugų visų modulinių komponentų inicijavimą ir standartizuotą ryšį. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lv      GeoFS-V3.9 ekosistēmas pamata API, kas nodrošina drošu inicializāciju un standartizētu komunikāciju visiem modulārajiem komponentiem. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:et      GeoFS-V3.9 ökosüsteemi põhiline API, mis pakub turvalist lähtestamist ja standardset sidet kõigi modulaarsete komponentide jaoks. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sl      Temeljni API za ekosistem GeoFS-V3.9, ki zagotavlja varno inicializacijo in standardizirano komunikacijo za vse modularne komponente. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ca      L'API fonamental per a l'ecosistema GeoFS-V3.9, que proporciona una inicialització segura i una comunicació estandarditzada per a tots els components modulars. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:af      Die grondliggende API vir die GeoFS-V3.9-ekosisteem, wat veilige inisialisering en gestandaardiseerde kommunikasie vir alle modulêre komponente bied. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sw      API ya msingi ya mfumo ikolojia wa GeoFS-V3.9, inayotoa uanzishaji salama na mawasiliano sanifu kwa vipengele vyote vya moduli. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zu      I-API eyisisekelo ye-GeoFS-V3.9 ecosystem, ehlinzeka ngokuqaliswa okuphephile nokuxhumana okujwayelekile kwazo zonke izingxenye zemojuli. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:mn      GeoFS-V3.9 экосистемийн үндсэн API нь бүх модульчлагдсан бүрэлдэхүүн хэсгүүдийн аюулгүй ажиллагааг эхлүүлэх, стандарт харилцаа холбоог хангадаг. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:my      GeoFS-V3.9 ဂေဟစနစ်အတွက် အခြေခံ API သည် လုံခြုံသောကနဦးပြုခြင်းနှင့် စံပြုဆက်သွယ်ရေးကို ပံ့ပိုးပေးသည့် မော်ဂျူလာအစိတ်အပိုင်းအားလုံးအတွက် ဖြစ်သည်။ © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:km      API មូលដ្ឋានសម្រាប់ប្រព័ន្ធអេកូ GeoFS-V3.9 ដែលផ្តល់នូវការចាប់ផ្តើមសុវត្ថិភាព និងការទំនាក់ទំនងស្តង់ដារសម្រាប់សមាសធាតុម៉ូឌុលទាំងអស់។ © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lo      API ພື້ນຖານສໍາລັບລະບົບນິເວດ GeoFS-V3.9, ສະຫນອງການເລີ່ມຕົ້ນທີ່ປອດໄພແລະການສື່ສານມາດຕະຖານສໍາລັບອົງປະກອບ modular ທັງຫມົດ. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ur      GeoFS-V3.9 ماحولیاتی نظام کے لیے بنیادی API، تمام ماڈیولر اجزاء کے لیے محفوظ آغاز اور معیاری مواصلات فراہم کرتا ہے۔ © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.

// @homepageURL         https://sites.google.com/view/geofs-v39-ecosystem/home
// @connect             greasyfork.org
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          safari
// @compatible          brave
// @compatible          opera
// @copyright           2026, _init (https://greasyfork.org/users/1594049)
// @icon                https://geofs-assets.evengao6688.workers.dev/icons/core-library.png

// @namespace           https://greasyfork.org/users/1594049
// @version             2.0.0
// @author              _init
// @match               https://www.geo-fs.com/geofs.php*
// @grant               none
// @license             MIT
// @downloadURL https://update.greasyfork.org/scripts/581510/GeoFS-V39_Core-Library.user.js
// @updateURL https://update.greasyfork.org/scripts/581510/GeoFS-V39_Core-Library.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // Physical Constants: Standardized conversion coefficients
    window.DEGREES_TO_RAD = window.DEGREES_TO_RAD || 0.017453292519943295;
    window.RAD_TO_DEGREES = window.RAD_TO_DEGREES || 57.29577951308232;
    window.METERS_TO_FEET = window.METERS_TO_FEET || 3.280839895;

    /**
     * V39_NOTIF: Singleton UI Notification Engine
     * Orchestrates high-fidelity glassmorphic toast alerts with queue management.
     */
    window.V39_NOTIF = {
        /**
         * Dispatches a new notification toast to the global container.
         * 
         * @param {string} text - The message to display (automatically uppercased).
         * @param {string} [type='info'] - info | success | warn | critical (determines border color and icon).
         * @param {number} [duration=4000] - Lifespan of the toast in milliseconds.
         */
        show: function(text, type = 'info', duration = 4000) {
            const container = this._ensureContainer();
            const toast = document.createElement('div');
            
            const colors = {
                info: { border: '#ff9f05', bg: 'rgba(26,26,26,0.9)', icon: '📋' },
                success: { border: '#10b981', bg: 'rgba(10,35,25,0.9)', icon: '✅' },
                warn: { border: '#fbbf24', bg: 'rgba(35,30,10,0.9)', icon: '⚠️' },
                critical: { border: '#ef4444', bg: 'rgba(35,10,10,0.9)', icon: '🔥' }
            };

            const theme = colors[type] || colors.info;
            
            toast.className = 'v39-toast';
            toast.style.cssText = `
                margin-bottom: 10px; padding: 12px 18px; 
                background: ${theme.bg}; backdrop-filter: blur(12px); 
                border: 1px solid rgba(255,255,255,0.1); 
                border-left: 4px solid ${theme.border}; 
                border-radius: 8px; color: white; font-family: 'Inter', sans-serif; 
                font-size: 11px; font-weight: 700; box-shadow: 0 10px 30px rgba(0,0,0,0.5); 
                display: flex; align-items: center; gap: 12px; pointer-events: auto; 
                animation: v39-toast-in 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                min-width: 250px; text-transform: uppercase; letter-spacing: 0.5px;
            `;

            toast.innerHTML = `<span style="font-size: 14px;">${theme.icon}</span> <span>${text.toUpperCase()}</span>`;
            container.appendChild(toast);

            setTimeout(() => {
                toast.style.animation = 'v39-toast-out 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards';
                setTimeout(() => toast.remove(), 400);
            }, duration);
        },

        info: function(t) { this.show(t, 'info'); },
        success: function(t) { this.show(t, 'success'); },
        warn: function(t) { this.show(t, 'warn'); },
        critical: function(t) { this.show(t, 'critical'); },

        /**
         * Ensures the global toast container exists in the DOM.
         * Injects necessary CSS animations if missing.
         */
        _ensureContainer: function() {
            let container = document.getElementById('v39-notif-container');
            if (!container) {
                container = document.createElement('div');
                container.id = 'v39-notif-container';
                container.style.cssText = "position: fixed; top: 20px; right: 20px; z-index: 9999999; display: flex; flex-direction: column; align-items: flex-end; pointer-events: none;";
                document.body.appendChild(container);
                const style = document.createElement('style');
                style.textContent = `@keyframes v39-toast-in { from { transform: translateX(120%); opacity: 0; } to { transform: translateX(0); opacity: 1; } } @keyframes v39-toast-out { from { transform: translateX(0); opacity: 1; } to { transform: translateX(120%); opacity: 0; } }`;
                document.head.appendChild(style);
            }
            return container;
        }
    };

    /**
     * Module Guard: Safe Initialization Lifecycle
     * Orchestrates the secure execution of modular code blocks. Implements
     * error isolation and technical notification for deployment status.
     * 
     * @param {string} moduleName - Target identifier for registry
     * @param {function} func - Executable module logic
     * @param {boolean} silent - Suppresses initialization-start alerts
     */
    window.SafeInit = function(moduleName, func, silent = true) {
        console.info(`[GeoFS-V3.9_Core-Library] >> [MODULE] Initializing: ${moduleName}`);
        if (!silent) window.V39_NOTIF.info(`Initializing ${moduleName}...`);
        try {
            func();
            console.log(`[GeoFS-V3.9_Core-Library] >> [MODULE SUCCESS] ${moduleName} Active.`);
            window.V39_NOTIF.success(`${moduleName} Loaded.`);
        } catch (e) {
            console.error(`[GeoFS-V3.9_Core-Library] >> [MODULE ERROR] CRITICAL FAILURE in ${moduleName}:`, e);
            window.V39_NOTIF.critical(`${moduleName} Boot Failure.`);
        }
    };

    /**
     * HUD Orchestrator: Persistent UI Foundation
     * Manages the unified, glassmorphic HUD panel used by all standalone modules.
     * Features self-healing DOM restoration and prioritized Z-stack management.
     */
    window.ensureSharedHUD = function() {
        if (globalThis.hudProVisible === undefined) globalThis.hudProVisible = true;
        if (globalThis.hudProMinimized === undefined) globalThis.hudProMinimized = false;

        // Stylesheet Injection: Enforce V3.9 Design Tokens
        if (!document.getElementById('hudModularStyles')) {
            const style = document.createElement('style');
            style.id = 'hudModularStyles';
            style.textContent = `
                #flightDataDisplay {
                    position: fixed !important;
                    top: 100px;
                    right: 20px;
                    width: 250px;
                    background: rgba(26, 26, 26, 0.9);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 12px;
                    padding: 15px;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    z-index: 220000 !important;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 8px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                    font-family: 'Roboto', sans-serif;
                    pointer-events: auto !important;
                }
                .hud-drag-handle { grid-column: 1 / -1; text-align: center; color: rgba(255, 159, 5, 0.3); font-size: 7.5px; letter-spacing: 2px; cursor: move; margin-bottom: 5px; text-transform: uppercase; }
                .unified-tabs { grid-column: 1 / -1; display: grid; gap: 3px; margin-bottom: 10px; }
                .unified-tab { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); border-radius: 4px; font-size: 8px; padding: 4px; cursor: pointer; transition: all 0.2s; font-weight: 700; text-transform: uppercase; }
                .unified-tab:hover { background: rgba(255,255,255,0.1); }
                .unified-tab.active { color: #ff9f05; border-color: #ff9f05; background: rgba(255, 159, 5, 0.15); }
                .unified-content { display: none; padding: 10px; max-height: 400px; overflow-y: auto; }
                .unified-content.active { display: block; }
                .unified-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
                #hudMinimizeBtn {
                    position: fixed; width: 40px; height: 40px; border-radius: 50%;
                    background: rgba(30, 30, 30, 0.9); backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.15); color: #ff9f05;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; z-index: 220001; font-size: 18px; box-shadow: 0 5px 15px rgba(0,0,0,0.4);
                }
                .hud-cell { display: flex; flex-direction: column; }
                .hud-label { font-size: 8px; color: #ff9f05; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.8; }
                .hud-value { font-size: 13px; font-weight: 700; color: #fff; font-family: 'Roboto Mono', monospace; }
            `;
            document.head.appendChild(style);
        }

        // Structural Injection: Ensure container existence
        let panel = document.getElementById('flightDataDisplay');
        if (!panel) {
            panel = document.createElement('div');
            panel.id = 'flightDataDisplay';
            document.body.appendChild(panel);
        }

        // Module Navigation: Ensure Tab Bar existence
        if (!document.getElementById('hud-unified-tabs')) {
            const handle = document.createElement('div');
            handle.className = 'hud-drag-handle';
            handle.textContent = 'GeoFS-V3.9_HUD';
            
            const tabs = document.createElement('div');
            tabs.id = 'hud-unified-tabs';
            tabs.className = 'unified-tabs';
            
            panel.prepend(tabs);
            panel.prepend(handle);
            
            if (window.initAddonDraggable) window.initAddonDraggable(panel, 'geofs-addonpack-hud-pos');
        }

        // Interaction Layer: Ensure Global Minimize Trigger
        if (!document.getElementById('hudMinimizeBtn')) {
            const btn = document.createElement('div');
            btn.id = 'hudMinimizeBtn';
            btn.innerHTML = globalThis.hudProMinimized ? '◈' : '▣';
            btn.onclick = (e) => {
                e.stopPropagation();
                globalThis.hudProMinimized = !globalThis.hudProMinimized;
                btn.innerHTML = globalThis.hudProMinimized ? '◈' : '▣';
            };
            document.body.appendChild(btn);
            if (window.initAddonDraggable) window.initAddonDraggable(btn, 'geofs-addonpack-hud-icon-pos');
        }

        // Self-Healing Lifecycle Loop: DOM integrity monitoring
        if (!window._hudVisibilityLoop) {
            window._hudVisibilityLoop = setInterval(() => {
                let btn = document.getElementById('hudMinimizeBtn');
                let p = document.getElementById('flightDataDisplay');
                
                // Integrity check: Restoration on accidental deletion
                if (!btn || !p) {
                    window.ensureSharedHUD();
                    return;
                }

                const isVisible = globalThis.hudProVisible !== false;
                const isMinimized = globalThis.hudProMinimized === true;

                btn.style.display = isVisible ? 'flex' : 'none';
                p.style.display = (isVisible && !isMinimized) ? 'grid' : 'none';
                
                // Prioritize Z-Index for UI visibility
                btn.style.zIndex = "220001";
                p.style.zIndex = "220000";
            }, 500);
        }
    };

    /**
     * switchHUDProTab: Global Tab Orchestrator
     * Toggles visibility between registered module containers.
     * 
     * @param {string} activeTabId - Target tab identifier
     */
    window.switchHUDProTab = function(activeTabId) {
        const p = document.getElementById('flightDataDisplay');
        if (!p) return;
        
        // UI Sync: Clear previous state
        p.querySelectorAll('.unified-tab').forEach(t => t.classList.remove('active'));
        p.querySelectorAll('.unified-content').forEach(c => c.classList.remove('active'));
        
        // UI Sync: Apply active state
        const tabBtn = document.getElementById(`tab-btn-${activeTabId}`);
        const tabContent = document.getElementById(`tab-content-${activeTabId}`);
        if (tabBtn) tabBtn.classList.add('active');
        if (tabContent) tabContent.classList.add('active');
        
        // Persistence Sync: Restore HUD if currently minimized
        globalThis.hudProMinimized = false;
        const btn = document.getElementById('hudMinimizeBtn');
        if (btn) btn.innerHTML = '▣';
    };

    /**
     * registerHUDTab: Primary Module Integration Endpoint
     * Standardized method for standalone modules to inject their UI into the unified panel.
     */
    window.registerHUDTab = function(tabId, label, contentHTML, isGrid) {
        console.log(`[GeoFS-Core] >> Attempting to register tab: ${tabId} (${label})`);
        window.ensureSharedHUD();
        const tabsContainer = document.getElementById('hud-unified-tabs');
        if (!tabsContainer) {
            console.error(`[GeoFS-Core] >> Failed to register tab ${tabId}: tabsContainer missing!`);
            return;
        }

        // Logic: Create the navigation button if it doesn't exist.
        if (!document.getElementById(`tab-btn-${tabId}`)) {
            const btn = document.createElement('button');
            btn.id = `tab-btn-${tabId}`;
            btn.className = 'unified-tab';
            btn.textContent = label;
            btn.onclick = () => window.switchHUDProTab(tabId);
            tabsContainer.appendChild(btn);
            tabsContainer.style.gridTemplateColumns = `repeat(${tabsContainer.children.length}, 1fr)`;
            console.log(`[GeoFS-Core] >> Created button for tab: ${tabId}`);
        }

        // Logic: Create the content container if it doesn't exist.
        if (!document.getElementById(`tab-content-${tabId}`)) {
            const content = document.createElement('div');
            content.id = `tab-content-${tabId}`;
            content.className = `unified-content ${isGrid ? 'unified-grid' : ''}`;
            content.innerHTML = contentHTML;
            document.getElementById('flightDataDisplay').appendChild(content);
            console.log(`[GeoFS-Core] >> Created content container for tab: ${tabId}`);
        }

        // UX: Auto-activate the first module to register.
        if (!document.querySelector('.unified-tab.active')) {
            console.log(`[GeoFS-Core] >> Auto-switching to first registered tab: ${tabId}`);
            window.switchHUDProTab(tabId);
        }
    };

    /**
     * hudCell: UI Generation Utility
     * Generates a standardized, high-density data cell for HUD content.
     */
    window.hudCell = function(label, value, warnClass, idClass) { 
        return `<div class="hud-cell"><span class="hud-label">${label}</span><span class="hud-value ${idClass || ''} ${warnClass || ''}">${value}</span></div>`; 
    };

    /**
     * initAddonDraggable: UX Persistence Handler
     * Implements coordinate-based persistence via localStorage with screen boundary constraints.
     */
    window.initAddonDraggable = function(card, storageKey) {
        if (!card) return;
        let isDragging = false, dragMoved = false, dragOffsetX = 0, dragOffsetY = 0;
        
        // Load saved position
        const savedPos = localStorage.getItem(storageKey);
        if (savedPos) {
            try {
                const {left, top} = JSON.parse(savedPos);
                if (left && top) {
                    card.style.left = left;
                    card.style.top = top;
                    card.style.bottom = 'auto';
                    card.style.right = 'auto';
                    card.style.transform = 'none';
                }
            } catch (err) {}
        }
        
        card.addEventListener('mousedown', (e) => {
            if (['BUTTON', 'INPUT', 'A', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;
            isDragging = true;
            dragMoved = false;
            
            const rect = card.getBoundingClientRect();
            dragOffsetX = e.clientX - rect.left;
            dragOffsetY = e.clientY - rect.top;
            
            // Lock position inline and clear bottom/right/transform constraints to prevent dynamic layout shifts
            card.style.left = rect.left + 'px';
            card.style.top = rect.top + 'px';
            card.style.bottom = 'auto';
            card.style.right = 'auto';
            card.style.transform = 'none';
            
            card.style.cursor = 'grabbing';
            card.style.transition = 'none';
            
            e.preventDefault();
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            dragMoved = true;
            
            let newLeft = e.clientX - dragOffsetX;
            let newTop = e.clientY - dragOffsetY;
            
            // Screen Boundary Logic
            const maxX = window.innerWidth - card.offsetWidth;
            const maxY = window.innerHeight - card.offsetHeight;
            newLeft = Math.max(0, Math.min(newLeft, maxX));
            newTop = Math.max(0, Math.min(newTop, maxY));

            card.style.left = newLeft + 'px';
            card.style.top = newTop + 'px';
        });
        
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                card.style.cursor = 'default';
                card.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.15), opacity 0.3s ease';
                
                if (dragMoved) {
                    localStorage.setItem(storageKey, JSON.stringify({
                        left: card.style.left,
                        top: card.style.top
                    }));
                }
            }
        });
    };

    // Auto-Initialization of foundational UI.
    if (document.body) {
        window.ensureSharedHUD();
    } else {
        window.addEventListener('DOMContentLoaded', () => window.ensureSharedHUD());
    }

    console.log("[GeoFS-V3.9_Core-Library] >> Core foundations loaded and ready.");
    if (window.V39_NOTIF) window.V39_NOTIF.success("GeoFS-V3.9_Core-Library Loaded.");
})();

/**
 * GeoFS-V3.9 Aircraft Technical Registry
 * 
 * Master data source for physical modeling across the ecosystem.
 * Contains validated OEW (Operating Empty Weight), MTOW (Maximum Takeoff Weight), 
 * and system capabilities for every core GeoFS aircraft.
 */
window.AIRCRAFT_DATA = {
    "1": { "name": "Piper Cub (J-3)", "maxFlaps": 0, "hasGear": false, "hasSpoilers": false, "oew": 309, "mtow": 553, "maxFuel": 45 },
    "2": { "name": "Cessna 172", "maxFlaps": 3, "hasGear": false, "hasSpoilers": false, "oew": 760, "mtow": 1157, "maxFuel": 169 },
    "3": { "name": "Alphajet PAF", "maxFlaps": 2, "hasGear": true, "hasSpoilers": true, "oew": 3515, "mtow": 8000, "maxFuel": 1520 },
    "4": { "name": "Boeing 737-700", "maxFlaps": 8, "hasGear": true, "hasSpoilers": true, "oew": 37340, "mtow": 70080, "maxFuel": 20816 },
    "5": { "name": "Embraer Phenom 100", "maxFlaps": 4, "hasGear": true, "hasSpoilers": true, "oew": 3235, "mtow": 4750, "maxFuel": 1272 },
    "6": { "name": "de Havilland Canada DHC-6 Twin Otter", "maxFlaps": 4, "hasGear": false, "hasSpoilers": false, "oew": 3121, "mtow": 5670, "maxFuel": 1175 },
    "7": { "name": "F-16 Fighting Falcon", "maxFlaps": 0, "hasGear": true, "hasSpoilers": true, "oew": 8570, "mtow": 19200, "maxFuel": 3175 },
    "8": { "name": "Pitts Special S1", "maxFlaps": 0, "hasGear": false, "hasSpoilers": false, "oew": 326, "mtow": 521, "maxFuel": 60 },
    "9": { "name": "Eurocopter EC135", "maxFlaps": 0, "hasGear": false, "hasSpoilers": false, "oew": 1455, "mtow": 2910, "maxFuel": 560 },
    "10": { "name": "Airbus A380-800", "maxFlaps": 4, "hasGear": true, "hasSpoilers": true, "oew": 285000, "mtow": 575000, "maxFuel": 253984 },
    "11": { "name": "Alisport Silent 2 Electro", "maxFlaps": 0, "hasGear": true, "hasSpoilers": true, "oew": 205, "mtow": 300, "maxFuel": 0 },
    "12": { "name": "Pilatus PC-7 Mk-I", "maxFlaps": 2, "hasGear": true, "hasSpoilers": false, "oew": 1330, "mtow": 2700, "maxFuel": 360 },
    "13": { "name": "de Havilland Canada DHC-2 Beaver", "maxFlaps": 3, "hasGear": false, "hasSpoilers": false, "oew": 1361, "mtow": 2313, "maxFuel": 359 },
    "14": { "name": "Colomban MC-15 Cri-cri", "maxFlaps": 1, "hasGear": false, "hasSpoilers": false, "oew": 80, "mtow": 170, "maxFuel": 18 },
    "15": { "name": "Lockheed P-38 Lightning F-5B", "maxFlaps": 3, "hasGear": true, "hasSpoilers": false, "oew": 5800, "mtow": 9800, "maxFuel": 1100 },
    "16": { "name": "Douglas DC-3", "maxFlaps": 3, "hasGear": true, "hasSpoilers": false, "oew": 7650, "mtow": 11430, "maxFuel": 1800 },
    "18": { "name": "Sukhoi Su-35", "maxFlaps": 2, "hasGear": true, "hasSpoilers": true, "oew": 18400, "mtow": 34500, "maxFuel": 11500 },
    "19": { "name": "Concorde", "maxFlaps": 0, "hasGear": true, "hasSpoilers": false, "oew": 78700, "mtow": 185000, "maxFuel": 95600 },
    "20": { "name": "Zlin Z-50", "maxFlaps": 0, "hasGear": false, "hasSpoilers": false, "oew": 570, "mtow": 840, "maxFuel": 45 },
    "21": { "name": "Piper PA-28 161 Warrior II", "maxFlaps": 3, "hasGear": false, "hasSpoilers": false, "oew": 612, "mtow": 1107, "maxFuel": 145 },
    "22": { "name": "Boeing 737-800", "maxFlaps": 8, "hasGear": true, "hasSpoilers": true, "oew": 41140, "mtow": 79010, "maxFuel": 20816 },
    "24": { "name": "Airbus A350-900", "maxFlaps": 5, "hasGear": true, "hasSpoilers": true, "oew": 142400, "mtow": 280000, "maxFuel": 112600 },
    "25": { "name": "Boeing 777-300ER", "maxFlaps": 6, "hasGear": true, "hasSpoilers": true, "oew": 167800, "mtow": 351500, "maxFuel": 145538 },
    "27": { "name": "Boeing F/A-18F Super Hornet", "maxFlaps": 3, "hasGear": true, "hasSpoilers": true, "oew": 14552, "mtow": 29937, "maxFuel": 6200 },
    "28": { "name": "Beechcraft Baron B55", "maxFlaps": 3, "hasGear": true, "hasSpoilers": false, "oew": 1431, "mtow": 2313, "maxFuel": 322 },
    "29": { "name": "Dassault Rafale", "maxFlaps": 0, "hasGear": true, "hasSpoilers": false, "oew": 10300, "mtow": 24500, "maxFuel": 4700 },
    "31": { "name": "Potez 25", "maxFlaps": 0, "hasGear": false, "hasSpoilers": false, "oew": 1490, "mtow": 2558, "maxFuel": 250 },
    "32": { "name": "Northrop T-38 Talon", "maxFlaps": 2, "hasGear": true, "hasSpoilers": true, "oew": 3270, "mtow": 5670, "maxFuel": 1800 },
    "240": { "name": "Boeing 777-200ER", "maxFlaps": 6, "hasGear": true, "hasSpoilers": true, "oew": 138100, "mtow": 297550, "maxFuel": 137460 },
    "242": { "name": "Airbus A321neo", "maxFlaps": 5, "hasGear": true, "hasSpoilers": true, "oew": 50100, "mtow": 97000, "maxFuel": 26000 },
    "243": { "name": "Airbus A319-100", "maxFlaps": 5, "hasGear": true, "hasSpoilers": true, "oew": 40800, "mtow": 75500, "maxFuel": 18600 },
    "244": { "name": "Airbus A320neo", "maxFlaps": 5, "hasGear": true, "hasSpoilers": true, "oew": 44300, "mtow": 79000, "maxFuel": 19046 },
    "2844": { "name": "Falcon 9 (SpaceX)", "maxFlaps": 0, "hasGear": true, "hasSpoilers": true, "oew": 22200, "mtow": 549054, "maxFuel": 395700 },
    "2948": { "name": "North American XB-70 Valkyrie", "maxFlaps": 0, "hasGear": true, "hasSpoilers": false, "oew": 115031, "mtow": 245847, "maxFuel": 140000 },
    "2953": { "name": "Space Shuttle Atlantis (OV104)", "maxFlaps": 1, "hasGear": true, "hasSpoilers": true, "oew": 78000, "mtow": 110000, "maxFuel": 0 },
    "2973": { "name": "Airbus A350-1000 XWB", "maxFlaps": 5, "hasGear": true, "hasSpoilers": true, "oew": 155000, "mtow": 319000, "maxFuel": 125000 },
    "2988": { "name": "North American X-15", "maxFlaps": 2, "hasGear": true, "hasSpoilers": true, "oew": 6620, "mtow": 15420, "maxFuel": 8300 },
    "3179": { "name": "Boeing 787-10", "maxFlaps": 6, "hasGear": true, "hasSpoilers": true, "oew": 135500, "mtow": 254000, "maxFuel": 101000 },
    "4341": { "name": "Spirit of St. Louis", "maxFlaps": 0, "hasGear": false, "hasSpoilers": false, "oew": 975, "mtow": 2380, "maxFuel": 1200 },
    "5038": { "name": "Lockheed L-1011-1 Tristar", "maxFlaps": 5, "hasGear": true, "hasSpoilers": true, "oew": 105100, "mtow": 195045, "maxFuel": 68000 },
    "5073": { "name": "Bombardier Learjet 45 XR", "maxFlaps": 3, "hasGear": true, "hasSpoilers": true, "oew": 6212, "mtow": 9752, "maxFuel": 2700 },
    "5086": { "name": "Airbus A321-211", "maxFlaps": 5, "hasGear": true, "hasSpoilers": true, "oew": 48500, "mtow": 93500, "maxFuel": 23700 },
    "5156": { "name": "Airbus A318-112", "maxFlaps": 5, "hasGear": true, "hasSpoilers": true, "oew": 39500, "mtow": 68000, "maxFuel": 18600 },
    "5193": { "name": "Boeing 747-8i", "maxFlaps": 6, "hasGear": true, "hasSpoilers": true, "oew": 220128, "mtow": 447700, "maxFuel": 191000 },
    "5203": { "name": "Boeing 737-600", "maxFlaps": 8, "hasGear": true, "hasSpoilers": true, "oew": 37340, "mtow": 65990, "maxFuel": 20816 },
    "5211": { "name": "Boeing 747SP", "maxFlaps": 6, "hasGear": true, "hasSpoilers": true, "oew": 152780, "mtow": 317500, "maxFuel": 150000 },
    "5314": { "name": "Boeing 747-100 SCA", "maxFlaps": 6, "hasGear": true, "hasSpoilers": true, "oew": 162400, "mtow": 322050, "maxFuel": 145000 },
    "5409": { "name": "Boeing 747-400D", "maxFlaps": 6, "hasGear": true, "hasSpoilers": true, "oew": 181000, "mtow": 396890, "maxFuel": 173472 },
    "5431": { "name": "Northrop YF-23", "maxFlaps": 0, "hasGear": true, "hasSpoilers": true, "oew": 14900, "mtow": 29000, "maxFuel": 8600 },
    "5499": { "name": "CubCrafters CC19 XCub", "maxFlaps": 3, "hasGear": false, "hasSpoilers": false, "oew": 552, "mtow": 1043, "maxFuel": 150 },
    "5516": { "name": "Boeing 747-400 LCF", "maxFlaps": 6, "hasGear": true, "hasSpoilers": true, "oew": 180530, "mtow": 364235, "maxFuel": 160000 },
    "5527": { "name": "Boeing 747-400", "maxFlaps": 6, "hasGear": true, "hasSpoilers": true, "oew": 183520, "mtow": 396890, "maxFuel": 173472 },
    "5551": { "name": "Comac C919-100", "maxFlaps": 5, "hasGear": true, "hasSpoilers": true, "oew": 42000, "mtow": 71500, "maxFuel": 15600 },
    "5566": { "name": "Embraer E175", "maxFlaps": 5, "hasGear": true, "hasSpoilers": true, "oew": 21886, "mtow": 38790, "maxFuel": 9335 },
    "5585": { "name": "Boeing 767-300ER", "maxFlaps": 6, "hasGear": true, "hasSpoilers": true, "oew": 90010, "mtow": 186880, "maxFuel": 72900 },
    "1013": { "name": "ATR 42-600", "maxFlaps": 4, "hasGear": true, "hasSpoilers": true, "oew": 11700, "mtow": 18600, "maxFuel": 4500 },
    "1015": { "name": "Challenger 650", "maxFlaps": 3, "hasGear": true, "hasSpoilers": true, "oew": 12300, "mtow": 21863, "maxFuel": 9072 },
    "1016": { "name": "CRJ900", "maxFlaps": 4, "hasGear": true, "hasSpoilers": true, "oew": 21433, "mtow": 38330, "maxFuel": 8800 },
    "2808": { "name": "Supermarine Spitfire Mk IX", "maxFlaps": 1, "hasGear": true, "hasSpoilers": false, "oew": 2300, "mtow": 4300, "maxFuel": 380 },
    "2843": { "name": "Airbus A321-200", "maxFlaps": 5, "hasGear": true, "hasSpoilers": true, "oew": 48500, "mtow": 93500, "maxFuel": 24000 },
    "4402": { "name": "Boeing 777-200F", "maxFlaps": 6, "hasGear": true, "hasSpoilers": true, "oew": 144400, "mtow": 347800, "maxFuel": 145000 },
    "5229": { "name": "F-35B Lightning II", "maxFlaps": 0, "hasGear": true, "hasSpoilers": true, "oew": 14700, "mtow": 27200, "maxFuel": 6125 },
    "5486": { "name": "Aviat A-1B Husky", "maxFlaps": 3, "hasGear": false, "hasSpoilers": false, "oew": 531, "mtow": 907, "maxFuel": 190 },
    "5642": { "name": "Tupolev Tu-144", "maxFlaps": 0, "hasGear": true, "hasSpoilers": false, "oew": 99200, "mtow": 207000, "maxFuel": 95000 },
    "5678": { "name": "Boeing 757-200", "maxFlaps": 5, "hasGear": true, "hasSpoilers": true, "oew": 58440, "mtow": 115680, "maxFuel": 34500 },
    "5712": { "name": "McDonnell Douglas MD-11", "maxFlaps": 5, "hasGear": true, "hasSpoilers": true, "oew": 117356, "mtow": 286000, "maxFuel": 116926 },
    "5791": { "name": "Lockheed C-5M Galaxy", "maxFlaps": 5, "hasGear": true, "hasSpoilers": true, "oew": 172370, "mtow": 381000, "maxFuel": 150800 },
    "5847": { "name": "Boeing 727-200", "maxFlaps": 8, "hasGear": true, "hasSpoilers": true, "oew": 45360, "mtow": 95000, "maxFuel": 30600 }
};
