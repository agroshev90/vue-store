<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel class="d-inline-block mx-auto">
            <v-carousel-item
              v-for="(item) in promoAds "
              :key="item.id"
              :src="item.imageSrc"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ><div class="carusel-link">
              <v-btn class="error" :to="'/ad/' + item.id">{{item.title}}</v-btn>
            </div></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="ad of ads"
          :key="ad.id"
        >
          <v-card>
          <v-img
            :src="ad.imageSrc"
            height="200px"
          ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ad.title}}</h3>
                <div>{{ad.description}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="mr-2" text :to="'/ad/' + ad.id">Просмотреть</v-btn>
              <app-buy-modal :ad="ad"></app-buy-modal>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-center pt-5">
          <v-progress-circular
            indeterminate
            center
            :size="100"
            :width="4"
            color="primary"
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    loading () {
      return this.$store.getters.loading
    },
    ads () {
      return this.$store.getters.ads
    }
  }
}
</script>

<style scoped>
  .carusel-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
</style>
