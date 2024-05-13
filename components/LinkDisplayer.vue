<script setup>
import variables from "~/src/variables";
</script>

<template>
    <div class="LinkDisplayer">
        <NuxtLink class="link" to="/">Главная</NuxtLink>
        <p>/</p>
        <template v-for="item in variables.navs">
            <NuxtLink
                class="currentlink"
                v-if="item.url === $route.path"
                :to="$route.path"
                >{{ item.label }}</NuxtLink
            >
        </template>
    </div>
</template>

<style scoped lang="scss">
.LinkDisplayer {
    display: flex;
    flex-flow: row;
    gap: 4px;
    font-size: 20px;
    font-weight: 400;
    color: #969595;
}

.link {
    color: #029f59;
}

.currentlink {
    color: #969595;
}

@media screen and (max-width: 1299px) {
    .LinkDisplayer {
        margin-top: 8px;
    }
}
</style>
