/**
 * GeoFS Core Library
 * Common utilities and math functions shared across the GeoFS Addon-Pack ecosystem.
 */

(function() {
    'use strict';

    // Global Constants
    window.DEGREES_TO_RAD = window.DEGREES_TO_RAD || 0.017453292519943295;
    window.RAD_TO_DEGREES = window.RAD_TO_DEGREES || 57.29577951308232;
    window.METERS_TO_FEET = window.METERS_TO_FEET || 3.280839895;

    /**
     * SafeInit Wrapper
     * Ensures that module initialization errors don't crash the entire suite.
     */
    window.SafeInit = function(moduleName, func) {
        console.info(`GeoFS Core: [MODULE] Initializing ${moduleName}...`);
        try {
            func();
        } catch (e) {
            console.error(`GeoFS Core: [MODULE ERROR] Failed to initialize ${moduleName}:`, e);
        }
    };

    /**
     * initAddonDraggable
     * Universal utility to make any DOM element draggable within GeoFS.
     */
    window.initAddonDraggable = function(card, legacyKey) {
        if (!card) return;
        let isDragging = false, dragMoved = false, dragOffsetX = 0, dragOffsetY = 0;
        const storageKey = legacyKey || `geofs-addon-pos-${card.id}`;

        card.addEventListener('mousedown', (e) => {
            if (['BUTTON', 'INPUT', 'A', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;
            isDragging = true;
            dragMoved = false;
            dragOffsetX = e.clientX - card.getBoundingClientRect().left;
            dragOffsetY = e.clientY - card.getBoundingClientRect().top;
            card.style.cursor = 'grabbing';
            card.style.transition = 'none';
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            dragMoved = true;
            let newX = e.clientX - dragOffsetX;
            let newY = e.clientY - dragOffsetY;
            if (newY < 0) newY = 0;
            if (newX < 0) newX = 0;
            const maxX = window.innerWidth - card.offsetWidth;
            const maxY = window.innerHeight - card.offsetHeight;
            if (newX > maxX) newX = maxX;
            if (newY > maxY) newY = maxY;
            card.style.left = newX + 'px';
            card.style.top = newY + 'px';
            card.style.bottom = 'auto';
            card.style.right = 'auto';
            card.style.transform = 'none';
        });

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            card.style.cursor = 'default';
            card.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.15), opacity 0.3s ease';
            if (dragMoved) {
                localStorage.setItem(storageKey, JSON.stringify({
                    left: card.style.left,
                    top: card.style.top
                }));
            }
        });

        // Load saved position
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            try {
                const pos = JSON.parse(saved);
                if (pos.left && pos.top) {
                    card.style.left = pos.left;
                    card.style.top = pos.top;
                    card.style.bottom = 'auto';
                    card.style.right = 'auto';
                    card.style.transform = 'none';
                }
            } catch (err) {}
        }
    };

    // Handle window resize for all draggable elements
    window.addEventListener('resize', () => {
        document.querySelectorAll('.addonpack-card, #flightDataDisplay').forEach(card => {
            if (card.classList.contains('active') || card.style.display === 'flex' || card.style.display === 'grid') {
                const maxX = window.innerWidth - card.offsetWidth;
                const maxY = window.innerHeight - card.offsetHeight;
                let currentX = card.offsetLeft;
                let currentY = card.offsetTop;
                if (currentX > maxX || currentY > maxY || currentX < 0 || currentY < 0) {
                    card.style.left = Math.max(0, Math.min(currentX, maxX)) + 'px';
                    card.style.top = Math.max(0, Math.min(currentY, maxY)) + 'px';
                }
            }
        });
    });

    console.log('GeoFS Core: [Library] Loaded universal helpers.');
})();
