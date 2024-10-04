<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})

const { item } = props
const router = useRouter()
</script>


<template>
    <button @click="router.push(`/product/${item?.id}`)" role="listitem" class="product w-dyn-item w-col w-col-3">
            <div class="link-block w-inline-block">
                <img alt="" :src="item?.image">
                <div class="productinfo">
                    <div class="productinfo_title">{{ item?.name }}</div>
                    <div class="productinfo_price">
                        <div class="pricenow">${{ item?.price }}</div>
                        <div v-if="item?.oldPrice" class="pricewas">${{ item?.oldPrice }}</div>
                    </div>
                </div>
            </div>
    </button>
</template>