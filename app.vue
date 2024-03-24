<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppBody from "./components/AppBody.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
    <div class="root">
        <AppHeader />
        <AppBody />
        <AppFooter />
    </div>
</template>

<style lang="scss">
:root {
    font-family: "open sans";
}

.root {
    display: flex;
    flex-flow: column;
    height: 98vh;
}

.Header,
.Footer {
    flex-shrink: 0;
}

.Body {
    flex-grow: 1;
}

@mixin centralize() {
    display: flex;
    justify-content: center;
    align-items: center;
}

a:visited {
    text-decoration: none;
}

a:active {
    text-decoration: none;
}

a:link {
    text-decoration: none;
}

ul {
    list-style-type: none;
    padding-left: 0%;
}

button:hover {
    border-width: 1px;
    border-style: solid;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-color: black;
}

.Logo {
    width: 160px !important;
    height: 39px !important;
}
</style>
