<template>
  <div class="invite-wrap">
    <div class="invite-inner">
      <main>
        <div class="main-title">
          <div class="first">
            <p class="kr" style="margin-right: 1.5rem">서지유</p>  
            <p>|</p>  
            <p class="kr" style="margin-left: 1.5rem">조수현</p>  
          </div>
          <div class="second">
            <p class="kr">2024년 8월 31일 (토) 저녁 5시 30분</p>
            <p class="kr">크레스트72</p>
          </div>
        </div>
        <img class="main-img" src="~/assets/images/main_img.jpg" alt="">
        <div class="sub">
          <p class="sub-title">We're gonna get Married.</p>
          <client-only>
            <Vue3Lottie
              animationLink="https://lottie.host/bbd048a3-ae9d-4afd-9aaf-0a4b5c27b77f/goFdbUMKrX.json"
              :height="25"
              :width="25"
            />
          </client-only>
        </div>
      </main>
      <div class="info">
        <client-only>
          <Vue3Lottie
            animationLink="https://lottie.host/4b186874-0bba-4a97-b238-64f395f4cfaa/GIe14diyCZ.json"
            :height="170"
            :width="170"
          />
        </client-only>
        <img src="~/assets/images/bg.jpg" alt="">
        <div class="wording-wrapper">
          <p class="kr wording">
            지유를 행복하게 만드는 미소를 가진 수현이와 수현이의 손을 항상 따뜻하게 잡아주는 지유가 
            싱그러운 햇살이 축복해 주는 8월의 마지막 날 <br/>평생 서로의 행복이 되기로 약속하려 합니다. <br/><br/>
            그 행복의 순간에 소중한 분들을 초대 드립니다.<br/> 귀한 발걸음으로 축하해 주시면 감사하겠습니다. 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
</script>