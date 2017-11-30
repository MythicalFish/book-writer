<template>
  <div id="edit">
    <el-button v-on:click="createStatement">Create statement</el-button>
    <ul v-for="statement in statements" :key="statement.id">
      <li>
        <el-input placeholder="New statement" :value="statement.summary"></el-input>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activePhrases: [],
      statements: []
    }
  },
  methods: {
    fetchDocument() {
      this.$http.get(`/documents/${this.id}`).then(response => {
        this.statements = response.data.statements
      })
    },
    createStatement() {
      this.$http.post(`/documents/${this.id}/statements`).then(response => {
        this.statements.push(response)
      })
    }
  },
  created() {
    this.id = this.$route.params.id
    this.fetchDocument()
  }
}
</script>
