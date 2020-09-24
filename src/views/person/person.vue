<template>
  <div class="person">
    <h3 class="person__title">Журналы - Пользователи</h3>
    <div class="person_body">
      <div class="person__body-control">
        <person-control @click="personSearch"></person-control>
      </div>
      <hr class="person__separator"/>
      <div class="person__body-list">
        <person-list :listItem="listItem"></person-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import personControl from '@/components/person/person__control';
import personList from '@/components/person/person__list';

export default {
  name: 'User',  
  components: {
    personControl,
    personList,
  },
  data: function() {
    return {
      listItem: Array,
    }
  },
  methods: {
    personSearch: function(searchString) {
      console.log(searchString);
      let option = {
        function: 'getPerson',
        personFa: searchString
      }
      axios
        .post(pathBackend + 'person.php', null, {params: option})
        .then((response) => {
          this.listItem = response.data; 
          console.log(this.listItem);})
    },
  }
}
</script>

<style lang="scss" scoped>
.person {
  font-family: 'Montserrat';
  &__title {
    margin-bottom: 10px;
    color: darkslategrey;
  }
  &__separator {
    margin: 10px 20px;
  }
}
</style>