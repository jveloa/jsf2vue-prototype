<template>
    <nav class="flex justify-content-between p-3 gradiente">
        <div>
            <h2 class="mx-4 text-white">SIGENU Cuestionario</h2>
        </div>

        <div class="flex gap-2">
            <Button
                icon="pi pi-arrow-right"
                @click="visibleLeft = true"
                @click.prevent="changeVisible()"				
            />
            <Button
                label="Salir"
                icon="pi pi-times"
                class="p-button-raised bg-primary"
            />
        </div>
    </nav>
</template>

<script>
import { useSideBarStore } from "@/store/SideBarStore";
import Button from "primevue/button";
export default {
    components: { Button },
    setup() {
        const store = useSideBarStore();
        const { changeVisible } = store;
        return {
            changeVisible,
        };
    },
};
</script>

<style scope>
.gradiente {
    background: rgb(23, 38, 21);
    background: linear-gradient(
        156deg,
        rgba(23, 38, 21, 1) 16%,
        rgba(25, 101, 59, 1) 69%,
        rgba(27, 108, 38, 1) 86%
    );
}
</style>