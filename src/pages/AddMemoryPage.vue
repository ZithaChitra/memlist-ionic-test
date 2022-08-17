<template>
    <base-layout page-title="Add a Memory" pageDefaultBackLink="/memories">
        <create-memory-form @save-memory="saveMemory"></create-memory-form>
    </base-layout>    
</template>

<script>

import BaseLayout from '../components/base/BaseLayout.vue';
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue';

export default {
    components: {
        BaseLayout,
        CreateMemoryForm
    },
    methods: {
        saveMemory(memoryData){
            this.$store.dispatch('addMemory', memoryData) // dispatch addMemory action
            this.$router.replace('/memories')
        }
    } 
}

</script>
