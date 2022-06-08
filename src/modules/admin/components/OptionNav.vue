<template >
    <SideBar
        :visible="store.visible"
        :baseZIndex="10000"
        position="left"
        @update:visible="changeVisible"
    >
        <Menu :model="items" class="w-full">
            <template #items="{ item }">
                <router-link
                    :to="item.to"
                    custom v-slot="{ href, route, navigate, isActive, isExactActive }"
                >
                    <a
                        :href="href"
                        @click="navigate"
                        :class="{
                            'active-link': isActive,
                            'active-link-exact': isExactActive,
                        }"
                    >
                        {{ route.fullPath }}
                    </a>
                </router-link>
            </template>
        </Menu>
    </SideBar>
</template>

<script>
import Menu from "primevue/menu";
import SideBar from "primevue/sidebar";
import { ref } from "vue";
import { useSideBarStore } from "@/store/SideBarStore";
export default {
    components: { Menu, SideBar },
    setup() {
        const store = useSideBarStore();
        const { changeVisible } = store;
        const items = ref([
            {
                label: "Opciones",
                items: [
                    {
                        label: "Admin",
                        icon: "pi pi-home",
                        to: { name: "admin" },
                        command: () => {
                            store.changeVisible();
                        },
                    },
                    {
                        label: "Questionario",
                        icon: "pi pi-question",
                        to: { name: 'questionnaire-form' },
                        command: () => {
                            store.changeVisible();
                        },
                    },
                ],
            },
            {
                label: "Reportes",
                items: [
                    {
                        label: "Example 1",
                        icon: "pi pi-filter",
                        to: "/",
                    },
                    {
                        label: "Example 2",
                        icon: "pi pi-filter",
                        to: "/",
                    },
                ],
            },
        ]);

        return {
            changeVisible,
            items,
            store,
        };
    },
};
</script>

<style  scope>

</style>