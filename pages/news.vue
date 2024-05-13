<script setup>
import LinkDisplayer from "/components/LinkDisplayer.vue";
import { NewsList } from "~/src/NewsList";
import NewsPanel from "/components/NewsPanel.vue";
import PaginationBar from "/components/PaginationBar.vue";
import { onBeforeMount, onUnmounted } from "vue";

const CurrentPage = ref(1);
const ItemsPerPage = ref(12);
const Siblings = ref(1);
const SetCurrentPage = (n) => {
    CurrentPage.value = n;
};

onBeforeMount(() => {
    window.addEventListener("resize", handleWindowSizeChange);
});
onUnmounted(() => {
    window.removeEventListener("resize", handleWindowSizeChange);
});

const windowWidth = ref(1900);

const handleWindowSizeChange = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value >= 815) {
        ItemsPerPage.value = 12;
        Siblings.value = 1;
    } else {
        ItemsPerPage.value = 4;
        Siblings.value = 0;
    }
};

const DisplayNewsList = (NewsList) => {
    const DisplayList = NewsList.slice(
        ItemsPerPage.value * (CurrentPage.value - 1),
        ItemsPerPage.value * CurrentPage.value
    );
    return DisplayList;
};
</script>

<template>
    <div class="container">
        <LinkDisplayer />
        <p class="sectiontitle">Новости</p>
        <div class="NewsPage">
            <NewsPanel
                v-for="news in DisplayNewsList(NewsList)"
                :image="news.image"
                :date="news.date"
                :title="news.title"
                :description="news.description"
            ></NewsPanel>
        </div>
        <PaginationBar
            :ItemsPerPage="ItemsPerPage"
            :Siblings="Siblings"
            @submit="SetCurrentPage"
        />
    </div>
</template>

<style scoped lang="scss">
.sectiontitle {
    margin-top: 48px;
}

.NewsPage {
    padding-block: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    column-gap: 16px;
    row-gap: 32px;
}

@media screen and (max-width: 1299px) {
    .sectiontitle {
        margin-top: 32px;
    }
}
</style>
