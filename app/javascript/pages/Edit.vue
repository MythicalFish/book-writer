<template>
  <div class="container">
    <div class="document">
      <h1 class="document-title">{{attributes.title}}</h1>
      <draggable v-model="statementIDs" @start="blurStatement" @end="reorderStatements" :options="draggableOpts">
        <div v-for="s in statements" :key="s.id" class="statement">
          <div v-if="isStatementFocused(s)" class="maximized">
            <editor :statement="s" :onChange="onChangeStatement" />
          </div>
          <div v-else class="minimized">
            <button class="statement-summary" v-on:click='focusStatement(s)'>{{s.summary}}</button>
            <div class="drag-handle">
              <i class="el-icon-d-caret"></i>
            </div>
          </div>
        </div>
      </draggable>
      <el-button style="width: 100%;" v-on:click="newStatement" icon="el-icon-plus" v-if="!isCreatingStatement">New statement</el-button>
      <div v-if="isCreatingStatement">
        <el-form ref="form" :model="creatingStatement" @submit.prevent.native="createStatement">
          <el-input v-model="creatingStatement.summary" autofocus></el-input>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from '../components/Editor'
import { createNamespacedHelpers } from 'vuex'
import debounce from 'debounce'
import draggable from 'vuedraggable'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('document')
export default {
  components: { Editor, draggable },
  data() {
    return {
      draggableOpts: {
        draggable: '.statement',
        handle: '.drag-handle'
      }
    }
  },
  computed: {
    ...mapState(['attributes', 'statements', 'creatingStatement']),
    ...mapGetters(['isStatementFocused', 'isCreatingStatement', 'statement']),
    statementIDs: {
      get() {
        return this.$store.state.statementIDs
      }
    }
  },
  methods: {
    ...mapActions([
      'fetch',
      'createStatement',
      'updateStatement',
      'statementChanged',
      'statementSaved',
      'newStatement',
      'focusStatement',
      'blurStatement',
      'reorderStatements'
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
  },
  mounted() {
    document.onkeydown = evt => {
      evt = evt || window.event
      if (evt.keyCode == 27) {
        this.blurStatement()
      }
    }
  }
}
</script>
