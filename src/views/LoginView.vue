<template>
  <div class="box">
    <div class="login-form">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
        <h1 class="ms-3">FlipFlash</h1>
      </div>
      <h2>Sign In</h2>

      <FormKit
        type="form"
        id="registration-example"
        submit-label="Register"
        class="login"
        @submit="submitHandler"
        :actions="false"
        
      >

      <div class="d-flex justify-content-md-center my-5">
          <label>Email</label>
          <FormKit
              type="text"
              name="email"
              validation="required|email"
              v-model="data.email"
          />
          </div>

        <div class="d-flex justify-content-md-center my-5">
          <label>Password</label>
          <FormKit
            type="password"
            name="password"
            validation="required|length:6|matches:/[^a-zA-Z]/"
            :validation-messages="{
              matches: 'Please include at least one symbol',
            }"
            autocomplete = "off"
            v-model="data.password"
          />
        </div>

        <div class="d-flex justify-content-end">
          <button type="submit" class="btn-login">Sign In</button>
        </div>
      </FormKit>
      <div class="new">
        <p class="d-flex justify-content-center mt-5" style="color : #5f3dc4; font-size: 15px;">New here? <router-link class="link-signup ms-2" to="signup">Sign up</router-link></p>
      </div>
    </div>
    <div class="info">
      <button class="info-button">
        <i class="fa-solid fa-exclamation"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import setAuthHeader from '@/utils/setAuthHeader';

export default {
name : "login",
data(){
  return{
    data : {
      email : '',
      password : ''
    }
  }
},
methods : {
  async submitHandler(){
  await axios.post('http://localhost:3000/flip_flash/user/login', this.data, {
    headers : {
                api_token : "scbnsk289248nscsndk298km"
            }
  }).then((res)=>{

      localStorage.setItem('access_token', res.data.access_token)

      localStorage.setItem('refresh_token', res.data.refresh_token)

      setAuthHeader(res.data.token)

      this.$router.push('/home')

      console.log(res.data);
  }).catch((err)=>{
      console.log(err);
  })
  }
}
};
</script>

<style scoped>
.box {
background: #d0bfff;
height: 100vh;
}
.link-signup{
  color: #5f3dc4;
  text-decoration: none;
  display: flex;
  text-align: center;
  font-size: 15px;
}
.logo {
display: flex;
justify-content: center;
margin-bottom: 4rem;
}
.logo img {
width: 150px;
height: 128px;
}
.login-form .logo h1 {
font-weight: 800;
font-size: 48px;
color: #5f3dc4 !important;
display: flex;
align-items: center;
}
.login-form {
width: 810px;
top: 50%;
left: 50%;
position: absolute;
transform: translate(-50%, -50%);
}
.login-form h2 {
font-weight: bold;
font-size: 40px;
text-align: center;
margin-bottom: 115px !important;
color: #3c2c5b;
text-decoration: underline;
}
label {
font-weight: bold;
font-size: 30px;
margin: 15px 0;
width: 230px;
}
.btn-login {
font-size: 18px;
font-weight: bold;
margin: 20px 0;
padding: 10px 15px;
width: 150px;
border-radius: 10px;
border: 0;
background: #907ce3;
color: white;
}
.info {
position: absolute;
bottom: 8px;
left: 5px;
}
.info-button {
width: 50px;
height: 50px;
border-radius: 50%;
}
i {
font-size: 30px;
}

@media screen and (max-width: 800px) {
.login-form {
  width: 100%;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
label{
  font-weight: bold;
  font-size: 25px;
  margin: 15px 0;
  width: 220px !important;
  }
}
</style>