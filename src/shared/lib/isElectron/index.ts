export const isElectron = () => {
  return typeof window !== 'undefined' && !!window.env?.isElectron;
};
