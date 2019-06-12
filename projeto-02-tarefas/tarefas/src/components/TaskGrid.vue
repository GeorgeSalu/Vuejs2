<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <Task v-for="(task, i) in tasks" :key="task.name"
            @taskStateChanged="$emit('taskStateChanged', i)"
            @taskDeleted="$emit('taskDeleted', i)"
                :task="task">
            </Task>
        </template>
        <p v-else class="no-task">Sua vida esta em dia :)</p>
    </div>
</template>

<script>
import Task from './Task.vue'

export default {
    components: { Task },
    props: {
        tasks: {type: Array, required: true}
    }
}
</script>

<style>
    .task {
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pending {
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

    .done {
        color: #DDD;
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        text-decoration: line-through;
    }

    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task {
        margin: 10px;
    }

    .no-content {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>
