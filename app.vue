<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppBody from "./components/AppBody.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
    <div class="root">
        <AppHeader />
        <div class="Body">
            <NuxtPage />
        </div>
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
}

.Header,
.Footer {
    flex-shrink: 0;
}

.Body {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    padding: 40px 88px;
    min-width: 344px;
    margin: 0px;
}

@media screen and (max-width: 1299px) {
    .Body {
        padding: 0px 16px;
    }
}

@media screen and (max-width: 814px) {
    .Body {
        padding: 0px 16px;
        gap: 80px;
    }
}

.container {
    width: 100%;
    max-width: 1264px;
}

@mixin centralize() {
    display: flex;
    justify-content: center;
    align-items: center;
}

p {
    margin: 0px;
}

img {
    object-fit: cover;
    max-width: 100%;
}

a:link {
    text-decoration: none;
}

a {
    color: black;
}

a:visited {
    text-decoration: none;
}

a:active {
    text-decoration: none;
}

ul {
    list-style-type: none;
    padding-left: 0%;
    margin: 0%;
}

button {
    border-style: hidden;
    padding: 0px;
}

button:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-color: black;
}

::placeholder {
    color: #9d9c9c;
    font-family: "open sans";
    font-size: 14px;
}

.Logo {
    width: 160px !important;
    height: 39px !important;
}

.sectiontitle {
    font-family: Montserrat;
    font-size: 38px;
    font-weight: 700;
}

.description {
    color: #666666;
}

.DialogOverlay {
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    inset: 0;
    z-index: 1;
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
