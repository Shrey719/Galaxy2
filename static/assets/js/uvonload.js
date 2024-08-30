async function registerSW() {
  connection = new window.BareMux.BareMuxConnection("/baremux/worker.js");
  await chemicalTransport();

  if ("serviceWorker" in navigator) {
      await navigator.serviceWorker.register("/chemical.sw.js");
  } else {
      console.error("Service worker failed to register.")
  }
}

  await loadScript("/baremux/index.js");
  if (uvEnabled) {
      await loadScript("/uv/uv.bundle.js");
      await loadScript("/uv/uv.config.js");
  }
  await registerSW();
  chemicalLoaded = true;
