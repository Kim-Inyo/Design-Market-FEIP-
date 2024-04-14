<script setup>
import HouseIcon from "/src/assets/icons/House.svg";
import CalenderIcon from "/src/assets/icons/Calender.svg";
import variables from "~/src/variables.js";

const introductions = [
    {
        icon: "HouseIcon",
        title: "57 домов",
        description: "спроектировали и построили “под ключ”",
    },
    {
        icon: "CalenderIcon",
        title: "14 лет",
        description: "мы на рынке загородного строительства",
    },
];

defineProps({
    index: Number,
});
</script>
<template>
    <div class="panel">
        <div class="icon">
            <HouseIcon v-if="index == 0" />
            <CalenderIcon v-if="index == 1" />
        </div>
        <div class="caption">
            <p class="title">{{ introductions[index].title }}</p>
            <p class="description">
                {{ introductions[index].description }}
            </p>
        </div>
    </div>
</template>
<style scoped lang="scss">
.panel {
    display: flex;
    flex-flow: column;
    gap: 24px;
    height: 187px;
    border-radius: 20px;
    background-color: #f5f7f3;
}

.icon {
    padding: 24px;
    padding-bottom: 0px;
    font-size: 24px;
    color: #029f59;
}

.caption {
    width: 256px;
    padding: 24px;
    padding-top: 0px;
}

.title {
    font-family: "montserrat";
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 8px;
}

.description {
    font-size: 20px;
    font-weight: 400;
    color: #666666;
}
</style>
