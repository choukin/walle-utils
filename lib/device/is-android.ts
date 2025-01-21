import ua from './ua'
const isAndroid = (): boolean => {
  return /Android/i.test(ua);
};

export default isAndroid;