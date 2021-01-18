import { readFileSync } from 'fs';
import { basename } from 'path';
import SVGCompiler from 'svg-baker';

const { stringify } = JSON;

export default () => {
    const svgCompiler = new SVGCompiler();

    return {
        name: 'svg-sprite',
        async transform(src: any, id: string) {
            if (id.endsWith('.svg')) {
                let code = readFileSync(id).toString();
                const symbolId = 'icon-' + basename(id, '.svg');
                // @ts-ignore
                const symbol = await svgCompiler.addSymbol({
                    id: symbolId,
                    content: code,
                    path: id,
                });
                return `
                    import addSymbol from 'plugin-svg-sprite/es/runtime';
                    addSymbol(${stringify(symbol.render())}, ${stringify(id)});
                    export default ${stringify(id)};
              `;
            }
            return src;
        },
    };
};
