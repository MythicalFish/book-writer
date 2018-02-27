<template>
  <div id="index" class="container">
    <el-button type="primary" v-on:click="startCreate" v-if="!isCreating">New document</el-button>
    <template v-if="isCreating">
      <el-form ref="form" :model="creating" @submit.prevent.native="create">
        <el-form-item label="Document title">
          <el-input v-model="creating.title" autofocus></el-input>
          <el-button type="primary" @click="create">Create</el-button>
        </el-form-item>
      </el-form>
    </template>
    <document-list />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import DocumentList from '../components/DocumentList'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers(
  'documents'
)
const components = { DocumentList }
export default {
  components,
  computed: {
    ...mapState(['creating']),
    ...mapGetters(['isCreating'])
  },
  methods: {
    ...mapActions(['startCreate', 'create'])
  }
}
</script>
