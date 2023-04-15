<template>
  <div class="container-smartphones">
    <div class="head">
      <h1>Смартфоны</h1>
      <pagination />
    </div>
    <div class="smartphones-block">
      <div class="checkbox-block">
        <e-checkbox
          background="#0D5ADC"
          :checked="onlyDifferences"
          @click="set_only_differences(!onlyDifferences)"
          name="smartphones"
          size="xl"
          id="smartphones"
        />
        <label for="smartphones" @click="set_only_differences(!onlyDifferences)"
          >Показать различия</label
        >
      </div>
      <div class="smartphones">
        <div
          v-for="item in visibleItems"
          :key="item.id"
          class="smartphone-block"
        >
          <smartphone
            @set_items="setItems"
            :item="item"
            :noVisibleItems="noVisibleItems"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import Smartphone from "@/components/Smartphone";
import ECheckbox from "@/components/Checkbox";

export default {
  name: "Smartphones",
  components: { ECheckbox, Smartphone, Pagination },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    visibleItems: {
      type: Array,
      default: () => [],
      required: true,
    },
    onlyDifferences: {
      type: Boolean,
      default: false,
    },
    noVisibleItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    setItems(clickItem, item) {
      this.$emit("set_items", clickItem, item);
    },
    set_only_differences(val) {
      console.log(val);
      this.$emit("set_only_differences", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-smartphones {
  padding: 0 166px;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.smartphones-block {
  display: flex;
  align-items: flex-end;
  .checkbox-block {
    width: 255px;
    display: flex;
    margin-right: 63px;
    input {
    }
    label {
      white-space: nowrap;
      cursor: pointer;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      letter-spacing: 0.02em;
      color: var(--blue);
      margin-left: 14px;
    }
  }
  .smartphones {
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .smartphone-block {
      display: flex;
      .arrow-modal {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:active {
          transform: scale(0.9);
        }
      }
      .smartphone {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        b {
          margin-top: 8px;
        }
      }
    }
  }
}
@media (max-width: 1250px) {
  .container-smartphones {
    padding: 0 40px;
  }
  .smartphones-block {
    display: flex;
    flex-wrap: wrap;
  }
}
@media (max-width: 521px) {
  .head {
    display: flex;
    flex-direction: column;
  }
}
</style>
