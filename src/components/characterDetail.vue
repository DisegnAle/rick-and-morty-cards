<template>
<section>
    <el-row>
        <el-col>
            <el-button @click="redirectToList()">
                Back to list
            </el-button>
        </el-col>
    </el-row>
    <el-row>
        <el-col>
            <character-item :characterInfo="selectedCharacter">
                <div class="section">
                    <span class="text-gray">Appears in episodes:</span>
                    <el-row class="mt-05" :gutter="30">
                        <el-col :span="12" v-for="episode in selectedCharacter.episode" v-bind:key="episode">
                            <li>
                                {{episode}}
                            </li>
                        </el-col>
                    </el-row>
                </div>
            </character-item>
        </el-col>
    </el-row>
</section>
</template>

<script>
import characterItem from './characterItem.vue'
export default {
  components: {
    characterItem
  },
  name: 'CharacterDetail',
  methods: {
    redirectToList () {
      this.$router.push({
        name: 'characters-list'
      })
    }
  },
  computed: {
    selectedCharacter () {
      return this.$store.state.selectedCharacter
    }
  }

}
</script>

<style lang="less" scoped>
@import url('../assets/style/characters.less');
</style>
