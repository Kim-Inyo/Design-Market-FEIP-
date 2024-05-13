<script setup>
import news1_1x from "/src/assets/images/news1.png";
import news1_2x from "/src/assets/images/news1@2x.png";
import news2_1x from "/src/assets/images/news2.png";
import news2_2x from "/src/assets/images/news2@2x.png";
import news3_1x from "/src/assets/images/news3.png";
import news3_2x from "/src/assets/images/news3@2x.png";
import news4_1x from "/src/assets/images/news4.png";
import news4_2x from "/src/assets/images/news4@2x.png";
import NewsPanel from "./NewsPanel.vue";
import ProjectPanel from "./ProjectPanel.vue";

const news = [
    {
        image: {
            x1: news1_1x,
            x2: news1_2x,
        },
        date: new Date("2021-08-20"),
        title: "Как сделать строительство дешевле?",
        description:
            "<p>Строительство дома можно сделать дешевле - выьрав проект...</p>",
    },
    {
        image: {
            x1: news2_1x,
            x2: news2_2x,
        },
        date: new Date("2021-08-20"),
        title: "Почему Гуд Вилл строит лучшие дома?",
        description:
            "<p>Хотим обрадовать тех, кто планирует переезд из квартиры в дом...</p>",
    },
    {
        image: {
            x1: news3_1x,
            x2: news3_2x,
        },
        date: new Date("2021-08-20"),
        title: "Преимущества и недостатки частного дома",
        description:
            "<p>Первое и главное: строим дом индивидуально для вас, по вашим...</p>",
    },
    {
        image: {
            x1: news4_1x,
            x2: news4_2x,
        },
        date: new Date("2021-08-20"),
        title: "Из чего мы строим дома в ипотеку?",
        description:
            "<p>Самый популярный вопрос наших клиентов касается материалов, которы...</p>",
    },
];
</script>
<template>
    <div class="news">
        <div class="titlesection">
            <p class="sectiontitle">Новости</p>
            <NuxtLink to="/news"
                ><button class="allnewsbtn">Все новости</button></NuxtLink
            >
        </div>
        <div class="newslist">
            <NewsPanel
                v-for="news in news"
                :image="news.image"
                :date="news.date"
                :title="news.title"
                :description="news.description"
            />
        </div>
    </div>
</template>
<style scoped lang="scss">
.news {
    position: relative;
    width: 100%;
    top: -40px;
    padding-inline: 88px;
    padding-bottom: 61px;
}

.titlesection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
}

.allnewsbtn {
    padding: 16px 24px;
    background-color: white;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    color: #029f59;
    border-radius: 10px;
    border-style: solid;
    border-color: #029f59;
}

.newslist {
    display: flex;
    flex-flow: row;
    gap: 16px;
    overflow: auto;
}

@media screen and (max-width: 1299px) {
    .news {
        padding-inline: 16px;
    }
}
</style>
