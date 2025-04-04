let tabSwitchCount = 0;

export const startTabMonitor = (onMaxSwitchesReached) => {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      tabSwitchCount++;
      if (tabSwitchCount >= 2) {
        onMaxSwitchesReached();
      }
    }
  });
};
