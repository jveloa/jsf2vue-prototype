<template>
    <div class="grid overflow-auto m-3 p-2">
        <div class="p-2  col min-w-max justify-content-center  ">
			<h4>Tiempo transcurrido desde que obtuvo el </h4>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                optionLabel="name"
                optionValue="code"
                placeholder="Select a City"
				class="w-full"
            />
        </div>
		<div class="p-2  col min-w-max justify-content-center ">
			<h4>Tiempo transcurrido desde que obtuvo </h4>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                optionLabel="name"
                optionValue="code"
                placeholder="Select a City"
				class="w-full"
            />
        </div>
		<div class="p-2  col min-w-max justify-content-center ">
			<h4>Tiempo transcurrido desdeo</h4>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                optionLabel="name"
                optionValue="code"
                placeholder="Select a City"
				class="w-full"
            />
        </div>
		<div class="p-2  col min-w-max justify-content-center ">
			<h4>Tiempo transcurrido desde </h4>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                optionLabel="name"
                optionValue="code"
                placeholder="Select a City"
				class="w-full"
            />
        </div>
    </div>

	<div class="pr-5 pb-4 flex justify-content-end">
		<Button label="Enviar" />
	</div>

	<div>
		
	</div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import { ref } from "vue";
export default {
    components: { Dropdown,Button },
    setup() {
        const cities = ref([
            { name: "1", code: "NY" },
            { name: "2", code: "RM" },
            { name: "3", code: "LDN" },
            { name: "4", code: "IST" },
            { name: "5", code: "PRS" },
        ]);

        const selectedCity = ref();

        return {
            cities,
            selectedCity,
        };
    },
};
</script>

<style>
</style>