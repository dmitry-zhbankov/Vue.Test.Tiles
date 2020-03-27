<template>
    <div class="modal-tile">
        <div class="tile-fields">
            <label>
                Title
                <input type="text" v-model="title">
            </label>
            <label>
                Description
                <input type="text" v-model="description">
            </label>
            <label>
                Tile URL
                <input type="text" v-model="tileUrl">
            </label>
            <label>
                Tile Picture URL
                <input type="text" v-model="tilePictureUrl">
            </label>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ModalTile",
        props: {
            tileInfo: {
                type: Object,
                required: true,
            }
        },
        computed: {
            changedTile: function () {
                return {
                    title: this.title,
                    description: this.description,
                    tileUrl: this.tileUrl,
                    tilePictureUrl: this.tilePictureUrl,
                }
            }
        },
        watch: {
            changedTile: function (val) {
                this.$emit('change', val);
            }
        },
        data: function () {
            return {
                title: this.$props.tileInfo.title,
                description: this.$props.tileInfo.description,
                tileUrl: this.$props.tileInfo.tileUrl,
                tilePictureUrl: this.$props.tileInfo.tilePictureUrl,
            }
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

    input:focus {
        border-color: steelblue;
    }
</style>