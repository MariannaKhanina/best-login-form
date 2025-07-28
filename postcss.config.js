export default {
    plugins: {
        'postcss-preset-env': {
            stage: 1,
            features: {
                'custom-properties': {
                    preserve: true,
                },
                'color-function': true,
                'custom-media-queries': true,
            },
        },
        'postcss-nested': {},
        autoprefixer: {},
    },
};
