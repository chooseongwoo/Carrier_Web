export const getDownloadUrl = (): string | null => {
  const platform = navigator.platform.toLowerCase();

  if (platform.includes('mac')) {
    return 'https://github.com/Jing5s/Carrier_Web/releases/latest/download/Carrier.for.mac.zip';
  }

  if (platform.includes('win')) {
    return 'https://github.com/Jing5s/Carrier_Web/releases/latest/download/Carrier.for.win.zip';
  }

  return null;
};
