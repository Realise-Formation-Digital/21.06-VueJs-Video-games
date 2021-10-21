<template>
  <div>
    <h1>Contact</h1>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-name" label="Your Name:" label-for="input-2">
          <b-form-input
            id="name"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        

        <div>
          <label for="example-datepicker">Birth Date</label>
          <b-form-datepicker
            id="birthDate"
            v-model="value"
            class="mb-2"
          ></b-form-datepicker>
        </div>

        <b-form-group
          id="input-adress"
          label="Your Adress"
          label-for="input-2"
        >
          <b-form-input
            id="adress"
            v-model="form.name"
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

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
