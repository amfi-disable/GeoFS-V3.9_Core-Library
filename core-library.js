/**
 * GeoFS-V3.9_Core-Library
 * Common utilities and math functions shared across the GeoFS Addon-Pack ecosystem.
 * Hardened V2 - Fixed DOM fragmentation and race conditions.
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
        console.info(`[GeoFS-V3.9_Core-Library] [MODULE] Initializing: ${moduleName}`);
        try {
            func();
            console.log(`[GeoFS-V3.9_Core-Library] [MODULE SUCCESS] ${moduleName} is now active.`);
        } catch (e) {
            console.error(`[GeoFS-V3.9_Core-Library] [MODULE ERROR] Failed to initialize ${moduleName}:`, e);
        }
    };

    /**
     * HUD Pro Modular System
     * Centralized manager for the shared flight data display.
     */
    window.ensureSharedHUD = function() {
        if (!globalThis.hudProVisible) globalThis.hudProVisible = true;
        if (globalThis.hudProMinimized === undefined) globalThis.hudProMinimized = false;

        // Inject Core HUD CSS
        if (!document.getElementById('hudModularStyles')) {
            const style = document.createElement('style');
            style.id = 'hudModularStyles';
            style.textContent = `
                .unified-tabs { display: flex; width: 100%; gap: 2px; margin-bottom: 5px; }
                .unified-tab { flex: 1; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; font-size: 10px; padding: 5px 2px; cursor: pointer; transition: all 0.2s; font-family: sans-serif; font-weight: bold; text-transform: uppercase; border-radius: 4px; }
                .unified-tab:hover { background: rgba(255,255,255,0.2); }
                .unified-tab.active { background: rgba(100,200,255,0.3); border-color: #64c8ff; color: #64c8ff; }
                .unified-content { display: none; }
                .unified-content.active { display: block; }
                .unified-content.unified-grid.active { display: grid; grid-template-columns: 1fr 1fr; gap: 5px 10px; }
                #flightDataDisplay.hud-minimized { display: none !important; }
                .hud-cell { display: flex; flex-direction: column; }
                .hud-label { font-size: 9px; color: rgba(255,255,255,0.5); text-transform: uppercase; }
                .hud-value { font-size: 14px; font-weight: bold; color: #fff; }
                .hud-value.highlight { color: #64c8ff; }
                .hud-section-header { font-size: 10px; font-weight: bold; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 1px; margin-top: 5px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 2px; }
                .hud-section-header.full-width { grid-column: 1 / -1; }
            `;
            document.head.appendChild(style);
        }

        // 1. Ensure Panel exists
        let panel = document.getElementById('flightDataDisplay');
        if (!panel) {
            panel = document.createElement('div');
            panel.id = 'flightDataDisplay';
            document.body.appendChild(panel);
            console.log("[HUD Shared] Base panel created.");
        }

        // 2. Ensure Inner Structure exists (tabs container and handle)
        // Hardened: Avoid innerHTML += which destroys event listeners
        if (!document.getElementById('hud-unified-tabs')) {
            const structure = document.createElement('div');
            structure.innerHTML = `
                <div id="masterCaution" style="display:none; background: #ef4444; color: #fff; text-align: center; font-weight: 900; padding: 4px; border-radius: 6px; margin-bottom: 8px; letter-spacing: 2px; font-size: 10px; border: 1px solid #fff;">MASTER CAUTION</div>
                <div class="hud-drag-handle" style="font-size: 9px; letter-spacing: 2px; color: rgba(100,200,255,0.6); padding: 2px 0 5px 0; cursor: move;">GEOFS HUD PRO v3.9</div>
                <div class="unified-tabs" id="hud-unified-tabs"></div>
            `;
            // Prepend the structure to ensure it's at the top, but after the handle
            while (structure.firstChild) {
                panel.insertBefore(structure.firstChild, panel.firstChild);
            }
            if (window.initAddonDraggable) window.initAddonDraggable(panel, 'geofs-addonpack-hud-pos');
            console.log("[HUD Shared] Internal structure initialized.");
        }

        // 3. Ensure Minimize Button exists
        if (!document.getElementById('hudMinimizeBtn')) {
            const btn = document.createElement('div');
            btn.id = 'hudMinimizeBtn';
            btn.innerHTML = '▣';
            btn.title = 'Toggle Info Display';
            btn.style.cssText = "position: fixed; z-index: 10001; background: rgba(0,0,0,0.5); color: #fff; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; backdrop-filter: blur(5px);";
            btn.style.left = '10px'; 
            btn.style.top = '50%'; 
            btn.style.transform = 'translateY(-50%)';
            btn.onclick = () => {
                globalThis.hudProMinimized = !globalThis.hudProMinimized;
                document.getElementById('flightDataDisplay')?.classList.toggle('hud-minimized', globalThis.hudProMinimized);
                btn.innerHTML = globalThis.hudProMinimized ? '◈' : '▣';
            };
            document.body.appendChild(btn);
            if (window.initAddonDraggable) window.initAddonDraggable(btn, 'geofs-addonpack-hud-icon-pos');
            console.log("[HUD Shared] Minimize button created.");
        }

        // 4. Ensure Switch Logic exists
        if (!window.switchHUDProTab) {
            window.switchHUDProTab = function(activeTabId) {
                console.log(`[HUD Shared] Switching to tab: ${activeTabId}`);
                globalThis.activeHudProTab = activeTabId;
                
                const panel = document.getElementById('flightDataDisplay');
                if (!panel) return;

                panel.querySelectorAll('.unified-tab').forEach(t => t.classList.remove('active'));
                panel.querySelectorAll('.unified-content').forEach(c => c.classList.remove('active'));
                
                const tabBtn = document.getElementById(`tab-btn-${activeTabId}`);
                const tabContent = document.getElementById(`tab-content-${activeTabId}`);
                
                if (tabBtn) tabBtn.classList.add('active');
                if (tabContent) tabContent.classList.add('active');
                
                globalThis.hudProMinimized = false;
                panel.classList.remove('hud-minimized');
                const btn = document.getElementById('hudMinimizeBtn');
                if (btn) btn.innerHTML = '▣';
            };
        }

        // 5. Visibility Loop
        if (!window._hudVisibilityLoop) {
            window._hudVisibilityLoop = setInterval(() => {
                const btn = document.getElementById('hudMinimizeBtn');
                const p = document.getElementById('flightDataDisplay');
                if (!btn || !p) return;
                const isVisible = globalThis.hudProVisible !== false;
                const isMinimized = globalThis.hudProMinimized === true;
                const isPaused = typeof geofs !== 'undefined' && geofs.isPaused && geofs.isPaused();
                btn.style.display = isVisible ? 'flex' : 'none';
                if (!isVisible || isMinimized || isPaused) p.style.display = 'none';
                else p.style.display = 'grid';
            }, 100);
        }
    };

    window.registerHUDTab = function(tabId, label, contentHTML, isGrid) {
        console.log(`[HUD Shared] Attempting to register tab: ${tabId}`);
        window.ensureSharedHUD();
        
        const tabsContainer = document.getElementById('hud-unified-tabs');
        if (!tabsContainer) {
            console.error(`[HUD Shared] FAILED to register tab ${tabId}: Container not found!`);
            return;
        }

        // Register Button
        if (!document.getElementById(`tab-btn-${tabId}`)) {
            const btn = document.createElement('button');
            btn.id = `tab-btn-${tabId}`;
            btn.className = 'unified-tab';
            btn.textContent = label;
            const tabOrder = { 'id': 1, 'fuel': 2, 'checks': 3, 'realism': 4 };
            btn.style.order = tabOrder[tabId] || 99;
            btn.onclick = () => window.switchHUDProTab(tabId);
            tabsContainer.appendChild(btn);
            console.log(`[HUD Shared] REGISTERED button for: ${tabId}`);
        }

        // Register Content
        const panel = document.getElementById('flightDataDisplay');
        if (!document.getElementById(`tab-content-${tabId}`)) {
            const content = document.createElement('div');
            content.id = `tab-content-${tabId}`;
            content.className = `unified-content ${isGrid ? 'unified-grid' : ''}`;
            content.innerHTML = contentHTML;
            panel.appendChild(content);
            console.log(`[HUD Shared] REGISTERED content for: ${tabId}`);
        }

        // Auto-switch to highest priority tab after initialization
        // We use a small delay to allow multiple tabs to register
        clearTimeout(window._hudAutoSwitchTimer);
        window._hudAutoSwitchTimer = setTimeout(() => {
            const tabs = Array.from(document.querySelectorAll('#hud-unified-tabs .unified-tab'));
            if (tabs.length === 0) return;
            
            tabs.sort((a, b) => (parseInt(a.style.order) || 99) - (parseInt(b.style.order) || 99));
            
            // Only switch if no tab is currently active
            if (!document.querySelector('.unified-tab.active')) {
                const idToSwitch = tabs[0].id.replace('tab-btn-', '');
                console.log(`[HUD Shared] Initial auto-switch to: ${idToSwitch}`);
                window.switchHUDProTab(idToSwitch);
            }
        }, 500);
    };

    window.hudCell = function(label, value, warnClass, idClass) { 
        return `<div class="hud-cell"><span class="hud-label">${label}</span><span class="hud-value ${idClass || ''} ${warnClass || ''}">${value}</span></div>`; 
    };

    window.initAddonDraggable = function(card, legacyKey) {
        if (!card) return;
        let isDragging = false, dragMoved = false, dragOffsetX = 0, dragOffsetY = 0;
        const storageKey = legacyKey || `geofs-addon-pos-${card.id}`;

        // Load saved position
        const savedPos = localStorage.getItem(storageKey);
        if (savedPos) {
            const {left, top} = JSON.parse(savedPos);
            card.style.left = left;
            card.style.top = top;
            card.style.position = 'fixed';
            card.style.right = 'auto';
            card.style.bottom = 'auto';
        }

        card.addEventListener('mousedown', (e) => {
            if (['BUTTON', 'INPUT', 'A', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;
            isDragging = true; dragMoved = false;
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
            if (newY < 0) newY = 0; if (newX < 0) newX = 0;
            const maxX = window.innerWidth - card.offsetWidth;
            const maxY = window.innerHeight - card.offsetHeight;
            if (newX > maxX) newX = maxX; if (newY > maxY) newY = maxY;
            card.style.left = newX + 'px';
            card.style.top = newY + 'px';
            card.style.position = 'fixed';
            card.style.right = 'auto';
            card.style.bottom = 'auto';
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                card.style.cursor = '';
                card.style.transition = '';
                localStorage.setItem(storageKey, JSON.stringify({left: card.style.left, top: card.style.top}));
            }
        });
    };

    console.log("[GeoFS-V3.9_Core-Library] Core foundations loaded and ready.");
})();
