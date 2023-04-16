<template>
  <div :class="{ 'check-block': position === 'center' }">
    <div
      class="custom_checkbox"
      ref="checkbox"
      :class="{
        custom_checkbox__active: checked,
        ss: size === 's',
        sm: size === 'm',
        sl: size === 'l',
        sxl: size === 'xl',
        custom_checkbox__disabled: disabled,
      }"
      @click.stop="click"
    >
      <svg
        v-if="checked"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.40808 0.344266C9.71631 0.601554 9.71631 1.07516 9.40808 1.33245L4.19044 5.68775C3.97383 5.86856 3.6589 5.86856 3.44229 5.68775L0.59192 3.30847C0.28369 3.05119 0.28369 2.57758 0.59192 2.32029C0.83074 2.12094 1.17796 2.12094 1.41678 2.32029L3.81636 4.32329L8.58322 0.344266C8.82204 0.144917 9.16926 0.144917 9.40808 0.344266Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "ECheckbox",
  props: {
    checked: {
      type: Boolean,
    },
    size: {
      type: String,
      default: "m",
    },
    position: {
      type: String,
      default: "default",
    },
    background: { type: String, default: "#00a3ff" },
    disabled: { type: Boolean, default: false },
  },
  mounted() {
    if (this.checked) {
      this.$refs.checkbox.style.background = this.background;
      this.$refs.checkbox.style.borderColor = this.background;
    } else {
      this.$refs.checkbox.style.background = "#ffffff";
      this.$refs.checkbox.style.borderColor = "#C1C1C2";
    }
  },
  watch: {
    background() {
      if (this.checked) {
        this.$refs.checkbox.style.background = this.background;
        this.$refs.checkbox.style.borderColor = this.background;
      } else {
        this.$refs.checkbox.style.background = "#ffffff";
        this.$refs.checkbox.style.borderColor = "#C1C1C2";
      }
    },
    checked() {
      if (this.checked) {
        this.$refs.checkbox.style.background = this.background;
        this.$refs.checkbox.style.borderColor = this.background;
      } else {
        this.$refs.checkbox.style.borderColor = "#C1C1C2";
        this.$refs.checkbox.style.background = "#ffffff";
      }
    },
  },
  methods: {
    click() {
      if (!this.disabled) this.$emit("click");
    },
  },
};
</script>
<style lang="scss" scoped>
.check-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.custom_checkbox {
  cursor: pointer;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  max-width: 16px;
  height: 16px;
  background: #ffffff;
  border: 2px solid #c1c1c2;
  border-radius: 4px;
}

.ss {
  height: 12px;
  min-width: 12px;
  max-width: 12px;
}

.ss svg {
  transform: scale(0.8);
}

.sl {
  height: 18px;
  min-width: 18px;
  max-width: 18px;
}

.sl svg {
  transform: scale(1.2);
}

.sxl {
  height: 22px;
  min-width: 22px;
  max-width: 22px;
}

.sxl svg {
  transform: scale(1.6);
}

.custom_checkbox__active {
  background-color: #00a3ff;
  border: 2px solid #00a3ff;
}

.custom_checkbox__disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
