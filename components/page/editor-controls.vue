<template>
  <nav class="tabs" role="navigation" aria-label="Tabs">
    <ul class="nav nav-tabs primary">
      <li class="active nav-item">
        <nuxt-link :to="props.path" class="nav-link active">
          View
        </nuxt-link>
      </li>
      <li class="nav-item">
        <a :href="`https://www.cbd.int/node/${props.nodeId}/edit`" target="_blank" class="nav-link">Edit</a>
      </li>
      <li class="nav-item">
        <a :href="`https://www.cbd.int/node/${props.nodeId}/delete`" target="_blank" class="nav-link">Delete</a>
      </li>
      <li class="nav-item">
        <a :href="`https://www.cbd.int/node/${props.nodeId}/revisions`" target="_blank" class="nav-link">Revisions</a>
      </li>
      <li class="nav-item">
        <a :href="`https://www.cbd.int/node/${props.nodeId}/translations`" target="_blank" class="nav-link">Translate</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name : 'EditorControls',
  props: {
    nodeId: { type: Number, required: true },
    path  : { type: String, required: true }
  }
}
</script>
