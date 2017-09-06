
export function resolveStringToLocation(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
}