<template>
  <div>
    <b-card
      :title="title"
      :img-src="thumbnail"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 30rem"
      class="mb-2"
    >
      <b-card-text>
        {{description}}<br/><br/>
        <p><b>Genre</b> : {{genre}}</p>
        <p><b>Développeur</b> : {{developer}}</p>
        <p><b>Publisher</b> : {{publisher}}</p>
        <p><b>Date de sortie</b> : {{date}}</p>
        <p><b>Platforme(s)</b> : {{platform}}</p>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "cardDetail",
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
    developer: {
      type: String,
      default: "",
      required: true,
    },
    publisher: {
      type: String,
      default: "",
      required: true,
    },
    date: {
      type: String,
      default: "",
      required: true,
    },
    platform: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<style>
</style>