<script setup>
import ArrowLeft from "/src/assets/icons/ArrowLeft.svg";
import ArrowRight from "/src/assets/icons/ArrowRight.svg";

const swiper = useSwiper();
const index = useState("index", () => 0);
</script>
<template>
    <div class="SliderBtns">
        <div class="NavBtns">
            <button
                @click="
                    () => {
                        index--;
                        if (index < 0) index = swiper.slides.length - 1;
                        swiper.slideTo(index);
                    }
                "
                class="prev"
            >
                <ArrowLeft />
            </button>
            <button
                @click="
                    () => {
                        index = (index + 1) % swiper.slides.length;
                        swiper.slideTo(index);
                    }
                "
                class="next"
            >
                <ArrowRight />
            </button>
        </div>
        <div class="pagination">
            <button
                class="page"
                v-for="(slide, index) in swiper.slides"
                @click="swiper.slideTo(index)"
                :title="`Открыть ${index + 1} слайд`"
                :disabled="swiper.activeIndex === index"
            ></button>
        </div>
    </div>
</template>
<style scoped lang="scss">
.SliderBtns {
    display: flex;
    flex-flow: column;
    position: absolute;
    z-index: 1;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100%;
    height: 100%;
}

.NavBtns {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.pagination {
    display: flex;
    position: absolute;
    bottom: 40px;
    gap: 16px;
}

.page {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.page:disabled {
    background-color: #029f59;
}

.prev,
.next {
    width: 48px;
    height: 48px;
    margin: 16px;
    border-radius: 10px;
    background-color: #029f59;
    color: white;
}

@media screen and (max-width: 1049px) {
    .SliderBtns {
        display: none;
    }
}
</style>
