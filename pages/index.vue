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
        <!-- <img class="main-img" src="~/assets/images/main_img.jpg" alt="" /> -->
        <div class="sub">
          <p class="en sub-title">We're gonna get Married.</p>
          <client-only>
            <Vue3Lottie
              animationLink="https://lottie.host/bbd048a3-ae9d-4afd-9aaf-0a4b5c27b77f/goFdbUMKrX.json"
              :height="25"
              :width="25"
            />
          </client-only>
        </div>
      </main>
      <section class="info">
        <client-only>
          <Vue3Lottie
            animationLink="https://lottie.host/4b186874-0bba-4a97-b238-64f395f4cfaa/GIe14diyCZ.json"
            :height="170"
            :width="170"
          />
        </client-only>
        <img src="~/assets/images/bg.jpg" alt="" />
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
            <p class="kr" style="font-weight: bold">
              서상길. 이연숙<span>아들</span> 서지유
            </p>
            <p class="kr" style="font-weight: bold">
              조재성. 홍연숙<span>딸</span> 조수현
            </p>
            <button class="kr contact-btn" @click="showDialog">연락하기</button>
          </div>
        </div>
      </section>
      <section class="calendar">
        <p class="en block-title">- Calendar -</p>
        <div class="calendar-date">
          <div class="header kr">8월 <span class="en">August</span></div>
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
const mobile = ref(false)
const checkScreenSize = () => {
  if (process.client && window.innerWidth <= 768) return (mobile.value = true)
  mobile.value = false
}
checkScreenSize()

const showDialog = () => {
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

// const { data: boardList, refresh } = (await useFetch("/api/board")) as {
//   [key: string]: any
// }

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

// const addData = async () => {
//   try {
//     return await $fetch("/api/board/add", {
//       method: "POST",
//       body: {
//         name: boardData.value.name,
//         message: boardData.value.message,
//         created_time: new Date(),
//       },
//     })
//   } catch (error) {
//     console.error(error)
//   }
// }

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

onMounted(() => {
  window.addEventListener("resize", checkScreenSize)
})
</script>
