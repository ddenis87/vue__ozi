<template>
  <div class="file-act">
    <div class="act-head">
      <div class="act-head-text"></div>
      <div class="act-head-text">
        <h3 class="act-head-text__title">Утверждаю</h3>
        <p class="act-head-text__text">Управляющий Отделением<br> ОПФР по Амурской области</p>
        <p class="act-head-text__text">____________Е.В.Гончарова</p>
        <p class="act-head-text__text">"____"____________ 2020 г.</p>
      </div>
    </div>
    <div class="act-name">
      <h3 class="act-name__title">Акт № 4</h3>
      <p class="act-name__description">Установки и ввода в эксплуатацию криптосредства</p>
    </div>
    <div class="act-date">
      <div class="act-date__city">г. Благовещенск</div>
      <div class="act-date__date">"____"____________ 2020 г.</div>
    </div>
    <div class="act-body">
      <p class="act-body__text">Мы, нижеподписавшиеся, ведущий специалист-эксперт Сазонов А.О. и заместитель начальника отдела по защите информации
        Донцов Д.А., составили настоящий Акт о том, что на основании заявки № 4004 от 05.11.2020 г.,</p>
      <p class="act-body__text">в помещении: № ________</p>
      <p class="act-body__text">на компьютере с инв.№ ___________________</p>
      <p class="act-body__text">пользователя: Сазонов А.О.</p>

      <p class="act-body__text">Проведены следующие работы:</p>
      <ol class="list">
        <li class="list__item">Установлено средство крипторгафической защиты информации ViPNet Client 4.3. для обеспечения работы со средствами
          электронной подписи и шифрования.
        </li>
        <li class="list__item">Настройка ПО по безопасности применения криптосредства в соответствии с правилами пользования и правами пользователя.</li>
        <li class="list__item">Переданы пароль и документация в электронном виде.</li>
        <li class="list__item">Проведена проверка целостности программного обеспечения и работоспособности криптосредства 
          (и проверка получения обновлений из УЦ ОПФР). Установленное ПО функционирует в штатном режиме.</li>
        <li class="list__item">Проведено обучение пользователя по правилам пользования, соблюдению требований безопасности при работе с
          криптосредствами и выполнению правил обращения с ключевыми носителями, а также об ответственности за их нарушение.</li>
        <li class="list__item">Помещение № ________ и его оборудование, размещение ЭВМ с установленным программным криптосредством,
          хранилища ключевых документов, охрана помещения и подготовленность пользователя к самостоятельной эксплуатации СКЗИ соответствуют 
          требованиям «Инструкции по организации криптографической защиты информации в ОПФР по Амурской области».</li>
        <li class="list__item">Акт подготовлен в 1 экземпляре, хранится в ОЗИ ОПФР.</li>
        <li class="list__item">Документы и программный комплекс VipNet Client 4.3, приняты. Замечаний нет.</li>
        <li class="list__item">Акт подготовлен в 1 экземпляре, хранится в ОЗИ ОПФР.</li>
        <li class="list__item">Документы и программный комплекс VipNet Client 4.3, приняты. Замечаний нет.</li>
        <li class="list__item">Акт подготовлен в 1 экземпляре, хранится в ОЗИ ОПФР.</li>
        <li class="list__item">Документы и программный комплекс VipNet Client 4.3, приняты. Замечаний нет.</li>
        <li class="list__item">Акт подготовлен в 1 экземпляре, хранится в ОЗИ ОПФР.</li>
        <li class="list__item">Документы и программный комплекс VipNet Client 4.3, приняты. Замечаний нет.</li>
        <li class="list__item">Акт подготовлен в 1 экземпляре, хранится в ОЗИ ОПФР.</li>
        <li class="list__item">Документы и программный комплекс VipNet Client 4.3, приняты. Замечаний нет.</li>
      </ol>
    </div>
    <div class="act-footer">
      <div class="act-footer__post">
        <p class="post__text">Ведущий специалист-эксперт</p>
        <p class="post__text">Заместитель начальника отдела</p>
      </div>
      <div class="act-footer__sign">
        <p class="post__text">___________________</p>
        <p class="post__text">___________________</p>
      </div>
      <div class="act-footer__fio">
        <p class="post__text">Сазонов А.О.</p>
        <p class="post__text">Донцов Д.А.</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.file-act {
  width: 210mm;
  height: auto;
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;
  .act-head {
    display: flex;
    justify-content: space-between;
    &-text {
      width: 35%;
      &__title {
        margin-bottom: 20px;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
      }
      &__text {
        margin: 0px;
        line-height: 1.3em;
      }
    }
  }
  .act-name {
    margin-top: 40px;
    text-align: center;
    &__title {
      margin-bottom: 0px;
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
    }
    &__description {
      margin: 0px;
      line-height: 1.3em;
      text-transform: uppercase;
    }
  }
  .act-date {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .act-footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>

<style lang="scss">
  .app {
    grid-template-areas: "body";
    grid-template-columns: 100%;
    grid-template-rows: auto;
    &__head { display: none; }
    &__navigation { display: none; }
    &__footer { display: none; }
    &__body {
      min-height: auto;
      height: auto;
      border: 1px solid green;
    }
  }
</style>