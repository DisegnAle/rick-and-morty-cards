<template>
<el-row class="container" :gutter="20">
    <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" v-for="character in charactersList" v-bind:key="character.id">
      <div v-if="!!character">
        <charater-item :character-info="character"></charater-item>
      </div>
    </el-col>
</el-row>
</template>

<script>
import charaterItem from './characterItem'
export default {
  name: 'CharactersList',
  components: {
    charaterItem
  },
  props: {},
  data () {
    return {

    }
  },
  computed: {
    charactersList () {
      return this.$store.state.charactersList
    }
  }
}
</script>

<style lang="less" scoped>
.container{
    background: rgb(36, 40, 47);
    min-height: calc(50vh - 60px);
}
</style>
