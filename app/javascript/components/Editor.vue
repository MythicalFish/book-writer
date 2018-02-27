<template>
  <quill-editor v-model="editingStatement.elaboration"
                ref="editor"
                :options="editorOptions"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"
                @ready="onEditorReady($event)">
  </quill-editor>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import debounce from 'debounce'
import { mapActions, mapState } from 'vuex'
export default {
  components: { quillEditor },
  data() {
    return {
      editorOptions: {}
    }
  },
  methods: {
    ...mapActions('document', ['updateStatement']),
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange: debounce(function({ quill, html, text }) {
      this.editingStatement.elaboration = html
      this.updateStatement(html)
    }, 500)
  },
  computed: {
    editor() {
      return this.$refs.editor.quill
    },
    ...mapState('document', ['editingStatement'])
  },
  mounted() {
    console.log('this is current quill instance object', this.editor)
  }
}
</script>
