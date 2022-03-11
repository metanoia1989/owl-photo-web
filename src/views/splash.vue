<template>
    <div class="container">
        <h1 class="title">Owl Photo</h1>
        <img class="logo" src="../assets/logo.png" title="猫头鹰相册">
        <p>给人以自由和尊严</p>
    </div>
</template>

<script>
export default {
    created() {
        console.log("测试啊啊啊")
        setTimeout(() => {
            this.$router.push('/')
        }, 2000)
    },
}
</script>

<style>
    .container {
        height: 100vh;
        width: 100vw;
        font-size: 0.14rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .title {
        margin-bottom: .3rem;
    }
    
    .logo {
        width: 3rem;
        height: 3rem;
        margin-bottom: .3rem;
    }
</style>