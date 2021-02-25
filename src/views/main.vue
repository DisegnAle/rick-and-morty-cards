<template>
<el-container>
    <el-header>
        <el-row>
            <el-col>
                <h1>Ricky and Morty</h1>
            </el-col>
        </el-row>
    </el-header>
    <el-main class="mt-4">
        <characters-list></characters-list>
    </el-main>
</el-container>
</template>

<script>
import CharactersList from '@/components/charactersList'
export default {
  name: 'Main',
  components: {
    CharactersList
  }
}
</script>

<style scoped>

</style>
