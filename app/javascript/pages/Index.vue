<template>
  <div id="index" class="container">
    <el-button type="primary" v-on:click='showformNew' v-if="!newDoc.showForm">New document</el-button>
    <div v-if="newDoc.showForm">
      <el-form ref="form" :model="newDoc.formData" @submit.prevent.native="create">
        <el-form-item label="Document title">
          <el-input v-model="newDoc.formData.title" autofocus></el-input>
          <el-button type="primary" :loading="newDoc.isLoading" @click="create">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-for="document in list" :key="document.id">
      <list-item :document="document"></list-item>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import ListItem from '../components/ListItem'
const { mapState, mapActions } = createNamespacedHelpers('document')
const components = { ListItem }
export default {
  components,
  computed: {
    ...mapState({
      list: state => state.list,
      newDoc: state => state.new
    })
  },
  methods: {
    ...mapActions(['hideformNew', 'showformNew', 'index', 'create'])
  },
  created() {
    this.index()
  }
}
</script>
