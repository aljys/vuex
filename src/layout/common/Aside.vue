<template>
  <div class="aside">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse=this.$store.state.isCollapse>
      <el-submenu index="index" v-for="(item,index) in list" :key="index" >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <el-menu-item-group >
          <el-menu-item index="index+1-inde_x+1" v-for="(ite_m,inde_x) in item.list" :key="inde_x">{{ite_m}}</el-menu-item>
          <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import {getList} from '../../api/user'
  import {mapMutations,mapActions,mapState} from 'vuex'
  export default {
    data() {
      return {
      }
    },
    computed:mapState(["isCollapse",'list']),
    mounted() {
      this.menuActions()
    },
    methods: {
      ...mapMutations(['open']),
      ...mapActions(['menuActions']),
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

  }
</script>

<style scoped>
.aside {
  width: 200px;
  height: 100%;
  float: left;
}
</style>