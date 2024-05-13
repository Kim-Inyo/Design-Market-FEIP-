<script setup>
import project1_1x from "/src/assets/images/project1.png";
import project1_2x from "/src/assets/images/project1@2x.png";
import project2_1x from "/src/assets/images/project2.png";
import project2_2x from "/src/assets/images/project2@2x.png";
import ProjectPanel from "./ProjectPanel.vue";

const projects = [
    {
        image: {
            x1: project1_1x,
            x2: project1_2x,
        },
        title: "Дом в скандинавском стиле",
        description:
            "<p>Одноэтажный дом из газобетона габаритными размерами 10.73 х 10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей</p>" +
            "<br />" +
            "<p>Построен по индивидуальному проекту.</p>",
    },
    {
        image: {
            x1: project2_1x,
            x2: project2_2x,
        },
        title: "Дом из газобетона",
        description:
            "<p>Одноэтажный дом габаритными размерами 15.2 х 9.7м. Приведенная площадь – 127.7 м.кв.</p>" +
            "<br />" +
            "<p>Три спальные комнаты, два сан.узла, большая кухня-гостиная с выходом на террасу.</p>",
    },
];
</script>
<template>
    <div class="project">
        <p class="sectiontitle">Реализованные проекты</p>
        <div class="projectintroduction">
            <ProjectPanel
                v-for="project in projects"
                :image="project.image"
                :title="project.title"
                :description="project.description"
            />
        </div>
    </div>
</template>
<style scoped lang="scss">
.project {
    width: 100%;
    padding: 80px 88px;
    background-color: #f5f7f3;
}

.sectiontitle {
    margin-bottom: 32px;
}

.projectintroduction {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
    overflow: auto;
    overflow-y: hidden;
}
@media screen and (max-width: 1299px) {
    .project {
        padding-inline: 16px;
    }
}
</style>
