<template>
  <div>
    <Smartphones
      :visibleItems="visibleItems"
      :items="items"
      @set_items="setItems"
      :onlyDifferences="onlyDifferences"
      :noVisibleItems="noVisibleItems"
      @set_only_differences="setOnlyDifferences"
    />
    <Specifications
      :visibleItems="visibleItems"
      :onlyDifferences="onlyDifferences"
    />
  </div>
</template>
<script>
import Smartphones from "@/components/Smartphones";
import { mapGetters } from "vuex";
import Specifications from "@/components/Specifications";

export default {
  name: "Comparison",
  components: { Specifications, Smartphones },
  data() {
    return {
      items: [
        {
          id: 1,
          manufacturer: "Apple",
          price: 81990,
          NFC: false,
          eSim: true,
          wireless_charging: true,
          release_year: 2020,
          diagonal: 6.1,
          country_manufacturer: "Китай",
          memory_capacity: 128,
          screen_refresh_rate: 60,
          imgUrl: "img/smartphones/iPhone12.svg",
          full_name: "Apple iPhone 12",
        },
        {
          id: 2,
          manufacturer: "Xiaomi",
          price: 27490,
          NFC: true,
          eSim: true,
          wireless_charging: false,
          release_year: 2021,
          diagonal: 6.55,
          country_manufacturer: "Китай",
          memory_capacity: 128,
          screen_refresh_rate: 90,
          imgUrl: "img/smartphones/XiaomiMi11Lite.svg",
          full_name: "Xiaomi Mi 11 Lite",
        },
        {
          id: 3,
          manufacturer: "Samsung",
          price: 32890,
          NFC: true,
          eSim: false,
          wireless_charging: true,
          release_year: 2021,
          diagonal: 6.7,
          country_manufacturer: "Вьетнам",
          memory_capacity: 128,
          screen_refresh_rate: 90,
          imgUrl: "img/smartphones/SamsungGalaxyA72.svg",
          full_name: "Samsung Galaxy A72",
        },
        {
          id: 4,
          manufacturer: "Apple",
          price: 35590,
          NFC: true,
          eSim: false,
          wireless_charging: true,
          release_year: 2018,
          diagonal: 5.9,
          country_manufacturer: "Китай",
          memory_capacity: 128,
          screen_refresh_rate: 90,
          imgUrl: "img/smartphones/iPhoneXr.svg",
          full_name: "iPhone XR",
        },
        {
          id: 5,
          manufacturer: "Realme",
          price: 32890,
          NFC: true,
          eSim: true,
          wireless_charging: true,
          release_year: 2021,
          diagonal: 6.3,
          country_manufacturer: "Китай",
          memory_capacity: 128,
          screen_refresh_rate: 90,
          imgUrl: "img/smartphones/Realme8Pro.svg",
          full_name: "Realme 8 Pro",
        },
        {
          id: 6,
          manufacturer: "Samsung",
          price: 32890,
          NFC: true,
          eSim: false,
          wireless_charging: true,
          release_year: 2021,
          diagonal: 6.2,
          country_manufacturer: "Вьетнам",
          memory_capacity: 256,
          screen_refresh_rate: 120,
          imgUrl: "img/smartphones/SamsungS21.svg",
          full_name: "Samsung S21",
        },
      ],
      onlyDifferences: false,
    };
  },
  methods: {
    setItems(clickItem, item) {
      this.items = this.items.map((obj) => {
        if (obj.id === clickItem.id) {
          return item;
        }
        if (obj.id === item.id) {
          return clickItem;
        }
        return obj;
      });
    },
    setOnlyDifferences(val) {
      this.onlyDifferences = val;
    },
  },
  computed: {
    ...mapGetters({ activePagination: "activePagination" }),
    visibleItems() {
      return this.items.slice(0, this.activePagination);
    },
    noVisibleItems() {
      return this.items.slice(this.activePagination);
    },
  },
};
</script>
<style lang="scss" scoped></style>
