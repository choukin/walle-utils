import isAndroid from './device/is-android'
import ua from './device/ua'

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
  const adnroid = isAndroid()
  console.log(`🚀 ~ setupCounter ~ adnroid:`, adnroid)
  console.log(`🚀 ~ ua:`, ua)
  
}
