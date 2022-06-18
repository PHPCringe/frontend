<script setup lang="ts">
const props = defineProps({
    'tabs': {
        type: Object
    },
});

let activeStatus = reactive({...props.tabs})
Object.keys(activeStatus).forEach(k => activeStatus[k] = false)

// Set the first tab to active
activeStatus[Object.keys(activeStatus)[0]] = true;
console.log(activeStatus);

function setActive(key:string) {
    Object.keys(activeStatus).forEach(k => activeStatus[k] = false)
    activeStatus[key] = true
}
</script>

<template>
    <div class="tabs">
        <div class="tabs-header | flex p-3 bg-gray-100 gap-3 rounded-t-md">
            <a v-for="(v,k) in tabs" 
                @click="setActive(k)"
                :class="{'inline-block p-2 rounded-md text-sm w-1/2 text-center py-5 font-semibold cursor-pointer':true, 'bg-white': activeStatus[k]}">
                {{v}}
            </a>
        </div>
        <div class="tab-contents">
            <div class="tab-content" v-for="(v,k) in tabs">
                <slot :name="k"  v-if="activeStatus[k]" ></slot>
            </div>
        </div>
    </div>
</template>