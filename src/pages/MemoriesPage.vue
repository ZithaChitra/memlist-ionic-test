<template>
    <base-layout pageTitle="All Memories" >
        <template v-slot:actions-end>
            <ion-button router-link="/memories/add">
                <ion-icon slot="icon-only" :icon="add"></ion-icon>
            </ion-button>
        </template>
        <memories-list :memories="memories"></memories-list>
    </base-layout>    
</template>


<script>

import { IonButton, IonIcon } from '@ionic/vue'
import { add } from 'ionicons/icons'
import MemoriesList from '../components/memories/MemoriesList.vue';

export default {
    data(){
        return { add }
    },
    components:{
        MemoriesList,
        IonButton,
        IonIcon
    },
    computed: {
        memories(){
            return this.$store.getters.memories;
        }
    }   
}

</script>