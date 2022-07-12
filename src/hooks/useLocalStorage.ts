import { LOCAL_KEYS } from "../common/enum";

/** 本地缓存 hooks */
export default function () {
  function getKey(key: LOCAL_KEYS): any {
    return localStorage.getItem(key);
  }
  function setKey(key: LOCAL_KEYS, value: any) {
    localStorage.setItem(key, value);
  }
  function removeKey(key: string) {
    localStorage.removeItem(key);
  }
  function clear() {
    localStorage.clear();
  }
  return { clear, removeKey, setKey, getKey };
}
