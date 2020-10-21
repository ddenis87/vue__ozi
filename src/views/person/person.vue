<template>
  <div class="person">
    <h3 class="person__title">Журналы - Пользователи</h3>
    <div class="person__body">
      <div class="person__body-control">
        <person-control @person-find="personFind"></person-control>
      </div>
      <hr class="person__separator"/>
      <div class="person__body-list">
        <person-list :list-item="listItem"
                     @click="intoPersonCard"></person-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import personControl from '@/components/person/person__control';
import personList from '@/components/person/person__list';

export default {
  name: 'person',  
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
    personFind: function(searchLine) {
      // console.log(searchLine);
      let option = {
        function: 'getUserList',
        personFa: searchLine
      }
      axios
        .post(pathBackend + 'person.php', null, {params: option})
        .then((response) => {
          this.listItem = response.data; 
        })
        .catch(() => {
          this.listItem = [
            {ID: '2', VFIO: 'Константин Константинович Константинопольский', VPOST: 'Ведущий специалист-эксперт', VDISTRICT: 'КС на правах отдела в Селемджинском районе'},
            {ID: '1238', VFIO: 'Иванов Иван Иванович', VPOST: 'Специалист-эксперт', VDISTRICT: 'УПФР в г.Благовещенске'},
            // {VFIO: '', VPOST: '', VDISTRICT: ''},
          ]
        })
    },
    intoPersonCard: function(personId) {
      this.$router.push('/person-card?personId=' + personId);
    }
  }
}
</script>

<style lang="scss" scoped>
.person {
  font-family: 'Montserrat';
  &__body {
    padding-left: 10px;
  }
  &__title {
    margin-bottom: 10px;
    color: darkslategrey;
  }
  &__separator {
    margin: 10px 0px;
  }
}
</style>