<template>
    <div class="modal-panel">
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
        computed: {
            tile: function () {
                let res = this.$store.getters.getTile(this.$props.tileId);
                return res;
            },

        },
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
