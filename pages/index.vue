<template>
  <div class="invite-wrap">
    <div class="invite-inner">
      <main>
        <img v-if="isPlay" src="/assets/images/icons-play.png" class="icon-play" id="btn-play" @click="handleAudio('play')"></img>
        <img v-if="isPause" src="/assets/images/icons-pause.png" class="icon-pause" id="btn-pause" @click="handleAudio('pause')"></img>
        <audio ref="audio" hidden="true">
          <source src="/public/bg-sound.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </main>
      <section class="info">
        <div class="first">
          <div>
            <p style="margin-right: 1.5rem; margin-bottom: 0.75rem">🤵🏻</p>
            <p class="kr name" style="margin-right: 1.5rem">
              신랑
              <span style="margin-left: 0.5rem; font-weight: bold">서지유</span>
            </p>
            <p class="kr" style="margin-right: 1.5rem">Seo Ji You</p>
          </div>
          <p>|</p>
          <div>
            <p style="margin-left: 1.5rem; margin-bottom: 0.75rem">👰🏻</p>
            <p class="kr name" style="margin-left: 1.5rem">
              신부
              <span style="margin-left: 0.5rem; font-weight: bold">조수현</span>
            </p>
            <p class="kr" style="margin-left: 1.5rem">Cho Su Hyun</p>
          </div>
        </div>
        <div class="second">
          <p class="kr">2024년 8월 31일 (토) 저녁 5시 30분</p>
          <p class="kr">크레스트72</p>
        </div>
        <div class="info-images">
          <img src="~/assets/images/sub_img.png" class="sub_img" alt="sub_img" />
          <img src="~/assets/images/flower-2.png" class="flower_1" alt="flower_deco_1" />
        </div>
        <div class="wording-wrapper">
          <p class="kr wording">
            지유를 행복하게 만드는 미소를 가진 수현이와 수현이의 손을 항상
            따뜻하게 잡아주는 지유가 싱그러운 햇살이 축복해 주는 8월의 마지막 날
            <br />평생 서로의 행복이 되기로 약속하려 합니다. <br /><br />
            그 행복의 순간에 소중한 분들을 초대 드립니다.<br />
            귀한 발걸음으로 축하해 주시면 감사하겠습니다.
          </p>
          <hr />
          <div class="contact">
            <p class="kr">서상길. 이연숙<span>아들</span> 서지유</p>
            <p class="kr">조재성. 홍연숙<span>딸</span> 조수현</p>
            <button class="kr contact-btn" @click="showContent">연락하기</button>
          </div>
        </div>
        <img src="~/assets/images/flower-2.png" class="flower_2" alt="flower_deco_2" />
      </section>
      <section class="calendar">
        <p class="kr block-title">- Save The Date -</p>
        <div class="calendar-date">
          <div class="header kr">8월 <span class="kr">August</span></div>
          <hr />
          <table border="0">
            <tbody>
              <tr>
                <td class="kr sun">일</td>
                <td class="kr">월</td>
                <td class="kr">화</td>
                <td class="kr">수</td>
                <td class="kr">목</td>
                <td class="kr">금</td>
                <td class="kr">토</td>
              </tr>
              <tr>
                <td class="kr sun"></td>
                <td class="kr"></td>
                <td class="kr"></td>
                <td class="kr"></td>
                <td class="kr">1</td>
                <td class="kr">2</td>
                <td class="kr">3</td>
              </tr>
              <tr>
                <td class="kr sun">4</td>
                <td class="kr">5</td>
                <td class="kr">6</td>
                <td class="kr">7</td>
                <td class="kr">8</td>
                <td class="kr">9</td>
                <td class="kr">10</td>
              </tr>
              <tr>
                <td class="kr sun">11</td>
                <td class="kr">12</td>
                <td class="kr">13</td>
                <td class="kr">14</td>
                <td class="kr">15</td>
                <td class="kr">16</td>
                <td class="kr">17</td>
              </tr>
              <tr>
                <td class="kr sun">18</td>
                <td class="kr">19</td>
                <td class="kr">20</td>
                <td class="kr">21</td>
                <td class="kr">22</td>
                <td class="kr">23</td>
                <td class="kr">24</td>
              </tr>
              <tr>
                <td class="kr sun">25</td>
                <td class="kr">26</td>
                <td class="kr">27</td>
                <td class="kr">28</td>
                <td class="kr">29</td>
                <td class="kr">30</td>
                <td class="kr weddingDay"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="gallery">
        <p class="kr block-title">- Gallery -</p>
        <div class="gallery-container">
          <template v-for="(img, index) in galleryImg" :key="index" >
            <NuxtImg :src="img.src" :alt="`img-${index+1}`" @click="showImage(index)" />
            <v-dialog v-model="imageIsShow[index]" max-width="500" class="image-dialog">
              <template v-slot:default="{ isActive }">
                <v-card>
                  <v-card-title class="d-flex justify-space-between align-center">
                      <div></div>
                      <div class="img-index"><p class="en">{{ index+1 }} / {{ galleryImg.length }}</p></div>
                      <v-btn
                        icon="fa fa-xmark"
                        variant="text"
                        color="#afafaf"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-title>
                    <v-card-item>
                      <NuxtImg class="modal-img" :src="img.src" :alt="`img-${index+1}`" />
                    </v-card-item>
                </v-card>
              </template>
            </v-dialog>
          </template>
        </div>
      </section>
      <section class="map">
        <p class="kr block-title" style="margin-bottom: 1rem">- Location -</p>
        <NaverMap
        class="naver-map"
        style="width: 100%; height: 30vh"
        client-id="f4wfl3jf7e"
        :mapOptions="{
            latitude: 37.5511375,
            longitude: 127.0028114,
            zoom: 18,
          }"
        >
          <NaverMarker
          :latitude="37.5511378" :longitude="127.0028114" :onLoaded="onLoadMarker"
          style="position: absolute;left: -25px;top: -35px"
          >
          <img class="marker" src="~/assets/images/marker.png" alt="map marker">
          </NaverMarker>
        </NaverMap>
        <p class="kr-mono res">크레스트 72</p>
        <div class="link-to-map">
          <img src="~/assets/images/kakaomap_basic.png" alt="">
          <a href="https://map.kakao.com/link/map/서울 중구 장충단로 549,37.5511378,127.0028114" >지도를 자세히 보려면 여기를 눌러주세요</a>
        </div>
      </section>
      <section class="message-board">
        <p class="en block-title">- Guest Book -</p>
        <input type="text" placeholder="이름 / name" v-model="boardData.name" />
        <textarea
          class="input-textarea"
          placeholder="메세지 / message"
          v-model="boardData.message"
        ></textarea>
        <button class="submit" @click="submit">등록하기 Submit</button>
      </section>
      <section class="board-list">
        <ul>
          <li v-for="(data, index) in test" :key="data.index">
            {{ data.name }} / {{ data.message }} / {{ data.created_time }}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swal from "sweetalert2"
import { NaverMap, NaverMarker } from '@naver-maps/vue'

const mobile = ref(false)
const checkScreenSize = () => {
  if (process.client && window.innerWidth <= 768) return (mobile.value = true)
  mobile.value = false
}
checkScreenSize()

const showContent = () => {
  Swal.fire({
    title: "연락하기",
    width: 550,
    showCloseButton: true,
    showConfirmButton: false,
    html: `
    <div class="contact-dialog">
      <div class="contact-container-1">
        <div><p>신랑 </p><span>서지유</span><span class="link"><a href="tel:010-4170-0433">&#128222;</a><a href="sms:010-4170-0433">✉️</a></span></div> 
        <div><p>신랑 아버지</p><span>서상길</span><span class="link"><a href="tel:010-4555-0433">&#128222;</a><a href="sms:010-4555-0433">✉️</a></span></div>
        <div><p>신랑 어머니</p><span>이연숙</span><span class="link"><a href="tel:010-7192-0433">&#128222;</a><a href="sms:010-7192-0433">✉️</a></span></div>
      </div>
      <hr>
      <div class="contact-container-2">
        <div><p>신부 </p><span>조수현</span><span class="link"><a href="tel:010-3199-4303">&#128222;</a><a href="sms:010-3199-4303">✉️</a></span></div> 
        <div><p>신부 아버지</p><span>조재성</span><span class="link"><a href="tel:010-6340-3945">&#128222;</a><a href="sms:010-6340-3945">✉️</a></span></div>
        <div><p>신부 어머니</p><span>홍연숙</span><span class="link"><a href="tel:010-9167-4303">&#128222;</a><a href="sms:010-9167-4303">✉️</a></span></div>
      </div>
    </div>
  `,
    backdrop: `
      rgba(225,255,255,0.4)
      center top
      no-repeat
    `,
  })
}

const galleryImg = ref([
  { src: '/images/1.jpg' },
  { src: '/images/2.jpg' },
  { src: '/images/3.jpg' },
  { src: '/images/4.jpg' },
  { src: '/images/5.jpg' },
  { src: '/images/6.jpg' },
  { src: '/images/7.jpg' },
  { src: '/images/8.jpg' },
  { src: '/images/9.jpg' },
  { src: '/images/10.jpg' },
  { src: '/images/11.jpg' },
  { src: '/images/12.jpg' },
  { src: '/images/13.jpg' },
  { src: '/images/14.jpg' },
  { src: '/images/15.jpg' },
  { src: '/images/16.jpg' },
  { src: '/images/17.jpg' },
  { src: '/images/18.jpg' },
  { src: '/images/19.jpg' },
  { src: '/images/20.jpg' },
  { src: '/images/21.jpg' },
  { src: '/images/22.jpg' },
  { src: '/images/23.jpg' },
  { src: '/images/24.jpg' },
  { src: '/images/25.jpg' },
  { src: '/images/26.jpg' },
  { src: '/images/27.jpg' },
  { src: '/images/28.jpg' },
  { src: '/images/29.jpg' },
  { src: '/images/30.jpg' },
  { src: '/images/31.jpg' },
])

const imageIsShow = ref<any[]>([])
const showImage = (id: any) => {
  console.log(id);
  
  imageIsShow.value[id] = true
  console.log(imageIsShow.value[id]);
  
}

// Google api
const { data: test, refresh } = (await useFetch(
  "https://script.google.com/macros/s/AKfycbzH6LnDHOhyQtTaB01yHRhcWk0cQ_fUUMxuLkr10gA04gyvWTKXAwkHMuXrompecUigKQ/exec",
  { method: "get" }
)) as {
  [key: string]: any
}

const boardData = ref({
  name: "",
  message: "",
  created_time: "",
})

const addUser = async (data: any) => {
  await useFetch(
    "https://script.google.com/macros/s/AKfycbx2CGzCrM3iJ5SOofl1ti3N3gn5ZTO7fr3TusXlI8OFGWEtYYAOGtM0kBEmZq9kQZxdlQ/exec",
    {
      method: "post",
      body: data,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  )
}

const convertTime = (date: any) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const string = `${year}-${month > 9 ? "" : "0"}${month}-${
    day > 9 ? "" : "0"
  }${day} ${hour < 10 ? "0" : ""}${hour}:${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`
  return string
}

const submit = async () => {
  if (boardData.value.name !== "" || boardData.value.message !== "") {
    boardData.value.created_time = convertTime(new Date())
    const result = await addUser(boardData.value)
    refresh()
    boardData.value.name = ""
    boardData.value.message = ""
    boardData.value.created_time = ""
  }
}


const isPlay = ref(true)
const isPause = ref(false)
const handleAudio = (status: string) => {
  if (status === 'play') {
    isPlay.value = false
    isPause.value = true
    audio.value?.play()
  } else {
    isPause.value = false
    isPlay.value = true
    audio.value?.pause()
  }
}

const audio = ref<null|HTMLAudioElement>(null)
const playBtn = ref()
const pauseBtn = ref()

const onLoadMarker = (marker:naver.maps.Marker) => {
}

// const isShow = ref(false)
// const showModal = () => {
//   isShow.value = false;
// }
// const { open, close } = useModal({
//     component: ModalConfirm,
//     attrs: {
//       title: 'Hello World!',
//       onConfirm() {
//         close()
//       },
//     },
//     slots: {
//       default: '<p>UseModal: The content of the modal</p>',
//     },
//   })

onMounted(() => {
  window.addEventListener("resize", checkScreenSize)
  if(process.client) {
    audio.value = document.querySelector("audio")
    playBtn.value = document.querySelector("play-btn")
    pauseBtn.value = document.querySelector("pause-btn")
  }
  // const script = document.createElement("script");
  // script.src= "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=f4wfl3jf7e";
  // script.async = true;
  // script.defer = true;
  // document.head.appendChild(script);

  // script.onload = () => {
  //   // 네이버 지도 생성
  //   new window.naver.maps.Map("map", {
  //     center: new window.naver.maps.LatLng(37.551135499999454, 126.99861002157358),
  //     zoom: 10
  //   });
  // };
})
</script>
