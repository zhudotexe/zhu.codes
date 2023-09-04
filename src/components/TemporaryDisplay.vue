<!-- Displays the nodes contained within this node iff the current system time falls between *from* and *to*. -->
<script setup lang="ts">
import {DateTime} from "luxon";
import {computed} from "vue";

const props = defineProps<{
  from: number;
  to: number;
  tempMessageClass: string;
}>();

const isDisplayed = computed(() => {
  const now = DateTime.now().toSeconds();
  return props.from <= now && now <= props.to;
});
const displayedUntil = computed(() => {
  const until = DateTime.fromSeconds(props.to);
  let timeFmtOptions = DateTime.DATETIME_SHORT;
  if (until.hasSame(DateTime.now(), "day")) {
    timeFmtOptions = DateTime.TIME_SIMPLE;
  }
  return until.toLocaleString(timeFmtOptions);
});
</script>

<template>
  <div v-if="isDisplayed">
    <div class="temp-display-background">
      <slot></slot>

      <div class="temp-message" :class="tempMessageClass">
        <p class="is-size-7 has-text-grey">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'exclamation-triangle']" />
            </span>
            <span>This is a temporary message. This message will disappear after {{ displayedUntil }}.</span>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.temp-display-background {
  width: 100%;
  padding: 2px 2px 2px 4px;
  background-color: rgba(0, 0, 0, 0.06);
}

.temp-message {
  padding: 4px 0;
}

.is-size-7 > .icon {
  height: 1rem;
  vertical-align: middle;
}
</style>
