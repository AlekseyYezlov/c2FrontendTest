<template>
  <div class="plansContainer">
    <div class="plansContainerControls">
      <Search :allPlans="computedAllPlans" @filteredPlans="setFilteredPlans" />
    </div>

    <template v-if="filtetedPlans.length">
      <Plan v-for="plan in computedFilteredPans" :key="plan.id" :plan="plan" />
    </template>
  </div>
</template>

<script>
import Plan from '../components/Plans/Plans';
import Search from '../components/Plans/Search';
import { mapGetters } from 'vuex';
export default {
  name: 'PlansView',
  components: {
    Plan,
    Search,
  },
  data() {
    return {
      filtetedPlans: [],
    };
  },
  computed: {
    ...mapGetters({ getPlans: 'storePlans/getPlans' }),
    computedAllPlans() {
      const allPlans = [...this.getPlans];
      return this.flattenArray(allPlans, Infinity);
    },
    computedFilteredPans: {
      get: function() {
        return this.filtetedPlans;
      },
      set: function(newValue) {
        this.filtetedPlans = [...newValue];
      },
    },
  },
  methods: {
    flattenArray(dataArray, depth = 1) {
      return dataArray && depth > 0
        ? dataArray.reduce(
            (result, item) => [
              ...result,
              item,
              ...this.flattenArray(item.children),
            ],
            []
          )
        : [];
    },

    setFilteredPlans(data) {
      this.computedFilteredPans = data;
    },
  },
  created() {
    this.setFilteredPlans([...this.getPlans]);
  },
};
</script>

<style lang="scss" scoped>
.plansContainer {
  &Controls {
    margin-bottom: 20px;
  }
}
</style>
