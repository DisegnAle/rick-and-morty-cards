<template>
<el-row class="container" :gutter="20">
    <el-col :span="12" v-for="character in charactersList" v-bind:key="character.id">
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
