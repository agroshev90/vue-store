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
            type="text"
            v-model="title"
            required
            :rules="[v => !!v || 'Не заполнено название']"
          />

          <v-textarea
            label="Описание"
            name="description"
            type="text"
            class="mb-3"
            v-model="description"
            :rules="[v => !!v || 'Не заполнено описание']"
          />
        </v-form>
        <v-layout row class="layoutmargin">
          <v-flex xs12>
            <v-btn
              class="mb-6 white--text"
              color="blue-grey"
              @click="triggerUpload"
            >Загрузить фотографию
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
            <input
              ref="fileInput"
              type="file"
              style="display: none"
              accept="image/*"
              @change="onFileChange"
            >
          </v-flex>
        </v-layout>
        <v-layout row class="layoutmargin">
          <v-flex xs12>
            <img :src="imageSrc" height="100" v-if="imageSrc">
          </v-flex>
        </v-layout>
        <v-layout row class="mb-3 layoutmargin">
          <v-flex xs12>
            <v-switch
              v-model="promo"
              label="Добавить на главую страницу"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row class="layoutmargin">
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              :loading="loading"
              :disabled="!valid || !image || loading"
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
      valid: false,
      image: null,
      imageSrc: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          image: this.image
        }

        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    },
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    }
  }
}
</script>

<style scoped>
 .layoutmargin {
   margin: 0 !important;
 }
</style>
