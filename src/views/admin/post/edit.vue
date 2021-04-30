
<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >
    <v-text-field
        v-model="title"
        :error-messages="titleErrors"
        :counter="10"
        label="Title"
        required
        @input="$v.title.$touch()"
        @blur="$v.title.$touch()"
    ></v-text-field>

    <v-textarea
        label="Description"
        auto-grow
        counter
        v-model="description"
        :error-messages="descriptionlErrors"
        required
        @input="$v.description.$touch()"
        @blur="$v.description.$touch()"
    ></v-textarea>

    <v-select
        v-model="category_id"
        :items="categories"
        item-text="name"
        item-value="id"
        :error-messages="categoryErrors"
        label="Category"
        required
        @change="$v.category_id.$touch()"
        @blur="$v.category_id.$touch()"
    ></v-select>

    <div id="vditor"></div>

    <v-btn
        class="mr-4"
        @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </v-form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
import Vditor from 'vditor';
import 'vditor/dist/index.css'
import {fetchCategoryList, pushPost, fetchPostBySlug} from "@/api/post";

export default {
  name: "edit",
  mixins: [validationMixin],

  validations: {
    title: { required, maxLength: maxLength(10) },
    description: { required },
    category_id: { required },
  },
  data: () => ({
    valid: true,
    contentEditor: '',
    title: '',
    description: '',
    markdown: '',
    categories: [],
    category_id: null,
    checkbox: false,
  }),

  computed: {
    categoryErrors () {
      const errors = []
      if (!this.$v.category_id.$dirty) return errors
      !this.$v.category_id.required && errors.push('Category is required')
      return errors
    },
    titleErrors () {
      const errors = []
      if (!this.$v.title.$dirty) return errors
      !this.$v.title.maxLength && errors.push('Title must be at most 10 characters long')
      !this.$v.title.required && errors.push('Title is required.')
      return errors;
    },
    descriptionlErrors () {
      const errors = []
      if (!this.$v.description.$dirty) return errors
      !this.$v.description.required && errors.push('Description is required')
      return errors;
    },
  },

  methods: {
    submit () {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        pushPost({
          title: this.title,
          description: this.description,
          category_id: this.category_id,
          markdown: this.contentEditor.getValue(),
          html: this.contentEditor.getHTML()
        }).then((res) => {
          console.log(res)
        })
      }
    },
    clear () {
      this.$v.$reset()
      this.title = ''
      this.checkbox = false
    },
    fetchCategories() {
      fetchCategoryList({}).then(res => {
        this.categories = res.data
      });
    },
    fetchPost() {
      const slug = this.$route.params.slug
      fetchPostBySlug({slug: slug}).then((res) => {
        console.log(res)
      })
    }
  },
  created() {
    this.fetchCategories();
    this.fetchPost();
  },
  mounted () {
    this.contentEditor = new Vditor('vditor', {
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
      },
      after: () => {
        this.contentEditor.setValue(this.markdown)
      },
    })
  },
}
</script>

<style scoped>

</style>
