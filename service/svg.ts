
export function addXmlDocumentation(svgAsString): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>`.concat(svgAsString);
}
