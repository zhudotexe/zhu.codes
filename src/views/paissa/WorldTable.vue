<template>
  <div class="table-container mt-4">
    <table class="table is-striped is-fullwidth is-hoverable">
      <thead>
      <tr>
        <th>Address</th>
        <th>Size</th>
        <th>Price</th>
        <th>Entries</th>
        <th>Lottery Phase</th>
        <th>Allowed Tenants</th>
        <th>Last Updated</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="plot in plots"
          :key="[plot.world_id, plot.district_id, plot.ward_number, plot.plot_number]">
        <td>
          {{ client.districtName(plot.district_id) }}, Ward {{ plot.ward_number + 1 }}, Plot
          {{ plot.plot_number + 1 }}
        </td>
        <td>{{ utils.sizeStr(plot.size) }}</td>
        <td>{{ plot.price.toLocaleString() }}</td>
        <td>
          <FlashOnChange :value="utils.lotteryEntryCountStr(plot)"
                         :class="{'is-italic': utils.shouldEm(plot)}"/>
        </td>
        <td>
          <FlashOnChange :value="utils.lotteryPhaseStr(plot)" :class="{'is-italic': utils.shouldEm(plot)}"/>
        </td>
        <td>{{ utils.tenantStr(plot.purchase_system) }}</td>
        <td>
          <FlashOnChange :value="utils.updatedStr(plot.last_updated_time)"/>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import FlashOnChange from "@/components/FlashOnChange.vue";
import * as utils from "@/views/paissa/utils";
import {defineComponent} from "vue";

export default defineComponent({
  name: "WorldTable",
  components: {FlashOnChange},
  props: ['client', 'plots'],
  data() {
    return {
      utils
    }
  }
})
</script>

<style scoped>

</style>