export function setLocalStorage(key, value) {
  if(typeof value === "object"){
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
}

export function getLocalStorage(key) {
  var value = localStorage.getItem(key);
  if(value)
    value = JSON.parse(value);
  return value
}

export function deleteLocalStorage(key) {
  localStorage.removeItem(key)
}

