<script setup>
    import {
        TabsContent,
        TabsIndicator,
        TabsList,
        TabsRoot,
        TabsTrigger
    } from 'radix-vue'

    const props = defineProps({
        tabs: {
            type: Array,
            required: true,
        },
        classContainer: {
            type: String,
            default: '',
        },
        classContent: {
            type: String,
            default: '',
        },
        selectedStyle: {
            type: String,
            default: 'default', // Style par défaut
        },
    });

    // Gestion de l'onglet séléctionné
    const activeTab = ref(0);
    function setActiveTab(index) {
        activeTab.value = index
    }

    // Gestion des styles du tabs
    const getClassForStyle = (style) => {
        switch (style) {
            case 'style1':
                return 'tabs-2 tabs-group tabs-bs-init';
            case 'style2':
                return 'tabs-3 tabs-bs-init';
            case 'style3':
                return 'tabs-4 tabs-bs-init var--total';
            default:
                return 'tabs-1 tabs-group tabs-bs-init';
        }
    };
</script>

<template>
    <div class="p-16 largeur-total">
        <TabsRoot :selectedIndex="activeTab" @change="setActiveTab">
            <TabsList :class="[classContainer, getClassForStyle(selectedStyle)]">
                <div class="tabs-bs-title" v-for="(tab, index) in tabs" :key="index">
                    <TabsTrigger
                        class="font-700 tabs-bs-link align-center"
                        @click="setActiveTab(index)"
                        :value="index"
                        :class="{ active: activeTab === index }">
                        {{ tab.title }}
                    </TabsTrigger>
                </div>
            </TabsList>
            <div :class="['tab-content', classContent]">
                <TabsContent
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :value="index">
                    {{ tab.content }}
                </TabsContent>
            </div>
        </TabsRoot>
    </div>

</template>