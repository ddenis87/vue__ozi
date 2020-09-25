<template>
  <div class="person-card">
    Person Card
  </div>
</template>

<script>
export default {
  name: 'personCard',
  data: function() {
    return {
      personId: decodeURI(window.location.search.slice(window.location.search.indexOf("=") + 1))
    }
  },
  created: function() {
    console.log(this.personId);
  }
}
</script>