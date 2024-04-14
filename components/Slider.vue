<script setup>
import slide1_landscape_1x from "/src/assets/images/slide-1-landscape.jpg";
import slide1_landscape_2x from "/src/assets/images/slide-1-landscape@2x.jpg";
import slide1_portrait_1x from "/src/assets/images/slide-1-portrait.jpg";
import slide1_portrait_2x from "/src/assets/images/slide-1-portrait@2x.jpg";
import slide2_landscape_1x from "/src/assets/images/slide-2-landscape.jpg";
import slide2_landscape_2x from "/src/assets/images/slide-2-landscape@2x.jpg";
import slide2_portrait_1x from "/src/assets/images/slide-2-portrait.jpg";
import slide2_portrait_2x from "/src/assets/images/slide-2-portrait@2x.jpg";
import slide3_landscape_1x from "/src/assets/images/slide-3-landscape.jpg";
import slide3_landscape_2x from "/src/assets/images/slide-3-landscape@2x.jpg";
import slide3_portrait_1x from "/src/assets/images/slide-3-portrait.jpg";
import slide3_portrait_2x from "/src/assets/images/slide-3-portrait@2x.jpg";
import SliderControls from "../components/SliderControls.vue";

const slides = [
    {
        image_landscape: {
            x1: slide1_landscape_1x,
            x2: slide1_landscape_2x,
        },
        image_portrait: {
            x1: slide1_portrait_1x,
            x2: slide1_portrait_2x,
        },
        title: "Проектируем и строим загородные дома",
        text: 'Строим дома "под ключ": от этапа проектирования и до финишной отделки помещений',
    },
    {
        image_landscape: {
            x1: slide2_landscape_1x,
            x2: slide2_landscape_2x,
        },
        image_portrait: {
            x1: slide2_portrait_1x,
            x2: slide2_portrait_2x,
        },
        title: "Проектируем и строим загородные дома",
        text: 'Строим дома "под ключ": от этапа проектирования и до финишной отделки помещений',
    },
    {
        image_landscape: {
            x1: slide3_landscape_1x,
            x2: slide3_landscape_2x,
        },
        image_portrait: {
            x1: slide3_portrait_1x,
            x2: slide3_portrait_2x,
        },
        title: "Проектируем и строим загородные дома",
        text: 'Строим дома "под ключ": от этапа проектирования и до финишной отделки помещений',
    },
];
</script>
<template>
    <Swiper class="Swiper">
        <SwiperSlide v-for="slide in slides" class="SwiperSlide">
            <figure>
                <picture>
                    <source
                        :srcset="`${slide.image_landscape.x2} 2x, ${slide.image_landscape.x1}`"
                        media="(min-width: 1050px)"
                    />
                    <source
                        :srcset="`${slide.image_portrait.x2} 2x, ${slide.image_portrait.x1}`"
                        media="(max-width: 1049px)"
                    />
                    <img :src="slide.image_landscape.x2" :alt="slide.title" />
                </picture>
                <figcaption>
                    <h3>{{ slide.title }}</h3>
                    <p>{{ slide.text }}</p>
                </figcaption>
            </figure>
        </SwiperSlide>
        <SliderControls />
    </Swiper>
</template>
<style scoped lang="scss">
.Swiper {
    width: 100%;
    height: 450px;
    border-radius: 30px;
}

.Swiper figure {
    height: 450px;
    margin: 0px;
    position: relative;
}

.Swiper img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
}

.Swiper figcaption {
    display: flex;
    position: absolute;
    flex-flow: column;
    gap: 13px;
    padding-inline: 144px;
    padding-bottom: 113px;
    width: 80%;
    max-width: 460px;
    bottom: 0;
    left: 0;
    color: white;
}

.Swiper h3 {
    font-family: Montserrat;
    font-size: 46px;
    font-weight: 700;
    margin: 0px;
}

.Swiper p {
    margin: 0px;
}

@media screen and (max-width: 1050px) {
    .Swiper figcaption {
        max-width: 460px;
        min-width: 296px;
        padding-inline: 24px;
        padding-bottom: 30px;
    }

    .Swiper h3 {
        font-size: 30px;
        font-weight: 700;
    }
}
</style>
