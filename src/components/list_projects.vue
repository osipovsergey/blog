<template>
	<div class="project">
        <div :key="item.id"
            v-for="item in arrayProjects"
            class="project__wrapper"
        >
            <!-- <img src="../images/main__image.jpg" alt="main__image" class="project__image"> -->
            <div class="project__content-text">
                <span class="project__title">{{ item.title }}</span>
                <span class="project__desc">{{ item.desc }}</span>
                <a v-bind:href=item.link class="project__desc">Ссылка</a>
            </div>
        </div>
	</div>
</template>

<script>

export default {
    data() {
        return {
            arrayProjects: [
                {
                    title: 'Default Template',
                    desc: 'Шаблон для начала работы над своим проектом. Webpack 5 + Vue 3 + Less + JEST + PostCSS',
                    link: 'https://github.com/osipovsergey/default_template'
                },
                {
                    title: 'Default Template',
                    desc: 'Шаблон для начала работы над своим проектом. Webpack 5 + Vue 3 + Less + JEST + PostCSS',
                    link: 'https://github.com/osipovsergey/default_template'
                },
            ],
        }
    }
}
</script>

<style lang="less">
@import '../less/mixins/mixins.less';

</style>
