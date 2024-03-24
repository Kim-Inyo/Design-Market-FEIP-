<script setup>
import variables from "~/src/variables";
import Logo from "/src/assets/icons/Logo.svg";
import Email from "/src/assets/icons/Email.svg";
import PhoneIcon from "/src/assets/icons/PhoneIcon.svg";
import Location from "/src/assets/icons/Location.svg";
</script>

<template>
    <div class="Footer">
        <div class="FooterInfo">
            <Logo class="Logo" />
            <ul class="NavLinks">
                <li v-for="item in variables.navs">
                    <a :href="item.url">{{ item.label }}</a>
                </li>
            </ul>
            <ul class="NavLinks">
                <li class="NavItem">
                    <PhoneIcon />
                    <p>+7 (900) 900-90-90</p>
                </li>
                <li class="NavItem">
                    <Email />
                    <p>info@gmail.com</p>
                </li>
                <li class="NavItem">
                    <Location class="Location" />
                    <p>г. Владивосток ул. Выселковая 49, стр. 3</p>
                </li>
            </ul>
            <p class="terms">© Загдом, 2021</p>
            <a href="" class="terms">Политика конфиденциальности</a>
            <a href="" class="terms">Пользовательское соглашение</a>
        </div>
        <button class="SubmitReq">Оставить заявку</button>
    </div>
</template>

<style scoped>
a {
    color: white;
}

a:hover {
    text-decoration-line: underline;
    text-underline-offset: 5px;
}

p {
    margin: 0;
    cursor: default;
}

.Footer {
    display: flex;
    justify-content: space-between;
    padding: 29px 88px;
    background-color: #254741;
    color: white;
}

.FooterInfo {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 122px;
    row-gap: 32px;
}

.NavLinks {
    display: flex;
    flex-flow: column;
    width: 210px;
    gap: 24px;
    color: white;
}

.NavItem {
    display: flex;
    gap: 8px;
    font-family: Montserrat;
    size: 14px;
}

.Location {
    width: 32px;
}

.terms {
    color: #ffffff;
    opacity: 60%;
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
</style>
