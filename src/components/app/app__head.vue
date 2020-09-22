<template>
  <div class="app-head">
    <div class="app-head__logo">
      <img class="logo__img" src="@/assets/images/head/logo.jpg">
    </div>
    <div class="app-head__date-time">
      {{ dT }}
    </div>
    <div class="app-head__profile">
      <img class="profile__img" src="@/assets/images/head/profile.png" />
      <span class="profile__title" >{{ userName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appHead',
  data: function() {
    return {
      dT: '',
    }
  },
  created: function() {
    let pointPoint = ':';
    setInterval(() => {
      let dateNow = new Date();
      let dd = (+dateNow.getDate() < 10) ? '0' + dateNow.getDate() : dateNow.getDate();
      let mm = (+dateNow.getMonth() < 10) ? '0' + (+dateNow.getMonth() + 1) : +dateNow.getMonth() + 1;
      let yyyy = dateNow.getFullYear();
      let hh = dateNow.getHours();
    let mi = (+dateNow.getMinutes() < 10) ? '0' + dateNow.getMinutes() : dateNow.getMinutes();
    this.dT = dd + '.' + mm + '.' + yyyy + ' ' + hh + pointPoint + mi;
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>

.app-head {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-image: linear-gradient(90deg, rgb(54, 96, 146) 55%, white );
  font-family: 'Montserrat';

  &__logo {
    width: 60px;
    height: auto;
    .logo__img { width: 100%; }
  }
  &__date-time {
    color: lightgreen;
  }
  &__profile { 
    display: inline-flex;
    align-items: center;
    width: auto;
    .profile__img { 
      width: 40px;
     }
    .profile__title {
      color: darkgreen;
    }
  }
}
</style>