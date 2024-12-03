<script setup>
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

    // Fonction pour générer un ID aléatoire
    const generateRandomId = () => {
        return 'tab-' + Math.random().toString(36).substring(2, 9);
    };

    const componentId = generateRandomId();
    const tabsWithIds = props.tabs.map((tab, index) => ({
        ...tab,
        id: `${componentId}-${index}`, // Utiliser l'ID du composant et l'index pour créer un ID unique
    }));

    console.log("ID générer ->", tabsWithIds.find(i => i.id));

    const activeTab = ref(0);

    const setActiveTab = (index) => {
        activeTab.value = index;
    };

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
        <ul :class="[classContainer, getClassForStyle(selectedStyle)]" role="tablist">
            <li class="tabs-bs-title" v-for="(tab, index) in tabs" :key="index" role="presentation">
                <button class="font-700 tabs-bs-link align-center"
                    :class="{ active: activeTab === index }"
                    @click="setActiveTab(index)"
                    type="button"
                    role="tab"
                    :aria-controls="tab.id"
                    :aria-selected="activeTab === index">
                    {{ tab.title }}
                </button>
            </li>
        </ul>
        <div :class="['tab-content', classContent]">
            <div class="tab-pane fade"
                v-for="(tab, index) in tabs"
                :key="index"
                :class="{ show: activeTab === index, active: activeTab === index }"
                :id="tab.id"
                role="tabpanel"
                tabindex="0"
                :aria-labelledby="tab.id">
                <div v-if="activeTab === index">
                    {{ tab.content }}
                </div>
            </div>
        </div>
    </div>
</template>