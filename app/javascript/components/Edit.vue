<template>
  <div id="edit">
    <ul v-for="statement in statements" :key="statement.id">
      <li>
        <el-input placeholder="New statement" :value="statement.summary"></el-input>
      </li>
    </ul>
    <el-button type="primary" v-on:click='startNew' v-if="!showing.newStatement">New statement</el-button>
    <div v-if="showing.newStatement">
      <el-form ref="form" :model="newStatement.formData" @submit.prevent.native="handleCreate">
        <el-form-item label="Statement summary">
          <el-input v-model="newStatement.formData.summary" autofocus></el-input>
          <el-button type="primary" @click="handleCreate">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('edit')
export default {
  data() {
    return {
      showing: {
        newStatement: false
      }
    }
  },
  computed: {
    ...mapState({
      document: state => state.document,
      statements: state => state.statements,
      newStatement: state => state.newStatement
    })
  },
  methods: {
    ...mapActions(['fetchDocument', 'createStatement']),
    startNew() {
      this.showing.newStatement = true
    },
    cancelNew() {
      this.showing.newStatement = false
    },
    handleCreate() {
      this.createStatement().then(() => {
        this.cancelNew()
      })
    }
  },
  created() {
    this.fetchDocument(this.$route.params.id)
  }
}
</script>
