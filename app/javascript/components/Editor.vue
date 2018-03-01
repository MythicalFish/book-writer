<template>
  <div v-if="statement.elaboration">
    <quill-editor 
      ref="editor"
      :options="quillOptions"
      @change="onEditorChange($event)"
      v-model="statement.elaboration">
    </quill-editor>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { quillOptions } from '../config/quill'
import debounce from 'debounce'
import { mapActions, mapState } from 'vuex'
export default {
  props: ['statement', 'onChange'],
  data() {
    return {
      quillOptions
    }
  },
  components: { quillEditor },
  methods: {
    onEditorChange: debounce(function({ quill, html, text }) {
      this.statement.elaboration = html
      this.onChange(html)
    }, 500)
  },
  computed: {
    editor() {
      return this.$refs.editor.quill
    }
  }
}
</script>
