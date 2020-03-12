<template>
    <button class="my-button" v-on:click="$emit('click')">
        <img v-bind:src="imageUrl">
        <slot></slot>
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
                styleObj: {
                }
            }
        }
    }
</script>

<style scoped>
    img{
        width: 20px;
        height: 20px;
    }
</style>
