<script setup>
const route = useRoute()
const { id } = route.params

const { data } = await useAsyncData("product", () => $fetch(`/api/product?id=${id}`))

console.log(data);
</script>


<template>
    <main>
        {{id}}
        <p>{{ data }}</p>
    </main>
</template>