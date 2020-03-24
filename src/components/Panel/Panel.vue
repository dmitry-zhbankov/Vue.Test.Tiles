<template>
    <div class="panel">
        <Button class="refresh-all-button" v-bind:image-url="imgUrl" v-on:click="$emit('refreshAll')">Refresh all</Button>
        <TileContainer v-for="tile in tiles"
                       v-bind:key="tile.id"
                       v-bind:tile="tile"
        ></TileContainer>
    </div>
</template>

<script>
    import TileContainer from "@/components/TileContainer/TileContainer";
    import Button from "@/components/Button/Button";

    export default {
        name: "Panel",
        components: {TileContainer, Button},
        computed: {
            tiles: function () {
                return this.$store.getters.tiles
            },
            imgUrl: function () {
                return require("../../assets/refresh.svg")
            }
        },
    }
</script>

<style scoped>
    .panel {
    }
    .refresh-all-button{
        position: absolute;
        right: 0;
        top: 0;
    }
</style>