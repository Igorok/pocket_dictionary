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
    return ;

    try {
        await repository.importAllWords();

        success.value.message = 'All words successfully imported!';
    } catch (e) {
        console.log('e', e);
        error.value.message = e.message;
    }
};

const importCourses = async () => {
    return;

    try {
        await repository.importCourses();

        success.value.message = 'All courses successfully imported!';
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

                <!-- Words -->
                <button class="btn btn-red" v-on:click="importAllWords">
                    Import all words
                </button>
                <br /><br />
                <!-- Courses -->
                <button class="btn btn-red" v-on:click="importCourses">
                    Import courses
                </button>
                <br /><br />
            </div>
        </div>
    </main>
</template>
