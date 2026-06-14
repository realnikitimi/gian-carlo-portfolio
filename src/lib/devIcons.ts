export interface ValueType {
    name: string
}
export type DevIconType = ValueType & {
    type: 'original' | 'plain'
}
export const DEV_ICON_BASE_URL =
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'
export const devIconLanguages: DevIconType[] = [
    {
        name: 'javascript',
        type: 'original',
    },
    {
        name: 'csharp',
        type: 'original',
    },
    {
        name: 'dart',
        type: 'original',
    },
    {
        name: 'typescript',
        type: 'original',
    },
    {
        name: 'php',
        type: 'original',
    },
    {
        name: 'python',
        type: 'original',
    },
]
export const devIconTechstacks: DevIconType[] = [
    {
        name: 'html5',
        type: 'original',
    },
    {
        name: 'flutter',
        type: 'original',
    },
    {
        name: 'dot-net',
        type: 'original',
    },
    {
        name: 'css3',
        type: 'original',
    },
    {
        name: 'redux',
        type: 'original',
    },
    {
        name: 'vscode',
        type: 'original',
    },
    {
        name: 'visualstudio',
        type: 'plain',
    },
    {
        name: 'github',
        type: 'original',
    },
    {
        name: 'firebase',
        type: 'plain',
    },
    {
        name: 'nodejs',
        type: 'original',
    },
    {
        name: 'react',

        type: 'original',
    },
    {
        name: 'threejs',
        type: 'original',
    },

    {
        name: 'nextjs',
        type: 'original',
    },
    {
        name: 'express',
        type: 'original',
    },
    {
        name: 'tailwindcss',
        type: 'original',
    },
    {
        name: 'sass',
        type: 'original',
    },
    {
        name: 'androidstudio',
        type: 'original',
    },
]

export function processDevIconToUrl(props: DevIconType) {
    const { name, type } = props
    return `${DEV_ICON_BASE_URL}${name}/${name}-${type}.svg`
}
