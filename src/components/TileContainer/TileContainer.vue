<template>
    <div class="container" v-bind:style="styleObj">
        <component class="tile-component" v-bind:is="tile.type"
                   v-bind:title="tile.title"
                   v-bind:description="tile.description"
                   v-bind:tileUrl="tile.tileUrl"
                   v-bind:tilePictureUrl="tile.tilePictureUrl"
        >
        </component>
        <Button class="refresh-button" v-on:click="$emit('refresh',tile.id)" v-bind:image-url="imgUrl"></Button>
    </div>
</template>

<script>
    import Button from "@/components/Button/Button";
    import TileOne from "@/components/TileOne/TileOne";
    import TileTwo from "@/components/TileTwo/TileTwo";

    export default {
        name: "TileContainer",
        props: {
            tile: {
                type: Object,
                required: true,
            },
        },
        components: {Button, TileOne, TileTwo},
        data: function () {
            return {
                styleObj: {
                    width: this.$props.tile.tileWidth + 'px',
                    height: this.$props.tile.tileHeight + 'px',
                    left: this.$props.tile.positionX + 'px',
                    top: this.$props.tile.positionY + 'px',
                },
            }
        },
        methods: {
            refresh: function () {
                this.$store.dispatch('getTiles');
            }

        },
        computed: {
            imgUrl: function () {
                return require("../../assets/refresh.svg");
            }
        }
    }
</script>

<style scoped>
    .container {
        position: absolute;
        overflow: hidden;
        border: solid;
        border-width: thick;
        border-color: transparent;
    }

    .container:hover {
        border-color: black;
    }

    .refresh-button {
        position: relative;
        right: 0;
        top: 0;
    }

    .tile-component {
    }
</style>
