<template>
	<div class="project">
        <a :key="item.id"
            v-for="item in arrayProjects"
            :href=item.link
            class="project__item"
        >
            <div class="project__content">
                <span class="project__title">{{ item.title }}</span>
                <span class="project__desc">{{ item.desc }}</span>
                <a :href=item.link class="project__link">Перейти к проекту</a>
            </div>
        </a>
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
                }
            ],
        }
    }
}
</script>

<style lang="less">
@import '../less/mixins/mixins.less';

.project {
    display: flex;
    flex-flow: column wrap;

    .tablet({
        flex-flow: row wrap;
        justify-content: space-evenly;
        width: 100%;
    });

    &__item {
        background-color: @section;
        box-shadow: 0px 0px 11px 4px @shadow;
        padding: 12px;
        margin-bottom: 12px;
        border-radius: 10px;
        text-decoration: none;

        .tablet({
            width: 280px;
        });
    }

    &__content {
        display: flex;
        flex-wrap: wrap;
    }

    &__title {
        margin-bottom: 18px;
        text-align: center;
        .font('Raleway-Regular', 24px, 600, normal);
    }

    &__desc {
        margin-bottom: 12px;
        .font('Raleway-Regular', 20px, 200, normal);
    }

    &__link {
        text-decoration: none;
        .font('Raleway-Regular', 18px, 500, normal);

        &:hover {
            text-decoration: underline;
        }
    }

    a:visited .project__title,
    .project__desc {
        color: @text-navigation !important;
    }
}
</style>
