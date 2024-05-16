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
    <button class="PrevBtn" @click="$emit('clicked')" :disabled="disabled">
        <ArrowLeft />
    </button>
</template>
<style scoped lang="scss">
.PrevBtn {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    border: 1px solid #d7d7d7;
    background-color: #029f59;
    color: white;
}
.PrevBtn:disabled {
    background-color: #fafafa;
    color: #d7d7d7;
}
.PrevBtn:disabled:hover {
    box-shadow: none;
}
</style>
