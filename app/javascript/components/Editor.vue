<template>
  <div class="statement-editor">
    <el-input v-model="statement.summary" v-on:change="onChange"></el-input>
    <quill-editor 
      ref="editor"
      :options="quillOptions"
      @change="onChange($event)"
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
  computed: {
    editor() {
      return this.$refs.editor.quill
    }
  }
}
</script>
