<script setup>
defineProps({
    image: {
        x1: String,
        x2: String,
    },
    date: Date,
    title: String,
    description: String,
});

const DatetoString = (date) => {
    const months = [
        "янв",
        "фев",
        "мар",
        "апр",
        "май",
        "июн",
        "июл",
        "явг",
        "сен",
        "окт",
        "ноя",
        "дек",
    ];
    return (
        date.getDate() +
        " " +
        months[date.getMonth()] +
        " " +
        date.getFullYear()
    );
};
</script>
<template>
    <div class="newspanel">
        <picture class="picture">
            <source :srcset="`${image.x2} 2x, ${image.x1}`" />
            <img :src="image.x1" :alt="title" class="image" />
        </picture>
        <p class="date">{{ DatetoString(date) }}</p>
        <div class="introduction">
            <h4 class="title">{{ title }}</h4>
            <p class="description" v-html="description"></p>
        </div>
    </div>
</template>
<style scoped lang="scss">
.newspanel {
    display: flex;
    flex-flow: column;
    gap: 16px;
    min-width: 304px;
}

.picture {
    width: 100%;
    height: 200px;
}

.image {
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0px 0px;
}

.introduction {
    display: flex;
    flex-flow: column;
    gap: 8px;
}

.date {
    font-family: Montserrat;
}

.title {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 600;
    margin: 0px;
}

@media screen and (max-width: 814px) {
    .newspanel {
        min-width: 344px;
    }
    .introduction {
        padding-right: 40px;
    }
}
</style>
