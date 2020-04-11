<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="6"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Регистрация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="email"
                v-model="email"
                :rules="emailRules"
              />

              <v-text-field
                label="Password"
                name="password"
                :counter="6"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
                :rules="passwordRules"
              />

              <v-text-field
                label="Confirm password"
                name="confirm password"
                :counter="6"
                prepend-icon="mdi-lock"
                type="password"
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              @click="onSubmit"
              :disabled="! valid"
            >Зарегистрироваться</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      valid: false,
      emailRules: [
        v => !!v || 'Введите E-mail',
        v => /.+@.+\..+/.test(v) || 'E-mail должен быть корректным'
      ],
      passwordRules: [
        v => !!v || 'Введите пароль',
        v => (v && v.length >= 6) || 'Пароль должен быть больше 6 символов'
      ],
      confirmPasswordRules: [
        v => !!v || 'Введите пароль еще раз',
        v => v === this.password || 'Пароли не совпадают'
      ]
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
      }
    }
  }
}
</script>

<style>
</style>
