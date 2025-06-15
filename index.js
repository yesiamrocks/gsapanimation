// Load GSAP animation definitions (auto-registers animationMap)
import './dist/gsapanimation.js';

// Optional dev debug log
if (typeof window !== 'undefined' && window.__CA_DEBUG) {
    console.log('[gsapanimation] GSAP animations loaded');
}
