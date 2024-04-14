<template>
    <button class="Hamburger">
        <div class="Hamburger-Container">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
    </button>
</template>

<style scoped lang="scss">
.Hamburger {
    padding: 16px;
    gap: 10px;
    border-radius: 10px;
    border-style: hidden;
    background-color: #029f59;
}

.Hamburger-Container {
    display: flex;
    flex-flow: column;
    gap: 4px;
}

.Hamburger .line {
    display: block;
    height: 2px;
    width: 24px;
    border-radius: 10px;
    background-color: white;
}
</style>
