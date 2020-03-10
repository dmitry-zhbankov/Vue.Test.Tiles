<template>
    <div id="app">
        <TileOne description="Welcome to Your Vue.js App asdfasdfasdfasdfasdfasdfasdffffffffsdafasdfasdfsadfsadfasdfsadf" tile-url="https://www.google.com/"
                 tile-picture-url="https://images.freeimages.com/images/small-previews/2fe/butterfly-1390152.jpg" title="Tile 1" tile-width="100" tile-height="100"/>
        <TileOne description="Welcome to Your Vue.js App" tile-url="https://www.google.com/"
                 tile-picture-url="https://images.freeimages.com/images/small-previews/2fe/butterfly-1390152.jpg" position-x="500"/>
    </div>
</template>

<script>
    import TileOne from './components/TileOne.vue'

    export default {
        name: 'App',
        components: {
            TileOne
        }
    }
</script>

<style>
    #app {
    }
</style>
