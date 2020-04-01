<template>
    <div class="tile"
         v-on:mouseenter="onMouseEnter" v-on:mouseleave="onMouseLeave">
        <a v-bind:href="tileUrl">
            <div class="tile-content" v-bind:class="{transOn:isTrans, transOff:!isTrans}">
                <div class="tile-picture">
                    <img alt="Tile Picture" v-bind:src="tilePictureUrl">
                </div>
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
        name: 'TileTwo',
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
        background: steelblue;
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }

    .tile-content {
        position: absolute;
        width: 100%;
    }

    .tile-description {
        box-sizing: border-box;
        width: 100%;
        position: absolute;
        padding: 0 1em;
    }

    .tile-description p{
        margin: 0.5em 0;
    }

    .tile-title {
        padding: 0 1em;
    }

    .tile-title h3{
        margin: 0.5em 0;
    }

    .tile-picture {
        position: absolute;
        width: inherit;

        height: inherit;
    }

    img {
        width: 100%;
        transform: translate(0, -100%);
    }

    a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: aliceblue
    }

    a:visited {
        color: aliceblue;
    }

    label{
        font-size: 1.5em;
    }
</style>
