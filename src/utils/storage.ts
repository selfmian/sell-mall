/**
 * 存储localStorage
 * @param name 参数名称
 * @param content 内容
 */
export const setStore = (name: string, content: any) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 * @param name 
 */
export const getStore = (name: string) => {
  if (!name) return;
  return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 * @param name 
 * @returns 
 */
export const removeStore = (name: string) => {
  if (!name) return;
  window.localStorage.removeItem(name);
}