<template>
    <ion-img :src="image" :alt="title"></ion-img>
    <h2 class="ionic-text-center">{{ title  }}</h2>
    <p class="ionic-text-center">{{ description  }}</p>
</template>

<script>
import { IonImg } from '@ionic/vue'

export default {
    props: ["title", "image", "description"],
    components: {
        IonImg
    }    
}
</script>