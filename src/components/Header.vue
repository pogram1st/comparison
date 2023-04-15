<template>
  <header class="header">
    <div class="left-block">
      <b class="catalog">Каталог</b>
    </div>
    <div class="right-block">
      <b class="comparison">Сравнение</b>
      <div class="login-block">
        <b class="personal_account">Личный кабинет</b>
        <img class="user-svg" src="/img/icons/user.svg" alt="Личный кабинет" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 101px;
  min-width: 400px;
  border-bottom: 1px solid #a6a5a9;
  padding: 0 166px;
  margin-bottom: 60px;

  .left-block {
    b {
      color: var(--gray100);
      font-family: "Roboto-Black", sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.05em;
    }

    .catalog {
      color: var(--blue);
    }
  }

  .right-block {
    display: flex;

    .comparison {
      margin-right: 48px;
      cursor: pointer;
    }

    .login-block {
      display: flex;

      .personal_account {
        cursor: pointer;
      }

      .user-svg {
        margin-left: 19px;
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 1250px) {
  .header {
    padding: 0 40px;
  }
}
@media (max-width: 460px) {
  .personal_account {
    display: none;
  }
}
</style>
