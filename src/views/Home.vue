<template>
  <div class="home">
    <VueMenuTree :data="treeData" @nodeOpenChange="nodeOpenChange" @nodeSelected="nodeSelected">
      <template slot-scope="props">
        <!-- <img src="" /> -->
      </template>
    </VueMenuTree>
  </div>
</template>

<script>
// @ is an alias to /src
import VueMenuTree from '@/components/vue-menu-tree'

export default {
  name: 'home',
  components: {
    VueMenuTree
  },
  data () {
    return {
      treeData: [
        {
          name: '目录1',
          type: 0,
          children: [
            { type: 1,
              name: '脚本1'
            }
          ]
        },
        {
          name: '目录2',
          type: 0,
          children: [
            { type: 1,
              name: '脚本1'
            }, { type: 1,
              name: '脚本2'
            }, { type: 1,
              name: '脚本3'
            }, { type: 1,
              name: '脚本4'
            }
          ]
        },
        {
          name: '目录3',
          type: 0,
          children: [
            { type: 1,
              name: '脚本1'
            }, { type: 1,
              name: '脚本2'
            }, { type: 1,
              name: '脚本3'
            }, { type: 1,
              name: '脚本4'
            }
          ]
        }
      ]
    }
  },
  methods: {
    nodeOpenChange(data) {
      console.log(data)
    },
    nodeSelected(data) {
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
