
<template>
  <div class = "cent">
    <h1>Contact</h1>
    <div>
      <b-overlay :show="showOverlay" rounded="sm"> 
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-name" label="Your Name:" label-for="input-2">
          <b-form-input
            id="name"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-adress" label="Your Adress" label-for="Adress">
          <b-form-input
            id="adress"
            v-model="form.adress"
            placeholder="Enter adress"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-email"
          label="Email address:"
          label-for="email"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="e-mail"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <div>
          

          <b-button
            type="submit"
            variant="primary"
            class="mt-3"
            @click="show = !show"
            >submit</b-button
          >
        </div>

        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      </b-overlay>
    </div>
  </div>
</template>

<script>

const axios = require("axios").default;

export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        adress: "",
      },
      showOverlay: false,
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      this.showOverlay = true, 
      event.preventDefault();
      console.log(this.form);
      console.log(this.form.email);
      console.log(this.form.name);
      console.log(this.form.adress);

      await axios.post("http://localhost:3000/users", {
        name: this.form.name,
        adress: this.form.adress,
        email: this.form.email,
      });
      this.showOverlay= false;
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";

      this.form.adress = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
.cent {
  text-align:center;
}

</style>
