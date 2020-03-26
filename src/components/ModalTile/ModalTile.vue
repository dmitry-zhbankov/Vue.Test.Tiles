<template>
    <div class="modal-tile">
        <div class="tile-fields">
            <label>
                Title
                <input type="text" v-bind:value="title">
            </label>
            <label>
                Description
                <input type="text" v-bind:value="description">
            </label>
            <label>
                Tile URL
                <input type="text" v-bind:value="tileUrl">
            </label>
            <label>
                Tile Picture URL
                <input type="text" v-bind:value="tilePictureUrl">
            </label>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ModalTile",
        props: {
            title: String,
            description: String,
            tileUrl: String,
            tilePictureUrl: String,
        }
    }
</script>

<style scoped>
    .modal-tile {
        float: left;
        border: solid;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    .tile-fields {
        top: 3em;
        left: 0.5em;
        position: absolute;
    }

    input {
        display: block;
        background: none;
        border: solid;
        margin-bottom: 0.5em;
    }
</style>