<template>
  <note-form
    v-if="note"
    :note="note"
    submit-label="更新する"
    @submit="onUpdate"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Note } from '@/models/note'
import { authStore, notesStore } from '@/store'
import 'highlight.js/styles/atom-one-light.css'
import { arrayToHash } from '@/utils/tags'

@Component
class NoteEdit extends Vue {
  private note: Note | null = null

  created() {
    notesStore.getNote(this.$route.params.id).then((note) => {
      this.note = note
    })
  }

  onUpdate(formData: any) {
    const noteId = this.$route.params.id
    const tagsHash = arrayToHash(formData.tags)

    notesStore
      .updateNote(
        new Note({
          id: noteId,
          userId: authStore.userId,
          title: formData.title,
          content: formData.content,
          tags: tagsHash,
        })
      )
      .then(() => {
        this.$router.replace({ path: '/notes/' + noteId })
      })
  }
}
export default NoteEdit
</script>
