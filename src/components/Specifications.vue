<template>
  <div class="characteristics">
    <ul
      v-for="characteristic in characteristics"
      :key="characteristic.key"
      class="characteristic"
    >
      <li class="characteristic-name">
        <p>{{ characteristic.name }}</p>
      </li>
      <li
        class="characteristic-info"
        v-for="item in visibleItems"
        :key="item.id"
      >
        <div
          class="img-block"
          v-if="
            characteristic.key === 'NFC' ||
            characteristic.key === 'wireless_charging' ||
            characteristic.key === 'eSim'
          "
        >
          <img
            v-if="item[characteristic.key] === true"
            src="img/icons/comparison.svg"
          />
          <img v-else src="img/icons/dontComparison.svg" />
        </div>
        <p v-else>{{ item[characteristic.key] }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Specifications",
  props: {
    visibleItems: {
      type: Array,
      default: () => [],
    },
    onlyDifferences: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    onlyDifferences() {
      if (this.onlyDifferences === true) {
        this.differences();
      } else {
        this.characteristics = this.defaultCharacteristics;
      }
    },
    visibleItems() {
      if (this.onlyDifferences === true) {
        this.differences();
      } else {
        this.characteristics = this.defaultCharacteristics;
      }
    },
  },
  computed: {
    onlyDifferencesItems() {
      return 2;
    },
  },
  data() {
    return {
      defaultCharacteristics: [
        { key: "manufacturer", name: "Производитель" },
        { key: "release_year", name: "Год релиза" },
        { key: "diagonal", name: "Диагональ экрана (дюйм)" },
        { key: "country_manufacturer", name: "Страна-производитель" },
        { key: "memory_capacity", name: "Объем памяти" },
        { key: "screen_refresh_rate", name: "Частота обновления экрана" },
        { key: "NFC", name: "NFC" },
        { key: "eSim", name: "Поддержка eSIM" },
        { key: "wireless_charging", name: "Поддержка беспроводной зарядки" },
        { key: "price", name: "Стоимость" },
      ],
      characteristics: [
        { key: "manufacturer", name: "Производитель" },
        { key: "release_year", name: "Год релиза" },
        { key: "diagonal", name: "Диагональ экрана (дюйм)" },
        { key: "country_manufacturer", name: "Страна-производитель" },
        { key: "memory_capacity", name: "Объем памяти" },
        { key: "screen_refresh_rate", name: "Частота обновления экрана" },
        { key: "NFC", name: "NFC" },
        { key: "eSim", name: "Поддержка eSIM" },
        { key: "wireless_charging", name: "Поддержка беспроводной зарядки" },
        { key: "price", name: "Стоимость" },
      ],
    };
  },
  methods: {
    differences() {
      let NFC = false;
      let manufacturer = false;
      let price = false;
      let eSim = false;
      let wireless_charging = false;
      let release_year = false;
      let diagonal = false;
      let country_manufacturer = false;
      let memory_capacity = false;
      let screen_refresh_rate = false;
      for (let i = 0; i < this.visibleItems.length - 1; i++) {
        if (this.visibleItems[i].NFC !== this.visibleItems[i + 1].NFC && !NFC) {
          NFC = true;
        }
        if (
          this.visibleItems[i].manufacturer !==
            this.visibleItems[i + 1].manufacturer &&
          !manufacturer
        ) {
          manufacturer = true;
        }
        if (
          this.visibleItems[i].price !== this.visibleItems[i + 1].price &&
          !price
        ) {
          price = true;
        }
        if (
          this.visibleItems[i].eSim !== this.visibleItems[i + 1].eSim &&
          !eSim
        ) {
          eSim = true;
        }
        if (
          this.visibleItems[i].wireless_charging !==
            this.visibleItems[i + 1].wireless_charging &&
          !wireless_charging
        ) {
          wireless_charging = true;
        }
        if (
          this.visibleItems[i].release_year !==
            this.visibleItems[i + 1].release_year &&
          !release_year
        ) {
          release_year = true;
        }
        if (
          this.visibleItems[i].diagonal !== this.visibleItems[i + 1].diagonal &&
          !diagonal
        ) {
          diagonal = true;
        }
        if (
          this.visibleItems[i].country_manufacturer !==
            this.visibleItems[i + 1].country_manufacturer &&
          !country_manufacturer
        ) {
          country_manufacturer = true;
        }
        if (
          this.visibleItems[i].memory_capacity !==
            this.visibleItems[i + 1].memory_capacity &&
          !memory_capacity
        ) {
          memory_capacity = true;
        }
        if (
          this.visibleItems[i].screen_refresh_rate !==
            this.visibleItems[i + 1].screen_refresh_rate &&
          !screen_refresh_rate
        ) {
          screen_refresh_rate = true;
        }
      }
      this.characteristics = this.characteristics.filter((obj) => {
        if (obj.key === "NFC" && NFC) {
          return true;
        }
        if (obj.key === "manufacturer" && manufacturer) {
          return true;
        }
        if (obj.key === "price" && price) {
          return true;
        }
        if (obj.key === "eSim" && eSim) {
          return true;
        }
        if (obj.key === "wireless_charging" && wireless_charging) {
          return true;
        }
        if (obj.key === "release_year" && release_year) {
          return true;
        }
        if (obj.key === "diagonal" && diagonal) {
          return true;
        }
        if (obj.key === "country_manufacturer" && country_manufacturer) {
          return true;
        }
        if (obj.key === "memory_capacity" && memory_capacity) {
          return true;
        }
        if (obj.key === "screen_refresh_rate" && screen_refresh_rate) {
          return true;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.characteristics {
  margin-top: 77px;
  background-color: #f4f9fc;
  padding: 0 166px 90px 166px;
  overflow-x: auto;
  width: 100%;
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--gray200);
  }

  .characteristic {
    padding: 33px 0;
    display: flex;
    width: 100%;
    justify-content: space-between;

    &:first-child {
      border-top: 1px solid #cdcfd2;
    }
    border-bottom: 1px solid #cdcfd2;

    &-name {
      margin-right: 50px;

      p {
        width: 205px;
        font-family: "Roboto-Medium", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        text-transform: uppercase;
        color: #a4a9b9;
      }
    }

    &-info {
      p {
        width: 205px;
        font-family: "Roboto-Medium", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: var(--black);
        display: flex;
      }

      .img-block {
        width: 205px;
      }
    }
  }
}
@media (max-width: 1250px) {
  .characteristics {
    padding: 0 40px;
  }
}
</style>
