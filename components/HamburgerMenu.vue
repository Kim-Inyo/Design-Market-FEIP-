<template>
    <div class="Hamburger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>
</template>

<style scoped lang="scss">
.Hamburger {
    display: flex;
    flex-flow: column;
    gap: 4px;
    padding: 16px;
    border-radius: 6px;
    border-style: hidden;
    background-color: #029f59;
}

.Hamburger .line {
    display: block;
    height: 2px;
    width: 24px;
    border-radius: 10px;
    background-color: white;
}
</style>
