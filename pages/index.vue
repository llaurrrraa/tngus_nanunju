<template>

  <v-overlay
    :model-value="overlay"
    class="align-center justify-center"
  >
    <v-progress-circular
      color="error"
      size="64"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
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
            <p class="kr-mono">서상길. 이연숙<span>아들</span> 서지유</p>
            <p class="kr-mono">조재성. 홍연숙<span>딸</span> 조수현</p>
            <button class="kr-mono contact-btn" @click="showContent">연락하기</button>
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
        <img src="~/assets/images/flower-3.png" class="flower_3" alt="flower_deco_2" />
      </section>
      <section class="gallery">
        <p class="kr block-title">- Gallery -</p>
        <div class="gallery-container">
          <!-- <div v-for="(img, index) in galleryImg" :key="index">
            <img :src="`${img.src}`" alt="" @click="showImage(index)">
            <NuxtImg :src="img.src" :alt="`img-${index+1}`" @click="showImage(index)" />
          </div> -->
          <nuxt-error-boundary @error="() => {}">
            <Swiper
              id="collection-swiper"
              :modules="[
                SwiperPagination,
                SwiperNavigation,
                SwiperKeyboard,
                SwiperA11y,
                SwiperFreeMode
              ]"
              :navigation="true"
              :pagination="{
                type: 'fraction'
              }"
              :keyboard="{
                enabled: true
              }"
              :a11y="{
                enabled: true,
                prevSlideMessage: '上一頁',
                nextSlideMessage: '下一頁'
              }"
              :freemode="true"
              :observer="true"
              :grab-cursor="true"
              :space-between="20"
              :initial-slide="currentImageIndex"
              @swiper="onSwiperInitialized"
            >
              <SwiperSlide><img src="~/assets/images/gallery/1.jpg" alt="img-1" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/2.jpg" alt="img-2" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/3.jpg" alt="img-3" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/4.jpg" alt="img-4" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/5.jpg" alt="img-5" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/6.jpg" alt="img-6" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/7.jpg" alt="img-7" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/8.jpg" alt="img-8" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/9.jpg" alt="img-9" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/10.jpg" alt="img-10" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/11.jpg" alt="img-11" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/12.jpg" alt="img-12" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/13.jpg" alt="img-13" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/14.jpg" alt="img-14" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/15.jpg" alt="img-15" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/16.jpg" alt="img-16" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/17.jpg" alt="img-17" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/18.jpg" alt="img-18" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/19.jpg" alt="img-19" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/20.jpg" alt="img-20" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/21.jpg" alt="img-21" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/22.jpg" alt="img-22" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/23.jpg" alt="img-23" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/24.jpg" alt="img-24" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/25.jpg" alt="img-25" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/26.jpg" alt="img-26" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/27.jpg" alt="img-27" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/28.jpg" alt="img-28" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/29.jpg" alt="img-29" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/30.jpg" alt="img-30" /></SwiperSlide>
              <SwiperSlide><img src="~/assets/images/gallery/31.jpg" alt="img-31" /></SwiperSlide>
            </Swiper>
          </nuxt-error-boundary>
          <!-- <v-dialog v-model="imageDialogVisible" max-width="500" class="image-dialog">
            <v-card>
              <v-card-title class="d-flex justify-end align-center">
                <v-btn
                  icon="fa fa-xmark"
                  variant="text"
                  color="#afafaf"
                  @click="imageDialogVisible = false"
                ></v-btn>
              </v-card-title>
              <v-card-item>
                <nuxt-error-boundary @error="() => {}">
                  <Swiper
                    id="collection-swiper"
                    :modules="[
                      SwiperPagination,
                      SwiperNavigation,
                      SwiperKeyboard,
                      SwiperA11y,
                      SwiperFreeMode
                    ]"
                    :navigation="true"
                    :pagination="{
                      type: 'fraction'
                    }"
                    :keyboard="{
                      enabled: true
                    }"
                    :a11y="{
                      enabled: true,
                      prevSlideMessage: '上一頁',
                      nextSlideMessage: '下一頁'
                    }"
                    :freemode="true"
                    :observer="true"
                    :grab-cursor="true"
                    :space-between="20"
                    :initial-slide="currentImageIndex"
                    @swiper="onSwiperInitialized"
                  >
                    <SwiperSlide v-for="(img, index) in galleryImg" :key="index">
                      <img class="modal-img" :src="`${img.src}`" :alt="`img-${index+1}`" />
                    </SwiperSlide>
                  </Swiper>
                </nuxt-error-boundary>
              </v-card-item>
            </v-card>
          </v-dialog> -->
        </div>
        <img src="~/assets/images/flower-3.png" class="flower_3" alt="flower_deco_2" />
      </section>
      <section class="map">
        <p class="kr block-title" style="margin-bottom: 1rem">- Location -</p>
        <div class="map-container">
          <p class="kr-mono res">크레스트 72</p>
          <p class="kr-mono res-info">서울 중구 장충단로 72</p>
          <div class="link-to-map">
            <img src="~/assets/images/kakaomap_basic.png" alt="">
            <a href="https://map.kakao.com/link/map/서울 중구 장충단로 549,37.5511378,127.0028114" >지도를 자세히 보려면 여기를 눌러주세요</a>
          </div>
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
          <div class="trans">
            <div class="tr-tool metro">
              <div class="title">
                <img src="~/assets/images/metro.png" alt="metro">
                <p class="kr-mono">지하철</p>
              </div>
              <p class="content">
                3호선 동대입구역 6번출구에서<br/> 
                셔틀버스 15분간격 운행 <br/>
                ( 오전시간 부터 횟수제한 없이 15분 간격으로 순환 셔틀버스 운행합니다. ) 
              </p>
            </div>
            <div class="tr-tool bus">
              <div class="title">
                <img src="~/assets/images/bus.png" alt="bus">
                <p class="kr-mono">버스</p>
              </div>
              <p class="content">
                - 국립극장 앞 하차 <br/>
                - 간선버스(파랑색) 420번 <br/>
                - 남산순환버스(녹색) 01번 <br/>
              </p>
            </div>
            <div class="tr-tool bus">
              <div class="title">
                <img src="~/assets/images/car.png" alt="car">
                <p class="kr-mono">자가용</p>
              </div>
              <p class="content">
                - 대형 주차시설 (800대 가능)<br/>
                - 국립극장 맞은편 반얀트리 옆 위치<br/>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="account">
        <img src="~/assets/images/couple.png" class="couple" alt="flower_deco_2" />
        <p class="kr block-title">- 마음 전하는 곳 -</p>
        <div style="margin-bottom: 0.5rem">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>신랑측 계좌번호</v-expansion-panel-title>
              <v-expansion-panel-text class="content">
                <div class="content-info">
                  <div style="display: flex;align-items: center; justify-content: space-between; margin-bottom: 0.5rem">
                    <p class="kr-mono">신한 <span id="">110-411-483439</span></p>
                    <!-- <v-btn size="small" variant="tonal">복사</v-btn> -->
                  </div>
                  <p class="kr-mono" style="font-weight: bold;">서지유</p>
                </div>
                <div class="content-info">
                  <div style="display: flex;align-items: center; justify-content: space-between; margin-bottom: 0.5rem">
                    <p class="kr-mono">신한 110-531-224600</p>
                    <!-- <v-btn size="small" variant="tonal">복사</v-btn> -->
                  </div>
                  <p class="kr-mono" style="font-weight: bold;">서상길</p>
                </div>
                <div class="content-info">
                  <div style="display: flex;align-items: center; justify-content: space-between; margin-bottom: 0.5rem">
                    <p class="kr-mono">신한 110-573-254041</p>
                    <!-- <v-btn size="small" variant="tonal">복사</v-btn> -->
                  </div>
                  <p class="kr-mono" style="font-weight: bold;">이연숙</p>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>신부측 계좌번호</v-expansion-panel-title>
              <v-expansion-panel-text class="content">
                <div class="content-info">
                  <div style="display: flex;align-items: center; justify-content: space-between; margin-bottom: 0.5rem">
                    <p class="kr-mono">우리 1002-152-991519</p>
                    <!-- <v-btn size="small" variant="tonal">복사</v-btn> -->
                  </div>
                  <p class="kr-mono" style="font-weight: bold;">조수현</p>
                </div>
                <div class="content-info">
                  <div style="display: flex;align-items: center; justify-content: space-between; margin-bottom: 0.5rem">
                    <p class="kr-mono">우리 1002-442-118277</p>
                    <!-- <v-btn size="small" variant="tonal">복사</v-btn> -->
                  </div>
                  <p class="kr-mono" style="font-weight: bold;">조재성</p>
                </div>
                <div class="content-info">
                  <div style="display: flex;align-items: center; justify-content: space-between; margin-bottom: 0.5rem">
                    <p class="kr-mono">우리 597-124718-02-003</p>
                    <!-- <v-btn size="small" variant="tonal">복사</v-btn> -->
                  </div>
                  <p class="kr-mono" style="font-weight: bold;">홍연숙</p>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </section>
      <section class="notice">
        <img src="~/assets/images/marriage.png" class="marriage" alt="marriage">
        <p class="en block-title" style="font-weight: bold;">- Notice -</p>
        <p class="kr-mono content">하객분들께, 바쁘신 와중에도 <br />
            자리에 참석해 주셔서 정말 감사합니다. <br/><br/>
            이 진실한 서약의 자리가 부끄럽지 않게 서로만을 바라보며 행복하게 살겠습니다. </p>
      </section>
      <section class="photo">
        <img src="~/assets/images/photo.png" class="photo-img" alt="photoboth">
        <p class="kr block-title">- 포토부스 이용 안내 -</p>
        <p class="kr-mono content">
          귀한 발걸음 해주신 분들의
          따뜻한 미소를 남길 수 있는 포토부스를 준비하였습니다.<br/><br/>
          축하의 말씀과 사진을 남겨주시면 
          소중히 간직하도록 하겠습니다. 
        </p>
        <p class="tip kr-mono">
          * 식 1시간 전인 4시30분 부터 <br/>120분 동안 이용 가능합니다. <br/>
          * 무제한 촬영 가능합니다. <br/>
          * 인원수대로 출력 가능합니다. 
        </p>
      </section>
      <section class="dining">
        <img src="~/assets/images/restaurant.png" class="restaurant" alt="">
        <p class="kr block-title">- 식순 -</p>
        <div class="content">
          <ul class="kr-mono">
            <li><span>- 16:30 -</span><br/>하객맞이 및 포토부스 이용</li>
            <li><span>- 17:30 -</span><br/>1부예식</li>
            <li><span>- 18:00 -</span><br/>사진촬영</li>
            <li><span>- 18:30 -</span><br/>2부예식</li>
            <li><span>- 19:00 -</span><br/>마무리</li>
          </ul>
          <p class="kr-mono">
            식이 끝난 후 식장을 꾸몄던 생화는 
            하객분들이 가져가실 수 있도록 포장해드립니다. 
            마지막까지 함께해주시면 감사하겠습니다. 
          </p>
        </div>
      </section>
      <img src="~/assets/images/wedding.gif" alt="">
      <section class="invitation">
        <p class="kr block-title">- 참석 요부 전달하기 -</p>
        <v-form ref="form" class="form">
          <div class="radio-wrapper">
            <v-radio-group inline v-model="boardData.sortation">
              <v-btn size="large" style="margin-right: 0.75rem" :class="{ clicked: isSortation_m }" @click="setSortation('man')">
                <span style="margin-right: 0.25rem">🤵🏻</span>
                <v-radio label="신랑측" value="신랑측"></v-radio>
              </v-btn>
              <v-btn size="large" style="margin-left: 0.75rem" :class="{ clicked: isSortation_w }" @click="setSortation('woman')">
                <span style="margin-right: 0.25rem">👰🏻‍♀️</span>
                <v-radio label="신부측" value="신부측"></v-radio>
              </v-btn>
            </v-radio-group>
          </div>
          <v-text-field
            v-model="boardData.name"
            :counter="10"
            label="성함 / Name"
            :hide-details="true"
            style="margin-bottom: 1rem"
          ></v-text-field>
          <v-select
          label="참석인원 / Attendance"
          v-model="boardData.attendance"
          density="compact"
          :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']"
          ></v-select>
          <v-text-field
            v-model="boardData.companion"
            :counter="10"
            label="동행인 / Companion"
            :hide-details="true"
            style="margin-bottom: 2.5rem"
          ></v-text-field>
          <div class="attendance-wrapper">
            <p class="kr-mono">- 참석엽부 -</p>
            <v-radio-group inline v-model="boardData.attending_status">
              <v-radio label="1부까지" value="1부까지" color="error">
                <template v-slot:label>
                  <div>1부까지 <strong class="text-error">17:30 ~ 18:00</strong></div>
                </template>
              </v-radio>
              <!-- <v-btn size="" :class="{ clicked: isStatus1 }" @click="setStatus(1)">
                1부까지<br/>17:30 ~ 18:00
              </v-btn> -->
              <v-radio label="2부까지" value="2부까지" color="error">
                <template v-slot:label>
                  <div>2부까지 <strong class="text-error">18:30 ~ 19:00</strong></div>
                </template>
              </v-radio>
              <!-- <v-btn size="" :class="{ clicked: isStatus2 }" @click="setStatus(2)">
                2부까지<br/>18:30 ~ 19:00
              </v-btn> -->
              <v-radio label="미참" value="미참" color="error"></v-radio>
              <!-- <v-btn size="" :class="{ clicked: isStatus3 }" @click="setStatus(3)">
                미참
              </v-btn> -->
            </v-radio-group>
          </div>
        </v-form>
        <v-btn class="submit kr-mono" block @click="submit">등록하기 Submit</v-btn>
        <!-- <div class="blur-backdrop">
        </div> -->
      </section>
      <section class="footer"></section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swal from "sweetalert2"
import { NaverMap, NaverMarker } from '@naver-maps/vue'
import type { Swiper as SwiperType } from 'swiper'

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

const runtimeConfig = useRuntimeConfig()
const imgUrl = ref(runtimeConfig.public.imgUrl)
// const galleryImg = ref([
//   { src: `${imgUrl.value}1.jpg` },
//   { src: `${imgUrl.value}2.jpg` },
//   { src: `${imgUrl.value}3.jpg` },
//   { src: `${imgUrl.value}4.jpg` },
//   { src: `${imgUrl.value}5.jpg` },
//   { src: `${imgUrl.value}6.jpg` },
//   { src: `${imgUrl.value}7.jpg` },
//   { src: `${imgUrl.value}8.jpg` },
//   { src: `${imgUrl.value}9.jpg` },
//   { src: `${imgUrl.value}10.jpg` },
//   { src: `${imgUrl.value}11.jpg` },
//   { src: `${imgUrl.value}12.jpg` },
//   { src: `${imgUrl.value}13.jpg` },
//   { src: `${imgUrl.value}14.jpg` },
//   { src: `${imgUrl.value}15.jpg` },
//   { src: `${imgUrl.value}16.jpg` },
//   { src: `${imgUrl.value}17.jpg` },
//   { src: `${imgUrl.value}18.jpg` },
//   { src: `${imgUrl.value}19.jpg` },
//   { src: `${imgUrl.value}20.jpg` },
//   { src: `${imgUrl.value}21.jpg` },
//   { src: `${imgUrl.value}22.jpg` },
//   { src: `${imgUrl.value}23.jpg` },
//   { src: `${imgUrl.value}24.jpg` },
//   { src: `${imgUrl.value}25.jpg` },
//   { src: `${imgUrl.value}26.jpg` },
//   { src: `${imgUrl.value}27.jpg` },
//   { src: `${imgUrl.value}28.jpg` },
//   { src: `${imgUrl.value}29.jpg` },
//   { src: `${imgUrl.value}30.jpg` },
//   { src: `${imgUrl.value}31.jpg` },
// ])

const imageDialogVisible = ref(false)
const currentImageIndex = ref(0)
let swiperInstance: SwiperType | null = null

// const showImage = (index: number) => {
//   currentImageIndex.value = index
//   imageDialogVisible.value = true
// }

const onSwiperInitialized = (swiper: SwiperType) => {
  swiperInstance = swiper
}

// // 當 dialog 打開時，確保 Swiper 滑動到正確的圖片
// watch(imageDialogVisible, (newValue) => {
//   if (newValue && swiperInstance) {
//     swiperInstance.slideTo(currentImageIndex.value, 0)
//   }
// })

// const accountInfo = ref([{
//   name: '서지유',
//   bankNum: ''
// }])

// Google api
const form = ref()

const { data: test, refresh } = (await useFetch(
  "https://script.google.com/macros/s/AKfycbx2CGzCrM3iJ5SOofl1ti3N3gn5ZTO7fr3TusXlI8OFGWEtYYAOGtM0kBEmZq9kQZxdlQ/exec",
  { method: "get" }
)) as {
  [key: string]: any
}

const isSortation_m = ref(false)
const isSortation_w = ref(false)
const setSortation = (status: string) => {
  if (status === 'man') {
    isSortation_m.value = true
    isSortation_w.value = false
  } else {
    isSortation_m.value = false
    isSortation_w.value = true
  }
}

const isStatus1 = ref(false)
const isStatus2 = ref(false)
const isStatus3 = ref(true)
const setStatus = (status: number) => {
  if (status === 1) {
    isStatus1.value = true
    isStatus2.value = false
    isStatus3.value = false
  } else if (status === 2) {
    isStatus1.value = false
    isStatus2.value = true
    isStatus3.value = false
  } else {
    isStatus1.value = false
    isStatus2.value = false
    isStatus3.value = true
  }
}

const boardData = ref({
  sortation: "",
  name: "",
  attendance: "",
  companion: "",
  attending_status: "미참",
  created_time: "",
})

const addUser = async (data: any) => {
  return await useFetch(
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

const overlay = ref(false)
const submit = async () => {
  overlay.value = true
  boardData.value.created_time = convertTime(new Date())
  try {
    const { data: result } = await addUser(boardData.value) as { [key: string]: any }
    setTimeout(() => {
      overlay.value = false
      Swal.fire({
        text: "답변이 등록되었습니다.",
        icon: "success",
        confirmButtonText: "확인"
      });
    }, 500)
  } catch (error) {
    console.error(error)
  }
  boardData.value.sortation = ""
  boardData.value.name = ""
  boardData.value.attendance = ""
  boardData.value.companion = ""
  boardData.value.attending_status = ""
  boardData.value.created_time = ""
  isSortation_m.value = false;
  isSortation_w.value = false;
  refresh()
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


onMounted(() => {
  window.addEventListener("resize", checkScreenSize)
  if(process.client) {
    audio.value = document.querySelector("audio")
    playBtn.value = document.querySelector("play-btn")
    pauseBtn.value = document.querySelector("pause-btn")
  }
})
</script>
