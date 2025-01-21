import ua from './ua'
function isAndroidPad() {
    return /android/.test(ua) && !/mobile/.test(ua);
}