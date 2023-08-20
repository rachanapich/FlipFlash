<template>
  <div class="app">
    <side-bar />
    <div>
      <div class="card">
        <div class="cardform">
          <div class="inputcard">
            <span> Front </span>
            <input class="front" placeholder="Enter Term" />
          </div>
          <div class="inputcard">
            <span> Back </span>
            <input class="back" placeholder="Enter Definition" />
          </div>
        </div>
        <div class="bottom">
          <span> 1 </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="bin"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </div>
      <div class="addcard card">Add Card</div>
      <div class="but">
        <a class="createcard" href="/card"> Create </a>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: { SideBar },
};
</script>
<style>
.but {
  margin-top: 3%;
}
.createcard {
  margin-left: 84%;
  padding-top: 120px;
  text-decoration: none;
  padding: 1%;
  font-weight: bold;
  font-size: large;
  background-color: #907ce3;
  border-radius: 8px;
  border: 1px solid;
  color: white;
}
.addcard {
  margin-top: 5%;
  text-align: center;
  padding: 2%;
  background: rgb(229, 224, 224);
  text-decoration: none;
}
.bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 1%;
  padding-bottom: 1%;
  font-size: large;
  font-weight: bold;
  color: #907ce3;
}
.bin {
  width: 28px;
  height: 28px;
  color: #907ce3;
}
.front {
  outline: none;
  margin-top: 28px;
  width: 360px;
  border-width: 0 0 1px;
}
.back {
  outline: none;
  margin-top: 28px;
  width: 360px;
  border-width: 0 0 1px;
}
.card {
  display: flex;
  flex-direction: column;
  width: 65%;
  margin-left: 25%;
}
.cardform {
  display: flex;
  flex-direction: row;
}
.inputcard {
  display: flex;
  flex-direction: column;
  padding: 3%;
  font-size: large;
}
</style>
