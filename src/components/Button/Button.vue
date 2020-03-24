<template>
    <button class="my-button" v-on:click="onClick">
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
        },
        methods:{
            onClick:function () {
                this.$emit('myClick');
            }
        }
    }
</script>

<style scoped>
    .my-button{
        font-size: 1em;
        margin: 0;
        padding: 0.3em;
        min-width: 1.5em;
        min-height: 1.5em;
    }
    img{
        width: 1.5em;
        height: 1.5em;
    }
</style>
