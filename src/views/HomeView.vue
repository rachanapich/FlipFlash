<template>
  <div>
    <side-bar />
    <div class="main">
      <a href="/" class="logout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="logouticon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        Log out</a
      >
      <a href="/home/create" class="flashcard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="flashlogo"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>
        New Flash Card
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="plusicon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </a>
      <div class="flower">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="flowerpot"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
          />
        </svg>
      </div>
      <span class="clicktext">
        Click "New Flashcards" to create Flashcards
      </span>
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
.main {
  flex-direction: columns;
}
.logout {
  flex-direction: row;
  float: right;
  text-decoration: none;
  color: black;
  margin-right: 36px;
  margin-top: -48px;
  font-size: 12px;
}
.logouticon {
  color: black;
  width: 24px;
  height: 24px;
}
.flashlogo {
  width: 48px;
  height: 48px;
  color: #907ce3;
  margin-right: 8px;
}
.flashcard {
  margin-left: 23%;
  border-radius: 25px;
  padding: 28px;
  color: black;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid black;
}
.plusicon {
  width: 24px;
  height: 24px;
  margin-left: 64px;
  color: #907ce3;
}
.flower {
  flex-direction: column;
  margin-left: 50%;
  margin-right: 35%;
  margin-top: 10%;
  width: auto;
  height: auto;
}
.flowerpot {
  color: #907ce3;
  width: 300px;
  height: 300px;
  margin-top: 8%;
  opacity: 40%;
}
.clicktext {
  margin-left: 50%;
  font-size: 14px;
  opacity: 80%;
}
</style>
