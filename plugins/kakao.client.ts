export default defineNuxtPlugin(() => {
  if (process.client) {
    window.Kakao.init('YOUR_KAKAO_APP_KEY');
  }
})