<template>
  <div id="edit">
    <ul v-for="statement in list" :key="statement.id">
      <li>
        <el-input placeholder="New statement" :value="statement.summary"></el-input>
      </li>
    </ul>
    <el-button type="primary" v-on:click='showUI("newStatement")' v-if="!UI.newStatement">New statement</el-button>
    <div v-if="UI.newStatement">
      <el-form ref="form" :model="newStatement" @submit.prevent.native="create">
        <el-form-item label="Statement summary">
          <el-input v-model="newStatement.summary" autofocus></el-input>
          <el-button type="primary" @click="create">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers(
  'statement'
)
export default {
  computed: {
    ...mapState({
      document: state => state.document.id,
      list: state => state.list,
      newStatement: state => state.new,
      UI: state => state.UI
    })
  },
  methods: {
    ...mapActions(['index', 'create', 'update', 'showUI'])
  },
  created() {
    this.index(this.$route.params.id)
  }
}
</script>
