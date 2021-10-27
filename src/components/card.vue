<template>
  <div @click="cardClick()">
    <b-card no-body class="overflow-hidden" style="max-width: 1400px">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="thumbnail"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="title">
            <b-card-text>
              {{description}} <br/>
              <b>Genre :</b> {{genre}}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
    description: {
      type: String,
      default: "",
      required: true,
    },
    thumbnail: {
      type: String,
      default: "",
      required: true,
    },
    genre: {
      type: String,
      default: "",
      required: true,
    },
    id : {
      type : Number,
      default : 0,
      required : true
    }
  },
  methods : {
    //Emits this child id to parent for more detailed display
    cardClick() {
      this.$emit("clicked", this.id);
    }
  }
};
</script>

<style>
</style>