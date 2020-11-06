<template>
	<div class="project">
        <a :key="item.id"
            v-for="item in arrayProjects"
            v-bind:href=item.link
            class="project__wrapper"
        >
            <div class="project__content-text">
                <span class="project__title">{{ item.title }}</span>
                <span class="project__desc">{{ item.desc }}</span>
                <a v-bind:href=item.link class="project__link">Перейти к проекту</a>
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

    &__wrapper {
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

    &__content-text {
        display: flex;
        flex-wrap: wrap;
    }

    &__title {
        margin-bottom: 18px;
        text-align: center;
        .font('Raleway-Thin', 24px, 600, normal);
    }

    &__desc {
        margin-bottom: 12px;
        .font('Raleway-Thin', 20px, 200, normal);
    }

    &__link {
        text-decoration: none;
        .font('Raleway-Thin', 18px, 500, normal);

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
