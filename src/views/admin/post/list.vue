<template>
  <v-data-table
      :headers="headers"
      :items="list"
      :server-items-length="3"
      class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
          flat
      >
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
            class="mx-4"
            inset
            vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <!--          delete dialog-->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm(item)">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn
          text
          x-small
          color="primary"
          :to="'/admin/post/' + item.slug + '/edit'"
      >
        Edit
      </v-btn>
      <v-btn
          text
          x-small
          color="error"
          @click="deleteItem(item)"
      >
        Delete
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import {fetchAdminPostList,deletePost} from "@/api/post";

export default {
  name: "list",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Title',
        align: 'start',
        sortable: false,
        value: 'title',
      },
      {text: 'Actions', value: 'actions', sortable: false},
    ],
    list: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      title: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
    options: {
      handler (aa) {
        console.log(aa)
        this.getDataFromApi()
      },
      deep: true,
    },
  },

  created() {
    this.getListData();
  },

  methods: {
    getListData() {
      fetchAdminPostList().then((res) => {
        this.list = res.data.list;
      })
    },
    deleteItem(item) {
      console.log(item)
      this.editedIndex = this.list.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm(item) {
      deletePost({id: item.id}).then((res) => {
        console.log(res)
        this.list.splice(this.editedIndex, 1)
        this.closeDelete()
      });
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
  },
}
</script>

<style scoped>

</style>
