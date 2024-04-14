<script setup>
import PhoneIcon from "/src/assets/icons/PhoneIcon.svg";
import Logo from "/src/assets/icons/Logo.svg";
import variables from "~/src/variables";
import SubmitRequestBtn from "./SubmitRequestBtn.vue";
import HamburgerMenu from "./HamburgerMenu.vue";
</script>

<template>
    <div class="Header">
        <div class="Navbar">
            <div class="Shortcut">
                <Logo class="Logo" />
                <ul class="NavLinks">
                    <li v-for="item in variables.navs">
                        <a target="_blank" :href="item.url">{{ item.label }}</a>
                    </li>
                </ul>
            </div>
            <div class="Contact">
                <div class="TelNumber">
                    <PhoneIcon />
                    <p class="Number">+7 (900) 900-90-90</p>
                </div>
                <SubmitRequestBtn />
            </div>
            <HamburgerMenu class="Hamburger" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@mixin FitToMiddle() {
    display: flex;
    align-items: center;
}

a {
    color: black;
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

.Header {
    display: flex;
    justify-content: center;
    min-width: 344px;
    padding: 29px 88px;
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

.Hamburger {
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

    .Hamburger {
        display: block;
    }
}
</style>
