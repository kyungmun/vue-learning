<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(favorite)' : '' }} </h2>
    <button @click="toggleDetails">Show Details</button>
    <button @click="toggleFavorite">toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneName }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props : {
    id : {
      type : String,
      required : true
    },
    name : {
      type : String,
      required : true
    }, 
    phoneName : {
      type : String,
      required : true
    },
    email : {
      type : String,
      required : true
    },
    isFavorite : {
      type : Boolean,
      required : false
    }
  },
  data() {
    return {
      detailsAreVisible: false,

    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    }
  }
};
</script>