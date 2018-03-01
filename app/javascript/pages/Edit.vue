<template>
  <div class="container">
    <div class="document">
      <h1>{{attributes.title}}</h1>
      <template v-for="statement in statements">
        <div :key="statement.id">
          <div class="statement" v-if="isStatementFocused(statement)">
            <el-input v-model="statement.summary" v-on:change="onChangeStatement"></el-input>
            <editor :statement="statement" :onChange="onChangeStatement" />
          </div>
          <template v-else>
            <button v-on:click='focusStatement(statement)' class="statement">{{statement.summary}}</button>
          </template>
        </div>
      </template>
      <el-button type="primary" v-on:click="newStatement" v-if="!isCreatingStatement">New statement</el-button>
      <div v-if="isCreatingStatement">
        <el-form ref="form" :model="creatingStatement" @submit.prevent.native="createStatement">
          <el-form-item label="Statement summary">
            <el-input v-model="creatingStatement.summary" autofocus></el-input>
            <el-button type="primary" @click="createStatement">Create</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from '../components/Editor'
import { createNamespacedHelpers } from 'vuex'
import debounce from 'debounce'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('document')
export default {
  components: { Editor },
  computed: {
    ...mapState(['attributes', 'statements', 'creatingStatement']),
    ...mapGetters(['isStatementFocused', 'isCreatingStatement'])
  },
  methods: {
    ...mapActions([
      'fetch',
      'createStatement',
      'updateStatement',
      'statementChanged',
      'statementSaved',
      'newStatement',
      'focusStatement'
    ]),
    onChangeStatement() {
      this.statementChanged()
      this.debounceUpdateStatement()
    },
    debounceUpdateStatement: debounce(function() {
      this.updateStatement().then(() => {
        this.statementSaved()
        this.$notify({
          title: 'Saved',
          duration: 500
        })
      })
    }, 500)
  },
  created() {
    this.fetch(this.$route.params.id)
  }
}
</script>
