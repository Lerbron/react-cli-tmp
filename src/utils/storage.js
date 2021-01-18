const LANGUAGE= 'LANGUAGE'

export function setLang (language) {
  sessionStorage.setItem(LANGUAGE, language)
}

export function getLang() {
  return sessionStorage.getItem(LANGUAGE)
}