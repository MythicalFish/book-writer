<template>
  <div id="index">
    <el-button type="primary" v-on:click='toggleNew'>New document</el-button>
    <div v-show="newDoc.showForm">
      <el-form ref="newDoc.formData" :model="newDoc.formData">
        <el-form-item label="Document title">
          <el-input v-model="newDoc.formData.title"></el-input>
          <el-button v-on:click="create">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
    <ul v-for="doc in index" :key="doc.id">
      <li>
        <router-link :to="{name:'edit', params: { id: doc.id }}">{{doc.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('document')
export default {
  computed: mapState({
    index: state => state.index,
    newDoc: state => state.new
  }),
  methods: {
    ...mapActions(['toggleNew', 'fetchIndex', 'create'])
  },
  created() {
    this.fetchIndex()
    console.log(this.newDoc.formData.title)
  }
}
</script>
