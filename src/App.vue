<template>
  <v-app>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
    >
      <v-list subheader>
      <v-list-item
          v-for="link of links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
        <v-app-bar
          color="primary"
          dense
          dark
          max-height="50px"
        >
          <v-app-bar-nav-icon
            class="hidden-md-and-up"
          @click="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>
            <router-link to="/" tag="span" class="pointer">AD project</router-link>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn text
                 class="hidden-sm-and-down"
          v-for="link in links"
                 :key="link.title"
                 :to="link.url"
          >{{link.title}}
            <v-icon right>{{link.icon}}</v-icon>
          </v-btn>
        </v-app-bar>
    <v-content>
        <router-view>
        </router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {

  data () {
    return {
      drawer: false,
      links: [
        { title: 'Login', icon: 'mdi-lock', url: '/login' },
        { title: 'Registration', icon: 'mdi-face', url: '/registration' },
        { title: 'Orders', icon: 'mdi-bookmark border', url: '/orders' },
        { title: 'New ad', icon: 'mdi-note add', url: '/new' },
        { title: 'My Ads', icon: 'mdi-filter-variant', url: '/list' }
      ]
    }
  }
}
</script>
<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
