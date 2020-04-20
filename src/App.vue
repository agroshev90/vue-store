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
        <v-list-item
          v-if="isUserLoggedIn"
          @click="onLogout"
        >
          <v-list-item-content>
            <v-list-item-title>Выйти</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
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
            <router-link to="/" tag="span" class="pointer">Доска объявлений</router-link>
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
          <v-btn
            text
            v-if="isUserLoggedIn"
            @click="onLogout"
           > Выйти
            <v-spacer></v-spacer>
            <v-icon right>mdi-logout</v-icon>
          </v-btn>
        </v-app-bar>
    <v-content>
        <router-view>
        </router-view>
    </v-content>
    <template v-if="error">
      <v-snackbar
        @input="closeError "
        color="error"
        :multi-line="true"
        :timeout="5000 "
        value="true"
      >
        {{ error }}
        <v-btn
          dark
          text
          @click="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>

export default {

  data () {
    return {
      drawer: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          { title: 'Заказы', icon: 'mdi-bookmark border', url: '/orders' },
          { title: 'Новое объявление', icon: 'mdi-note add', url: '/new' },
          { title: 'Мои объявления', icon: 'mdi-filter-variant', url: '/list' }
        ]
      }
      return [
        { title: 'Войти', icon: 'mdi-lock', url: '/login' },
        { title: 'Регистрация', icon: 'mdi-face', url: '/registration' }
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}

</script>
<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
