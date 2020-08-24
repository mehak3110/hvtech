<template>
    <nav>
        <v-app-bar app clipped-left color="#000">
            <router-link to="/">
                <img class="ml-5 mr-2 mt-2" :src="require('../assets/hv.png')" height="45"/>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text class="white--text links" to="/">Home</v-btn>
                <v-btn text class="white--text links" to="/ourStartups">Our Startups</v-btn>
                <v-btn text class="white--text links" to="/ourGames">Our Games</v-btn>
                <v-btn text class="white--text links">Contact Us</v-btn>
            </v-toolbar-items>
            <!-- <router-link to="/HvTech">
                <img class="ml-2 hidden-sm-and-down" :src="require('../assets/hv.png')" height="40"/>
            </router-link> -->
            <v-app-bar-nav-icon class="hidden-md-and-up white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        
        <v-navigation-drawer v-model="drawer" app :clipped="$vuetify.breakpoint.mdAndUp" disable-resize-watcher color="#000">
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-content>
                        <v-list-item-title class="white--text ml-5 links" >{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>

export default {
    data () {
        return {
            drawer: false,
            links: [
                { text:'Home', route:'/'},
                { text:'Our Startups', route:'/ourStartups'},
                { text:'Our Games', route:'/ourGames'},
                { text:'Contact Us', route:''},
            ],
        }
    },
}
</script>

<style lang="scss" scoped>

.links {
    text-decoration: none;
}

.animation {
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 0;
    background: #34bbf8;
    width: 100px;
    border-radius: 8px;
}

</style>