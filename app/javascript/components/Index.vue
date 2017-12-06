<template>
  <div id="index" class="container">
    <el-button type="primary" v-on:click='showformNew' v-if="!newDoc.showForm">New document</el-button>
    <div v-if="newDoc.showForm">
      <el-form ref="form" :model="newDoc.formData" @submit.prevent.native="create">
        <el-form-item label="Document title">
          <el-input v-model="newDoc.formData.title" autofocus></el-input>
          <el-button type="primary" :loading="newDoc.isLoading" @click="create">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-for="doc in index" :key="doc.id">
      <el-row class="asd">
        <el-col :span="20">
          <el-form v-if="editing(doc.id)" ref="form" :model="edit.formData" @submit.prevent.native="update">
            <el-form-item>
              <el-input autofocus v-model="edit.formData.title"></el-input>
            </el-form-item>
          </el-form>
          <div v-else>
            <router-link :to="{name:'edit', params: { id: doc.id }}">{{doc.title}}</router-link>
          </div>
        </el-col>
        <el-col :span="4">
          <el-button icon="el-icon-edit" size="mini" v-on:click="showformEdit(doc)"></el-button>
          <el-button icon="el-icon-delete" size="mini" v-on:click="destroy(doc)"></el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('index')
export default {
  computed: {
    ...mapState({
      index: state => state.index,
      newDoc: state => state.new,
      edit: state => state.edit
    }),
    ...mapGetters(['editing'])
  },
  methods: {
    ...mapActions([
      'hideformNew',
      'showformNew',
      'showformEdit',
      'hideformEdit',
      'fetchList',
      'create',
      'destroy',
      'update'
    ])
  },
  created() {
    this.fetchList()
  }
}
</script>
