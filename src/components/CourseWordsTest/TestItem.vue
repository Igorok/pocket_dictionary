<script setup lang="ts">
    import type { TestWordsItemOption } from './types';
    import { toRef } from 'vue';
    const props = defineProps(['activeItemRef']);
    const activeItemRef = toRef(props, 'activeItemRef');

    const emit = defineEmits(['selectCard']);
    const selectCard = (option: TestWordsItemOption) => {
        emit('selectCard', option)
    };

</script>

<template>
    <main>
        <div class="lesson-item">
            <h3>{{ activeItemRef.word.tr_ru }}</h3>
            <div class="card-wrapper">
                <div
                    class="card"
                    :class="{
                        'alert-success': option.success,
                        'alert-error': option.error
                    }"
                    v-for="option in activeItemRef.options"
                    :key="option.word"
                    v-on:click="selectCard(option)"
                >
                    {{ option.word }}
                </div>
            </div>

        </div>
    </main>
</template>
