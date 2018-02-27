<template>
  <div id="edit">
    <h1>{{document.title}}</h1>
    <template v-for="statement in list">
      <div :key="statement.id">
        <el-button v-on:click='toggle(["editing", statement.id])'>{{statement.summary}}</el-button>
        <template v-if="isVisible(['editing', statement.id])">
          <editor :content="statement.elaboration" />
        </template>
      </div>
    </template>
    <el-button type="primary" v-on:click="toggle(['creating'])" v-if="!isVisible(['creating'])">New statement</el-button>
    <div v-if="isVisible(['creating'])">
      <el-form ref="form" @submit.prevent.native="create">
        <el-form-item label="Statement summary">
          <el-input autofocus></el-input>
          <el-button type="primary" @click="create">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Editor from '../components/Editor'
import { createNamespacedHelpers } from 'vuex'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  components: { Editor },
  computed: {
    ...mapState('statement', {
      document: state => state.document,
      list: state => state.list
    }),
    ...mapGetters('UI', ['UIisVisible'])
  },
  methods: {
    ...mapActions('statement', ['index', 'create', 'update']),
    ...mapActions('UI', ['toggleUI']),
    toggle(keys) {
      keys.unshift('statement')
      this.toggleUI(keys)
    },
    isVisible(keys) {
      keys.unshift('statement')
      return this.UIisVisible(keys)
    }
  },
  created() {
    this.index(this.$route.params.id)
  }
}
</script>
