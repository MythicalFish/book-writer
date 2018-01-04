<template>
  <div id="index" class="container">
    <el-button type="primary" v-on:click='toggleUI("new")' v-if="!UI.new">New document</el-button>
    <div v-if="UI.new">
      <el-form ref="form" :model="newDoc" @submit.prevent.native="create">
        <el-form-item label="Document title">
          <el-input v-model="newDoc.title" autofocus></el-input>
          <el-button type="primary" @click="create">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
    <document-list :list="list" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import DocumentList from '../components/DocumentList'
const { mapState, mapActions } = createNamespacedHelpers('document')
const components = { DocumentList }
export default {
  components,
  computed: {
    ...mapState({
      list: state => state.list,
      newDoc: state => state.new,
      UI: state => state.UI
    })
  },
  methods: {
    ...mapActions(['toggleUI', 'index', 'create'])
  },
  created() {
    this.index()
  }
}
</script>
