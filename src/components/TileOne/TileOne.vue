<template>
    <div class="tile"
         v-bind:style="{left: positionX + 'px', top: positionY+'px', width:tileWidth+'px', height:tileHeight+'px'}">
        <a v-bind:href="tileUrl">
            <div class="tile-picture">
                <img v-bind:src="tilePictureUrl">
            </div>
            <div class="tile-content">
                <div class="tile-title">
                    <h3>{{title}}</h3>
                </div>
                <div class="tile-description">
                    <p>{{ description }}</p>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'TileOne',
        props: {
            title: String,
            description: String,
            tileUrl: String,
            tilePictureUrl: String,
            positionX: Number,
            positionY: Number,
            tileWidth: Number,
            tileHeight: Number,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tile {
        position: absolute;
        padding: 5px;
        margin: 5px;
        border: solid;
        border-width: thick;
        border-color: transparent;
    }

    .tile:hover {
        border-color: black;
    }

    .tile-content{
        position: relative;
        bottom: 50px;
    }

    .tile-description {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        position: relative;
    }

    .tile-description h3 {
        margin: 0;
    }

    .tile-description p {
        margin: 0;
    }

    .tile-title{
        position: relative;
        bottom: 0;
    }

    .tile-picture{
        position: relative;
        height: auto;

    }

    img{
        object-fit: cover;
    }

    a {
        text-decoration: none;
        display: block;
        overflow: hidden;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }
</style>
