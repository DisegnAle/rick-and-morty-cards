<template>
<el-row class="container__character">
    <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10" >
        <img :src="characterInfo.image">
    </el-col>
    <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14" class="characterCard__ContentWrapper">

        <!-- name/status -->
        <div class="section">
            <a @click="onSelectCharacter(characterInfo)">
                <h2>{{characterInfo.name}}</h2>
            </a>
            <span class="status">
                <div class="status__icon" :class="statusCssClass(characterInfo.status)"></div>
                <span>{{characterInfo.status}} - {{characterInfo.species}}</span>
            </span>
        </div>

        <!-- origin -->
        <div class="section">
            <span class="text-gray">Origin: </span>
            <a rel="" class="externalLink">{{characterInfo.origin.name}}</a>
        </div>

        <!-- location -->
        <div class="section">
            <span class="text-gray">Location: </span>
            <a rel="" >{{characterInfo.location.name}}</a>
        </div>

        <!-- episodes -->
        <slot></slot>

    </el-col>
</el-row>
</template>

<script>
export default {
  name: 'CharacterItem',
  props: [
    'characterInfo'
  ],
  methods: {
    onSelectCharacter (character) {
      this.$store.dispatch('selectCharacter', character)
    },
    statusCssClass (characterStatus) {
      return characterStatus === 'Alive' ? 'status__icon--green' : 'status__icon--gray'
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/style/characters.less');
</style>
