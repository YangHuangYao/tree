<template>
    <ul class="tree-content" v-if="data">
      <li :style="{paddingLeft:16+'px'}"
          v-for="(item,index) in data"
          :key="index" :class="item.isOpen?'open':'hide'">
        <div class="node-ground">
          <i :class="item.isOpen?'up node-icon':' node-icon'"
          v-if="item.children"
             @click="openNode({type:'icon',index:index,item:item,data:data})"></i>
          <slot v-if="item.children"></slot>
          <div :class="item.children?'node-name':'node-end node-name'"
               @click="openNode({type:'name',index:index,item:item,data:data})">{{item.name}}</div>
        </div>
        <VueMenuTree :data="item.children" @nodeOpenChange="nodeOpenChangeF" @nodeSelected="nodeSelectedF">
          <template slot-scope="props">
            <slot v-if="item.children"></slot>
          </template>
        </VueMenuTree>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'VueMenuTree',
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Array
    }
  },
  methods: {// 方法集合
    openNode (data) {
      if (data.type === 'icon') {
        this.$emit('nodeOpenChange', data)
      } else {
        this.$emit('nodeSelected', data)
      }
      if (data.item.isOpen) {
        this.$set(data.item, 'isOpen', false)
      } else {
        this.$set(data.item, 'isOpen', true)
      }
      this.setOpenState(data.item)
    },
    nodeOpenChangeF(data) {
      this.$emit('nodeOpenChange', data)
    },
    nodeSelectedF(data) {
      this.$emit('nodeSelected', data)
    },
    setOpenState(data) {
      if (data.children && data.children.length > 0) {
        data.children.map((item) => {
          this.$set(item, 'isOpen', false)
          if (item.children) {
            this.setOpenState(item.children)
          }
        })
      }
    }

  }

}
</script>
<style lang='scss' >
  .tree-content {
    li{
      &.hide{
        &> .tree-content{
          display:none
        }
      }
      &.open{
        &> .tree-content{
          display:block
        }
      }
    }
    .node-ground {
       display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 14px;
      line-height: 24px;
      .node-icon {
        position: relative;
        display: inline-block;
        width: 15px;
        height: 15px;
        cursor: pointer;
        &::before {
          position: absolute;
          top:calc(50% - 6px);
          left:calc(50% - 2px) ;
          content: "";
          width: 0;
          height: 0;
          border: 6px solid #666;
          border-top-color: transparent;
          border-right-color: transparent;
          border-bottom-color: transparent;
        }
        &.up{
          transform:rotate(90deg);
          &:before{
            left:calc(50% - 2px);
            top:2px;
          }
        }
      }

      .node-name {
        box-sizing: border-box;
        width: calc(100% - 20px);
        margin-left: 5px;
        cursor: pointer;
        &:hover {
          background-color: #9f88eb;
        }
        &.node-end{
          margin-left:8px;
        }
      }
    }
  }
</style>
