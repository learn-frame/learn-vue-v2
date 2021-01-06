<template>
    <v-card max-width="400">
        <v-list>
            <v-subheader>TODOS</v-subheader>
            <v-list-item-group color="primary">
                <!-- 数组使用 for-of, for-in 都可以 -->
                <v-list-item
                    v-for="(item, index) of todos"
                    :key="`${index}_${item.text}`"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <!-- 对象就得使用 for-in 了 -->
                <v-list-item
                    v-for="(value, name, index) in object"
                    :key="value"
                >
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ index }}. {{ name }}:
                            {{ value }}</v-list-item-title
                        >
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>

        <p>props_str: {{ propsStr }}</p>
        <p>data_str: {{ dataStr }}</p>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
    @Prop() private dataList!: Array<any>
    @Prop() private propsStr!: String

    public todos = this.dataList.slice(0, 3)
    public dataStr = this.propsStr
    public object = {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10',
    }

    public handleClick() {
        return !!this.dataList
    }
}
</script>
