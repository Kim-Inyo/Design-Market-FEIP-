<script setup>
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogOverlay,
    DialogPortal,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "radix-vue";
import variables from "~/src/variables";
import Logo from "/src/assets/icons/Logo.svg";
import Email from "/src/assets/icons/Email.svg";
import PhoneIcon from "/src/assets/icons/PhoneIcon.svg";
import Location from "/src/assets/icons/Location.svg";
import { Icon } from "@iconify/vue";
import HamburgerMenu from "./HamburgerMenu.vue";
import SubmitRequestDialog from "./SubmitRequestDialog.vue";
</script>

<template>
    <DialogRoot>
        <DialogTrigger class="SideBarDialogBtn"
            ><HamburgerMenu
        /></DialogTrigger>
        <DialogPortal>
            <DialogOverlay class="DialogOverlay" />
            <DialogContent class="DialogContent">
                <ul class="NavLinks Links">
                    <li v-for="item in variables.navs">
                        <a :href="item.url">{{ item.label }}</a>
                    </li>
                </ul>
                <div class="SubmitRequestBtn">
                    <SubmitRequestDialog
                        :color="`#029f59`"
                        :backgroundColor="`white`"
                    />
                </div>
                <ul class="NavLinks Contacts">
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
                <DialogClose class="IconButton" aria-label="Close">
                    <Icon icon="mdi:close-thick" />
                </DialogClose>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>
<style scoped lang="scss">
.SideBarDialogBtn {
    cursor: pointer;
    background-color: white;
    border-radius: 10px;
}

.DialogContent {
    background-color: #029f59;
    position: fixed;
    display: flex;
    top: 0;
    right: 0;
    width: 270px;
    height: 100vh;
    z-index: 15;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}
.DialogContent:focus {
    outline: none;
}

a {
    color: white;
}

a:hover {
    text-decoration-line: underline;
    text-underline-offset: 5px;
}

.SubmitRequestBtn {
    position: absolute;
    bottom: 250px;
    left: 50%;
    transform: translate(-50%);
}

.NavLinks {
    position: absolute;
    display: flex;
    flex-flow: column;
    width: 210px;
    gap: 24px;
    color: white;
}

.NavLinks.Links {
    top: 105px;
    left: 21px;
}

.NavLinks.Contacts {
    bottom: 54px;
    left: 21px;
}

.NavItem {
    display: flex;
    gap: 8px;
    font-family: Montserrat;
    color: white;
    size: 14px;
}

.Location {
    width: 32px;
}

.IconButton {
    border-radius: 6px;
    width: 32px;
    height: 32px;
    padding-block: 10px;
    font-size: 18px;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgba(255, 255, 255, 0.2);
    position: absolute;
    top: 31px;
    right: 31px;
}

@keyframes overlayShow {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes contentShow {
    from {
        opacity: 0;
        transform: translate(100%, 0);
    }
    to {
        opacity: 1;
        transform: translate(0, 0);
    }
}
</style>
