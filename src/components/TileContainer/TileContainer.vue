<template>
    <div class="tile-container" v-bind:style="compStyleObj">
        <component class="tile-component" v-bind:is="tile.type"
                   v-bind:title="tile.title"
                   v-bind:description="tile.description"
                   v-bind:tileUrl="tile.tileUrl"
                   v-bind:tilePictureUrl="tile.tilePictureUrl"
        >
        </component>
        <Button class="refresh-button" v-on:myClick="refresh" v-bind:image-url="refreshIconUrl"></Button>
        <Button class="edit-button" v-on:myClick="edit" v-bind:image-url="editIconUrl"></Button>
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
                this.$store.dispatch('getTileById', this.$props.tile.id);
            },
            edit: function () {
                this.$store.modalTile = Object.assign({}, this.$props.tile);
                this.$router.push(`/modal/${this.$props.tile.id}`)
            }
        },
        computed: {
            refreshIconUrl: function () {
                return require("@/assets/refresh.svg");
            },
            editIconUrl: function () {
                return require("@/assets/edit.svg");
            },
            compStyleObj: function () {
                return {
                    width: this.$props.tile.tileWidth + 'px',
                    height: this.$props.tile.tileHeight + 'px',
                    left: this.$props.tile.positionX + 'px',
                    top: this.$props.tile.positionY + 'px',
                }
            }
        }
    }
</script>

<style scoped>
    .tile-container {
        position: absolute;
        overflow: hidden;
        border: solid;
        border-width: thick;
        border-color: transparent;
    }

    .tile-container:hover {
        border-color: black;
    }

    .refresh-button {
        float: right;
    }

    .edit-button {
        float: right;
    }

    .tile-component {
        position: absolute;
    }
</style>
