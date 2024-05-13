<script setup>
import PhoneIcon from "/src/assets/icons/PhoneIcon.svg";
import Logo from "/src/assets/icons/Logo.svg";
import variables from "~/src/variables";
import SubmitRequestDialog from "./SubmitRequestDialog.vue";
import SideBarDialog from "./SideBarDialog.vue";
</script>

<template>
    <div class="Header">
        <div class="Navbar">
            <div class="Shortcut">
                <NuxtLink to="/"><Logo class="Logo" /></NuxtLink>
                <ul class="NavLinks">
                    <li v-for="item in variables.navs">
                        <NuxtLink
                            class="links"
                            :class="
                                item.url === $route.path
                                    ? 'text-green'
                                    : 'text-grey'
                            "
                            :to="item.url"
                            >{{ item.label }}</NuxtLink
                        >
                    </li>
                </ul>
            </div>
            <div class="Contact">
                <div class="TelNumber">
                    <PhoneIcon />
                    <p class="Number">+7 (900) 900-90-90</p>
                </div>
                <SubmitRequestDialog />
            </div>
            <div class="SideBarDialog">
                <SideBarDialog />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@mixin FitToMiddle() {
    display: flex;
    align-items: center;
}

.links {
    color: #666666;
}

.links:hover {
    color: green;
    text-decoration-line: underline;
    text-underline-offset: 5px;
}

.text-green {
    color: green;
}

.Header {
    display: flex;
    justify-content: center;
    min-width: 344px;
    padding: 24px 88px;
}

.Navbar {
    @include FitToMiddle();
    justify-content: space-between;
    width: 100%;
    max-width: 1264px;
}

.Shortcut {
    @include FitToMiddle();
    gap: 80px;
}

.NavLinks {
    @include FitToMiddle();
    gap: 24px;
}

.Contact {
    @include FitToMiddle();
    gap: 24px;
}

.TelNumber {
    @include FitToMiddle();
    gap: 8px;
}

.Number {
    font-family: Montserrat;
    cursor: default;
    width: max-content;
}

.SideBarDialog {
    display: none;
}

@media screen and (min-width: 1050px) and (max-width: 1299px) {
    .Header {
        padding: 29px 16px;
    }

    .Shortcut {
        gap: 30px;
    }

    .Contact {
        @include FitToMiddle();
        gap: 24px;
    }
}

@media screen and (min-width: 815px) and (max-width: 1049px) {
    .Header {
        padding: 29px 16px;
    }

    .NavLinks {
        display: none;
    }
}

@media screen and (max-width: 814px) {
    .Header {
        padding: 29px 16px;
    }

    .NavLinks {
        display: none;
    }

    .Contact {
        display: none;
    }

    .SideBarDialog {
        display: block;
    }
}
</style>
