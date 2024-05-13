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
import { Icon } from "@iconify/vue";

const props = defineProps({
    color: {
        default: "white",
        type: String,
    },
    backgroundColor: {
        default: "#029f59",
        type: String,
    },
});
</script>

<template>
    <DialogRoot>
        <DialogTrigger
            class="SubmitRequest"
            v-bind:style="{
                color: props.color,
                'background-color': backgroundColor,
            }"
            >Оставить заявку</DialogTrigger
        >
        <DialogPortal>
            <DialogOverlay class="DialogOverlay" />
            <DialogContent class="DialogContent">
                <form class="RequestForm">
                    <div class="RequestData">
                        <p class="sectiontitle">Оставить заявку</p>
                        <input
                            class="Input"
                            id="name"
                            name="name"
                            type="text"
                            v-model="name"
                            placeholder="Имя"
                        />
                        <input
                            class="Input"
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                            v-model="phoneNumber"
                            placeholder="Телефон"
                        />
                        <textarea
                            class="Input"
                            id="message"
                            name="message"
                            rows="3"
                            v-model="message"
                            placeholder="Сообщение"
                        ></textarea>
                    </div>
                    <div class="FormFooter">
                        <DialogClose as-child>
                            <button type="submit" class="SubmitRequest">
                                Отправить
                            </button>
                        </DialogClose>
                        <div class="Notification">
                            Нажимая на кнопку «Отправить», вы принимаете
                            <a class="terms" href=""
                                >пользовательское соглашение</a
                            >
                            и
                            <a class="terms" href=""
                                >политику конфиденциальности</a
                            >
                        </div>
                    </div>
                </form>
                <DialogClose class="IconButton" aria-label="Close">
                    <Icon icon="mdi:close-thick" />
                </DialogClose>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>
<style scoped lang="scss">
.SubmitRequest {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 204px;
    height: 49px;
    padding: 16px 40px;
    border-radius: 10px;
    border-style: solid;
    background-color: #029f59;
    border-color: #029f59;
    color: white;
    font-family: montserrat;
    size: 14px;
}

.DialogOverlay {
    z-index: 19;
}

.DialogContent {
    background-color: #f5f7f3;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    max-width: 355px;
    min-width: 295px;
    padding-inline: 48px;
    padding-block: 48px 56px;
    z-index: 20;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}
.DialogContent:focus {
    outline: none;
}

.RequestForm {
    display: flex;
    flex-flow: column;
    gap: 32px;
}

.RequestData {
    display: flex;
    flex-flow: column;
    gap: 24px;
}

.sectiontitle {
    font-family: Montserrat;
    font-size: 32px;
    font-weight: bold;
}

.Input {
    width: 90%;
    background-color: white;
    border-radius: 5px;
    border: none;
    resize: none;
    font-family: "open sans";
    font-size: 16px;
    padding-block: 16.5px;
    padding-inline: 16px;
}
.Input:focus {
    outline: none;
}

.FormFooter {
    display: flex;
    flex-flow: column;
    gap: 16px;
    align-items: center;
}

.Notification {
    margin-inline: 21px;
    text-align: center;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
}

.terms {
    color: #029f59;
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
    color: #029f59;
    background-color: rgba(2, 159, 89, 0.2);
    position: absolute;
    top: 24px;
    right: 24px;
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
        transform: translate(-50%, -48%) scale(0.96);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}

@media screen and (max-width: 814px) {
    .DialogContent {
        padding-inline: 24px;
        padding-block: 64px 32px;
    }

    .Notification {
        margin: 0px;
    }
}
</style>
