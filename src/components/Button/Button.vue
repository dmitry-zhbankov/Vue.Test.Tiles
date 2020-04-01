<template>
    <button class="my-button" v-on:click="onClick">
        <img v-bind:src="imageUrl">
        <label>
            <slot></slot>
        </label>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            imageUrl: String,
        },
        data: function () {
            return {
                styleObj: {}
            }
        },
        methods: {
            onClick: function (ev) {
                ev.preventDefault();
                this.$emit('myClick');
            }
        }
    }
</script>

<style scoped>
    .my-button {
        position: relative;
        font-size: 1em;
        margin: 0;
        padding: 0.3em;
        min-width: 1.5em;
        min-height: 1.5em;
    }

    img {
        float: left;
        height: 1.5em;
    }

    label {
        float: left;
        line-height: 1.5em;
    }
</style>
