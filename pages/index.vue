<script setup>
import AppBody from "/components/AppBody.vue";
import Slider from "/components/Slider.vue";
import Introduction from "/components/Introduction.vue";
import Project from "/components/Project.vue";
import News from "/components/News.vue";
</script>

<template>
    <div class="container">
        <Slider />
        <Introduction />
        <Project />
        <News />
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 120px;
}
</style>
