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
    margin: 0%;
}

.SubmitReq {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 204px;
    height: 49px;
    padding: 16px 40px;
    border-radius: 10px;
    border-style: hidden;
    background-color: #029f59;
    color: white;
    size: 14px;
}

button:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-color: black;
}

.Hamburger {
    padding: 16px;
    gap: 10px;
    border-radius: 10px;
    border-style: hidden;
    background-color: #029f59;
}

.Hamburger-Container {
    display: flex;
    flex-flow: column;
    gap: 4px;
}

.Hamburger .line {
    display: block;
    height: 2px;
    width: 24px;
    border-radius: 10px;
    background-color: white;
}

.Logo {
    width: 160px !important;
    height: 39px !important;
}
</style>
