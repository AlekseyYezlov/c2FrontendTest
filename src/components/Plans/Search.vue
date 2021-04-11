<template>
  <div class="searchWrapper">
    <font-awesome-icon class="search-icon" icon="search" size="lg" />
    <input
      v-model="searchText"
      placeholder="Search Plans"
      @focus="changeParentStyle"
      @blur="changeParentStyle"
      type="text"
      title="Search Input"
      :disabled="!allPlans.length"
    />
    <font-awesome-icon
      v-if="searchText != ''"
      @click="searchText = ''"
      class="reset-icon"
      icon="times"
      size="lg"
    />
  </div>
</template>

<script>
import { debounce } from '../../helpers/debounce';
import { mapGetters } from 'vuex';
export default {
  name: 'Search',
  props: {
    allPlans: {
      type: Array,
      required: true,
      default: function() {
        return [];
      },
    },
  },
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    changeParentStyle(e) {
      const parent = e.target.closest('.searchWrapper');
      if (parent) {
        parent.classList.toggle('active');
      }
    },
  },
  computed: {
    ...mapGetters({ getPlans: 'storePlans/getPlans' }),
    computedPlans() {
      return this.allPlans;
    },
  },
  watch: {
    searchText: function(nevVal) {
      if (nevVal.length) {
        debounce(() => {
          const valToLowerCase = nevVal.toLowerCase();
          let filteredPlans = [
            ...this.computedPlans.filter(
              (plan) =>
                plan.name.toLowerCase().includes(valToLowerCase) ||
                (plan.description &&
                  plan.description.toLowerCase().includes(valToLowerCase))
            ),
          ];
          filteredPlans = filteredPlans.map((item) => {
            // eslint-disable-next-line
            const { children, ...other } = item;
            return other;
          });
          this.$emit('filteredPlans', filteredPlans);
        }, 500)();
      } else {
        this.$emit('filteredPlans', this.getPlans);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.searchWrapper {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid;
  border-color: var(--divider-color);
  border-radius: 5px;
  max-width: 300px;
  align-items: center;
  position: relative;
  padding: 2px;
  transition: border-color 0.3s;
  box-shadow: 0 0 5pt 0.5pt transparent;
  &.active {
    border-color: var(--accent-color);
    box-shadow: 0 0 5pt 0.5pt var(--accent-color);
  }
  input {
    width: 100%;
    padding: 10px 30px;
    border: 0;
    outline: 0;
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
    }
  }
  svg {
    position: absolute;
  }
  .search-icon {
    left: 7px;
  }
  .reset-icon {
    cursor: pointer;
    right: 10px;
  }
}
</style>
