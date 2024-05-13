<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppBody from "./components/AppBody.vue";
import AppFooter from "./components/AppFooter.vue";
import SlideBar from "./components/SlideBar.vue";
const SlideBarOpen = useState("IsSlideBarOpen", () => false);
const toggleSlideBar = () => {
    SlideBarOpen = !SlideBarOpen;
};
</script>

<template>
    <div class="root">
        <!-- <SlideBar toggleSlideBar={toggleSlideBar} > -->
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

p {
    margin: 0px;
}

img {
    object-fit: cover;
    max-width: 100%;
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
