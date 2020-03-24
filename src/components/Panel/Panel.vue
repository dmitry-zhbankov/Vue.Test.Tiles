<template>
    <div class="panel">
        <Button class="refresh-all-button" v-bind:image-url="imgUrl" v-on:myClick=refreshAll>Refresh all</Button>
        <TileContainer v-for="tile in tiles"
                       v-bind:key="tile.Id"
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
                return this.$store.state.tiles
            },
            imgUrl: function () {
                return require("../../assets/refresh.svg")
            }
        },
        methods: {
            refreshAll: function () {
                this.$store.dispatch('getTiles');
            }
        }
    }
</script>

<style scoped>
    .panel {
        position: relative;
    }

    .refresh-all-button {
        position: absolute;
        right: 0;
        top: 0;
    }
</style>