<template >
    <SideBar :visible="store.visible" :baseZIndex="10000" position="left" @update:visible="changeVisible">
        <MegaMenu
            :model="items"
            class="bg-green-100 border-round-2xl"
            orientation="vertical"
        />
    </SideBar>
</template>

<script>
import MegaMenu from "primevue/megamenu";
import SideBar from "primevue/sidebar";
import { ref } from "vue";
import {useSideBarStore} from '@/store/SideBarStore'
export default {
    components: { MegaMenu, SideBar },
    setup() {
        const items = ref([
            {
                label: "Videos",
                icon: "pi pi-fw pi-video",
                items: [
                    [
                        {
                            label: "Video 3",
                            items: [
                                { label: "Video 3.1" },
                                { label: "Video 3.2" },
                            ],
                        },
                        {
                            label: "Video 4",
                            items: [
                                { label: "Video 4.1" },
                                { label: "Video 4.2" },
                            ],
                        },
                    ],
                ],
            },
            {
                label: "Users",
                icon: "pi pi-fw pi-users",
                items: [
                    [
                        {
                            label: "User 3",
                            items: [
                                { label: "User 3.1" },
                                { label: "User 3.2" },
                            ],
                        },
                    ],
                ],
            },
            {
                label: "Events",
                icon: "pi pi-fw pi-calendar",
                items: [
                    [
                        {
                            label: "Event 1",
                            items: [
                                { label: "Event 1.1" },
                                { label: "Event 1.2" },
                            ],
                        },
                        {
                            label: "Event 2",
                            items: [
                                { label: "Event 2.1" },
                                { label: "Event 2.2" },
                            ],
                        },
                    ],
                    [
                        {
                            label: "Event 3",
                            items: [
                                { label: "Event 3.1" },
                                { label: "Event 3.2" },
                            ],
                        },
                        {
                            label: "Event 4",
                            items: [
                                { label: "Event 4.1" },
                                { label: "Event 4.2" },
                            ],
                        },
                    ],
                ],
            },
        ]);
		const store = useSideBarStore();
		const { changeVisible } = store;
        return {
			changeVisible,
            items,
			store,
            
        };
    },
};
</script>

<style scoped >
.p-panelmenu {
    width: 22rem;
}
</style>