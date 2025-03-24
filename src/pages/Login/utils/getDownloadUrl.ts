export const getDownloadUrl = (): string | null => {
  const platform = navigator.platform.toLowerCase();

  if (platform.includes('mac')) {
    return 'https://github.com/Jing5s/Carrier_Web/releases/latest/download/Carrier.dmg';
  }

  if (platform.includes('win')) {
    return 'https://github.com/Jing5s/Carrier_Web/releases/latest/download/Carrier.exe';
  }

  return null;
};
