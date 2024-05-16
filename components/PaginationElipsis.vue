<script setup>
const Elipsis = "&#8230;";
</script>

<template>
    <button class="PaginationBtn" disabled>
        <slot>&#8230;</slot>
    </button>
</template>
<style scoped lang="scss">
.PaginationBtn {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    border: 1px solid #9d9c9c;
    background-color: #ffffff;
    color: #254741;
}
.PaginationBtn:disabled:hover {
    box-shadow: none;
}
</style>
