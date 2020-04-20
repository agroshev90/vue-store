<template>
  <v-dialog width="500px" v-model="modal">
    <template v-slot:activator="{ on }">
      <v-btn
        class="warning"
        dark
        v-on="on"
      >
        Редактировать
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h1 class="text--primary">Редактировать</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                label="Название"
                name="Название"
                type="text"
                v-model="editedTitle"
              />
              <v-textarea
                label="Описание"
                name="Описание"
                type="text"
                multi-line
                v-model="editeddescription"
              />
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn class="ma-2" text @click="onCancel">Отмена</v-btn>
                <v-btn text class="success ma-2" @click="onSave">Сохранить</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['ad'],
  data () {
    return {
      modal: false,
      editedTitle: this.ad.title,
      editeddescription: this.ad.description
    }
  },
  methods: {
    onCancel () {
      this.editeddescription = this.ad.description
      this.editedTitle = this.ad.title
      this.modal = false
    },
    onSave () {
      if (this.editeddescription !== '' && this.editedTitle !== '') {
        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editeddescription,
          id: this.ad.id
        })
        this.modal = false
      }
    }
  }
}
</script>
