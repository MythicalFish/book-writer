<template>
  <el-row>
    <el-col :span="20">
      <el-form v-if="isEditing(document.id)" ref="form" :model="editing" @submit.prevent.native="update">
        <el-form-item>
          <el-input autofocus v-model="editing.title"></el-input>
        </el-form-item>
      </el-form>
      <div v-else>
        <router-link :to="{name:'edit', params: { id: document.id }}">{{document.title}}</router-link>
      </div>
    </el-col>
    <el-col :span="4">
      <el-button v-if="!isEditing(document.id)" icon="el-icon-edit" size="mini" v-on:click="showformEdit(document)"></el-button>
      <el-button v-if="isEditing(document.id)" icon="el-icon-check" size="mini" v-on:click="update"></el-button>
      <el-button icon="el-icon-delete" size="mini" v-on:click="destroy(document)"></el-button>
    </el-col>
  </el-row>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('document')
export default {
  props: ['document'],
  computed: {
    ...mapState({
      editing: state => state.editing
    }),
    ...mapGetters(['isEditing'])
  },
  methods: {
    ...mapActions(['showformEdit', 'destroy', 'update'])
  }
}
</script>
