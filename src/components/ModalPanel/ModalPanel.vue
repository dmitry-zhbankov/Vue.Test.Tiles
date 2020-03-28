<template>
    <div class="modal-panel" v-on:dragover="onDragOver" v-on:drop="onDrop" v-on:dragstart="onDragStart">
        <ModalTileContainer v-bind:tile="tile"></ModalTileContainer>
        Tile {{tileId}}
    </div>
</template>

<script>
    import ModalTileContainer from "@/components/ModalTileContainer/ModalTileContainer";

    export default {
        name: "ModalPanel",
        components: {ModalTileContainer},
        props: {
            tileId: String,
        },
        data: function () {
            return {
                startX: Number,
                endX: Number,
                startY: Number,
                endY: Number,
            }
        },
        computed: {
            tile: function () {
                return this.$store.getters.getTile(this.$props.tileId);
            },
        },
        methods: {
            onDragOver: function (ev) {
                ev.preventDefault();
            },
            onDragStart: function (ev) {
                this.startX = ev.screenX;
                this.startY = ev.screenY;
            },
            onDrop: function (ev) {
                let endX = ev.screenX;
                let endY = ev.screenY;
                let dx = endX - this.startX;
                let dy = endY - this.startY;
                let tile = this.tile;
                tile.positionX += dx;
                tile.positionY += dy;
                this.$store.commit('refreshTile', tile);
            },
        }
    }
</script>

<style scoped>
    .modal-panel {
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
</style>
