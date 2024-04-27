<script setup>
import Slider from "./Slider.vue";
import Introduction from "./Introduction.vue";
import Project from "./Project.vue";
import News from "./News.vue";
</script>

<template>
    <div class="Body">
        <div class="container">
            <Slider />
            <Introduction />
            <Project />
            <News />
        </div>
    </div>
</template>

<style lang="scss">
.Body {
    display: flex;
    justify-content: center;
    padding: 29px 88px;
    min-width: 344px;
    margin: 0px;
}

.container {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
    max-width: 1264px;
    gap: 120px;
}

@media screen and (max-width: 1299px) {
    .Body {
        padding: 29px 16px;
    }
}

@media screen and (max-width: 814px) {
    .Body {
        padding: 29px 16px;
        gap: 80px;
    }
}
</style>
