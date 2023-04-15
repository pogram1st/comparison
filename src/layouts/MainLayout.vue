<template>
  <div class="wrapper">
    <Header class="header" />
    <div class="wrapper-content">
      <div class="content">
        <comparison />
      </div>
    </div>
  </div>
</template>

<script>
import Comparison from "@/components/Comparison";
import Header from "@/components/Header";

export default {
  name: "MainLayout",
  components: { Comparison, Header },
};
</script>

<style lang="scss" scoped>
.wrapper {
  &-content {
    margin: 0 auto;
    width: 100%;
    min-width: 400px;

    .content {
    }
  }
}
</style>
