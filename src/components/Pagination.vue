<template>
  <div class="pagination-block">
    <p class="products">Отобразить товары:</p>
    <div class="paginate">
      <p
        v-for="item in paginate"
        :key="item"
        :class="{ active: item === activePagination }"
        class="paginate-number"
        @click.stop="setActivePagination(item)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Pagination",
  data() {
    return {
      paginate: [2, 3, 4, 5, 6],
    };
  },
  methods: {
    ...mapActions({ setActivePagination: "setActivePagination" }),
  },
  computed: {
    ...mapGetters({ activePagination: "activePagination" }),
  },
};
</script>

<style lang="scss" scoped>
p {
  color: var(--blue);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 60px;
  letter-spacing: 0.02em;
}

.pagination-block {
  display: flex;

  .products {
    margin-right: 7px;
  }

  .paginate {
    display: flex;

    &-number {
      cursor: pointer;
      margin-right: 3px;

      &.active {
        text-decoration: underline;
        text-underline-offset: 3px;
        cursor: default;
      }
    }
  }
}
</style>
