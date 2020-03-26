<template>
    <div class="modal-tile-container" v-bind:style="compStyle">
        <Button class="save-button" v-on:myClick="save">Save</Button>
        <ModalTile v-bind:title="tile.title"
                   v-bind:description="tile.description"
                   v-bind:tile-url="tile.tileUrl"
                   v-bind:tile-picture-url="tile.tilePictureUrl"/>
    </div>
</template>

<script>
    import ModalTile from "@/components/ModalTile";
    import Button from "@/components/Button";

    export default {
        name: "ModalTileContainer",
        components: {Button, ModalTile},
        props: {
            tile: {
                type: Object,
                required: true,
            },
        },
        data: function () {
            return {
                width: this.$props.tile.tileWidth,
                height: this.$props.tile.tileHeight,
                left: this.$props.tile.positionX,
                top: this.$props.tile.positionY,
            }
        },
        computed: {
            compStyle: function () {
                return {
                    width: this.width + 'px',
                    height: this.height + 'px',
                    left: this.left + 'px',
                    top: this.top + 'px',
                }
            }
        },
        methods: {
            save: function () {
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>
    .modal-tile-container {
        position: absolute;
        background: white;
    }

    .save-button {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>