<template>
  <div>
    <side-bar />
    <div class="app-container" id="tasklist">
      <h1 class="app-header">📝 My tasks</h1>

      <div class="app-task">
        <input type="text" ref="input" name="todo" id="todo" autocomplete="off"
          placeholder="Add task. Press submit to save" class="task-input" v-model="todoText" />
        <button @click="addToDoToList" class="submit-task"></button>
      </div>

      <ul class="task-list">
        <li v-for="(todo, index) in todos" class="task-list-item" :key="index">
          <label class="task-list-item-label">
            <input type="checkbox">
            <span>{{ todo }}</span>
          </label>
          <button @click="removeTodo(index)" class="delete-btn"></button>
        </li>
      </ul>

    </div>
  </div>


</template>

<script>
import SideBar from "@/components/SideBar.vue";
import { ref } from 'vue';
export default {
  components: { SideBar },
  setup() {
    let todoText = ref();
    let todos = ref([]);

    let addToDoToList = () => {
      
      if (todoText.value.length == 0) {
        alert("Please Enter a task");
      } else {
        todos.value = [...todos.value, todoText.value];
        console.log(todos.value);
      } 

      todoText.value = ""
    }

    let removeTodo = (index) => {
      todos.value = todos.value.filter((e, i) => i !== index)
    }
    return {
      todoText,
      todos,
      addToDoToList,
      removeTodo
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&family=Poppins:wght@500&display=swap');

* {
  box-sizing: border-box;
}

:root {
  --checkbox-color: rgb(202, 60, 60);
  --checkbox-shadow: rgbs(238, 156, 167, 0.2);
  --add-button: rgba(255, 255, 255, 0.7);
  --add-button-shadow: rgba(238, 156, 167, 0.4)
}

.main {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-blend-mode: normal, lighten, multiply, hard-light;
  font-family: 'Open Sans', sans-serif;
  overflow: hidden;
}

input {
  outline: none;
}

ul {
  list-style: none;
  padding: 0;
}

.app-container {
  max-width: 60%;
  width: 100%;
  max-height: 100%;
  padding: 25px;
  border-radius: 25px;
  overflow: auto;
  color: #222;
  margin-left: 20%;
}

.app-header {
  font-size: 18px;
  line-height: 32px;
  margin: 0 0 12px 0;
  color: #495057;
}

.submit-task {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border: none;
  background: var(--add-button);
  color: #272727;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 2.25C6.615 2.25 2.25 6.615 2.25 12C2.25 17.385 6.615 21.75 12 21.75C17.385 21.75 21.75 17.385 21.75 12C21.75 6.615 17.385 2.25 12 2.25ZM12.75 9C12.75 8.80109 12.671 8.61032 12.5303 8.46967C12.3897 8.32902 12.1989 8.25 12 8.25C11.8011 8.25 11.6103 8.32902 11.4697 8.46967C11.329 8.61032 11.25 8.80109 11.25 9V11.25H9C8.80109 11.25 8.61032 11.329 8.46967 11.4697C8.32902 11.6103 8.25 11.8011 8.25 12C8.25 12.1989 8.32902 12.3897 8.46967 12.5303C8.61032 12.671 8.80109 12.75 9 12.75H11.25V15C11.25 15.1989 11.329 15.3897 11.4697 15.5303C11.6103 15.671 11.8011 15.75 12 15.75C12.1989 15.75 12.3897 15.671 12.5303 15.5303C12.671 15.3897 12.75 15.1989 12.75 15V12.75H15C15.1989 12.75 15.3897 12.671 15.5303 12.5303C15.671 12.3897 15.75 12.1989 15.75 12C15.75 11.8011 15.671 11.6103 15.5303 11.4697C15.3897 11.329 15.1989 11.25 15 11.25H12.75V9Z' fill='%235F3DC4'/%3E%3C/svg%3E");
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 12px 0 var(--add-button-shadow);
}

.add-task {
  height: 40px;
  font-size: 14px;
  display: flex;

}

.task-input {
  width: 85%;
  padding: 0 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid #adb5bd;
  background-color: transparent;
  margin-right: 15px;
  color: #272727;
  box-shadow: none;
  border-radius: 0;
}

.task-list-item {
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 35px;
  margin-bottom: 12px;
}

.task-list-item input {
  width: 16px;
  height: 16px;
  border: 1px solid #5F3DC4;
  border-radius: 50%;
  background-image: url("https://img.icons8.com/ios-glyphs/30/null/checkmark--v1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0;
  transition: 0.2s;
  margin-right: 8px;
  flex-shrink: 0;
  margin-top: 4px;
  appearance: none;
}

.task-list-item input:hover {
  border-color: var(--checkbox-color);
  box-shadow: 0 0 0 3px var(--checkbox-shadow);
}

.task-list-item input:checked {
  background-size: 10px;
  border: 1px solid var(--checkbox-color);
  background-color: var(--checkbox-color);
}

.task-list-item input:checked+span {
  color: #272727;
  text-decoration: line-through #272727;
}

.task-list-item-label {
  display: flex;
  align-items: flex-start;
  color: #272727;
  margin-right: 8px;
  font-size: 14px;
  line-height: 24px;
  position: relative;
  transition: 0.2s;
  cursor: pointer;
}

.delete-btn {
  margin-left: auto;
  margin-right: 5px;
  border: none;
  background: var(--add-button);
  display: block;
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.5 4.478V4.705C17.799 4.82379 19.0927 4.99459 20.378 5.217C20.4751 5.23381 20.5678 5.26957 20.6511 5.32224C20.7343 5.37491 20.8063 5.44345 20.8631 5.52396C20.9198 5.60447 20.9601 5.69536 20.9817 5.79145C21.0033 5.88755 21.0058 5.98695 20.989 6.084C20.9722 6.18105 20.9364 6.27383 20.8838 6.35706C20.8311 6.44029 20.7626 6.51233 20.682 6.56906C20.6015 6.6258 20.5106 6.66612 20.4146 6.68773C20.3185 6.70934 20.2191 6.71181 20.122 6.695L19.913 6.66L18.908 19.73C18.8501 20.4836 18.5098 21.1875 17.9553 21.7011C17.4008 22.2146 16.6728 22.5 15.917 22.5H8.08401C7.3282 22.5 6.60026 22.2146 6.04573 21.7011C5.4912 21.1875 5.15095 20.4836 5.09301 19.73L4.08701 6.66L3.87801 6.695C3.78096 6.71181 3.68155 6.70934 3.58546 6.68773C3.48937 6.66612 3.39847 6.6258 3.31796 6.56906C3.15537 6.45448 3.04495 6.28 3.01101 6.084C2.97706 5.88801 3.02236 5.68655 3.13694 5.52396C3.25153 5.36137 3.42601 5.25095 3.62201 5.217C4.90727 4.99433 6.20099 4.82352 7.50001 4.705V4.478C7.50001 2.914 8.71301 1.578 10.316 1.527C11.4387 1.49107 12.5623 1.49107 13.685 1.527C15.288 1.578 16.5 2.914 16.5 4.478ZM10.364 3.026C11.4547 2.99112 12.5463 2.99112 13.637 3.026C14.39 3.05 15 3.684 15 4.478V4.591C13.0018 4.46965 10.9982 4.46965 9.00001 4.591V4.478C9.00001 3.684 9.60901 3.05 10.364 3.026ZM10.009 8.971C10.0052 8.87251 9.98203 8.77573 9.94082 8.6862C9.89961 8.59666 9.84117 8.51612 9.76883 8.44916C9.69649 8.38221 9.61168 8.33017 9.51923 8.29599C9.42678 8.26182 9.3285 8.24619 9.23001 8.25C9.13151 8.25381 9.03474 8.27698 8.9452 8.31819C8.85567 8.3594 8.77512 8.41784 8.70817 8.49018C8.64122 8.56251 8.58917 8.64733 8.555 8.73978C8.52083 8.83223 8.5052 8.93051 8.50901 9.029L8.85601 18.029C8.8637 18.2278 8.95004 18.4154 9.09604 18.5505C9.16833 18.6174 9.25309 18.6694 9.34548 18.7035C9.43787 18.7377 9.53608 18.7533 9.63451 18.7495C9.73293 18.7457 9.82964 18.7225 9.91912 18.6814C10.0086 18.6402 10.0891 18.5818 10.156 18.5095C10.2229 18.4372 10.2749 18.3524 10.3091 18.26C10.3432 18.1676 10.3588 18.0694 10.355 17.971L10.009 8.971ZM15.489 9.029C15.4963 8.92862 15.4834 8.82779 15.4509 8.73251C15.4185 8.63724 15.3672 8.54947 15.3001 8.47444C15.233 8.39941 15.1515 8.33866 15.0604 8.29579C14.9694 8.25292 14.8706 8.22882 14.77 8.22493C14.6694 8.22104 14.5691 8.23743 14.475 8.27312C14.3809 8.30882 14.2949 8.36309 14.2222 8.43271C14.1496 8.50233 14.0916 8.58587 14.0519 8.67834C14.0122 8.77082 13.9915 8.87035 13.991 8.971L13.644 17.971C13.6363 18.1699 13.708 18.3637 13.8432 18.5098C13.9784 18.6559 14.1661 18.7423 14.365 18.75C14.5639 18.7577 14.7577 18.6861 14.9038 18.5508C15.0499 18.4156 15.1363 18.2279 15.144 18.029L15.489 9.029V9.029Z' fill='%235F3DC4'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
  cursor: pointer;
}
</style>