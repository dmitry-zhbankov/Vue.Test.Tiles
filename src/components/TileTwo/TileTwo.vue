<template>
    <div class="tile"
         v-on:mouseenter="onMouseEnter" v-on:mouseleave="onMouseLeave">
        <a v-bind:href="tileUrl">
            <div class="tile-content" v-bind:class="{transOn:isTrans, transOff:!isTrans}">
                <div class="tile-picture">
                    <img v-bind:src="tilePictureUrl">
                </div>
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
    }

    .tile-content {
        position: absolute;
        width: 100%;
    }

    .tile-description {
        padding: 0 5%;
        width: 90%;
        position: absolute;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        transform: translate(-5%, 0);
    }

    .tile-title {
        position: relative;
    }

    .tile-picture {
        position: absolute;
        width: inherit;
        height: inherit;
        transform: translate(0, -100%);
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
    }
</style>
