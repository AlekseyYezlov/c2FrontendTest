<template>
  <div v-if="computedPlan" class="planItemWrapper">
    <div class="planItem">
      <div class="planItemCell planItemStatus">
        <div class="planItemCellHeader">
          Status
        </div>
        <font-awesome-icon
          v-if="computedPlan.status"
          :title="computedPlan.status"
          :icon="
            computedPlan.status === 'Active'
              ? 'check-circle'
              : 'exclamation-circle'
          "
          :style="{
            color:
              computedPlan.status === 'Active'
                ? 'var(--success)'
                : 'var(--error)',
          }"
          size="lg"
        />
      </div>
      <div :title="computedPlan.id" class="planItemCell planItemId">
        <div class="planItemCellHeader">
          ID
        </div>
        <div class="planItemCellData">
          {{ computedPlan.id }}
        </div>
      </div>
      <div :title="computedPlan.name" class="planItemCell planItemName">
        <div class="planItemCellHeader">
          Name
        </div>
        <div class="planItemCellData">
          {{ computedPlan.name }}
        </div>
      </div>
      <div
        v-if="computedPlan.description"
        :title="computedPlan.description"
        class="planItemCell planItemDescription"
      >
        <div class="planItemCellHeader">
          Description
        </div>
        <div class="planItemCellData">
          {{ computedPlan.description }}
        </div>
      </div>
      <div
        v-if="computedPlan.children && computedPlan.children.length"
        class="planItemCell planItemAccordeonButton"
      >
        <button @click="showChildren = !showChildren">
          <span>Open</span>
          <font-awesome-icon
            icon="angle-right"
            :transform="{ rotate: showChildren ? 90 : 0 }"
            size="lg"
          />
        </button>
      </div>
    </div>
    <transition-group
      name="plansChildrenList"
      class="planItemWrapperChildren"
      tag="div"
    >
      <template
        v-if="
          showChildren && computedPlan.children && computedPlan.children.length
        "
      >
        <Plans
          v-for="child in computedPlan.children"
          :key="child.id + computedPlan.id"
          :plan="child"
        />
      </template>
    </transition-group>
  </div>
</template>

<script>
import Plans from './Plans';

export default {
  name: 'Plans',
  components: {
    Plans,
  },
  props: {
    plan: {
      type: Object,
      default: null,
      validator: (propValue) => {
        const id = propValue.id && typeof propValue.id === 'string';
        const name = propValue.name && typeof propValue.name === 'string';
        const type = propValue.type && typeof propValue.type === 'string';
        return id && name && type;
      },
    },
  },
  data() {
    return {
      showChildren: false,
    };
  },
  computed: {
    computedPlan() {
      return this.plan;
    },
  },
};
</script>

<style lang="scss" scoped>
.plansChildrenList {
  transition: all 1s;
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
.planItemWrapper {
  width: 100%;
  transition: all 1s;
  &Children {
    padding-left: 30px;
    transition: all 1s;
  }
}
.planItem {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid;
  border-color: var(--divider-color);
  box-sizing: border-box;
  &CellHeader,
  &CellData {
    padding: 0 20px;
    box-sizing: border-box;
  }
  &Status {
    .planItemCellHeader {
      display: none;
    }
    width: 50px;
  }
  &Id {
    min-width: 50px;
    max-width: 100px;
    width: 100%;
  }
  &Name {
    text-align: left;
    max-width: 100px;
    width: 100%;
  }
  &Description {
    text-align: left;
    max-width: 300px;
    width: 100%;
  }
  &AccordeonButton {
    margin-left: auto;
    width: 50px;
    button {
      background-color: transparent;
      outline: 0;
      border-color: transparent;
      cursor: pointer;
      span {
        display: none;
      }
      svg {
        transition: 0.3s all;
      }
      &:hover {
        svg {
          color: var(--accent-color);
        }
      }
    }
  }
}

@media screen and(max-width: 768px) {
  .planItem {
    flex-direction: column;
    align-items: baseline;
    padding: 20px 10px;
    &Cell {
      display: flex;
      width: 100%;
      max-width: unset;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
      &Header {
        padding-left: 0;
        max-width: 100px;
        width: 100%;
        text-align: left;
      }
      &Data {
        padding-left: 0;
      }
    }
    &Status {
      .planItemCellHeader {
        display: block;
        padding-left: 0;
      }
    }
    &AccordeonButton {
      button {
        padding: 5px 10px;
        background-color: transparent;
        border-radius: 3px;
        font-size: 16px;
        color: var(--primary-text);
        margin-left: auto;
        border: 1px solid;
        border-color: var(--divider-color);
        transition: 0.3s all;
        span {
          display: inline-block;

          margin-right: 10px;
        }
        svg {
          vertical-align: middle;
        }

        &:hover {
          color: var(--text);
          background-color: var(--primary-color);
          svg {
            color: var(--text);
          }
        }
      }
    }
    &Wrapper {
      & > .planItemWrapperChildren .planItemWrapper .planItemWrapperChildren {
        padding-left: 0;
      }
    }
  }
}
</style>
