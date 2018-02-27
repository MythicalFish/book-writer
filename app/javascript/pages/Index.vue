<template>
  <div id="index" class="container">
    <el-button type="primary" v-on:click='toggle(["creating"])' v-if="!isVisible(['creating'])">New document</el-button>
    <template v-if="isVisible(['creating'])">
      <el-form ref="form" :model="creating" @submit.prevent.native="create">
        <el-form-item label="Document title">
          <el-input v-model="creating.title" autofocus></el-input>
          <el-button type="primary" @click="create">Create</el-button>
        </el-form-item>
      </el-form>
    </template>
    <document-list :toggle="toggle" :isVisible="isVisible" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import DocumentList from '../components/DocumentList'
import { mapState, mapActions, mapGetters } from 'vuex'
const components = { DocumentList }
export default {
  components,
  computed: {
    ...mapState('document', ['creating']),
    ...mapGetters('UI', ['UIisVisible'])
  },
  methods: {
    ...mapActions('document', ['create']),
    ...mapActions('UI', ['toggleUI']),
    toggle(keys) {
      keys.unshift('document')
      this.toggleUI(keys)
    },
    isVisible(keys) {
      keys.unshift('document')
      return this.UIisVisible(keys)
    }
  }
}
</script>
