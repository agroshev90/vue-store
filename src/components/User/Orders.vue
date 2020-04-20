<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 class="text-md-center pt-5" v-if="loading">
        <v-progress-circular
          indeterminate
          :size="100"
          :width="4"
          color="primary"
        ></v-progress-circular>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !== 0">
        <h1 class="text--secondary mb-3">Список заказов</h1>
        <v-list
          subheader
          two-line
          flat
        >
          <v-list-item-group
            multiple
            v-for="order of orders"
            :key="order.id"
          >
            <v-list-item>
                <v-list-item-action>
                  <v-checkbox
                    color="success"
                    :input-value="order.done"
                    @change="markDone(order)"
                  ></v-checkbox
                   >
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{order.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                </v-list-item-content>
              <v-list-item-action>
                <v-btn class="primary"
                :to="'/ad/' + order.adId"
                >Открыть</v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
      <v-flex xs12 class="text-md-center" v-else>
        <h1 class="text-md-center">У вас нет покупок</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    orders () {
      return this.$store.getters.orders
    }
  },
  methods: {
    markDone (order) {
      this.$store.dispatch('markOrderDone', order.id)
        .then(() => {
          order.done = true
        })
        .catch(() => {})
    }
  },
  created () {
    this.$store.dispatch('fetchOrders')
  }
}
</script>

<style scoped>

</style>
