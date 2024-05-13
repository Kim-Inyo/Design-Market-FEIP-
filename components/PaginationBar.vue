<script setup>
import PaginationPrev from "/components/PaginationPrev.vue";
import PaginationNext from "/components/PaginationNext.vue";
import PaginationBtn from "/components/PaginationBtn.vue";
import PaginationElipsis from "/components/PaginationElipsis.vue";
const props = defineProps({
    TotalPages: {
        type: Number,
        default: 10,
    },
    ItemsPerPage: {
        type: Number,
        default: 12,
    },
    Siblings: {
        type: Number,
        default: 1,
    },
});

const emit = defineEmits(["submit"]);

const CurrentPage = ref(1);
const disabledPrev = ref(true);
const disabledNext = ref(false);

const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

const Next = () => {
    CurrentPage.value++;
    emit("submit", CurrentPage.value);
    return GetRange(CurrentPage, TotalPages, Siblings);
};

const Prev = () => {
    CurrentPage.value--;
    emit("submit", CurrentPage.value);
    return GetRange(CurrentPage, TotalPages, Siblings);
};

const GoTo = (n) => {
    CurrentPage.value = n;
    emit("submit", CurrentPage.value);
    return GetRange(CurrentPage, TotalPages, Siblings);
};

const GetRange = (CurrentPage, TotalPages, Siblings) => {
    if (CurrentPage == 1) {
        disabledPrev.value = true;
        disabledNext.value = false;
    } else if (CurrentPage == TotalPages) {
        disabledNext.value = true;
        disabledPrev.value = false;
    } else {
        disabledPrev.value = false;
        disabledNext.value = false;
    }
    if (
        (CurrentPage >= 1 && CurrentPage <= 1 + Siblings) ||
        (CurrentPage <= TotalPages && CurrentPage >= TotalPages - Siblings)
    ) {
        const leftRange = range(1, 1 + Siblings);
        const rightRange = range(TotalPages - Siblings, TotalPages);
        return [...leftRange, "Elipsis", ...rightRange];
    } else {
        if (Siblings != 0) {
            const middleRange = range(
                CurrentPage - Siblings + 1,
                CurrentPage + Siblings - 1
            );
            return [1, "Elipsis", ...middleRange, "Elipsis", TotalPages];
        } else return ["Elipsis", CurrentPage, "Elipsis"];
    }
};
</script>

<template>
    <div class="container">
        <PaginationPrev :disabled="disabledPrev" @clicked="Prev" />
        <div class="PageButtonsContainer">
            <template
                v-for="PageValue in GetRange(CurrentPage, TotalPages, Siblings)"
            >
                <PaginationElipsis v-if="PageValue === 'Elipsis'" />
                <PaginationBtn
                    v-else
                    :value="PageValue"
                    :disabled="PageValue == CurrentPage"
                    @clicked="GoTo"
                />
            </template>
        </div>
        <PaginationNext :disabled="disabledNext" @clicked="Next" />
    </div>
</template>
<style scoped lang="scss">
.container {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 40px;
    gap: 24px;
}

.PageButtonsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
}

@media screen and (max-width: 1299px) {
    .container {
        margin-bottom: 80px;
    }
}
</style>
