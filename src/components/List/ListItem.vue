<template>
    <li class="list-item">
        <Icon iconName="doc" :size="35" />
        <div class="list-item__info">
            <div class="list-item__name text-ellipsis">{{ itemName }}</div>
            <span class="list-item__value text-ellipsis"> {{ itemValue }}</span>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    computed: {
        itemName() {
            return this.item.name;
        },
        itemValue() {
            return `${this.item.value} Кб`;
        },
    },
};
</script>

<style lang="scss" scoped>
.list-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #ccc;

    &__value {
        font-weight: bold;
        color: #007bff;
    }

    &__info {
        display: flex;
        flex-direction: column;
        width: calc(100% - 36px);
    }

    &__name {
        margin-bottom: 5px;
    }
}
.text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
