<script setup>
import variables from "~/src/variables";
import Logo from "/src/assets/icons/Logo.svg";
import Email from "/src/assets/icons/Email.svg";
import PhoneIcon from "/src/assets/icons/PhoneIcon.svg";
import Location from "/src/assets/icons/Location.svg";
import SubmitRequestDialog from "./SubmitRequestDialog.vue";
</script>

<template>
    <div class="Footer">
        <div class="container">
            <div class="FooterInfo">
                <Logo class="Logo" />
                <ul class="NavLinks">
                    <li v-for="item in variables.navs">
                        <a :href="item.url">{{ item.label }}</a>
                    </li>
                </ul>
                <ul class="NavLinks">
                    <li class="NavItem">
                        <PhoneIcon class="Icons" />
                        <p>+7 (900) 900-90-90</p>
                    </li>
                    <li class="NavItem">
                        <Email class="Icons" />
                        <p>info@gmail.com</p>
                    </li>
                    <li class="NavItem">
                        <Location class="Location Icons" />
                        <p>г. Владивосток ул. Выселковая 49, стр. 3</p>
                    </li>
                </ul>
                <div class="SubmitReq">
                    <SubmitRequestDialog />
                </div>
                <p class="terms">© Загдом, 2021</p>
                <a href="" class="terms">Политика конфиденциальности</a>
                <a href="" class="terms">Пользовательское соглашение</a>
                <div class="Terms-Container">
                    <p>© Загдом, 2021</p>
                    <a href="">Политика конфиденциальности</a>
                    <a href="">Пользовательское соглашение</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
    justify-content: center;
    padding: 33px 88px;
    min-width: 336px;
    background-color: #254741;
    color: white;
}

.container {
    width: 100%;
    max-width: 1264px;
}

.FooterInfo {
    display: grid;
    width: 100%;
    grid-template-columns: auto auto auto 1fr;
    column-gap: 122px;
    row-gap: 32px;
}

.Logo {
    padding-top: 4px;
}

.NavLinks {
    display: flex;
    flex-flow: column;
    width: 210px;
    padding-top: 16px;
    gap: 24px;
    color: white;
}

.NavItem {
    display: flex;
    gap: 8px;
    font-family: Montserrat;
    size: 14px;
}

.Icons {
    color: #029f59;
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
    justify-content: right;
}

.Terms-Container {
    display: none;
}

@media screen and (min-width: 1050px) and (max-width: 1299px) {
    .Footer {
        padding: 29px 16px;
    }

    .FooterInfo {
        column-gap: 50px;
    }
}

@media screen and (min-width: 815px) and (max-width: 1049px) {
    .Footer {
        padding: 29px 16px;
    }

    .FooterInfo {
        grid-template-columns: repeat(3, auto);
        column-gap: 50px;
    }

    .SubmitReq {
        display: none;
    }
}

@media screen and (max-width: 814px) {
    .Footer {
        padding: 40px;
        padding-right: 0px;
    }

    .FooterInfo {
        display: flex;
        flex-flow: column;
        gap: 40px;
    }

    .terms {
        display: none;
    }

    .SubmitReq {
        justify-content: start;
    }

    .Terms-Container {
        display: flex;
        flex-flow: column;
        gap: 16px;
        color: #ffffff;
        opacity: 60%;
    }
}
</style>
