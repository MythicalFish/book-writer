<template>
  <div id="app">
    <el-button type="primary" v-on:click='isCreating = !isCreating'>New document</el-button>
    <div v-show="isCreating">
      <el-form ref="form" :model="form">
        <el-form-item label="Document title">
          <el-input v-model="form.title"></el-input>
          <el-button v-on:click="createDocument">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
    <ul v-for="document in documents" :key="document.id">
      <li>
        <a :href="document.path">{{document.title}}</a>
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
        console.log(response.data)
      })
    },
    createDocument() {
      this.$http.post('/documents', {
        document: this.form,
        authenticity_token: this.authToken
      })
    }
  },
  created() {
    this.fetchDocuments()
  }
}
</script>
