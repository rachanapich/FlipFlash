<template>
  <div>
    <div id="mySidenav" class="sidenav" :class="{ openNavClass: isActive }">
      <a class="closebtn" @click="isActive = !isActive">&times;</a>
      <div class="logo">
        <img src="../assets/logo.png" class="pic" alt="" />
        <span class="flipflash"> Flip Flash </span>
      </div>
      <div class="content">
        <a href="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="home"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Home</a
        >
        <a href="/library">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="library"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
            />
          </svg>
          Your Library</a
        >
        <a href="/important">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="star"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          Important</a
        >
        <a href="/todo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="todo"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          To do List</a
        >
      </div>
    </div>
    <span
      style="font-size: 30px; cursor: pointer; align-content: left"
      @click="isActive = !isActive"
      >&#9776;
    </span>
    <div id="main" :class="{ pushMainContent: isActive }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
.content {
  margin: auto;
  margin-top: 24px;
}
.logo {
  text-align: center;
}
.pic {
  width: 50px;
  height: 50px;
}
.flipflash {
  color: #907ce3;
  font-weight: bold;
}
.home {
  height: 32px;
  width: 32px;
  padding-right: 8px;
  color: #907ce3;
}
.library {
  height: 32px;
  width: 32px;
  padding-right: 8px;
  color: #907ce3;
}
.star {
  height: 32px;
  width: 32px;
  padding-right: 8px;
  color: #907ce3;
}
.todo {
  height: 32px;
  width: 32px;
  padding-right: 8px;
  color: #907ce3;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(251, 251, 251);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  width: 0;
  cursor: pointer;
}
.openNavClass {
  width: 250px;
}
.pushMainContent {
  margin-left: 250px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 16px;
  color: black;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left 0.5s;
  padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
