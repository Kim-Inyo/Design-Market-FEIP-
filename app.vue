<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppBody from "./components/AppBody.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
    <div class="Container">
        <AppHeader />
        <AppBody />
        <AppFooter />
    </div>
</template>

<style lang="scss">
:root {
    font-family: "open sans";
}

@mixin centralize() {
    display: flex;
    justify-content: center;
    align-items: center;
}

.Container {
    display: flex;
    position: fixed;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
}

a {
    color: black;
}

a:link {
    text-decoration: none;
}

a:visited {
    text-decoration: none;
}

a:hover {
    color: green;
    text-decoration-line: underline;
    text-underline-offset: 5px;
}

a:active {
    text-decoration: none;
}
</style>
