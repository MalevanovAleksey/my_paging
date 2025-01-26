<template>
    <div class="home">
        <Header />
        <router-view />
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "HomeView",
    mounted() {
        this.init();
    },
    methods: {
        ...mapActions(["generateCollection"]),
        init() {
            this.generateCollection();
        },
    },
};
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 100px;
    height: calc(100vh - 80px);
}

@media (max-width: 1024px) {
    .home {
        padding: 20px 40px;
        height: calc(100vh - 40px);
    }
}
</style>
