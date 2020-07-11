<template>
  <div class="home-page">
    <div class="root"> home</div>
  </div>
</template>

<script>
import { getCitiesGroup } from '../../api/cities'
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    async getCitiesByGroup () {
      const res = await getCitiesGroup({ type: 'hot' })
      console.log(res)
    }
  },
  created () {},
  mounted () {
    this.getCitiesByGroup()
  }
}
</script>
<style lang="less" scoped>
.home-page{
  height: 100%;
  .root {
    width: 100px;
    height: 200px;
    background: pink;
    font-size: 42px;
  }
}

</style>
