<template>
    <div class="pagination">
        <Button class="pagination__button" :class="{ active: currentPage === 1 }" @click="$emit('changePage', 1)">
            1
        </Button>

        <!-- Эллипс перед страницами -->
        <span v-if="shouldShowFirstEllipsis">...</span>

        <!-- Динамические страницы -->
        <Button
            v-for="page in visiblePages"
            :key="page"
            class="pagination__button"
            :class="{ active: currentPage === page }"
            @click="$emit('changePage', page)"
        >
            {{ page }}
        </Button>

        <!-- Эллипс после страниц -->
        <span v-if="shouldShowLastEllipsis">...</span>

        <Button
            class="pagination__button"
            :class="{ active: currentPage === totalPages }"
            @click="$emit('changePage', totalPages)"
        >
            {{ totalPages }}
        </Button>
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        totalPages: {
            type: Number,
            required: true,
        },
        visibleLinksCount: {
            type: Number,
            default: 3,
        },
    },
    computed: {
        // Страница видимая для отображения с учетом ограничений
        visiblePages() {
            let start = Math.max(2, this.currentPage - Math.floor(this.visibleLinksCount / 2));
            let end = Math.min(this.totalPages - 1, start + this.visibleLinksCount - 1);

            if (end - start + 1 < this.visibleLinksCount) {
                start = Math.max(2, end - this.visibleLinksCount + 1);
            }

            return Array.from({ length: end - start + 1 }, (_, i) => start + i);
        },

        // Логика для проверки наличия эллипсиса перед первой страницей
        shouldShowFirstEllipsis() {
            return this.visiblePages[0] > 2;
        },

        // Логика для проверки наличия эллипсиса после последней страницы
        shouldShowLastEllipsis() {
            return this.visiblePages[this.visiblePages.length - 1] < this.totalPages - 1;
        },
    },
};
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;

    &__button {
        padding: 12px 24px;
        border: 1px solid #ccc;
        background-color: #f9f9f9;
        cursor: pointer;
        border-radius: 4px;

        &.active {
            background-color: #007bff;
            color: #fff;
        }

        &:disabled {
            background-color: #e9e9e9;
            cursor: not-allowed;
        }
    }
}

span {
    display: flex;
    align-items: center;
    font-size: 14px;
}
</style>
