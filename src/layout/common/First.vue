<template>
    <div class="top_first">
      123
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
    </div>
</template>

<script>
export default {
    data() {
      return {
        isCollapse: true
      };
    },
}
</script>

<style scoped>
 /* .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  } */
.top_first{
    width: 100%;
    height: 60px;
}
</style>