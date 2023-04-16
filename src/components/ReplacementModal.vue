<template>
  <div class="modal" :class="{ hidden: hiddenModal }">
    <div class="modal-content">
      <input
        v-model="search_str"
        class="input"
        type="text"
        placeholder="Поиск"
      />
      <ul class="menu">
        <b class="empty" v-if="!dontVisibleItems.length">Ничего не найдено</b>
        <li
          @click="setItems(clickItem, item)"
          v-for="item in dontVisibleItems"
          :key="item.id"
          class="replace-item"
        >
          <img class="arrows" src="img/icons/twoArrows.svg" />
          <img
            class="phone"
            height="50px"
            :src="item.imgUrl"
            :alt="item.full_name"
          />
          <p class="name">{{ item.full_name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReplacementModal",
  props: {
    hiddenModal: {
      type: Boolean,
      default: true,
    },
    noVisibleItems: {
      type: Array,
      default: () => [],
    },
    clickItem: {
      type: Object,
    },
  },
  data() {
    return {
      dontVisibleItems: [],
      search_str: "",
    };
  },
  watch: {
    search_str() {
      if (!this.search_str.length) {
        this.dontVisibleItems = this.noVisibleItems;
      } else {
        this.dontVisibleItems = this.noVisibleItems.filter((obj) =>
          obj.full_name.toLowerCase().includes(this.search_str.toLowerCase())
        );
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.outsideClick);
    this.dontVisibleItems = this.noVisibleItems;
  },
  methods: {
    outsideClick(e) {
      if (!this.hiddenModal) {
        if (!e?.target.closest(".modal-block")) this.$emit("hide_modal");
      }
    },
    setItems(clickItem, item) {
      this.$emit("set_items", clickItem, item);
      this.$emit("hide_modal");
    },
  },
};
</script>

<style lang="scss" scoped>
.empty {
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Roboto-Medium", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 40px;
  color: var(--gray200);
}
.modal {
  top: calc(50% - 10px);
  left: calc(100% - 100px);
  z-index: 20;
  position: absolute;
  width: 421px;
  height: 336px;
  background: #ffffff;
  border: 1px solid var(--gray50);
  box-shadow: 0 16px 32px rgba(35, 39, 51, 0.1);
  border-radius: 4px;
  padding: 34px 13px 25px 18px;
  overflow: hidden;
  &.hidden {
    display: none;
  }
  .input {
    width: 100%;
    height: 47px;
    padding: 10px 37px 10px 16px;
    font-family: "Roboto-Regular", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #c1c1c1;
    background: #ffffff;
    border: 1px solid #c1c1c1;
    border-radius: 4px;
    &::-webkit-input-placeholder {
      font-family: "Roboto-Regular", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      color: #c1c1c1;
    }
    &:-moz-placeholder {
      font-family: "Roboto-Regular", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      color: #c1c1c1;
    }
    &::-moz-placeholder {
      font-family: "Roboto-Regular", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      color: #c1c1c1;
    }
    &:-ms-input-placeholder {
      font-family: "Roboto-Regular", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      color: #c1c1c1;
    }
    &::-ms-input-placeholder {
      font-family: "Roboto-Regular", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      color: #c1c1c1;
    }

    &::placeholder {
      font-family: "Roboto-Regular", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      color: #c1c1c1;
    }
  }
  .modal-content {
    overflow: auto;
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: var(--gray50);
    }
    width: 100%;
    height: 100%;
    padding-right: 26px;
    padding-bottom: 25px;
    .menu {
      width: 100%;
      margin-top: 18px;
      .arrows {
        cursor: pointer;
      }
      .replace-item {
        width: 100%;
        display: flex;
        margin-bottom: 32px;
        cursor: pointer;
        &:hover {
          background-color: var(--gray50);
        }
        &:last-child {
          margin-bottom: 0;
        }
        .arrows {
          margin-right: 18px;
        }
        .name {
          margin-left: 23px;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 40px;
          font-feature-settings: "pnum" on, "lnum" on;
          color: #000000;
        }
      }
    }
  }
}
</style>
