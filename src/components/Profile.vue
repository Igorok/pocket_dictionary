<script setup lang="ts">
import { ref } from 'vue';
import { getAllStats } from '../repositories/dictionary';
import type { Stats, StatsItem } from '../dto/dictionary';

const lessonStata = getAllStats();
</script>

<template>
    <div class="dictionary">
        <h1>Stats</h1>
    </div>
</template>

<style scoped></style>
