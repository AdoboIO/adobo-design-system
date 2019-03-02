const h = window.AdoboGrid.h;

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

class AdoboGrid {
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { class: "adobo-grid" },
            this.getText(),
            h("slot", null));
    }
    static get is() { return "adobo-grid"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "first": {
            "type": String,
            "attr": "first"
        },
        "last": {
            "type": String,
            "attr": "last"
        },
        "middle": {
            "type": String,
            "attr": "middle"
        }
    }; }
    static get style() { return ".adobo-grid {\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-column-gap: 1em;\n    grid-row-gap: 1em;\n}"; }
}

export { AdoboGrid };
