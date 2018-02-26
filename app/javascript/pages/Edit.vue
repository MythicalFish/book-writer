<template>
  <div id="edit">
    <h1>{{document.title}}</h1>
    <template v-for="statement in list">
      <div :key="statement.id">
        <el-button v-on:click='toggleUI(["editing", statement.id])'>{{statement.summary}}</el-button>
        <template v-if="UI(['editing', statement.id])">
          <editor :content="statement.elaboration" />
        </template>
      </div>
    </template>
    <el-button type="primary" v-on:click="toggleUI('creating')" v-if="!UI('creating')">New statement</el-button>
    <div v-if="UI('creating')">
      <el-form ref="form" :model="creating" @submit.prevent.native="create">
        <el-form-item label="Statement summary">
          <el-input v-model="creating.summary" autofocus></el-input>
          <el-button type="primary" @click="create">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Editor from '../components/Editor'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers(
  'statement'
)
export default {
  components: { Editor },
  computed: {
    ...mapState({
      document: state => state.document,
      list: state => state.list,
      creating: state => state.new
    }),
    ...mapGetters(['UI'])
  },
  methods: {
    ...mapActions(['index', 'create', 'update', 'toggleUI'])
  },
  created() {
    this.index(this.$route.params.id)
  }
}
</script>
