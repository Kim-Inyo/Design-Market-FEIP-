<script setup>
import Slider from "./Slider.vue";
import Introduction from "./Introduction.vue";
import Project from "./Project.vue";
import News from "./News.vue";
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
