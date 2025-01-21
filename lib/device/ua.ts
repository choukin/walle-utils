/**
 * 根据参数获取浏览器 userAgent，如果传入了小写格式就返回小写格式，否则返回获取的结果
 */
export  function getUserAgent(lowercase: boolean = false): string {
  const userAgent = navigator.userAgent;
  return lowercase ? userAgent.toLowerCase() : userAgent;
}

const ua = getUserAgent()
 
export default ua