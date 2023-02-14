<template>
<div class="row">
    <div v-if="leftText" :class="[`col-${getLeftColumSize()}`]">
    <div v-html="leftText" />
    </div>

    <div :class="[`col-${getCenterColumSize()}`]">
    <div v-html="page.text" />
    </div>

    <div v-if="rightText" :class="[`col-${getRightColumSize()}`]">
    <div v-html="rightText" />
    </div>
</div>
</template>


<script setup>
const page      = useState('page')
const rightText = hasRightValue(page)
const leftText  = hasLeftValue(page)

const getCenterColumSize = useGetCenterColumSize(page)
const getLeftColumSize   = useGetLeftColumSize(page)
const getRightColumSize  = useGetRightColumSize(page)
</script>