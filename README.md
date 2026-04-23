# 🛠️ GeoFS-V3.9_Core-Library

**GeoFS-V3.9_Core-Library** is the foundational logic layer for the AwesomeOddEven extension suite. It abstracts the complex GeoFS internals into a clean, reliable API, allowing you to focus on building features rather than fighting the simulator's DOM and initialization timing.

---

## 🚀 Purpose
Think of this as the "Operating System" for your extensions. It handles:
* **Lifecycle Management:** Ensures scripts only run when GeoFS is fully initialized via the `SafeInit` protocol.
* **Internal API Wrappers:** Provides simplified access to `geofs.aircraft.instance`, telemetry, and physics variables.
* **Cross-Module Communication:** Acts as the bridge between the [Design System](https://github.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Design-System) and feature-specific scripts like the [Failure Simulator](https://github.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Failure-Simulator).

---

## 🛠️ Integration

This library is a required dependency for most AwesomeOddEven tools.

### For Developers
Include this in your Tampermonkey header to unlock the core utility functions:

```javascript
// @require https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Core-Library/main/standalone.user.js
