<template>
    <div class="panel">
        <div class="refresh-all-button">
            <Button image-url="./refresh.svg" v-on:click="$emit('refreshAll')">Refresh all</Button>
        </div>
        <TileContainer v-for="container in tileContainers"
                       v-bind:tile="container.tile"
                       v-bind:key="container.tile.title"
                       v-bind:tile-height="container.tileHeight"
                       v-bind:tile-width="container.tileWidth"
                       v-bind:position-x="container.positionX"
                       v-bind:position-y="container.positionY"
        ></TileContainer>
    </div>
</template>

<script>
    import TileContainer from "@/components/TileContainer/TileContainer";

    export default {
        name: "Panel",
        components: {TileContainer},
        props: {
            tileContainers: []
        }
    }
</script>

<style scoped>
    .panel {

    }
</style>