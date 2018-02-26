<template>
  <div id="index" class="container">
    <el-button type="primary" v-on:click='toggleUI("creating")' v-if="!UI('creating')">New document</el-button>
    <template v-if="UI('creating')">
      <el-form ref="form" :model="newDoc" @submit.prevent.native="create">
        <el-form-item label="Document title">
          <el-input v-model="newDoc.title" autofocus></el-input>
          <el-button type="primary" @click="create">Create</el-button>
        </el-form-item>
      </el-form>
    </template>
    <document-list :list="list" :toggleUI="toggleUI" :UI="UI" :update="update" :destroy="destroy" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import DocumentList from '../components/DocumentList'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('document')
const components = { DocumentList }
export default {
  components,
  computed: {
    ...mapState({
      list: state => state.list,
      newDoc: state => state.new
    }),
    ...mapGetters(['UI'])
  },
  methods: {
    ...mapActions(['toggleUI', 'index', 'create', 'update', 'destroy'])
  },
  created() {
    this.index()
  }
}
</script>
