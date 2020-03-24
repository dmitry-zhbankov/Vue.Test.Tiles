<template>
    <div class="tile"
         v-on:mouseenter="onMouseEnter" v-on:mouseleave="onMouseLeave">
        <a v-bind:href="tileUrl">
            <div class="tile-picture">
                <img alt="Tile Picture" v-bind:src="tilePictureUrl">
            </div>
            <div class="tile-content" v-bind:class="{transOn:isTrans, transOff:!isTrans}">
                <div class="tile-title">
                    <label>{{title}}</label>
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
        },
        data: function () {
            return {
                isTrans: false
            }
        },
        methods: {
            onMouseEnter: function () {
                this.isTrans = true;
            },
            onMouseLeave: function () {
                this.isTrans = false;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .transOff {
        top: 100%;
        transform: translate(0, -100%);
        transition: all 1s;
    }

    .transOn {
        top: 0;
        transition: all 1s;
    }

    .tile {
        width: 100%;
        height: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }

    .tile-content {
        padding: 0 5%;
        position: absolute;
        width: 90%;
        background: rgba(0, 0, 100, 0.2);
    }

    .tile-description {
        padding: 0 5%;
        width: 90%;
        position: absolute;
        transform: translate(-5%, 0);
        background: rgba(0, 0, 100, 0.2);
        min-height: 1000%;
    }

    .tile-description p {
        margin: 0.5em 0;
    }

    .tile-title {
        position: relative;
        height: 100%;
    }

    .tile-title h3 {
        margin: 0.5em 0;
    }

    .tile-picture {
        width: 100%;
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
    }

    a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: white;
    }

    a:visited {
        color: white;
    }

    label{
        font-size: 1.5em;
    }
</style>
