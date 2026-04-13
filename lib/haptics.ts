export function triggerHaptic(pattern: number | number[] = 10) {
  if (typeof window === "undefined") return;
  if (!("navigator" in window) || typeof window.navigator.vibrate !== "function") {
    return;
  }

  window.navigator.vibrate(pattern);
}
