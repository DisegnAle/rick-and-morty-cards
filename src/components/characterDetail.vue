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
                <el-row>
                    <el-col>
                        <div class="section">
                            <span class="text-gray">Appears in episodes:</span>
                            <el-row class="mt-05" :gutter="30">
                                <el-col class="ml-02" :xs="24" :sm="24" :md="24" :lg="12" :xl="12" v-for="episode in selectedCharacter.episode" v-bind:key="episode">
                                    <li>
                                        {{episode}}
                                    </li>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
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
        redirectToList() {
            this.$router.push({
                name: 'characters-list'
            })
        }
    },
    computed: {
        selectedCharacter() {
            return this.$store.state.selectedCharacter
        }
    }

}
</script>

<style lang="less" scoped>
@import url('../assets/style/characters.less');

.ml-02 {
    margin-left: 0.2em;
}
</style>
