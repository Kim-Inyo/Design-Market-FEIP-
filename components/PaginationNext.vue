<script setup>
import ArrowLeft from "/src/assets/icons/ArrowLeft.svg";
import ArrowRight from "/src/assets/icons/ArrowRight.svg";
defineProps({
    disabled: {
        default: false,
        type: Boolean,
    },
});
</script>
<template>
    <button class="NextBtn" @click="$emit('clicked')" :disabled="disabled">
        <ArrowRight />
    </button>
</template>
<style scoped lang="scss">
.NextBtn {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    border: 1px solid #d7d7d7;
    background-color: #029f59;
    color: white;
}
.NextBtn:disabled {
    background-color: #fafafa;
    color: #d7d7d7;
}
.NextBtn:disabled:hover {
    box-shadow: none;
}
</style>
