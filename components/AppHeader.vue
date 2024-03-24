<script setup>
import PhoneIcon from "/src/assets/icons/PhoneIcon.svg";
import Logo from "/src/assets/icons/Logo.svg";
import variables from "~/src/variables";
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
                <button class="SubmitReq">Оставить заявку</button>
            </div>
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

.Navbar {
    @include FitToMiddle();
    justify-content: space-between;
    padding: 29px 88px;
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
}

.SubmitReq {
    @include FitToMiddle();
    justify-content: center;
    cursor: pointer;
    padding: 16px 40px;
    border-radius: 10px;
    border-style: hidden;
    background-color: #029f59;
    color: white;
    size: 14px;
}
</style>
