<template>
    <div>
        <button v-on:click="$emit('click')" v-bind:style="styleObj">
            <slot></slot>
        </button>
    </div>
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
                    backgroundImage: `url(${this.imageUrl})`
                }
            }
        }
    }
</script>

<style scoped>

</style>
