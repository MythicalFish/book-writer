<template>
  <el-table
    :data="list"
    stripe
    style="width: 100%">
    <el-table-column
      label="Title">
      <template slot-scope="scope">
        <el-form v-if="isRenaming(scope.row)" ref="form" :model="renaming" @submit.prevent.native="rename">
          <el-input autofocus v-model="renaming.title"></el-input>
        </el-form>
        <div v-else>
          <router-link :to="{name:'edit', params: { id: scope.row.id }}">{{scope.row.title}}</router-link>
        </div>
      </template>
    </el-table-column>
    <el-table-column width="150">
      <template slot-scope="scope">
        <template v-if="isRenaming(scope.row)">
          <el-button icon="el-icon-check" size="mini" v-on:click="rename"></el-button>
        </template>
        <template v-else>
          <el-button icon="el-icon-edit" size="mini" v-on:click="startRename(scope.row)"></el-button>
          <el-button icon="el-icon-delete" size="mini" v-on:click="destroy(scope.row)"></el-button>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers(
  'documents'
)
export default {
  computed: {
    ...mapState(['renaming', 'list']),
    ...mapGetters(['isRenaming'])
  },
  methods: {
    ...mapActions(['index', 'rename', 'destroy', 'startRename'])
  },
  created() {
    this.index()
  }
}
</script>
