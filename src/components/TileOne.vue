<template>
    <div class="tile"
         v-bind:style="{left: positionX + 'px', top: positionY+'px', width:tileWidth+'px', height:tileHeight+'px'}">
        <a v-bind:href="tileUrl">
            <div class="tile-picture">
                <img v-bind:src="tilePictureUrl">
            </div>
            <div class="tile-title">
                <h3>{{title}}</h3>
            </div>
            <div class="tile-description">
                <p>{{ description }}</p>
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
        display: inline-block;
        position: absolute;
        padding: 5px;
        margin: 5px;
        border: solid;
        border-width: thick;
        border-color: transparent;
        overflow: hidden;
    }

    .tile:hover {
        border-color: black;
    }

    .tile-description {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }

    .tile-description h3 {
        margin: 0;
    }

    .tile-description p {
        margin: 0;
    }

    img {
        object-fit: cover;
        width: 100%;
    }

    a {
        text-decoration: none;
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
