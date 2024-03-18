<template>
    <div class="Header">
        <div class="Navbar">
            <div class="Shortcut">
                <div class>
                    <img src="../public/assets/img/logo.png" />
                </div>
                <div class="NavLinks">
                    <a target="_blank" href="https://youtu.be/dQw4w9WgXcQ">
                        Различные проекты
                    </a>
                    <a target="_blank" href="https://youtu.be/9MCiixIkzUk">
                        Новости
                    </a>
                    <a target="_blank" href="https://youtu.be/0tOXxuLcaog">
                        Контакты
                    </a>
                </div>
            </div>
            <div class="Contact">
                <div class="TelNumber">
                    <img src="../public/assets/icons/telephone.png" />
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
