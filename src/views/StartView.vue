<template>
    <div class="box">
        <div class="box-direction">
            <div class="content">
                <div class="logo">
                    <img src="../assets/logo.png" alt="">
                    <h1>FlipFlash</h1>
                </div>
                <div class="mb-5 btn-register">
                    <button class="btn-login" @click="$router.push('/login')">LogIn</button>
                </div>
                <div class="mt-5 btn-register">
                    <button class="btn-signup" @click="$router.push('/signup')">SignUp</button>
                </div>
            </div>
        </div>
        <div class="info">
            <button class="info-button"><i class="fa-solid fa-exclamation"></i></button>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'HomeComponent',
    }
</script>

<style scoped>

    .box{
    background: #D0BFFF;
    height: 100vh;
    }
    .box-direction{
    margin: 0;
    padding: 0;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    }
    .logo{
    display: flex;
    }
    .logo img{
    width: 150px;
    height: 128px;
    }
    .logo h1{
    font-weight: 800;
    font-size: 48px;
    color: #5F3DC4;
    display: flex;
    align-items: center;
    }
    .btn-register{
        margin-top : 8rem
    }
    button{
        width: 23rem;
        height: 75px;
        border-radius: 15px;
        color: #3C2C5B;
        font-weight: 800;
    }
    .info{
        position: absolute;
        bottom: 8px;
        left: 5px;
    }
    .info-button{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    i{
        font-size: 30px;
    }

</style>