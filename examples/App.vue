<template>
    <div>
        <div class="container">
            <h1>The default editor</h1>
            <p>The editor with standard settings.</p>
            <!--:toolbar="['heading', '|', ['|']]"-->
            <mbdoge-editor :source="content" ></mbdoge-editor>
        </div>
    </div>
</template>

<script>
import previewContent from './content-demo'
// console.log(previewContent)

export default {
    name: 'App',
    data () {
        return {
            content: previewContent
        }
    }
}
</script>

<style scoped>

</style>
