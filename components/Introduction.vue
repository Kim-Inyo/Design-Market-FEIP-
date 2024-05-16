<script setup>
import IntroductionPanel from "./IntroductionPanel.vue";
</script>
<template>
    <div class="introduction">
        <div class="textcontainer">
            <p class="sectiontitle">
                Каждый проект <br />
                для нас — важный
            </p>
            <p class="description">
                Мы строительная компания полного цикла.<br /><br />
                Вникаем во все детали, разрабатываем планировку будущего дома,
                продумываем конструктивные решения и общую архитектурную
                концепцию
            </p>
        </div>
        <div class="panelcontainer">
            <IntroductionPanel class="panel" :index="0" />
            <IntroductionPanel class="panel" :index="1" />
        </div>
    </div>
</template>
<style scoped lang="scss">
.introduction {
    display: flex;
    align-items: flex-end;
    width: 100%;
    gap: 16px;
}

.textcontainer {
    margin-bottom: 20px;
}

.panelcontainer {
    display: flex;
    flex-flow: row;
    gap: 16px;
}

.description {
    font-size: 20px;
    font-weight: 400;
    margin-top: 32px;
    color: #666666;
}

@media screen and (min-width: 815px) and (max-width: 1049px) {
    .introduction {
        justify-content: space-between;
        gap: 60px;
    }

    .panelcontainer {
        flex-flow: column;
    }
}

@media screen and (min-width: 630px) and (max-width: 814px) {
    .introduction {
        flex-flow: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 33px;
    }

    .panelcontainer {
        flex-flow: row;
    }
}

@media screen and (max-width: 629px) {
    .introduction {
        flex-flow: column;
        align-items: flex-start;
        gap: 33px;
    }

    .panelcontainer {
        flex-flow: column;
        width: 100%;
    }

    .panel {
        width: 100%;
    }
}
</style>
