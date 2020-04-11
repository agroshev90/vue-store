<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Разместить обьявление</h1>
        <v-form
          ref="form"
          v-model="valid"
          validation
        >
          <v-text-field
            label="Название обьявления"
            name="title"
            prepend-icon="mdi-account"
            type="text"
            v-model="title"
            required
            :rules="[v => !!v || 'Не заполнено название']"
          />

          <v-textarea
            label="Описание"
            name="description"
            prepend-icon="mdi-lock"
            type="text"
            class="mb-3"
            v-model="description"
            :rules="[v => !!v || 'Не заполнено описание']"
          />
        </v-form>
        <v-layout row>
          <v-flex xs12>
            <v-btn
              class="ma-2 white--text"
              color="blue-grey"
            >Загрузить фотографию
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="">
          </v-flex>
        </v-layout>
        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-switch
              v-model="promo"
              label="Добавить на главую страницу"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              class="success"
              @click="createAd"
            >Разместить объявление
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: 'https://cdn-images-1.medium.com/max/850/1*nq9cdMxtdhQ0ZGL8OuSCUQ.jpeg'
        }

        this.$store.dispatch('createAd', ad)
      }
    }
  }
}
</script>

<style scoped>

</style>
