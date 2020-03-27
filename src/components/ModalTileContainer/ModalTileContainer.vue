<template>
    <div class="modal-tile-container" v-bind:style="compStyle">
        <div class="modal-tile-toolbar">
            <Button v-on:myClick="save">Save</Button>
            <Button v-on:myClick="cancel">Cancel</Button>
        </div>
        <ModalTile v-bind:tileInfo="tileInfo" v-on:change="onChange"/>
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
                id: this.$props.tile.id,

                width: this.$props.tile.tileWidth,
                height: this.$props.tile.tileHeight,
                left: this.$props.tile.positionX,
                top: this.$props.tile.positionY,

                tileInfo: {
                    title: this.$props.tile.title,
                    description: this.$props.tile.description,
                    tileUrl: this.$props.tile.tileUrl,
                    tilePictureUrl: this.$props.tile.tilePictureUrl,
                }
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
            },
        },
        methods: {
            save: function () {
                let tileToSave = {
                    id: this.id,
                    width: this.width,
                    height: this.height,
                    left: this.left,
                    top: this.top,
                    ...this.tileInfo
                };
                this.$store.dispatch('updateTile', tileToSave);
                this.$router.push("/");
            },
            cancel: function () {
                this.$router.push("/");
            },
            onChange: function (changedTile) {
                this.tileInfo = changedTile;
            }
        }
    }
</script>

<style scoped>
    .modal-tile-container {
        position: absolute;
        background: white;
    }

    .modal-tile-toolbar {
        position: absolute;
    }
</style>