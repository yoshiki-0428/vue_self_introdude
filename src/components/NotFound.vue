<template>
  <div id="not_found">
    <md-card class="top_picture">
      <md-card-media md-ratio="16:9">
        <img :src="url" alt="Skyscraper">
      </md-card-media>

      <md-card-area>
        <md-card-header>
          <span class="md-title">Not Found Page...</span><br />
        </md-card-header>
      </md-card-area>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      url: "https://lh3.googleusercontent.com/YUoiCvTvE9Quer4JxLN7_wJ2A85K8tYHtM-HKpgLwl2JUX9ryzZYwF7gFLS2X5Q4NjzwMPM5HbecnJjYnJ-dKgBTmq3D03V5Htmka69CIGyNxAEdguPGIHQEmrBuJx3va_sjl1ifyjMqx_FAb3t92GUuhLVlmTN8UZuO2mDA7mVw-4h61dvq3R1SJni3jkTFmcf6FFl5dXvJIImXrX3gnfz5xazt2J_p2LSw-2UeTKqHPQAaDcaIxTKGzPrA1rWLHZzKdF4Pr0waywjEEjaQZL_8G9OeCukl6PIdKWj-73prjhWgLy_NfygTi4I1L7apByzhY_J8llgbrl05NwDdVtbWhcRaDnHTXGSlAgQ8vGLVvs_kVOVPkd70ddbT1ydkjso14O8Ya9l2IFIawesc8MCYKezGkYeK-pl4yVX89qeHDgrq1Fco5_RnokQfxmXC_d5kgWokc1BXgaFFgTBL2lHKBs2BFqKb5BFPU4GiOZgc_Phns7vEXKzSwd2QmqLH_8FioibbYAFcEBJLjJR8WKSvRNoZUnv8nNE1kcETroHmeV8agY621IiamefX-lRkOUT_8M7Fb8jAIg_dyYGWgmnUMNogJLbpM6KfyJXdABT3k-PwhU0ttMKUOCjRgLfcQox62JXVMEbhSzT6XJt3953mfBWXAl24=w1282-h961-no"
    }
  }
}
</script>
