<template>
    <ul class="list">
        <ListItem v-for="item in items" :key="item.id" :item="item" />
    </ul>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.list {
    list-style: none;
    padding: 0;
    margin: 0;
    height: 75vh;
    overflow: auto;
    background-color: white;
    border-radius: 6px;
}
</style>
