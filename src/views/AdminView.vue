<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAdminRepository } from '../repositories/AdminFirebase';

let error = ref({
    message: ''
});

let success = ref({
    message: ''
});

const repository = getAdminRepository(undefined);

const importAllWords = async () => {
    try {
        await repository.importAllWords();

        success.value.message = 'All words successfully imported!';
        setTimeout(() => {
            success.value.message = '';
        }, 2000);
    } catch (e) {
        console.log('e', e);
        error.value.message = e.message;
    }
};
</script>

<template>
    <main>
        <div>
            <div class="card">
                <div v-if="Boolean(success.message)">
                    <div class="card item-success">
                        <p>{{ success.message }}</p>
                    </div>
                </div>

                <div v-if="Boolean(error.message)">
                    <div class="card item-error">
                        <p>{{ error.message }}</p>
                    </div>
                </div>

                <br />

                <button class="btn btn-red" v-on:click="importAllWords">
                    Import all words
                </button>
                <br /><br />
            </div>
        </div>
    </main>
</template>
