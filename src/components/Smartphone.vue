<template>
  <div class="block">
    <div class="smartphone">
      <img
        height="120px"
        :src="item.imgUrl ?? ''"
        :alt="item?.full_name ?? ''"
      />
      <b>{{ item?.full_name }}</b>
    </div>
    <div class="modal-block">
      <img
        v-if="noVisibleItems.length"
        @click="hiddenModal = false"
        class="arrow-modal"
        src="img/icons/arrow.svg"
        alt="toggle modal"
      />
      <replacement-modal
        @set_items="setItems"
        v-if="!hiddenModal && noVisibleItems.length"
        :clickItem="item"
        :hiddenModal="hiddenModal"
        :noVisibleItems="noVisibleItems"
        @hide_modal="hideModal"
      />
    </div>
  </div>
</template>

<script>
import ReplacementModal from "@/components/ReplacementModal";
export default {
  name: "Smartphone",
  components: { ReplacementModal },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    noVisibleItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      hiddenModal: true,
    };
  },
  methods: {
    hideModal() {
      this.hiddenModal = true;
    },
    setItems(clickItem, item) {
      this.$emit("set_items", clickItem, item);
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  margin-top: 20px;
  width: 200px;
  min-width: 200px;
  display: flex;
  position: relative;
}
.modal-block {
  display: flex;
  align-items: center;
}
.smartphone {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  b {
    margin-top: 8px;
  }
}
.arrow-modal {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.9);
  }
}
</style>
