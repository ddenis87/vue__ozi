<template>
  <div class="app-head">
    <div class="app-head__logo">
      <img class="logo__img" src="@/assets/images/head/logo.jpg">
    </div>
    <div class="app-head__title">
      <span class="app-head__title_title">ОПФР по Амурской области - Отдел по защите информации</span>
      <span class="app-head__title_date">{{ dT }}</span>
    </div>
    <div class="app-head__profile">
      <img class="profile__img" src="@/assets/images/head/profile.png" />
      <div class="profile__info">
        <div class="profile__info-item">
          <span class="profile__info-item_title">id:</span>
          <span class="profile__info-item_text">{{ userProfile.userId }}</span>
        </div>
        <div class="profile__info-item">
          <span class="profile__info-item_title">ip:</span>
          <span class="profile__info-item_text">{{ userProfile.userIp }}</span>
        </div>
        <div class="profile__info-item">
          <span class="profile__info-item_title">name:</span>
          <span class="profile__info-item_text">{{ userProfile.userFullName }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appHead',
  computed: {
    userProfile() {
      return {
        userId: this.$store.state.userProfile.userId,
        userIp: this.$store.state.userProfile.userIp,
        userFullName: this.$store.state.userProfile.userFullName,
      }
    }
  },
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
  font-size: 14px;

  &__logo {
    width: 60px;
    height: auto;
    .logo__img { width: 100%; }
  }
  &__title {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Open sans';
    color:white;
  }
  &__profile { 
    display: inline-flex;
    align-items: center;
    width: auto;
    .profile__img { 
      width: 40px;
    }
    .profile__info {
      padding-left: 5px;
      font-size: 11.8px;
      font-weight: bold;
      color: black;
      &-item {
        &_title {
          display: inline-block;
          width: 45px;
          text-transform: uppercase;
        }
        &_text {
          color: darkgreen;
        }
      }
    }
  }
}
</style>