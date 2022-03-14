<template>
    <div class="container">
        <textarea class="text-input" :model="content" cols="30" rows="10"></textarea>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                content: "",
            }
        }
    },
}
</script>

<style>
    .container {
        width: 100vw;
        font-size: 0.14rem;
    }
    .text-input {
        height: 0.6rem;
        width: 100%;
    }
    
</style>