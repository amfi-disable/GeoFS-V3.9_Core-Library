# GeoFS-V3.9_Core-Library

![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)
![Ecosystem](https://img.shields.io/badge/GeoFS-V3.9_Addon--Pack-64c8ff?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Stable-green?style=for-the-badge)

The foundational logic layer for the **GeoFS v3.9** ecosystem. This library provides the shared utilities, error-handling wrappers, and interactive helpers that power every "Pro" module in the suite. It is built for maximum stability and performance.

## ✨ Features

- **🛡️ SafeInit Wrapper**: A robust initialization system that ensures module errors never crash the entire addon suite.
- **🖱️ Universal Draggable UI**: The `initAddonDraggable` utility allows any DOM element to be moved and its position persisted across sessions.
- **📐 Mathematical Constants**: Shared, high-precision constants for aeronautical unit conversions (Knot/Meter/Rad/Deg).
- **📱 Universal Resize Handler**: Automatically re-calculates UI positions during window resizing to maintain layout integrity.
- **🚀 Synthesized Ecosystem Logs**: Unified logging structure that allows for professional debugging across all interconnected modules.

## 🛠️ Installation

### Standalone (Tampermonkey)
1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension.
2. Click **Create a new script**.
3. Paste the contents of `core-library_standalone.user.js` from this repository.
4. Save and launch GeoFS.

## 🔗 Ecosystem Role
This is a **required dependency** for:
- [GeoFS-V3.9_HUD-Information-Display-Pro](https://github.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_HUD-Information-Display-Pro)
- [GeoFS-V3.9_Realism-Pack](https://github.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Realism-Pack)
- [GeoFS-V3.9_Failure-Simulator](https://github.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Failure-Simulator)

## 🤝 Credits
- **AwesomeOddEven** (Lead Architecture & API Design)
- **NightKeys** (Utility Optimization & QA)
- **LunarBlink** (Synthesis Logic & Documentation)

---
*© 2026 AwesomeOddEven-NightKeys-LunarBlink. Part of the GeoFS-V3.9 Pro Suite.*
