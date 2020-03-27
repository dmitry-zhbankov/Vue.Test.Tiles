<template>
    <div id="app">
        <Panel/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Panel from "./Panel/index";

    export default {
        name: 'App',
        components: {
            Panel
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        position: relative;
    }
</style>
