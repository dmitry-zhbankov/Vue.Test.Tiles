<template>
    <div class="container" v-bind:style="styleObj">
        <div class="refresh-button">
            <Button v-on:click="$emit('refresh')" image-url="./refresh.svg"></Button>
        </div>
        <div class="tile">
            <component v-bind:is="tile"></component>
        </div>
    </div>
</template>

<script>
    import Button from "@/components/Button/Button";

    export default {
        name: "TileContainer",
        props: {
            positionX: Number,
            positionY: Number,
            tileWidth: Number,
            tileHeight: Number,
            tile: undefined,
        },
        components: {Button},
        data: function () {
            return {
                styleObj: {
                    width: this.tileWidth,
                    height: this.tileHeight,
                    left: this.positionX,
                    top: this.positionY,
                }
            }
        },
        methods: {
            refresh: function () {
                this.$store.dispatch('getTiles');
            }
        }
    }
</script>

<style scoped>
    .container {
        position: absolute;
    }

    .refresh-button {
        position: absolute;
        right: 0;
        top: 0;
    }
</style>
