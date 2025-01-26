<template>
    <div class="header">
        <h2 class="header__title">Список с пагинацией</h2>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
    computed: {},
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;

    &__title {
        font-size: 20px;
    }

    .link {
        text-decoration: none;
        color: inherit;
        position: relative;
    }

    .header__cart-container {
        display: flex;
        align-items: center;
    }

    .cart-count {
        position: absolute;
        top: -13px;
        right: -10px;
        background-color: #007bff;
        color: white;
        border-radius: 10px;
        padding: 2px 6px;
        font-size: 12px;
        font-weight: bold;
    }
}
</style>
