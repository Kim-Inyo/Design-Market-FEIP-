<script setup>
import ArrowLeft from "/src/assets/icons/ArrowLeft.svg";
import ArrowRight from "/src/assets/icons/ArrowRight.svg";

const props = defineProps({
    value: Number,
    CurrentPage: Number,
    disabled: {
        default: false,
        type: Boolean,
    },
});
</script>
<template>
    <button
        class="PaginationBtn"
        @click="$emit('clicked', props.value)"
        :value="props.value"
        :disabled="props.disabled"
    >
        {{ props.value }}
    </button>
</template>
<style lang="scss">
.PaginationBtn {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    border: 1px solid #9d9c9c;
    background-color: #ffffff;
    color: #254741;
}
.PaginationBtn:hover {
    border-color: #9d9c9c;
}
.PaginationBtn:disabled {
    background-color: #254741;
    color: white;
}
</style>
