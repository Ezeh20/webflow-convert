<script setup>

const { data, pending, error } = await useLazyFetch("/api/products?category=all")
</script>

<template>
    <main>
        <p v-if="pending === 'loading'">Please wait..</p>
        <p v-if="error"> {{ error.data.statusMessage }}</p>
        <section v-else>
            <div class="w-dyn-list">

                <div v-if="data?.data?.length > 0" role="list" class="w-dyn-items w-row">
                    <div v-for="item in data.data" :key="item?.id">
                        <div role="listitem" class="product w-dyn-item w-col w-col-3">
                            <a href="#" class="link-block w-inline-block"><img alt="" :src="item?.image">
                                <div class="productinfo">
                                    <div class="productinfo_title">{{ item?.name }}</div>
                                    <div class="productinfo_price">
                                        <div class="pricenow">${{ item?.price }}</div>
                                        <div v-if="item?.oldPrice" class="pricewas">${{ item?.oldPrice }}</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div v-else class="w-dyn-empty">
                    <div>No items found.</div>
                </div>
            </div>
        </section>
    </main>
</template>