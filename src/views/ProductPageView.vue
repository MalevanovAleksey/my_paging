<template>
    <List :items="paginatedData" />
    <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        :visibleLinksCount="visibleLinksCount"
        @changePage="changePage"
    />
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            recordsPerPage: 15,
            visibleLinksCount: 3,
        };
    },
    computed: {
        ...mapGetters(["getCollection"]),
        totalPages() {
            return Math.ceil(this.getCollection.length / this.recordsPerPage);
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.recordsPerPage;
            const end = start + this.recordsPerPage;
            return this.getCollection.slice(start, end);
        },
        currentPage() {
            return this.$route.params.page ? Number(this.$route.params.page) : 1;
        },
    },
    methods: {
        changePage(page) {
            this.$router.push({ name: "ProductPageView", params: { page } });
        },
    },
};
</script>

<style lang="scss" scoped>
.home {
    padding: 40px 100px;
    height: 100%;
}

@media (max-width: 1024px) {
    .home {
        padding: 20px 40px;
    }
}
</style>
