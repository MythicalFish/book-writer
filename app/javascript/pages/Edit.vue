<template>
  <div id="edit" class="container">
    <h1>{{attributes.title}}</h1>
    <template v-for="statement in attributes.statements">
      <div :key="statement.id">
        <el-button v-on:click='startEditStatement(statement)'>{{statement.summary}}</el-button>
        <template v-if="isEditingStatement(statement)">
          <editor :content="editingStatement.elaboration" />
        </template>
      </div>
    </template>
    <el-button type="primary" v-on:click="startCreateStatement" v-if="!isCreatingStatement">New statement</el-button>
    <div v-if="isCreatingStatement">
      <el-form ref="form" :model="creatingStatement" @submit.prevent.native="createStatement">
        <el-form-item label="Statement summary">
          <el-input v-model="creatingStatement.summary" autofocus></el-input>
          <el-button type="primary" @click="createStatement">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Editor from '../components/Editor'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('document')
export default {
  components: { Editor },
  computed: {
    ...mapState(['attributes', 'editingStatement', 'creatingStatement']),
    ...mapGetters(['isEditingStatement', 'isCreatingStatement'])
  },
  methods: {
    ...mapActions([
      'fetch',
      'createStatement',
      'updateStatement',
      'startCreateStatement',
      'startEditStatement'
    ])
  },
  created() {
    this.fetch(this.$route.params.id)
  }
}
</script>
