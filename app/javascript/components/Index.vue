<template>
  <div id="index">
    <el-button type="primary" v-on:click='isCreating = !isCreating'>New document</el-button>
    <div v-show="isCreating">
      <el-form ref="form" :model="form">
        <el-form-item label="Document title">
          <el-input v-model="form.title"></el-input>
          <el-button v-on:click="createDocument">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
    <ul v-for="doc in documents" :key="doc.id">
      <li>
        <router-link :to="{name:'edit', params: { id: doc.id }}">{{doc.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documents: [],
      isCreating: false,
      form: {
        title: ''
      }
    }
  },
  methods: {
    fetchDocuments() {
      this.$http.get('/documents').then(response => {
        this.documents = response.data
      })
    },
    createDocument() {
      this.$http
        .post('/documents', {
          document: this.form
        })
        .then(response => {
          this.documents = response.data
          this.isCreating = false
        })
    }
  },
  created() {
    this.fetchDocuments()
  }
}
</script>
