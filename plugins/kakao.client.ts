import Kakao from 'kakao-js-sdk'

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.Kakao.init('ea4725ee659a6acb7c8939da96c793a9');
  }
})