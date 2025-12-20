<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAlertsStore } from '../../stores/alerts';

const alertsStore = useAlertsStore();
const { alertsList } = storeToRefs(alertsStore);

const close = (id: string) => {
    alertsStore.clean(id);
}
</script>

<template>
    <main>
        <div
            v-for="alert in alertsList"
            :key="alert.id"
        >
            <div class="card item-closed" :class="'item-'+alert.type" >
                <p>{{ alert.message }}</p>
                <p v-on:click="close(alert.id)" class="close">x</p>
            </div>
            <br />
        </div>
    </main>
</template>
